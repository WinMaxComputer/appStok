<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class laporanController extends Controller
{
    //
    public function laporanBbm(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $lap = DB::table('tbltransaksi_nosel')
                ->join('tblbbm', 'tblbbm.id', 'tbltransaksi_nosel.r_bbm')
                ->join('tblnosel_detail', 'tblnosel_detail.id_nosel', 'tbltransaksi_nosel.r_nosel')
                ->select('tbltransaksi_nosel.*', 'tblbbm.nama_bbm', 'tblnosel_detail.nama_nosel')
                ->whereBetween('tbltransaksi_nosel.tgl_transaksi', [$startDate, $endDate])
                ->get();
        return response()->json([
            'success' => true,
            'message' => 'Laporan Penjualan BBM',
            'data' => $lap
        ], 200);
    }

    public function laporanBrg(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $lap = DB::table('tblpenjualan')
                ->join('tblpelanggan', 'tblpenjualan.r_pelanggan', 'tblpelanggan.kdPelanggan')
                ->select('tblpenjualan.*', 'tblpelanggan.nmPelanggan')
                ->whereBetween('tblpenjualan.tglPenjualan', [$startDate, $endDate])
                ->orderBy('tblpenjualan.idPenjualan', 'desc')
                ->get();
        return response()->json([
            'success' => true,
            'message' => 'Laporan Penjualan Barang',
            'data' => $lap
        ], 200);
    }

    public function laporanBayarPenjualan(Request $request){
        $noJual = $request->input('noJual');
        if($noJual == null){
            $startDate = date("Y-m-d", strtotime($request->input('startDate')));
            $endDate = date("Y-m-d", strtotime($request->input('endDate')));
            
            $lap = DB::table('tblpembayaran_penjualan')
                    ->join('tblpenjualan', 'tblpembayaran_penjualan.noJual', 'tblpenjualan.noPenjualan')
                    ->join('tblpelanggan', 'tblpenjualan.r_pelanggan', 'tblpelanggan.kdPelanggan')
                    ->select(
                        'tblpembayaran_penjualan.*',
                        'tblpenjualan.tglPenjualan',
                        'tblpelanggan.nmPelanggan'
                    )
                    ->whereBetween('tblpembayaran_penjualan.tglBayar', [$startDate, $endDate])
                    ->orderBy('tblpembayaran_penjualan.id', 'desc')
                    ->get();
            return response()->json([
                'success' => true,
                'message' => 'Laporan Pembayaran Penjualan',
                'data' => $lap
            ], 200);
        }else{
            $lap = DB::table('tblpembayaran_penjualan')
                ->join('tblpenjualan', 'tblpembayaran_penjualan.noJual', 'tblpenjualan.noPenjualan')
                ->join('tblpelanggan', 'tblpenjualan.r_pelanggan', 'tblpelanggan.kdPelanggan')
                ->select(
                    'tblpembayaran_penjualan.*',
                    'tblpenjualan.tglPenjualan',
                    'tblpelanggan.nmPelanggan'
                )
                ->where('tblpembayaran_penjualan.noJual', $noJual)
                ->orderBy('tblpembayaran_penjualan.id', 'desc')
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'Laporan Pembayaran Penjualan',
                'data' => $lap
            ], 200);
        }
    }

    public function laporanBayarPembelian(Request $request){
        $noBeli = $request->input('noBeli');
        if($noBeli == null){
            $startDate = date("Y-m-d", strtotime($request->input('startDate')));
            $endDate = date("Y-m-d", strtotime($request->input('endDate')));
            
            $lap = DB::table('tblpembayaran_pembelian')
                    ->join('tblpembelian', 'tblpembayaran_pembelian.noBeli', 'tblpembelian.noNota')
                    ->join('tblsupplier', 'tblpembelian.r_supplier', 'tblsupplier.kdSupplier')
                    ->select(
                        'tblpembayaran_pembelian.*',
                        'tblpembelian.tglPembelian',
                        'tblsupplier.nmSupplier'
                    )
                    ->whereBetween('tblpembayaran_pembelian.tglBayar', [$startDate, $endDate])
                    ->orderBy('tblpembayaran_pembelian.id', 'desc')
                    ->get();
            return response()->json([
                'success' => true,
                'message' => 'Laporan Pembayaran Pembelian',
                'data' => $lap
            ], 200);
        }else{
            $lap = DB::table('tblpembayaran_pembelian')
                ->join('tblpembelian', 'tblpembayaran_pembelian.noBeli', 'tblpembelian.noNota')
                ->join('tblsupplier', 'tblpembelian.r_supplier', 'tblsupplier.kdSupplier')
                ->select(
                    'tblpembayaran_pembelian.*',
                    'tblpembelian.tglPembelian',
                    'tblsupplier.nmSupplier'
                )
                ->where('tblpembayaran_pembelian.noBeli', $noBeli)
                ->orderBy('tblpembayaran_pembelian.id', 'desc')
                ->get();

            return response()->json([
                'success' => true,
                'message' => 'Laporan Pembayaran Pembelian',
                'data' => $lap
            ], 200);
        }
    }

    public function pembelianBrg(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $lap = DB::table('tblpembelian')
                ->join('tblsupplier', 'tblpembelian.r_supplier', 'tblsupplier.kdSupplier')
                ->select('tblpembelian.*', 'tblsupplier.nmSupplier')
                ->whereBetween('tblpembelian.tglPembelian', [$startDate, $endDate])
                ->orderBy('tblpembelian.idPembelian', 'desc')
                ->get();
        return response()->json([
            'success' => true,
            'message' => 'Laporan pembelian Barang',
            'data' => $lap
        ], 200);
    }

    public function mostSaleBarang(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $limit = (int) $request->input('limit', 5);

        if ($limit <= 0) {
            $limit = 5;
        }

        $lap = DB::table('tblpenjualan_detail')
                ->join('tblpenjualan', 'tblpenjualan_detail.r_noPenjualan', '=', 'tblpenjualan.noPenjualan')
                ->join('tblbarang', 'tblpenjualan_detail.r_kdBarang', '=', 'tblbarang.kdBarang')
                ->whereBetween('tblpenjualan.tglPenjualan', [$startDate, $endDate])
                ->select(
                    'tblbarang.kdBarang',
                    'tblbarang.nmBarang',
                    DB::raw('COALESCE(SUM(tblpenjualan_detail.qty),0) as totalQty')
                )
                ->groupBy('tblbarang.kdBarang', 'tblbarang.nmBarang')
                ->orderBy('totalQty', 'desc')
                ->limit($limit)
                ->get();

        return response()->json([
            'success' => true,
            'message' => 'Most Sale Barang',
            'data' => $lap
        ], 200);
    }

    public function mostSaleJasa(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $limit = (int) $request->input('limit', 5);

        if ($limit <= 0) {
            $limit = 5;
        }

        $lap = DB::table('tblpenjualan_detail_jasa')
                ->join('tblpenjualan', 'tblpenjualan_detail_jasa.r_noPenjualan', '=', 'tblpenjualan.noPenjualan')
                ->join('tbljasa', 'tblpenjualan_detail_jasa.r_kdJasa', '=', 'tbljasa.kdJasa')
                ->whereBetween('tblpenjualan.tglPenjualan', [$startDate, $endDate])
                ->select(
                    'tbljasa.kdJasa',
                    'tbljasa.nmJasa',
                    DB::raw('COALESCE(SUM(tblpenjualan_detail_jasa.qtyJasa),0) as totalQty')
                )
                ->groupBy('tbljasa.kdJasa', 'tbljasa.nmJasa')
                ->orderBy('totalQty', 'desc')
                ->limit($limit)
                ->get();

        return response()->json([
            'success' => true,
            'message' => 'Most Sale Jasa',
            'data' => $lap
        ], 200);
    }
    

    public function laporanOpnum(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        // $lap = DB::table('tblopnum')
        //         // ->join('tblsupplier', 'tblpembelian.r_supplier', 'tblsupplier.kdSupplier')
        //         // ->select('tblpembelian.*', 'tblsupplier.nmSupplier')
        //         ->whereBetween('tblopnum.tglOpnum', [$startDate, $endDate])
        //         ->get();
        $lap = DB::select("SELECT a.*,b.tglOpnum FROM tblopnum_detail a LEFT JOIN tblopnum b ON a.r_opnum = b.kdOpnum WHERE tglOpnum between '$startDate' AND '$endDate';");
        return response()->json([
            'success' => true,
            'message' => 'Laporan opnum Barang',
            'data' => $lap
        ], 200);
    }

    public function listKupon(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        // $lap = DB::table('tblpenjualankupon')
        //         ->join('tblpelanggan', 'tblpenjualankupon.r_pelanggan', 'tblpelanggan.kdPelanggan')
        //         ->whereBetween('tblpenjualankupon.tglPenjualanKupon', [$startDate, $endDate])
        //         ->select('tblpenjualankupon.*', 'tblpelanggan.nmPelanggan')
        //         ->get();
        $lap = DB::select('SELECT noPenjualanKupon,tglPenjualanKupon,COALESCE(SUM(totalPenjualanKupon),0) total,created_at,updated_at FROM tblpenjualankupon GROUP BY noPenjualanKupon,tglPenjualanKupon,created_at,updated_at;');
        return response()->json([
            'success' => true,
            'message' => 'Laporan Penjualan Kupon',
            'data' => $lap
        ], 200);
    }

    public function aplusan(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $kd_trans = $request->input('kd_trans');
        // $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $lap = DB::table('tbltransaksi_nosel')
                ->join('tblbbm', 'tblbbm.id', 'tbltransaksi_nosel.r_bbm')
                ->join('tblnosel_detail', 'tblnosel_detail.id_nosel', 'tbltransaksi_nosel.r_nosel')
                ->select('tbltransaksi_nosel.*', 'tblbbm.nama_bbm','tblbbm.code_bbm', 'tblnosel_detail.nama_nosel')
                ->where('tbltransaksi_nosel.tgl_transaksi', [$startDate])
                ->where('tbltransaksi_nosel.kd_trans', $kd_trans)
                ->get();
        $kupon = DB::table('tblkupon')
                ->join('tblpelanggan', 'tblpelanggan.kdPelanggan', 'tblkupon.r_kdPelanggan' )
                ->select('tblkupon.*', 'tblpelanggan.nmPelanggan')
                ->where('tblkupon.tgl_trans', [$startDate])
                ->where('tblkupon.kd_trans', $kd_trans)
                ->get();
        $biaya = DB::table('tblbiaya')
                ->where('tglBiaya', [$startDate])
                ->where('tblbiaya.kd_trans', $kd_trans)
                ->get();
        $link = DB::table('tbllinkaja')
                ->where('tgl_link', [$startDate])
                ->where('tbllinkaja.kd_trans', $kd_trans)
                ->get();
        return response()->json([
            'success' => true,
            'message' => 'Laporan Aplusan BBM',
            'data' => [$lap, $kupon, $biaya, $link]
        ], 200);

    }

    public function daftarAplusan(Request $request){
        // $list = DB::select("SELECT a.id,a.kd_trans,a.tgl_transaksi,src.total,srckupon.total_kupon,srcbiaya.total_biaya,srclink.total_link 
        // FROM (SELECT COALESCE(sum(total),0) total FROM tbltransaksi_nosel GROUP BY kd_trans) src, 
        // (SELECT COALESCE(sum(total),0) total_kupon FROM tblkupon WHERE kd_trans='20230130A') srckupon,
        // (SELECT COALESCE(sum(jumlah),0) total_biaya FROM tblbiaya WHERE kd_trans='20230130A') srcbiaya,
        // (SELECT COALESCE(sum(jumlah_link),0) total_link FROM tbllinkaja WHERE kd_trans='20230130A') srclink, 
        // tbltransaksi_nosel a GROUP BY kd_trans;")->get()
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $list = DB::table('tblheader_aplusan')
                // ->whereBetween('tgl_trans', [$startDate, $endDate])
                ->whereDate('tgl_trans', '>=', $startDate)
                ->whereDate('tgl_trans', '<=', $endDate)
                ->orderBy("id_aplusan", "desc")
                ->get();
        
        return response()->json([
            'success' => true,
            'message' => 'List Aplusan Aplusan',
            'data' => $list
        ], 200);
    }

    public function daftarBiaya(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $list = DB::table('tblbiaya')
                ->whereBetween('tglBiaya', [$startDate, $endDate])
                ->orderBy("kd_trans", "desc")
                ->get();
        
        return response()->json([
            'success' => true,
            'message' => 'List Biaya',
            'data' => $list
        ], 200);
    }

    public function daftarGJ(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $list = DB::table('general_ledger')
                ->join('gl_detail', 'general_ledger.notrans', 'gl_detail.rgl')
                ->join('coa', 'gl_detail.acc_id', 'coa.acc_id')
                ->whereBetween('general_ledger.tgl', [$startDate, $endDate])
                ->where('general_ledger.jurnal', 'GJ')
                ->select(
                    'general_ledger.notrans',
                    'general_ledger.tgl',
                    'general_ledger.total_trans',
                    'general_ledger.memo',
                    'general_ledger.jurnal',
                    'gl_detail.rgl',
                    'gl_detail.acc_id',
                    'gl_detail.debet',
                    'gl_detail.kredit',
                    'gl_detail.trans_detail',
                    'gl_detail.void_flag',
                    'coa.name'
                )
                ->distinct()
                ->orderBy("general_ledger.notrans", "desc")
                ->get();
        
        return response()->json([
            'success' => true,
            'message' => 'List Jurnal Umum',
            'data' => $list
        ], 200);
    }
    

    public function daftarBbmDatang(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));

        $list = DB::table('tblterimabbm_detail')
                ->join('tblbbm', 'tblbbm.code_bbm', 'tblterimabbm_detail.kd_barang')
                ->whereBetween('tblterimabbm_detail.tgl_terima', [$startDate, $endDate])
                ->orderBy("tblterimabbm_detail.r_kdterima", "desc")
                ->get();
        
        return response()->json([
            'success' => true,
            'message' => 'List Terima',
            'data' => $list
        ], 200);
    }

    
    public function listTera(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));

        $list = DB::table('tbltransaksi_nosel')
                ->join('tblbbm', 'tblbbm.id', 'tbltransaksi_nosel.r_bbm')
                ->select(array(DB::Raw('tblbbm.code_bbm'),DB::Raw('tblbbm.nama_bbm'),DB::Raw('sum(tbltransaksi_nosel.tera) as tera'),DB::Raw('tbltransaksi_nosel.tgl_transaksi')))
                ->groupBy('tbltransaksi_nosel.tgl_transaksi', 'tblbbm.nama_bbm', 'tblbbm.code_bbm')
                ->whereBetween('tbltransaksi_nosel.tgl_transaksi', [$startDate, $endDate])
                ->orderBy("tbltransaksi_nosel.tgl_transaksi", "desc")
                ->get();
        
        return response()->json([
            'success' => true,
            'message' => 'List Terima',
            'data' => $list
        ], 200);
    }


    public function deletePobbm(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                $cek_data = DB::table('tblterimabbm')->where('no_po', $kd)->first();
                if(empty($cek_data)){
                    //====hapus jurnal
                    $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                    for($i=0;$i< count($gl);$i++){
                        DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                        DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                    };
                    //=====end jurnal
                    DB::table('tblpobbm')->where('no_po', $kd)->delete();
                    DB::table('tblpobbm_detail')->where('r_noPo', $kd)->delete();
                }else{
                    return response()->json([
                        'success' => false,
                        'message' => 'tidak bole di Hapus',
                        // 'data' => $detail
                    ], 200);
                }
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Po Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'po bbm Gagal Dihapus',
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

    public function deleteBbmDatang(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                //====hapus jurnal
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                //=====end jurnal


                $get_tr = DB::table('tblterimabbm_detail')->where('r_kdterima', $kd)->get();
                for($i=0;$i< count($get_tr);$i++){
                    $kodebarang = $get_tr[$i]->kd_barang ;
                    $kodepo = $get_tr[$i]->r_nopo;
                    // echo $kodepo.$kodebarang ;
                    $detterima = DB::table('tblterimabbm_detail')
                                ->where('r_nopo', '=' ,$kodepo)
                                ->where('kd_barang', '=' ,$kodebarang)
                                ->first();
                    $qtyterima = $detterima->qty_terima;
                    // echo $qtyterima ;
                    $detpo = DB::table('tblpobbm_detail')
                                ->where('r_noPo', '=' ,$kodepo)
                                ->where('kdBarang', '=' ,$kodebarang)
                                ->first();
                    $qtypo = $detpo->qty_recieve;
                    DB::table('tblpobbm_detail')
                    ->where('r_noPo', '=' ,$get_tr[$i]->r_nopo)
                    ->where('kdBarang', '=' ,$get_tr[$i]->kd_barang)
                    ->update([
                        'qty_recieve' => $qtypo - $qtyterima,
                        'total_terima'=> 0
                    ]);
                    // DB::table('tblpobbm_detail')
                    // ->where('r_noPo', '=' ,$get_tr[$i]->r_nopo)
                    // ->where('kdBarang', '=' ,$get_tr[$i]->kd_barang)
                    // ->update([
                    //     'qty_recieve' => $qtypo - $qtyterima
                    // ]);
                    $brg = DB::table('tblpersediaan')->where('kdPersediaan', $kodebarang)->first();
                    $oldStok = $brg->stokPersediaan;
                    DB::table('tblpersediaan')->where('kdPersediaan', $kodebarang)->update([
                        'stokPersediaan' => $oldStok - $qtyterima,
                        // 'lastPrice' => $detgr[$i]['hrgPokok'],
                    ]);

                };
                DB::table('tblterimabbm')->where('kd_terima', $kd)->delete();
                DB::table('tblterimabbm_detail')->where('r_kdterima', $kd)->delete();
                DB::table('tblstok_fifo')->where('keterangan', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'BBM Datang Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'BBM Datang Gagal Dihapus',
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

    

    public function detailPobbm(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                //====hapus jurnal
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                //=====end jurnal
                $header = DB::table('tblpobbm')->where('no_po', $kd)->get();
                $detail = DB::table('tblpobbm_detail')->where('r_noPo', $kd)->get();
                // DB::table('tblpobbm')->where('no_po', $kd)->delete();
                // DB::table('tblpobbm_detail')->where('r_noPo', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Detail PO',
                    'data' => [$header, $detail, $gl]
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Gagal Load Po',
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

    public function deleteBiaya(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                DB::table('tblbiaya')->where('kd_trans', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Biaya Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Biaya Gagal Dihapus',
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

    public function deleteJurnalUmum(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                $gl = DB::table('general_ledger')->where('notrans', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    // DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                DB::table('general_ledger')->where('notrans', $kd)->delete();
                // DB::table('tblbiaya')->where('kd_trans', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Biaya Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Biaya Gagal Dihapus',
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

    public function laporanPenyusutan(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $list = DB::table('tblinventaris_penyusutan_detail')
                ->join('tblinventaris', 'tblinventaris.kode_inventaris', 'tblinventaris_penyusutan_detail.rkode_inventaris')
                ->whereBetween('tblinventaris_penyusutan_detail.tgl_penyusutan', [$startDate, $endDate])
                ->orderBy("tblinventaris_penyusutan_detail.id_penyusutan_detail", "desc")
                ->get();
        
        return response()->json([
            'success' => true,
            'message' => 'List Penyusutan',
            'data' => $list
        ], 200);

    }

    public function listKartustok(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $kodebarang = $request->input('kdBarang');
        // $list = DB::table('tblkartu_stok')
        //         // ->join('tblinventaris', 'tblinventaris.kode_inventaris', 'tblinventaris_penyusutan_detail.rkode_inventaris')
        //         ->whereBetween('tgl', [$startDate, $endDate])
        //         ->where('kd_barang', $kodebarang)
        //         ->orderBy("tgl")
        //         ->get();
        $list = DB::select(" SELECT kd_barang,tgl, SUM(stok_awal) stok_awal,SUM(unit_beli) unit_beli,SUM(total_beli) total_beli,
        SUM(unit_jual) unit_jual, SUM(total_jual) total_jual, SUM(stok_akhir) stok_akhir
        FROM `tblkartu_stok` WHERE kd_barang='$kodebarang' AND tgl BETWEEN '$startDate' AND '$endDate' GROUP BY tgl,kd_barang ORDER BY tgl ASC ;");
        
        return response()->json([
            'success' => true,
            'message' => 'List Kartu Stok',
            'data' => $list
        ], 200);

    }

    

    public function deletePenyusutan(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                //====start jurnal
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                //======end jurnal

                $det_penyusutan = DB::table('tblinventaris_penyusutan_detail')->where('rsysno_penyusutan', $kd)->get();
                for($i=0;$i< count($det_penyusutan);$i++){
                    $old_nilai = DB::table('tblinventaris')->where('kode_inventaris', $det_penyusutan[$i]->rkode_inventaris)->first();

                    DB::table('tblinventaris')->where('kode_inventaris', $det_penyusutan[$i]->rkode_inventaris)->update([
                        'nilai_inventaris' => $old_nilai->nilai_inventaris + $det_penyusutan[$i]->jumlah_penyusutan,
                    ]);
                };

                DB::table('tblinventaris_penyusutan')->where('penyusutan_sysno', $kd)->delete();
                DB::table('tblinventaris_penyusutan_detail')->where('rsysno_penyusutan', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Penyustan Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Penyusutan Gagal Dihapus',
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

    public function deletePenjualan(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                //========jurnal
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                //========end jurnal
                DB::table('tblpenjualan')->where('noPenjualan', $kd)->delete();
                $dtl = DB::table('tblpenjualan_detail')->where('r_noPenjualan', $kd)->get();
                for($i=0;$i< count($dtl);$i++){
                    $oldStok = DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdBarang)->first();
                    if (!empty($oldStok)) {
                        $stokBaru = $oldStok->stokPersediaan + $dtl[$i]->qty;
                        DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdBarang)->update([
                            'stokPersediaan' => $stokBaru,
                        ]);
                        DB::table('tblbarang')->where('kdBarang', $dtl[$i]->r_kdBarang)->update([
                            'stkBarang' => $stokBaru,
                        ]);
                    }
                };
                $stokfifo = DB::table('tbltransaksi_stok')->where('r_trans', $kd)->get();
                for($i=0;$i< count($stokfifo);$i++){
                    $oldStok = DB::table('tblstok_fifo')->where('id', $stokfifo[$i]->r_fifo)->first();
                    if (!empty($oldStok)) {
                        DB::table('tblstok_fifo')->where('id', $stokfifo[$i]->r_fifo)->update([
                            'stok' => $oldStok->stok + $stokfifo[$i]->stok_trans,
                        ]);
                    }
                };
                DB::table('tblpenjualan_detail')->where('r_noPenjualan', $kd)->delete();
                DB::table('tblpenjualan_detail_jasa')->where('r_noPenjualan', $kd)->delete();
                DB::table('tblkartu_stok')->where('r_notrans', $kd)->delete();
                DB::table('tblpembayaran_penjualan')->where('noJual', $kd)->delete();
                DB::table('tbltransaksi_stok')->where('r_trans', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Penjualan Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Penjualan Gagal Dihapus',
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

    public function deleteOpnum(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                DB::table('tblopnum')->where('kdOpnum', $kd)->delete();
                $dtl = DB::table('tblopnum_detail')->where('r_opnum', $kd)->get();
                for($i=0;$i< count($dtl);$i++){
                    $oldStok = DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdPersediaan)->first();
                    DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdPersediaan)->update([
                        'stokPersediaan' => $oldStok->stokPersediaan + $dtl[$i]->selisihOpnum,
                    ]);
                };
                DB::table('tblopnum_detail')->where('r_opnum', $kd)->delete();

                //===========stok fifo
                $old_stok_trans = DB::table('tbltransaksi_stok')->where('r_trans', $kd)->get();
                for($i = 0;$i < count($old_stok_trans); $i++){
                    $stok = $old_stok_trans[$i]->stok_trans;
                    $id_fifo = $old_stok_trans[$i]->r_fifo;
                    $old_fifo = DB::table('tblstok_fifo')->where('id', $id_fifo)->first();
                    if(!empty($old_fifo)){
                        $stok_old = $old_fifo->stok;
                        DB::table('tblstok_fifo')->where('id', $id_fifo)
                        ->update([
                            'stok' => $stok_old + $stok,

                        ]);

                    }
                    // $old_fifo = DB::table('tblstok_fifo')->where('id', $id_fifo)->first();
                    // $stok_old = $old_fifo->stok;
                    // DB::table('tblstok_fifo')->where('id', $id_fifo)
                    // ->update([
                    //     'stok' => $stok_old + $stok,

                    // ]);

                }

                DB::table('tbltransaksi_stok')->where('r_trans', $kd)->delete();
                //===========end stok fifo


                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Penjualan Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Penjualan Gagal Dihapus',
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

    public function deletePenjualanKupon(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $kd = $request->input('id');
                //========jurnal
                $gl = DB::table('general_ledger')->where('order_no', $kd)->get();
                for($i=0;$i< count($gl);$i++){
                    DB::table('general_ledger')->where('notrans', $gl[$i]->notrans)->delete();
                    DB::table('gl_detail')->where('rgl', $gl[$i]->notrans)->delete();
                };
                //=========endjurnal
                DB::table('tblpenjualankupon')->where('noPenjualanKupon', $kd)->delete();
                // $dtl = DB::table('tblopnum_detail')->where('r_opnum', $kd)->get();
                // for($i=0;$i< count($dtl);$i++){
                //     $oldStok = DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdPersediaan)->first();
                //     DB::table('tblpersediaan')->where('kdPersediaan', $dtl[$i]->r_kdPersediaan)->update([
                //         'stokPersediaan' => $oldStok->stokPersediaan + $dtl[$i]->selisihOpnum,
                //     ]);
                // };
                // DB::table('tblopnum_detail')->where('r_opnum', $kd)->delete();
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Penjualan Berhasil di Hapus',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Penjualan Gagal Dihapus',
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

    public function bukubesar(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate   = date("Y-m-d", strtotime($request->input('endDate')));
        $accountId = trim((string) $request->input('acc_id', ''));
        $hasAccount = $accountId !== '' && $accountId !== '-';

        // Cari saldo kunci bulan terakhir sebelum startDate
        $prevMonth  = (int) date('m', strtotime('-1 month', strtotime($startDate)));
        $prevYear   = (int) date('Y', strtotime('-1 month', strtotime($startDate)));
        $lockedRow  = DB::table('tbl_closing_periode')
            ->where('tahun', $prevYear)
            ->where('bulan', $prevMonth)
            ->where('is_locked', true)
            ->first();

        if ($lockedRow) {
            // Pakai saldo kunci + mutasi dari awal bulan startDate sampai sehari sebelum startDate
            $startOfStartMonth = date('Y-m-01', strtotime($startDate));
            $dayBefore         = date('Y-m-d', strtotime($startDate . ' -1 day'));
            $extraMutasi = (float) DB::table('general_ledger')
                ->join('gl_detail', 'general_ledger.notrans', '=', 'gl_detail.rgl')
                ->whereBetween('general_ledger.tgl', [$startOfStartMonth, $dayBefore])
                ->sum(DB::raw('coalesce(gl_detail.debet,0) - coalesce(gl_detail.kredit,0)'));
            $openingBalance = (float) $lockedRow->saldo_penutup + $extraMutasi;
        } else {
            // Tidak ada saldo kunci — hitung dari seluruh riwayat
            $openingBalance = (float) DB::table('general_ledger')
                ->join('gl_detail', 'general_ledger.notrans', '=', 'gl_detail.rgl')
                ->whereDate('general_ledger.tgl', '<', $startDate)
                ->sum(DB::raw('coalesce(gl_detail.debet,0) - coalesce(gl_detail.kredit,0)'));
        }

        // Subquery deduplicasi COA agar JOIN tidak menghasilkan baris ganda
        $coaSub = DB::table('coa')
            ->select('acc_id', DB::raw('MIN(name) as name'))
            ->groupBy('acc_id');

        $openingByAccount = DB::table('gl_detail as gd')
            ->join('general_ledger as gl', 'gl.notrans', '=', 'gd.rgl')
            ->whereDate('gl.tgl', '<', $startDate)
            ->when($hasAccount, function ($query) use ($accountId) {
                $query->where('gd.acc_id', $accountId);
            })
            ->groupBy('gd.acc_id')
            ->select('gd.acc_id', DB::raw('SUM(COALESCE(gd.debet, 0) - COALESCE(gd.kredit, 0)) as opening_balance'))
            ->pluck('opening_balance', 'acc_id')
            ->mapWithKeys(function ($balance, $accId) {
                return [(string) $accId => (float) $balance];
            })
            ->all();

        $list = DB::table('general_ledger')
                ->join('gl_detail', 'general_ledger.notrans', 'gl_detail.rgl')
                ->joinSub($coaSub, 'coa', 'gl_detail.acc_id', '=', 'coa.acc_id')
                ->whereBetween('general_ledger.tgl', [$startDate, $endDate])
                ->when($hasAccount, function ($query) use ($accountId) {
                    $query->where('gl_detail.acc_id', $accountId);
                })
                ->select('general_ledger.*', 'gl_detail.*', 'coa.name')
                ->orderBy('general_ledger.tgl', 'asc')
                ->orderBy('general_ledger.notrans', 'asc')
                ->orderBy('gl_detail.id', 'asc')
                ->get();

        $runningBalanceByAccount = $openingByAccount;

        foreach ($list as $row) {
            $accId = (string) ($row->acc_id ?? '');
            $delta = (float) ($row->debet ?? 0) - (float) ($row->kredit ?? 0);
            $runningBalanceByAccount[$accId] = ($runningBalanceByAccount[$accId] ?? 0.0) + $delta;

            $row->mutasi = $delta;
            $row->saldo = $runningBalanceByAccount[$accId];
        }

        $closingBalance = $hasAccount
            ? (float) ($runningBalanceByAccount[$accountId] ?? 0.0)
            : array_sum($runningBalanceByAccount);

        return response()->json([
            'success' => true,
            'message' => 'buku besar',
            'opening_balance' => $hasAccount
                ? (float) ($openingByAccount[$accountId] ?? 0.0)
                : array_sum($openingByAccount),
            'closing_balance' => $closingBalance,
            'data' => $list
        ], 200);

    }

    public function cashFlow(Request $request)
    {
        $startDate = date('Y-m-d', strtotime($request->input('startDate')));
        $endDate = date('Y-m-d', strtotime($request->input('endDate')));

        $cashAccounts = DB::table('coa')
            ->select('acc_id', 'name')
            ->where(function ($query) {
                $query->where('acc_id', 'like', '11%')
                    ->orWhereRaw('LOWER(name) like ?', ['%kas%'])
                    ->orWhereRaw('LOWER(name) like ?', ['%cash%'])
                    ->orWhereRaw('LOWER(name) like ?', ['%bank%'])
                    ->orWhereRaw('LOWER(name) like ?', ['%linkaja%']);
            })
            ->orderBy('acc_id', 'asc')
            ->get();

        if ($cashAccounts->isEmpty()) {
            $cashAccounts = DB::table('coa')
                ->select('acc_id', 'name')
                ->where('acc_id', 'like', '1%')
                ->orderBy('acc_id', 'asc')
                ->get();
        }

        $cashAccIds = $cashAccounts->pluck('acc_id')->values()->all();
        $cashAccountNameMap = $cashAccounts->pluck('name', 'acc_id')->all();

        if (empty($cashAccIds)) {
            return response()->json([
                'success' => true,
                'message' => 'cash flow',
                'summary' => [
                    'opening_balance' => 0,
                    'cash_in' => 0,
                    'cash_out' => 0,
                    'net_cash_flow' => 0,
                    'closing_balance' => 0,
                ],
                'sections' => [
                    'operating' => ['in' => 0, 'out' => 0, 'net' => 0],
                    'investing' => ['in' => 0, 'out' => 0, 'net' => 0],
                    'financing' => ['in' => 0, 'out' => 0, 'net' => 0],
                ],
                'data' => [],
            ], 200);
        }

        $openingBalance = (float) DB::table('general_ledger as gl')
            ->join('gl_detail as gd', 'gl.notrans', '=', 'gd.rgl')
            ->whereIn('gd.acc_id', $cashAccIds)
            ->whereDate('gl.tgl', '<', $startDate)
            ->sum(DB::raw('COALESCE(gd.debet,0) - COALESCE(gd.kredit,0)'));

        $cashRows = DB::table('general_ledger as gl')
            ->join('gl_detail as gd', 'gl.notrans', '=', 'gd.rgl')
            ->whereIn('gd.acc_id', $cashAccIds)
            ->whereBetween('gl.tgl', [$startDate, $endDate])
            ->select(
                'gl.notrans',
                'gl.tgl',
                'gl.memo',
                'gd.acc_id as cash_acc_id',
                DB::raw('COALESCE(gd.debet,0) as debet'),
                DB::raw('COALESCE(gd.kredit,0) as kredit')
            )
            ->orderBy('gl.tgl', 'asc')
            ->orderBy('gl.notrans', 'asc')
            ->orderBy('gd.id', 'asc')
            ->get();

        $counterRows = DB::table('gl_detail as gd')
            ->leftJoin('coa as c', 'gd.acc_id', '=', 'c.acc_id')
            ->whereIn('gd.rgl', $cashRows->pluck('notrans')->unique()->values()->all())
            ->whereNotIn('gd.acc_id', $cashAccIds)
            ->select(
                'gd.rgl',
                'gd.acc_id',
                DB::raw('MIN(c.name) as name'),
                DB::raw('SUM(COALESCE(gd.debet,0) - COALESCE(gd.kredit,0)) as amount')
            )
            ->groupBy('gd.rgl', 'gd.acc_id')
            ->get()
            ->groupBy('rgl')
            ->map(function ($group) {
                $sorted = collect($group)->sortByDesc(function ($row) {
                    return abs((float) $row->amount);
                })->values();

                return $sorted->first();
            });

        $transactionLines = DB::table('gl_detail as gd')
            ->whereIn('gd.rgl', $cashRows->pluck('notrans')->unique()->values()->all())
            ->select('gd.rgl', 'gd.acc_id')
            ->get()
            ->groupBy('rgl');

        $classifyByCounterAcc = function (?string $accId): string {
            if ($accId === null || $accId === '') {
                return 'operating';
            }

            $prefix = substr($accId, 0, 1);

            if ($prefix === '1') {
                return 'investing';
            }
            if ($prefix === '2' || $prefix === '3') {
                return 'financing';
            }

            return 'operating';
        };

        $rows = [];
        $cashIn = 0.0;
        $cashOut = 0.0;
        $sections = [
            'operating' => ['in' => 0.0, 'out' => 0.0, 'net' => 0.0],
            'investing' => ['in' => 0.0, 'out' => 0.0, 'net' => 0.0],
            'financing' => ['in' => 0.0, 'out' => 0.0, 'net' => 0.0],
        ];

        foreach ($cashRows as $cashRow) {
            $amount = (float) $cashRow->debet - (float) $cashRow->kredit;
            if ($amount == 0.0) {
                continue;
            }

            $counter = $counterRows->get($cashRow->notrans);
            $counterAccId = $counter->acc_id ?? null;
            $counterName = $counter->name ?? null;
            $counterStatus = 'normal';
            $counterNote = '';

            if ($counterAccId === null || $counterAccId === '') {
                $lines = $transactionLines->get($cashRow->notrans, collect());
                $totalLines = $lines->count();
                $cashLines = $lines->filter(function ($line) use ($cashAccIds) {
                    return in_array($line->acc_id, $cashAccIds, true);
                })->count();

                if ($totalLines > 0 && $totalLines === $cashLines) {
                    $counterStatus = 'cash_transfer';
                    $counterNote = 'Transfer antar akun kas';
                } else {
                    $counterStatus = 'missing_counter';
                    $counterNote = 'Akun lawan tidak ditemukan, cek jurnal';
                }
            }

            $activity = $classifyByCounterAcc($counterAccId);

            if ($amount > 0) {
                $cashIn += $amount;
                $sections[$activity]['in'] += $amount;
                $sections[$activity]['net'] += $amount;
            } else {
                $out = abs($amount);
                $cashOut += $out;
                $sections[$activity]['out'] += $out;
                $sections[$activity]['net'] -= $out;
            }

            $rows[] = [
                'tgl' => $cashRow->tgl,
                'notrans' => $cashRow->notrans,
                'memo' => $cashRow->memo,
                'cash_acc_id' => $cashRow->cash_acc_id,
                'cash_acc_name' => $cashAccountNameMap[$cashRow->cash_acc_id] ?? '-',
                'counter_acc_id' => $counterAccId,
                'counter_name' => $counterName,
                'counter_status' => $counterStatus,
                'counter_note' => $counterNote,
                'activity' => $activity,
                'cash_in' => $amount > 0 ? $amount : 0,
                'cash_out' => $amount < 0 ? abs($amount) : 0,
                'net_amount' => $amount,
            ];
        }

        $netCashFlow = $cashIn - $cashOut;
        $closingBalance = $openingBalance + $netCashFlow;

        return response()->json([
            'success' => true,
            'message' => 'cash flow',
            'summary' => [
                'opening_balance' => $openingBalance,
                'cash_in' => $cashIn,
                'cash_out' => $cashOut,
                'net_cash_flow' => $netCashFlow,
                'closing_balance' => $closingBalance,
            ],
            'sections' => $sections,
            'data' => $rows,
        ], 200);
    }

    public function ledger(Request $request){
        $startDate = date("Y-m-d", strtotime($request->input('startDate')));
        $endDate = date("Y-m-d", strtotime($request->input('endDate')));
        $acc = $request->input('acc_id');

        if (empty($acc) || $acc === '-') {
            return response()->json([
                'success' => true,
                'message' => 'ledger',
                'opening_balance' => 0,
                'closing_balance' => 0,
                'data' => []
            ], 200);
        }

        // Saldo normal akun: aset/biaya bertambah di debet, kewajiban/ekuitas/pendapatan di kredit.
        $saldoSign = in_array(substr((string) $acc, 0, 1), ['1', '5', '6'], true) ? 1 : -1;
        $saldoDelta = "({$saldoSign} * (coalesce(b.debet,0) - coalesce(b.kredit,0)))";

        $openingBalance = (float) DB::table('gl_detail as b')
            ->join('general_ledger as a', 'a.notrans', '=', 'b.rgl')
            ->where('b.acc_id', $acc)
            ->where('a.rlocation', '01020')
            ->whereDate('a.tgl', '<', $startDate)
            ->sum(DB::raw($saldoDelta));

        DB::statement("SET @saldo := {$openingBalance}");

        $list = DB::table('general_ledger as a')
            ->leftJoin('gl_detail as b', 'a.notrans', '=', 'b.rgl')
            ->leftJoin('rekening_anggaran as c', 'a.r_anggaran', '=', 'c.id_rekening')
            ->where('b.acc_id', $acc)
            ->where('a.rlocation', '01020')
            ->whereBetween('a.tgl', [$startDate, $endDate])
            ->select(
                DB::raw('a.notrans as NoTransaksi'),
                DB::raw('a.tgl as Tanggal'),
                DB::raw('a.memo as Memo'),
                DB::raw('coalesce(b.debet,0) as Debet'),
                DB::raw('coalesce(b.kredit,0) as Kredit'),
                DB::raw("(@saldo := @saldo + {$saldoDelta}) as Saldo"),
                DB::raw('a.r_anggaran as KodeAnggaran'),
                DB::raw("case when a.r_anggaran = 0 then 'Default Anggaran' else c.nama_rekening end as Nama_rekening")
            )
            ->orderBy('a.tgl', 'asc')
            ->orderBy('a.notrans', 'asc')
            ->orderBy('b.id', 'asc')
            ->get();

        $closingBalance = $list->count() ? (float) $list->last()->Saldo : $openingBalance;
        
        return response()->json([
            'success' => true,
            'message' => 'ledger',
            'opening_balance' => $openingBalance,
            'closing_balance' => $closingBalance,
            'data' => $list
        ], 200);

    }

    // Hitung saldo penutup untuk bulan & tahun tertentu (tanpa menyimpan)
    private function hitungSaldoPenutup(int $tahun, int $bulan): float
    {
        $endOfMonth = date('Y-m-d', mktime(0, 0, 0, $bulan + 1, 0, $tahun));

        // Cari saldo kunci bulan sebelumnya
        $prevLock = $this->cariSaldoKunci($tahun, $bulan - 1 < 1 ? 12 : $bulan - 1, $bulan - 1 < 1 ? $tahun - 1 : $tahun);
        $base     = $prevLock !== null ? $prevLock : 0.0;

        // Hitung dari bulan itu (atau dari awal jika tidak ada kunci)
        $startOfMonth = $prevLock !== null
            ? date('Y-m-d', mktime(0, 0, 0, $bulan, 1, $tahun))
            : '1900-01-01';

        $mutasi = (float) DB::table('general_ledger')
            ->join('gl_detail', 'general_ledger.notrans', '=', 'gl_detail.rgl')
            ->whereBetween('general_ledger.tgl', [$startOfMonth, $endOfMonth])
            ->sum(DB::raw('coalesce(gl_detail.debet,0) - coalesce(gl_detail.kredit,0)'));

        return $base + $mutasi;
    }

    // Cari saldo kunci yang sudah dikunci untuk bulan/tahun tertentu
    private function cariSaldoKunci(int $bulan, int $tahunOverride = null, int $tahunFallback = null): ?float
    {
        // Signature diperlukan fleksibel; versi publik menerima (tahun, bulan)
        return null; // akan di-override oleh closePeriode
    }

    public function getPeriodeList()
    {
        $list = DB::table('tbl_closing_periode')
            ->orderBy('tahun', 'desc')
            ->orderBy('bulan', 'desc')
            ->get();

        return response()->json(['success' => true, 'data' => $list], 200);
    }

    public function closePeriode(Request $request)
    {
        $tahun = (int) $request->input('tahun');
        $bulan = (int) $request->input('bulan');
        $user  = auth()->user()->name ?? 'system';

        // Pastikan tidak mengunci ulang periode yang sudah terkunci
        $existing = DB::table('tbl_closing_periode')
            ->where('tahun', $tahun)->where('bulan', $bulan)->first();

        if ($existing && $existing->is_locked) {
            return response()->json(['success' => false, 'message' => 'Periode sudah dikunci'], 422);
        }

        // Cari saldo kunci bulan sebelumnya sebagai base
        $prevBulan = $bulan - 1 < 1 ? 12 : $bulan - 1;
        $prevTahun = $bulan - 1 < 1 ? $tahun - 1 : $tahun;
        $prevLock  = DB::table('tbl_closing_periode')
            ->where('tahun', $prevTahun)->where('bulan', $prevBulan)
            ->where('is_locked', true)->first();

        $base = $prevLock ? (float) $prevLock->saldo_penutup : (float) DB::table('general_ledger')
            ->join('gl_detail', 'general_ledger.notrans', '=', 'gl_detail.rgl')
            ->whereDate('general_ledger.tgl', '<', date('Y-m-01', mktime(0,0,0,$bulan,1,$tahun)))
            ->sum(DB::raw('coalesce(gl_detail.debet,0) - coalesce(gl_detail.kredit,0)'));

        $startOfMonth = date('Y-m-01', mktime(0, 0, 0, $bulan, 1, $tahun));
        $endOfMonth   = date('Y-m-t',  mktime(0, 0, 0, $bulan, 1, $tahun));

        $mutasi = (float) DB::table('general_ledger')
            ->join('gl_detail', 'general_ledger.notrans', '=', 'gl_detail.rgl')
            ->whereBetween('general_ledger.tgl', [$startOfMonth, $endOfMonth])
            ->sum(DB::raw('coalesce(gl_detail.debet,0) - coalesce(gl_detail.kredit,0)'));

        $saldoPenutup = $base + $mutasi;

        DB::table('tbl_closing_periode')->upsert(
            [
                'tahun'         => $tahun,
                'bulan'         => $bulan,
                'saldo_penutup' => $saldoPenutup,
                'is_locked'     => true,
                'locked_at'     => now(),
                'locked_by'     => $user,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            ['tahun', 'bulan'],
            ['saldo_penutup', 'is_locked', 'locked_at', 'locked_by', 'updated_at']
        );

        return response()->json([
            'success'       => true,
            'message'       => "Periode {$bulan}/{$tahun} berhasil dikunci",
            'saldo_penutup' => $saldoPenutup,
        ], 200);
    }

    public function unlockPeriode(Request $request)
    {
        $tahun = (int) $request->input('tahun');
        $bulan = (int) $request->input('bulan');

        DB::table('tbl_closing_periode')
            ->where('tahun', $tahun)->where('bulan', $bulan)
            ->update(['is_locked' => false, 'updated_at' => now()]);

        return response()->json(['success' => true, 'message' => "Periode {$bulan}/{$tahun} dibuka kembali"], 200);
    }
}

