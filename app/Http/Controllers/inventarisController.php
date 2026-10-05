<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class inventarisController extends Controller
{
    //
    public function indexInventaris(){
        $inv = DB::table('tblinventaris')->get();
        $thismonth = date("Y-m");
        // $penyu = DB::table('tblinventaris_penyusutan_detail')->where('tgl_penyusutan', 'like', $thismonth'%')->get();
        $penyu = DB::select("SELECT * FROM `tblinventaris_penyusutan_detail` WHERE tgl_penyusutan LIKE '$thismonth%';");
        // print_r($penyu);

        return response()->json([
            'success' => true,
            'message' => 'data inventaris',
            'data' => [$inv, $penyu]
        ], 200);
    }

    public function daftarPembelianInventaris(Request $request){
        // try{
        //     $exception = DB::transaction(function() use ($request){
                $startDate = date("Y-m-d", strtotime($request->input('startDate')));
                $endDate = date("Y-m-d", strtotime($request->input('endDate')));

                $detail = DB::table('tblinventaris_pengadaan')
                        ->join('tblsupplier', 'tblinventaris_pengadaan.supplier_code', 'tblsupplier.kdSupplier')
                        ->whereBetween('tblinventaris_pengadaan.tgl_spk', [$startDate, $endDate])
                        ->select('tblinventaris_pengadaan.*', 'tblsupplier.nmSupplier')
                        ->get();
                
                        return response()->json([
                            'success' => true,
                            'message' => 'Laporan Pembelian Inventaris',
                            'data' => $detail
                        ], 200);


        //         DB::commit();
        //     });
        //     if(is_null($exception)) {
        //         return response()->json([
        //             'success' => true,
        //             'message' => 'Laporan Pembelian Inventaris',
        //             'data' => $detail
        //         ], 200);
        //     } else {
        //         DB::rollback();
        //         return response()->json([
        //             'success' => false,
        //             'message' => 'Laporan Pembelian Gagal Diupdate!',
        //         ], 500);
        //     }
        // } catch (\Exception $e) {
        //     DB::rollback();
        //     // something went wrong
        //     return response()->json([
        //      'success' => false,
        //      'message' => 'exception'.$e,
        //  ], 400);
        // }
    }

    public function tambahInventaris(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kode_inventaris = $request->input('kode_inventaris');
                $nama_inventaris = $request->input('nama_inventaris');
                $tahun_pembuatan = $request->input('tahun_pembuatan');
                $tahun_perakitan = $request->input('tahun_perakitan');
                $group_inventaris = $request->input('group_inventaris');
                $accid_akum = $request->input('accid_akum');
                $warna = $request->input('warna');
                $merek = $request->input('merek');
                $umur_ekonomis = $request->input('umur_ekonomis');
                $is_disewakan = $request->input('is_disewakan', 0);
                $harga_sewa = $request->input('harga_sewa', 0);
                $acc_pendapatan_sewa = $request->input('acc_pendapatan_sewa', '');

                DB::table('tblinventaris')->upsert([
                        'kode_inventaris' => $kode_inventaris,
                        'nama_inventaris' => $nama_inventaris,
                        'tahun_pembuatan' => $tahun_pembuatan,
                        'tahun_perakitan' => $tahun_perakitan,
                        'group_inventaris' => $group_inventaris,
                        'accid_akum' => $accid_akum,
                        'warna' => $warna,
                        'merek' => $merek,
                        'umur_ekonomis' => $umur_ekonomis,
                        'is_disewakan' => $is_disewakan,
                        'harga_sewa' => $harga_sewa,
                        'acc_pendapatan_sewa' => $acc_pendapatan_sewa,
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ],
                    [
                        'nama_inventaris' => $nama_inventaris,
                        'tahun_pembuatan' => $tahun_pembuatan,
                        'tahun_perakitan' => $tahun_perakitan,
                        'group_inventaris' => $group_inventaris,
                        'accid_akum' => $accid_akum,
                        'warna' => $warna,
                        'merek' => $merek,
                        'umur_ekonomis' => $umur_ekonomis,
                        'is_disewakan' => $is_disewakan,
                        'harga_sewa' => $harga_sewa,
                        'acc_pendapatan_sewa' => $acc_pendapatan_sewa,
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ]
                );
                

                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Inventaris Berhasil di insert!',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Inventaris Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }
    }

    public function beliInventaris(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $editid = $request->input('editid');
                // array key 0 = Header
                // array kkey 1 = Detail
                $tglNota = $request[0]['tglNota'];
                $noNota = $request[0]['noNota'];
                $post = DB::table('tblinventaris_pengadaan')->insert([
                    'pengadaan_sysno'     => $request[0]['noNota'],
                    'pengadaan_docno'     => $request[0]['noNota'],
                    'tgl_spk'   => $tglNota,
                    'total'     => $request[0]['total'],
                    'memo'     => $request[0]['notes'],
                    'supplier_code' => $request[0]['kdSupplier'],
                    'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                ]);

                $detpem = $request[1];
                $totalSeluruh = 0;
                $subtotalPerGroup = []; // accumulate debit per group_inventaris

                for ($i = 0; $i < count($detpem); $i++) {

                    $kdBarang = $detpem[$i]['kdBarang'];
                    $qty = $detpem[$i]['qty'];
                    DB::table('tblinventaris')->where('kode_inventaris', $kdBarang)->update([
                        'nilai_inventaris' => $detpem[$i]['total'],
                        'qty_inventaris' => $qty,
                        'kode_pengadaan' => $noNota
                    ]);

                    DB::table('tblinventaris_pengadaan_detail')->upsert([
                        'rsysno_pengadaan' => $noNota,
                        'rkode_inventaris' => $kdBarang,
                        'rkode_pengadaan' => $noNota,
                        'kode_pengadaan_detail' => $noNota.$kdBarang.($i+1),
                        'harga_perolehan' => $detpem[$i]['hrgPokok'],
                        'qty' => $qty,
                        'subtotal' => $detpem[$i]['total'],
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ],
                    [
                        'rkode_inventaris' => $kdBarang,
                        'rkode_pengadaan' => $noNota,
                        'kode_pengadaan_detail' => $noNota.$kdBarang.($i+1),
                        'harga_perolehan' => $detpem[$i]['hrgPokok'],
                        'qty' => $qty,
                        'subtotal' => $detpem[$i]['total'],
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ]);

                    $grp = $detpem[$i]['group_inventaris'];
                    $subtotalPerGroup[$grp] = ($subtotalPerGroup[$grp] ?? 0) + $detpem[$i]['total'];
                    $totalSeluruh += $detpem[$i]['total'];
                }

                // Satu GL header untuk seluruh transaksi pembelian
                $memo   = 'Pembelian-Inventaris';
                $jurnal = 'JK';
                insert_gl($noNota, $tglNota, $totalSeluruh, $memo, $jurnal);
                $rgl = DB::table('general_ledger')->get()->last()->notrans;

                $ac = [];
                // Debet: satu baris per kategori inventaris
                foreach ($subtotalPerGroup as $grp => $jumlah) {
                    $ac[] = [
                        'rgl'          => $rgl,
                        'acc_id'       => $grp,
                        'debet'        => $jumlah,
                        'kredit'       => 0,
                        'trans_detail' => $memo,
                        'void_flag'    => 0,
                    ];
                }
                // Kredit: kas/bank untuk total keseluruhan
                $ac[] = [
                    'rgl'          => $rgl,
                    'acc_id'       => '11110',
                    'debet'        => 0,
                    'kredit'       => $totalSeluruh,
                    'trans_detail' => $memo,
                    'void_flag'    => 0,
                ];
                insert_gl_detail($ac);
                

                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Inventaris Berhasil di insert!',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Inventaris Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }
    }

    public function penyusutanInventaris(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){

                $detail = $request[0][0];
                $noNota = $detail['kode_penyusutan'];
                $tglSusut = $request[1][0]['tgl_penyusutan'];

                $kode_inventaris = $detail['kode_inventaris'];
                $old_det = DB::table('tblinventaris')->where('kode_inventaris', $kode_inventaris)->first();
                // print_r($detail) ;
                if($old_det->nilai_inventaris > 0){
                    $old_det = DB::table('tblinventaris')->where('kode_inventaris', $kode_inventaris)->first();

                    DB::table('tblinventaris_penyusutan')->insert([

                        'penyusutan_sysno' => $detail['kode_penyusutan'],
                        'penyusutan_docno' => $detail['kode_penyusutan'],
                        'tgl_penyusutan' => $tglSusut, // $detail['tgl_penyusutan'],
                        'memo_penyusutan' => 'memo',
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ]);

                    DB::table('tblinventaris_penyusutan_detail')->insert([
                        // [
                        'rsysno_penyusutan' => $detail['kode_penyusutan'],
                        'rkode_inventaris' => $detail['kode_inventaris'],
                        'tgl_penyusutan' => $tglSusut, // $detail['tgl_penyusutan'],
                        'jumlah_penyusutan' => $detail['jumlah_penyusutan'] * $old_det->qty_inventaris,
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                    ]);
                    $subtotal = $detail['jumlah_penyusutan'] * $old_det->qty_inventaris;
                    
                    DB::table('tblinventaris')->where('kode_inventaris', $kode_inventaris)->update([ 'nilai_inventaris' => $old_det->nilai_inventaris - $subtotal ]);

                    //===========jurnal
                    $pphps4 = 10 ; //$detop[0]['pphps4'];
                    $acc_id_d =  $detail['acc_id']; // acc id yg di debet
                    $acc_id_akum =  $detail['accid_akum'];
                    $acc_id_k = '11110'; // $request[0]['subtotal']; // acc id yg di kredit
                    $acc_id_p = '61103';
                    $acc_id_l = '32300';
                    $memo = 'Penyusutan-Inventaris';
                    $jurnal = 'JK';
                    $acc_pph = '23100'; // acc hutang pph
                    //===jumlah pphps4
                    $pphps4_dibayar = $subtotal * $pphps4 / 100 ;
                    //====endjumalh pph
                    insert_gl($noNota,$tglSusut,$subtotal,$memo,$jurnal);
                    $rgl = DB::table('general_ledger')->get()->last()->notrans;
                    $ac = [
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc_id_d,
                            'debet' => 0,
                            'kredit' => $subtotal,
                            'trans_detail' => 'Penyusutan-Inventaris',
                            'void_flag' => 0,
                        ],
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc_id_akum,
                            'debet' => $subtotal,
                            'kredit' => 0,
                            'trans_detail' => 'Penyusutan-Inventaris',
                            'void_flag' => 0,
                        ], 
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc_id_k,
                            'debet' => 0,
                            'kredit' => $subtotal,
                            'trans_detail' => 'Penyusutan-Inventaris',
                            'void_flag' => 0,
                        ],
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc_id_p,
                            'debet' => 0,
                            'kredit' => $subtotal,
                            'trans_detail' => 'Penyusutan-Inventaris',
                            'void_flag' => 0,
                        ],
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc_id_l,
                            'debet' => 0,
                            'kredit' => -1*$subtotal,
                            'trans_detail' => 'Penyusutan-Inventaris',
                            'void_flag' => 0,
                        ],
                        //===========pph ps4
                        // [
                        //     'rgl' => $rgl,
                        //     'acc_id' => $acc_id_k,
                        //     'debet' => $pphps4_dibayar,
                        //     'kredit' => 0,
                        //     'trans_detail' => 'Trans-biaya',
                        //     'void_flag' => 0,
                        // ],
                        // [
                        //     'rgl' => $rgl,
                        //     'acc_id' => $acc_pph,
                        //     'debet' => 0,
                        //     'kredit' => $pphps4_dibayar,
                        //     'trans_detail' => 'Trans-biaya',
                        //     'void_flag' => 0,
                        // ]
                        //============end pph ps4
                    ];
                    
                    insert_gl_detail($ac);
                    DB::commit();
                }
             
                
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Inventaris Berhasil di susutkan!',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Inventaris Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }

    }

    
    public function getInvBykat(Request $request){
        $gr = $request->input('group');
        $detail = DB::table('tblinventaris')->where('group_inventaris', $gr)->get();

        return response()->json([
            'success' => true,
            'message' => 'daftar kat inv',
            'data' => $detail
        ], 200);
    }

    public function penyusutanInvByKat(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){

                $detail = $request['data'];
                $noNota = $detail[0]['kode_penyusutan'];
                $tglNota = $detail[0]['tgl_penyusutan'];

                // print_r($detail) ;

                DB::table('tblinventaris_penyusutan')->insert([
                    // [
                        'penyusutan_sysno' => $noNota,
                        'penyusutan_docno' => $noNota,
                        'tgl_penyusutan' => $tglNota,
                        'memo_penyusutan' => 'memo',
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                ]);

                for ($i = 0; $i < count($detail); $i++) {

                    $kode_inventaris = $detail[$i]['kode_inventaris'];
                    $old_det = DB::table('tblinventaris')->where('kode_inventaris', $kode_inventaris)->first();

                    if($old_det->nilai_inventaris > 0){

                        DB::table('tblinventaris_penyusutan_detail')->insert([
                            // [
                                'rsysno_penyusutan' => $detail[$i]['kode_penyusutan'],
                                'rkode_inventaris' => $detail[$i]['kode_inventaris'],
                                'tgl_penyusutan' => $detail[$i]['tgl_penyusutan'],
                                'jumlah_penyusutan' => $detail[$i]['jumlah_penyusutan'] * $old_det->qty_inventaris,
                                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                                'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                        ]);
                        $subtotal = $detail[$i]['jumlah_penyusutan']  * $old_det->qty_inventaris;
                        // $old_det = DB::table('tblinventaris')->where('kode_inventaris', $kode_inventaris)->first();
                        DB::table('tblinventaris')->where('kode_inventaris', $kode_inventaris)->update([ 'nilai_inventaris' => $old_det->nilai_inventaris - $subtotal ]);
                        //===========jurnal
                        $pphps4 = 10 ; //$detop[0]['pphps4'];
                        $acc_id_d =  $detail[$i]['acc_id']; // acc id yg di debet
                        $acc_id_akum =  $detail[$i]['accid_akum'];
                        $acc_id_k = '11110'; // $request[0]['subtotal']; // acc id yg di kredit
                        $acc_id_p = '61103';
                        $acc_id_l = '32300';
                        $memo = 'Penyusutan-Inventaris';
                        $jurnal = 'JK';
                        $acc_pph = '23100'; // acc hutang pph
                        //===jumlah pphps4
                        $pphps4_dibayar = $subtotal * $pphps4 / 100 ;
                        //====endjumalh pph
                        insert_gl($noNota,$tglNota,$subtotal,$memo,$jurnal);
                        $rgl = DB::table('general_ledger')->get()->last()->notrans;
                        $ac = [
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_d,
                                'debet' => 0,
                                'kredit' => $subtotal,
                                'trans_detail' => 'Penyusutan-Inventaris',
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_akum,
                                'debet' => $subtotal,
                                'kredit' => 0,
                                'trans_detail' => 'Penyusutan-Inventaris',
                                'void_flag' => 0,
                            ], 
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_k,
                                'debet' => 0,
                                'kredit' => $subtotal,
                                'trans_detail' => 'Penyusutan-Inventaris',
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_p,
                                'debet' => 0,
                                'kredit' => $subtotal,
                                'trans_detail' => 'Penyusutan-Inventaris',
                                'void_flag' => 0,
                            ],
                            [
                                'rgl' => $rgl,
                                'acc_id' => $acc_id_l,
                                'debet' => 0,
                                'kredit' => -1*$subtotal,
                                'trans_detail' => 'Penyusutan-Inventaris',
                                'void_flag' => 0,
                            ],
                            //===========pph ps4
                            // [
                            //     'rgl' => $rgl,
                            //     'acc_id' => $acc_id_k,
                            //     'debet' => $pphps4_dibayar,
                            //     'kredit' => 0,
                            //     'trans_detail' => 'Trans-biaya',
                            //     'void_flag' => 0,
                            // ],
                            // [
                            //     'rgl' => $rgl,
                            //     'acc_id' => $acc_pph,
                            //     'debet' => 0,
                            //     'kredit' => $pphps4_dibayar,
                            //     'trans_detail' => 'Trans-biaya',
                            //     'void_flag' => 0,
                            // ]
                            //============end pph ps4
                        ];
                        insert_gl_detail($ac);

                    }
                    
                    
                }
             
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Inventaris Berhasil di susutkan!',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Inventaris Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }

    }

    public function deletePengadaan(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                $cek_inv = DB::table('tblinventaris_pengadaan_detail')->where('rsysno_pengadaan', $kd)->get();
                $jml = 0;
                for($i=0;$i< count($cek_inv);$i++){
                    $jml_penyusutan = DB::table('tblinventaris_penyusutan_detail')->where('rkode_inventaris', $cek_inv[$i]->rkode_inventaris)->count();
                    $jml += $jml_penyusutan ;
                }
                // echo $jml ;
                if($jml <= 0){
                    //====hapus jurnal
                    $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                    for($i=0;$i< count($gl);$i++){
                        DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                        DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                    };
                    //=====end jurnal

                    $old_inv = DB::table('tblinventaris_pengadaan_detail')->where('rsysno_pengadaan', $kd)->get();
                    for($i=0;$i< count($old_inv);$i++){
                        $old_n = DB::table('tblinventaris')->where('kode_pengadaan', $old_inv[$i]->rsysno_pengadaan)->where('kode_inventaris', $old_inv[$i]->rkode_inventaris)->first();
                        $inven = DB::table('tblinventaris')->where('kode_pengadaan', $old_inv[$i]->rsysno_pengadaan)->where('kode_inventaris', $old_inv[$i]->rkode_inventaris)
                        ->update([
                            'nilai_inventaris' => $old_n->nilai_inventaris - $old_inv[$i]->subtotal,
                        ]);

                    }
                    DB::table('tblinventaris_pengadaan')->where('pengadaan_sysno', $kd)->delete();
                    DB::table('tblinventaris_pengadaan_detail')->where('rsysno_pengadaan', $kd)->delete();
                    DB::commit();
                }else{
                    return response()->json([
                        'success' => false,
                        'message' => 'Pengadaan Gagal Dihapus karena sudah ada yg disusutkan',
                    ], 500);
                }
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Pengadaan Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Pengadaan Gagal Dihapus',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }
    }

    
    public function hapusInventaris(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                $cek_nil = DB::table('tblinventaris')->where('kode_inventaris', $kd)->first();
                if($cek_nil->nilai_inventaris < 100 ){
                    DB::table('tblinventaris')->where('kode_inventaris', $kd)->delete();

                }
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Pengadaan Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Pengadaan Gagal Dihapus',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            // something went wrong
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }
    }

    public function updateSewaInventaris(Request $request){
        try {
            $kode = $request->input('kode_inventaris');
            $is_disewakan = $request->input('is_disewakan', 0);
            $harga_sewa = $request->input('harga_sewa', 0);
            $acc_pendapatan_sewa = $request->input('acc_pendapatan_sewa', '');

            DB::table('tblinventaris')->where('kode_inventaris', $kode)->update([
                'is_disewakan'         => $is_disewakan,
                'harga_sewa'           => $harga_sewa,
                'acc_pendapatan_sewa'  => $acc_pendapatan_sewa,
                'updated_at'           => \Carbon\Carbon::now()->toDateTimeString(),
            ]);

            return response()->json(['success' => true, 'message' => 'Data sewa berhasil diperbarui'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => 'exception: '.$e->getMessage()], 400);
        }
    }

    public function simpanSewaInventaris(Request $request){
        try {
            $exception = DB::transaction(function() use ($request) {
                $noSewa    = $request->input('noSewa');
                $tglSewa   = $request->input('tglSewa');
                $kodeInv   = $request->input('kode_inventaris');
                $jumlah    = (float) $request->input('jumlah_sewa', 0);
                $periodeSewa = max(1, (int) $request->input('periode_sewa', 1));
                $keterangan = $request->input('keterangan', 'Pendapatan Sewa Inventaris');
                $accKas    = $request->input('acc_kas', '11110');
                $accPendapatan = $request->input('acc_pendapatan_sewa');
                $inventaris = DB::table('tblinventaris')->where('kode_inventaris', $kodeInv)->first();

                if (!$inventaris || !$inventaris->is_disewakan) {
                    throw new \RuntimeException('Inventaris belum ditandai sebagai inventaris sewaan');
                }
                if ($jumlah <= 0 || empty($accPendapatan)) {
                    throw new \RuntimeException('Jumlah sewa dan akun pendapatan wajib diisi');
                }

                DB::table('tblinventaris_sewa')->insert([
                    'sewa_sysno'       => $noSewa,
                    'sewa_docno'       => $noSewa,
                    'tgl_sewa'         => $tglSewa,
                    'rkode_inventaris' => $kodeInv,
                    'jumlah_sewa'      => $jumlah,
                    'periode_sewa'     => $periodeSewa,
                    'jumlah_penyusutan' => 0,
                    'keterangan'       => $keterangan,
                    'created_at'       => \Carbon\Carbon::now()->toDateTimeString(),
                    'updated_at'       => \Carbon\Carbon::now()->toDateTimeString(),
                ]);

                // Jurnal: Dr Kas / Cr Pendapatan Sewa
                $memo   = 'Pendapatan-Sewa-Inventaris';
                $jurnal = 'JK';
                insert_gl($noSewa, $tglSewa, $jumlah, $memo, $jurnal);
                $rgl = DB::table('general_ledger')->get()->last()->notrans;

                $ac = [
                    [
                        'rgl'          => $rgl,
                        'acc_id'       => $accKas,
                        'debet'        => $jumlah,
                        'kredit'       => 0,
                        'trans_detail' => $memo,
                        'void_flag'    => 0,
                    ],
                    [
                        'rgl'          => $rgl,
                        'acc_id'       => $accPendapatan,
                        'debet'        => 0,
                        'kredit'       => $jumlah,
                        'trans_detail' => $memo,
                        'void_flag'    => 0,
                    ],
                ];

                insert_gl_detail($ac);

                $umurBulan = (int) $inventaris->umur_ekonomis * 12;
                $jumlahPenyusutan = 0;
                if ($umurBulan > 0 && (float) $inventaris->nilai_inventaris > 0) {
                    $penyusutanPerBulan = (float) $inventaris->nilai_inventaris / $umurBulan;
                    $jumlahPenyusutan = min(
                        (float) $inventaris->nilai_inventaris,
                        $penyusutanPerBulan * $periodeSewa
                    );
                }

                if ($jumlahPenyusutan > 0) {
                    DB::table('tblinventaris_penyusutan')->insert([
                        'penyusutan_sysno' => $noSewa,
                        'penyusutan_docno' => $noSewa,
                        'tgl_penyusutan' => $tglSewa,
                        'memo_penyusutan' => 'Penyusutan dari Sewa Inventaris',
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    ]);

                    DB::table('tblinventaris_penyusutan_detail')->insert([
                        'rsysno_penyusutan' => $noSewa,
                        'rkode_inventaris' => $kodeInv,
                        'tgl_penyusutan' => $tglSewa,
                        'jumlah_penyusutan' => $jumlahPenyusutan,
                        'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    ]);

                    DB::table('tblinventaris_sewa')->where('sewa_sysno', $noSewa)->update([
                        'jumlah_penyusutan' => $jumlahPenyusutan,
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    ]);

                    DB::table('tblinventaris')->where('kode_inventaris', $kodeInv)->update([
                        'nilai_inventaris' => (float) $inventaris->nilai_inventaris - $jumlahPenyusutan,
                        'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
                    ]);

                    $memoPenyusutan = 'Penyusutan-Sewa-Inventaris';
                    insert_gl($noSewa . '-S', $tglSewa, $jumlahPenyusutan, $memoPenyusutan, 'JK');
                    $rglPenyusutan = DB::table('general_ledger')->get()->last()->notrans;
                    insert_gl_detail([
                        [
                            'rgl' => $rglPenyusutan,
                            'acc_id' => '61103',
                            'debet' => $jumlahPenyusutan,
                            'kredit' => 0,
                            'trans_detail' => $memoPenyusutan,
                            'void_flag' => 0,
                        ],
                        [
                            'rgl' => $rglPenyusutan,
                            'acc_id' => $inventaris->accid_akum,
                            'debet' => 0,
                            'kredit' => $jumlahPenyusutan,
                            'trans_detail' => $memoPenyusutan,
                            'void_flag' => 0,
                        ],
                    ]);
                }
                DB::commit();
            });

            if (is_null($exception)) {
                return response()->json(['success' => true, 'message' => 'Sewa berhasil tersimpan'], 200);
            }
            DB::rollback();
            return response()->json(['success' => false, 'message' => 'Sewa gagal disimpan'], 500);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['success' => false, 'message' => 'exception: '.$e->getMessage()], 400);
        }
    }

    public function daftarSewaInventaris(Request $request){
        $startDate = date('Y-m-d', strtotime($request->input('startDate')));
        $endDate   = date('Y-m-d', strtotime($request->input('endDate')));

        $data = DB::table('tblinventaris_sewa')
            ->join('tblinventaris', 'tblinventaris_sewa.rkode_inventaris', '=', 'tblinventaris.kode_inventaris')
            ->whereBetween('tblinventaris_sewa.tgl_sewa', [$startDate, $endDate])
            ->select('tblinventaris_sewa.*', 'tblinventaris.nama_inventaris', 'tblinventaris.acc_pendapatan_sewa')
            ->get();

        return response()->json(['success' => true, 'message' => 'Daftar Sewa Inventaris', 'data' => $data], 200);
    }

    public function updateTransaksiSewaInventaris(Request $request){
        try {
            DB::transaction(function() use ($request) {
                $id = $request->input('id_sewa');
                $old = DB::table('tblinventaris_sewa')->where('id_sewa', $id)->lockForUpdate()->first();
                if (!$old) {
                    throw new \RuntimeException('Transaksi sewa tidak ditemukan');
                }

                $oldAsset = DB::table('tblinventaris')->where('kode_inventaris', $old->rkode_inventaris)->lockForUpdate()->first();
                DB::table('tblinventaris')->where('kode_inventaris', $old->rkode_inventaris)->update([
                    'nilai_inventaris' => (float) $oldAsset->nilai_inventaris + (float) $old->jumlah_penyusutan,
                ]);
                DB::table('tblinventaris_penyusutan_detail')->where('rsysno_penyusutan', $old->sewa_sysno)->delete();
                DB::table('tblinventaris_penyusutan')->where('penyusutan_sysno', $old->sewa_sysno)->delete();
                DB::table('general_ledger')->whereIn('order_no', [$old->sewa_sysno, $old->sewa_sysno . '-S'])->get()->each(function($gl) {
                    DB::table('gl_detail')->where('rgl', $gl->notrans)->delete();
                    DB::table('general_ledger')->where('notrans', $gl->notrans)->delete();
                });

                $asset = DB::table('tblinventaris')->where('kode_inventaris', $request->input('kode_inventaris'))->lockForUpdate()->first();
                if (!$asset || !$asset->is_disewakan) {
                    throw new \RuntimeException('Inventaris belum ditandai sebagai inventaris sewaan');
                }
                $jumlah = (float) $request->input('jumlah_sewa', 0);
                $periode = max(1, (int) $request->input('periode_sewa', 1));
                $accPendapatan = $request->input('acc_pendapatan_sewa') ?: $asset->acc_pendapatan_sewa;
                if ($jumlah <= 0 || empty($accPendapatan)) {
                    throw new \RuntimeException('Jumlah sewa dan akun pendapatan wajib diisi');
                }
                $penyusutan = 0;
                $umurBulan = (int) $asset->umur_ekonomis * 12;
                if ($umurBulan > 0 && (float) $asset->nilai_inventaris > 0) {
                    $penyusutan = min((float) $asset->nilai_inventaris, ((float) $asset->nilai_inventaris / $umurBulan) * $periode);
                }

                DB::table('tblinventaris_sewa')->where('id_sewa', $id)->update([
                    'tgl_sewa' => $request->input('tglSewa'),
                    'rkode_inventaris' => $asset->kode_inventaris,
                    'jumlah_sewa' => $jumlah,
                    'periode_sewa' => $periode,
                    'jumlah_penyusutan' => $penyusutan,
                    'keterangan' => $request->input('keterangan', 'Pendapatan Sewa Inventaris'),
                    'updated_at' => now(),
                ]);
                DB::table('tblinventaris')->where('kode_inventaris', $asset->kode_inventaris)->update([
                    'nilai_inventaris' => (float) $asset->nilai_inventaris - $penyusutan,
                ]);

                insert_gl($old->sewa_sysno, $request->input('tglSewa'), $jumlah, 'Pendapatan-Sewa-Inventaris', 'JK');
                $rgl = DB::table('general_ledger')->get()->last()->notrans;
                insert_gl_detail([
                    ['rgl' => $rgl, 'acc_id' => $request->input('acc_kas', '11110'), 'debet' => $jumlah, 'kredit' => 0, 'trans_detail' => 'Pendapatan-Sewa-Inventaris', 'void_flag' => 0],
                    ['rgl' => $rgl, 'acc_id' => $accPendapatan, 'debet' => 0, 'kredit' => $jumlah, 'trans_detail' => 'Pendapatan-Sewa-Inventaris', 'void_flag' => 0],
                ]);

                if ($penyusutan > 0) {
                    DB::table('tblinventaris_penyusutan')->insert([
                        'penyusutan_sysno' => $old->sewa_sysno, 'penyusutan_docno' => $old->sewa_sysno,
                        'tgl_penyusutan' => $request->input('tglSewa'), 'memo_penyusutan' => 'Penyusutan dari Sewa Inventaris',
                        'created_at' => now(), 'updated_at' => now(),
                    ]);
                    DB::table('tblinventaris_penyusutan_detail')->insert([
                        'rsysno_penyusutan' => $old->sewa_sysno, 'rkode_inventaris' => $asset->kode_inventaris,
                        'tgl_penyusutan' => $request->input('tglSewa'), 'jumlah_penyusutan' => $penyusutan,
                        'created_at' => now(), 'updated_at' => now(),
                    ]);
                    insert_gl($old->sewa_sysno . '-S', $request->input('tglSewa'), $penyusutan, 'Penyusutan-Sewa-Inventaris', 'JK');
                    $rglSusut = DB::table('general_ledger')->get()->last()->notrans;
                    insert_gl_detail([
                        ['rgl' => $rglSusut, 'acc_id' => '61103', 'debet' => $penyusutan, 'kredit' => 0, 'trans_detail' => 'Penyusutan-Sewa-Inventaris', 'void_flag' => 0],
                        ['rgl' => $rglSusut, 'acc_id' => $asset->accid_akum, 'debet' => 0, 'kredit' => $penyusutan, 'trans_detail' => 'Penyusutan-Sewa-Inventaris', 'void_flag' => 0],
                    ]);
                }
            });
            return response()->json(['success' => true, 'message' => 'Transaksi sewa berhasil diubah'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 400);
        }
    }

    public function hapusSewaInventaris(Request $request){
        try {
            DB::transaction(function() use ($request) {
                $sewa = DB::table('tblinventaris_sewa')->where('id_sewa', $request->input('id_sewa'))->lockForUpdate()->first();
                if (!$sewa) {
                    throw new \RuntimeException('Transaksi sewa tidak ditemukan');
                }
                $asset = DB::table('tblinventaris')->where('kode_inventaris', $sewa->rkode_inventaris)->lockForUpdate()->first();
                if ($asset) {
                    DB::table('tblinventaris')->where('kode_inventaris', $asset->kode_inventaris)->update([
                        'nilai_inventaris' => (float) $asset->nilai_inventaris + (float) $sewa->jumlah_penyusutan,
                    ]);
                }
                DB::table('tblinventaris_penyusutan_detail')->where('rsysno_penyusutan', $sewa->sewa_sysno)->delete();
                DB::table('tblinventaris_penyusutan')->where('penyusutan_sysno', $sewa->sewa_sysno)->delete();
                DB::table('general_ledger')->whereIn('order_no', [$sewa->sewa_sysno, $sewa->sewa_sysno . '-S'])->get()->each(function($gl) {
                    DB::table('gl_detail')->where('rgl', $gl->notrans)->delete();
                    DB::table('general_ledger')->where('notrans', $gl->notrans)->delete();
                });
                DB::table('tblinventaris_sewa')->where('id_sewa', $sewa->id_sewa)->delete();
            });
            return response()->json(['success' => true, 'message' => 'Transaksi sewa berhasil dihapus'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()], 400);
        }
    }
}

