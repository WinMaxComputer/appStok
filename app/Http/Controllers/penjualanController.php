<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\PenjualanDetail;
use App\Models\PenjualanDetailJasa;
use App\Models\Penjualan;
use App\Models\GeneralLedger;
use App\Models\KuponPenjualan;
use App\Models\Bayarjual;
class penjualanController extends Controller
{
    private function assertBalanced(array $entries, string $context = 'Jurnal Penjualan'): void
    {
        $totalDebet = 0;
        $totalKredit = 0;

        foreach ($entries as $entry) {
            $totalDebet += (float) ($entry['debet'] ?? 0);
            $totalKredit += (float) ($entry['kredit'] ?? 0);
        }

        if (abs($totalDebet - $totalKredit) > 0.00001) {
            throw new \Exception($context . ' tidak balance (debet: ' . $totalDebet . ', kredit: ' . $totalKredit . ')');
        }
    }

    private function rollbackEditPenjualan(string $noNota): void
    {
        $gl = DB::table('general_ledger')->where('order_no', $noNota)->get();
        for ($i = 0; $i < count($gl); $i++) {
            DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
            DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
        }

        $dtl = DB::table('tblpenjualan_detail')->where('r_noPenjualan', $noNota)->get();
        for ($i = 0; $i < count($dtl); $i++) {
            $oldStok = DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdBarang)->first();
            if (!empty($oldStok)) {
                DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdBarang)->update([
                    'stokPersediaan' => $oldStok->stokPersediaan + $dtl[$i]->qty,
                ]);
                DB::table('tblbarang')->where('kdBarang', $dtl[$i]->r_kdBarang)->update([
                    'stkBarang' => $oldStok->stokPersediaan + $dtl[$i]->qty,
                ]);
            }
        }

        $stokfifo = DB::table('tbltransaksi_stok')->where('r_trans', $noNota)->get();
        for ($i = 0; $i < count($stokfifo); $i++) {
            $oldFifo = DB::table('tblstok_fifo')->where('id', $stokfifo[$i]->r_fifo)->first();
            if (!empty($oldFifo)) {
                DB::table('tblstok_fifo')->where('id', $stokfifo[$i]->r_fifo)->update([
                    'stok' => $oldFifo->stok + $stokfifo[$i]->stok_trans,
                ]);
            }
        }

        DB::table('tblpenjualan')->where('noPenjualan', $noNota)->delete();
        DB::table('tblpenjualan_detail')->where('r_noPenjualan', $noNota)->delete();
        DB::table('tblpenjualan_detail_jasa')->where('r_noPenjualan', $noNota)->delete();
        DB::table('tblkartu_stok')->where('r_notrans', $noNota)->delete();
        DB::table('tblpembayaran_penjualan')->where('noJual', $noNota)->delete();
        DB::table('tbltransaksi_stok')->where('r_trans', $noNota)->delete();
    }

    //
    public function simpanPenjualan(Request $request){
        $noNota = $request[0]['noNota'];
        try{
            $exception = DB::transaction(function() use ($request){ 
                $editid = $request[4]['editid'];
                // array key 0 = Header
                // array kkey 1 = Detail
                $tglNota = $request[0]['tglNota'];
                $noNota = $request[0]['noNota'];
                $total =  $request[0]['subtotal'];
                // $diskon = $total * $request[0]['disc'] / 100;
                $pph22 = 10 ; //$detop[0]['pph22'];
                $type = $request[0]['term'];
                $piutang = 0;
                // $acc_id_k = '11110';
                if($request[3]['metodeBayar'] == 'cash'){
                    $acc_id_k = '11110'; // $detpro[$i]['accid']; // acc id yg di debet
                }else{
                    $acc_id_k = '11210'; // $detpro[$i]['accid']; // acc id yg di debet
                }

                if($editid == 1){
                    $this->rollbackEditPenjualan($noNota);
                }

                if($type == '1'){
                    $piutang = $total;
                    $startDate = $request[0]['tglNota'];
                    $endDate = $request[0]['jthTempo'];
                    $dateDifference = \Carbon\Carbon::parse($startDate)->diffInDays(\Carbon\Carbon::parse($endDate));
                    $acc_id_k = '11501';
                }else{
                    $piutang = 0;
                    $startDate = $request[0]['tglNota'];
                    $endDate = $request[0]['jthTempo'];
                    $dateDifference = \Carbon\Carbon::parse($startDate)->diffInDays(\Carbon\Carbon::parse($endDate));
                    if($editid == 1){
                        
                    }else{
                        DB::table('tblpembayaran_penjualan')->updateOrInsert(
                            [
                                'noBayar' => $noNota
                            ],
                            [
                                'noJual' => $noNota,
                                'noBayar' => isset($request[3]['noBayar']) ? $request[3]['noBayar'] : null,
                                'tglBayar' => isset($request[3]['tglBayar']) ? $request[3]['tglBayar'] : null,
                                'jmlBayar' => isset($request[3]['jmlBayar']) ? $request[3]['jmlBayar'] : 0,
                                'metodeBayar' => isset($request[3]['metodeBayar']) ? $request[3]['metodeBayar'] : null,
                                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                            ]
                        );
                    }
                    
                }
                
                $post = DB::table('tblpenjualan')->upsert([
                    'noPenjualan'     => $request[0]['noNota'],
                    'r_pelanggan'     => $request[0]['kdPelanggan'],
                    'subTotalPenjualan'     => $request[0]['total'],
                    'tglPenjualan'   => $tglNota,
                    // 'discPenjualan'     => $diskon,
                    // 'discPercentP'     => $request[0]['disc'],
                    'taxPenjualan'     => $request[0]['tax'],
                    'totalPenjualan'     => $request[0]['total'],
                    'notePenjualan'     => $request[0]['notes'],
                    'termPenjualan'     => $dateDifference,
                    'jthTempo'     => $request[0]['jthTempo'],
                    'typeBayar'     => $request[0]['term'],
                    'piutangPenjualan'     => $piutang,
                    'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                ],
                [ 
                    'r_pelanggan'     => $request[0]['kdPelanggan'],
                    'subTotalPenjualan'     => $request[0]['subtotal'],
                    'tglPenjualan'   => $tglNota,
                    // 'discPenjualan'     => $diskon,
                    // 'discPercentP'     => $request[0]['disc'],
                    'taxPenjualan'     => $request[0]['tax'],
                    'totalPenjualan'     => $request[0]['total'],
                    'notePenjualan'     => $request[0]['notes'],
                    'termPenjualan'     => $dateDifference,
                    'jthTempo'     => $request[0]['jthTempo'],
                    'typeBayar'     => $request[0]['term'],
                    'piutangPenjualan'     => $request[0]['subtotal'], //$piutang,
                    'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                ]);
                Bayarjual::where('noJual', $noNota)->delete();
                $detpem = $request[1];
                if (isset($detpem)) {
                    PenjualanDetail::where('r_noPenjualan', $noNota)->delete();
                    // Handle the case where $detpem[1] exists
                    
                    for ($i = 0; $i < count($detpem); $i++) {

                        $kdBarang = $detpem[$i]['kdBarang'];
                        $nmBarang = $detpem[$i]['nmBarang'];
                        $qty = $detpem[$i]['qty'];
                        $hrg = $detpem[$i]['hrgJual'];
                        $brg = DB::table('tblpersediaan')->where('kdPersediaan', $kdBarang)->first();
                        $oldStok = $brg->stokPersediaan;
                        DB::table('tblpersediaan')->where('kdPersediaan', $kdBarang)->update([
                            'stokPersediaan' => $oldStok - $qty,
                            'salePrice' => $hrg,
                        ]);
                        DB::table('tblbarang')->where('kdBarang', $kdBarang)->update([
                            'stkBarang' => $oldStok - $qty,
                            'hrgJual' => $hrg,
                        ]);

                        $totalStok = DB::table('tblstok_fifo')->where('kd_barang', $kdBarang)->sum('stok');
                        if($qty > $totalStok){
                            throw new \Exception("Stok Kurang");
                        }
                        //========cek harga per liter sesuai stok fifo
                        
                        // $harga_fifo = DB::table('tblstok_fifo')->select('harga')->where('id', $id_fifo)->first();
                        // print_r( $stok_fifo );
                        $total_hpp = 0;
                        $sisa = $qty;
                        // $qty = $total_liter;
                        while ($sisa > 0 ) {
                            $data_tr = DB::select(" SELECT * FROM tblstok_fifo WHERE kd_barang = '$kdBarang' AND stok > 0 ORDER by tgl ASC");
                            foreach ($data_tr as $tr) {
                                $id = $tr->id;
                                $stok = $tr->stok;
                                $harga = $tr->harga;
                                $tgl_stok = $tr->tgl;

                                if ($stok <= 0) {
                                    continue;
                                }

                                if ($sisa >= $stok) {
                                    $qty_pakai = $stok;
                                } else {
                                    $qty_pakai = $sisa;
                                }

                                $total_hpp += $qty_pakai * $harga;
                                insert_trans_stok($noNota, $id, $qty_pakai, $harga);

                                $stok_update = $stok - $qty_pakai;
                                DB::statement("UPDATE tblstok_fifo SET stok = $stok_update WHERE id = '$id' AND tgl = '$tgl_stok'");

                                $sisa -= $qty_pakai;

                                if ($sisa <= 0) {
                                    break;
                                }
                            }
                            // Refresh data_tr in case stok has changed
                            if ($sisa > 0) {
                                $data_tr = DB::select("SELECT * FROM tblstok_fifo WHERE kd_barang = '$kdBarang' AND stok > 0 ORDER by tgl ASC");
                                if (empty($data_tr)) {
                                    throw new \Exception("Stok Kurang");
                                }
                            }
                        }
                        
                        
                        
                        //============== end hpp fifo

                        $detail[] = [
                            'r_noPenjualan' => $noNota,
                            'r_kdBarang' => $kdBarang,
                            'tgl_trans' => $tglNota,
                            'r_nmBarang' => $detpem[$i]['nmBarang'],
                            'kategori_jual' => ($detpem[$i]['kategori'] ?? ($detpem[$i]['ktgBarang'] ?? ($detpem[$i]['kategori_jual'] ?? ''))),
                            'hrgJual' => $detpem[$i]['hrgJual'],
                            'satuanJual' => $detpem[$i]['satuan'],
                            'qty' => $qty,
                            'totalHpp' => $total_hpp, // $detpem[$i]['totalhpp'],
                            'disc' => ($detpem[$i]['hrgJual'] * $qty) * ($detpem[$i]['disc'] ?? 0) / 100,
                            'totalJual' => ($detpem[$i]['total'] ?? 0),
                            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                        ];

                        //========insert kartu stok
                        $total_jual = ($detpem[$i]['total'] ?? 0);
                        $stok_awal = $oldStok ; // DB::table('tblpersediaan')->select('stokPersediaan')->where('kdPersediaan', $kdBarang)->first()->stokPersediaan;
                        $stok_akhir = $oldStok - $qty ;
                        insert_kartustok_jual($noNota,$kdBarang,$tglNota,$stok_awal,$qty,$total_jual,$stok_akhir);
                        //====================end kartu stok


                        //===========jurnal
                        $accid = $detpem[$i]['accid'] ?? null; // akun pendapatan barang
                        $acc_id_d = $detpem[$i]['accid_persediaan'] ?? null; // akun persediaan
                        $acc_hpp = $detpem[$i]['accid_hpp'] ?? null; // akun HPP
                        if (empty($accid) || empty($acc_id_d) || empty($acc_hpp)) {
                            throw new \Exception('Mapping akun barang belum lengkap untuk kode ' . $kdBarang);
                        }
                        if (substr((string) $accid, 0, 1) !== '4') {
                            throw new \Exception('Akun pendapatan barang tidak valid untuk kode ' . $kdBarang . ' (harus kelompok 4xxx)');
                        }
                        if (substr((string) $acc_id_d, 0, 1) !== '1') {
                            throw new \Exception('Akun persediaan tidak valid untuk kode ' . $kdBarang . ' (harus kelompok 1xxx)');
                        }
                        if (substr((string) $acc_hpp, 0, 1) !== '5') {
                            throw new \Exception('Akun HPP tidak valid untuk kode ' . $kdBarang . ' (harus kelompok 5xxx)');
                        }
                        // $acc_id_k = '11110'; // $request[0]['subtotal']; // acc id yg di kredit
                        $acc = '32300';
                        $acc_pph = '23100'; // acc hutang pph
                        $memo = 'Penjualan-'.$nmBarang;
                        $jurnal = 'JK';
                        $subtotal = ($detpem[$i]['total'] ?? 0);
                        $subtotal_hpp = $total_hpp; // $detpem[$i]['totalhpp'];
                        //===jumlah pph
                        $bati = $subtotal - $subtotal_hpp ;
                        $pph22_dibayar = $bati * $pph22 / 100 ;
                        //====endjumalh pph
                        insert_gl($noNota,$tglNota,$subtotal,$memo,$jurnal);
                        $rgl = DB::table('general_ledger')->get()->last()->notrans;
                        $ac = [
                            [
                                'rgl' => $rgl,
                                'acc_id' => $accid,
                                'debet' => 0,
                                'kredit' => $subtotal,
                                'trans_detail' => 'Penjualan-Barang'.$nmBarang,
                                'void_flag' => 0,
                            ], 
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_k ,
                                'debet' => $subtotal,
                                'kredit' => 0,
                                'trans_detail' => 'Penjualan-Barang'.$nmBarang,
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_d,
                                'debet' => 0,
                                'kredit' => $subtotal_hpp,
                                'trans_detail' => 'Penjualan-Barang'.$nmBarang,
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_hpp,
                                'debet' => $subtotal_hpp,
                                'kredit' => 0,
                                'trans_detail' => 'Penjualan-Barang'.$nmBarang,
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc,
                                'debet' => 0,
                                'kredit' => 0,
                                'trans_detail' => 'Penjualan-Barang'.$nmBarang,
                                'void_flag' => 0,
                            ],
                            // pph22
                            // [
                            //     'rgl' => $rgl,
                            //     'acc_id' => $acc_id_k,
                            //     'debet' => 0,
                            //     'kredit' => $pph22_dibayar,
                            //     'trans_detail' => 'Penjualan-pph22'.$nmBarang,
                            //     'void_flag' => 0,
                            // ],
                            // [
                            //     'rgl' => $rgl,
                            //     'acc_id' => $acc_pph,
                            //     'debet' => $pph22_dibayar,
                            //     'kredit' => 0,
                            //     'trans_detail' => 'Penjualan-pph22'.$nmBarang,
                            //     'void_flag' => 0,
                            // ]
                            //===end pph22
                        ];

                        $ac = array_values(array_filter($ac, function ($entry) {
                            return ((float) ($entry['debet'] ?? 0) > 0) || ((float) ($entry['kredit'] ?? 0) > 0);
                        }));
                        $this->assertBalanced($ac, 'Jurnal Penjualan Barang');
                        
                        insert_gl_detail($ac);
                        //===========end jurnal
                    }
                    PenjualanDetail::insert($detail);
                }else{
                    PenjualanDetail::where('r_noPenjualan', $noNota)->delete();
                    // delete_gl($noNota);
                }

                $detpemjasa = $request[2];
                if (isset($detpemjasa)) {
                    PenjualanDetailJasa::where('r_noPenjualan', $noNota)->delete();
                    // Handle the case where $detpem[1] exists
                    
                    for ($i = 0; $i < count($detpemjasa); $i++) {

                        $kdJasa = $detpemjasa[$i]['kdJasa'];
                        $nmJasa = $detpemjasa[$i]['nmJasa'];
                        $qtyjasa = $detpemjasa[$i]['qtyjasa'];
                        $biayaJasa = $detpemjasa[$i]['biayaJasa'];
                        

                        $detailjasa[] = [
                            'r_noPenjualan' => $noNota,
                            'r_kdJasa' => $kdJasa,
                            'tgl_trans' => $tglNota,
                            'r_nmJasa' => $detpemjasa[$i]['nmJasa'],
                            'biayaJasa' => $detpemjasa[$i]['biayaJasa'],
                            'qtyJasa' => $qtyjasa,
                            'totalJasa' => $detpemjasa[$i]['total'],
                            'noteJasa' => $detpemjasa[$i]['note'],
                            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                            'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                        ];



                        //===========jurnal
                        // $accid = $detpemjasa[$i]['accid']; // acc id yg di debet
                        $accid_jasa = $detpemjasa[$i]['accid_jasa'];
                        if (empty($accid_jasa) || substr((string) $accid_jasa, 0, 1) !== '4') {
                            throw new \Exception('Akun pendapatan jasa tidak valid untuk kode ' . $kdJasa . ' (harus kelompok 4xxx)');
                        }
                        $acc = '32300'; // laba ditahan
                        $memo = 'Penjualan-Jasa'.$nmJasa;
                        $jurnal = 'JK';
                        $subtotal = $detpemjasa[$i]['total'];
                        //===jumlah pph
                        // $bati = $subtotal - $subtotal_hpp ;
                        // $pph22_dibayar = $bati * $pph22 / 100 ;
                        //====endjumalh pph
                        insert_gl($noNota,$tglNota,$subtotal,$memo,$jurnal);
                        $rgl = DB::table('general_ledger')->get()->last()->notrans;
                        $ac = [
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_k,
                                'debet' => $subtotal,
                                'kredit' => 0,
                                'trans_detail' => 'Penjualan-Jasa'.$nmJasa,
                                'void_flag' => 0,
                            ], 
                            [
                                'rgl' => $rgl,
                                'acc_id' => $accid_jasa ,
                                'debet' => 0,
                                'kredit' => $subtotal,
                                'trans_detail' => 'Penjualan-Jasa'.$nmJasa,
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc,
                                'debet' => 0,
                                'kredit' => 0,
                                'trans_detail' => 'Penjualan-Jasa'.$nmJasa,
                                'void_flag' => 0,
                            ],
                            
                            // pph22
                            // [
                            //     'rgl' => $rgl,
                            //     'acc_id' => $acc_id_k,
                            //     'debet' => 0,
                            //     'kredit' => $pph22_dibayar,
                            //     'trans_detail' => 'Penjualan-pph22'.$nmBarang,
                            //     'void_flag' => 0,
                            // ],
                            // [
                            //     'rgl' => $rgl,
                            //     'acc_id' => $acc_pph,
                            //     'debet' => $pph22_dibayar,
                            //     'kredit' => 0,
                            //     'trans_detail' => 'Penjualan-pph22'.$nmBarang,
                            //     'void_flag' => 0,
                            // ]
                            //===end pph22
                        ];

                        $ac = array_values(array_filter($ac, function ($entry) {
                            return ((float) ($entry['debet'] ?? 0) > 0) || ((float) ($entry['kredit'] ?? 0) > 0);
                        }));
                        $this->assertBalanced($ac, 'Jurnal Penjualan Jasa');
                        
                        insert_gl_detail($ac);
                        //===========end jurnal
                    }
                    PenjualanDetailJasa::insert($detailjasa);
                }else{
                    PenjualanDetailJasa::where('r_noPenjualan', $noNota)->delete();
                    // delete_gl($noNota);
                }
                   

                // DB::commit();
            });
            DB::commit();
            if(is_null($exception)) {
                // $lastInsertId = DB::getPdo()->lastInsertId();
                // $lastInsert = DB::table('tblpenjualan')->where('noPenjualan', $noNota)->first();
                return response()->json([
                    'success' => true,
                    'message' => 'Post Berhasil di insert!',
                    'data' => $noNota
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Post Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            //DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }

    }

    public function simpanPenjualanKupon(Request $request){

        try{
            $exception = DB::transaction(function() use ($request){ 
                $editid = $request->input('editid');
                // array key 0 = Header
                // array kkey 1 = Detail
                $tglNota = $request[0]['tglNota'];
                $noNota = $request[0]['noNota'];
                $total =  $request[0]['subtotal'];
                

                KuponPenjualan::where('noPenjualanKupon', $noNota)->delete();
                $detpem = $request[1];
                for ($i = 0; $i < count($detpem); $i++) {
                    $detail[] = [
                        'noPenjualanKupon' => $noNota,
                        'tglPenjualanKupon' => $tglNota,
                        'r_pelanggan' => $detpem[$i]['kdPelanggan'],
                        'totalPenjualanKupon' => $detpem[$i]['total'],
                        'created_at' => $tglNota,
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ];

                    //===========jurnal
                    // $acc_id_k = $detpro[$i]['accid_persediaan']; // acc id yg di debet
                    // $acc_id_dd = $detpro[$i]['accid_hpp']; // acc id yg di debet
                    $accid = '21200'; // $detpro[$i]['accid']; // acc id yg di debet
                    $acc_id_d = '11110'; // $request[0]['subtotal']; // acc id yg di kredit
                    $memo = 'Penjualan-Kupon';
                    $jurnal = 'JK';
                    $t = $detpem[$i]['total'] ;
                    insert_gl($noNota,$tglNota,$t,$memo,$jurnal);
                    $rgl = DB::table('general_ledger')->get()->last()->notrans;
                    $ac = [
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc_id_d,
                            'debet' => $t,
                            'kredit' => 0,
                            'trans_detail' => 'Penjualan-Kupon',
                            'void_flag' => 0,
                        ],
                        [
                            'rgl' => $rgl,
                            'acc_id' => $accid,
                            'debet' => 0,
                            'kredit' => $t,
                            'trans_detail' => 'Penjualan-Kupon',
                            'void_flag' => 0,
                        ],
                        
                    ];
                    
                    insert_gl_detail($ac);
                    //===========end jurnal
                }
                KuponPenjualan::insert($detail);

                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Post Berhasil di insert!',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Post Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            //DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }

    }

    public function getDetailPenjualan(Request $request){
        $noPenjualan = $request->input('noNota');

        $dataH = Penjualan::where('noPenjualan', $noPenjualan)->join('tblpelanggan', 'tblpenjualan.r_pelanggan', 'tblpelanggan.kdPelanggan')->get();
        $dataD = PenjualanDetail::where('r_noPenjualan', $noPenjualan)->join('tblbarang', 'tblpenjualan_detail.r_kdBarang', 'tblbarang.kdBarang')
        ->select('tblbarang.kdBarang', 'tblbarang.nmBarang', 'tblbarang.accid', 'tblbarang.accid_persediaan', 'tblbarang.accid_hpp' ,'tblpenjualan_detail.*')
        ->get();
        $dataJ = PenjualanDetailJasa::where('r_noPenjualan', $noPenjualan)
        ->join('tbljasa', 'tblpenjualan_detail_jasa.r_kdJasa', 'tbljasa.kdJasa')
        ->select('tbljasa.kdJasa', 'tbljasa.nmJasa', 'tbljasa.accid', 'tbljasa.accid_jasa' ,'tblpenjualan_detail_jasa.*')
        ->get();
        $totalBayar = DB::table('tblpembayaran_penjualan')
            ->where('noJual', $noPenjualan)
            ->get();
        return response()->json([
            'success' => true,
            'message' => 'Detail Penjualan!',
            'data' => [$dataH, $dataD, $dataJ, $totalBayar]
        ], 200);
    }
}
