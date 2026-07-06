<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class jurnalController extends Controller
{
    //
    public function simpanJurnal(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){ 
                $noNota = $request[0]['noNota'];
                $tglNota = $request[0]['tglNota'];
                $t = $request[0]['total'];
                $memo =  $request[1][0]['name'];;
                $jurnal = 'GJ';

                $det_link = $request[1];
                //===========jurnal Umum urutannya harus seperti ini
                insert_gl($noNota,$tglNota,$t,$memo,$jurnal);
                for ($i = 0; $i < count($det_link); $i++) {
                    // $accid = $detpro[$i]['accid']; // acc id yg di debet
                    $acc = $det_link[$i]['acc']; // $request[0]['subtotal']; // acc id yg di kredit
                    $jml_d = $det_link[$i]['debet']; // $det_biaya[$i]['acc'];
                    $jml_k = $det_link[$i]['kredit'];;
                    $memo =  $det_link[$i]['name'];;
                    $jurnal = 'GJ';
                    // $acc_laba = '32300';
                    // $acc_id_k = '11110';
                    $rgl = DB::table('general_ledger')->get()->last()->notrans;
                    $ac = [ 
                        [
                            'rgl' => $rgl,
                            'acc_id' => $acc,
                            'debet' => $jml_d,
                            'kredit' => $jml_k,
                            'trans_detail' => 'Jurnal-Umum',
                            'void_flag' => 0,
                        ],
                        // [
                        //     'rgl' => $rgl,
                        //     'acc_id' => $acc,
                        //     'debet' => $jml_d,
                        //     'kredit' => $jml_k,
                        //     'trans_detail' => 'Jurnal-Umum',
                        //     'void_flag' => 0,
                        // ],
                        // [
                        //     'rgl' => $rgl,
                        //     'acc_id' => $acc_laba,
                        //     'debet' => $jml_d,
                        //     'kredit' => 0,
                        //     'trans_detail' => 'Jurnal-Umum',
                        //     'void_flag' => 0,
                        // ]
                    ];
                    
                    insert_gl_detail($ac);
                }
                // insert_gl_detail($ac);
                //===========end jurnal

                
            DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Jurnal Berhasil di insert!',
                    // 'data' => $detail
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Jurnal Gagal Diupdate!',
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

    public function updateJurnal(Request $request){
        try{
            $exception = DB::transaction(function() use ($request){
                $targetNoTrans = $request->input('targetNoTrans');
                $header = $request->input('header', []);
                $detail = $request->input('detail', []);

                if (empty($targetNoTrans) || empty($detail)) {
                    throw new \Exception('Data update jurnal tidak lengkap');
                }

                $existing = DB::table('general_ledger')
                    ->where('notrans', $targetNoTrans)
                    ->where('jurnal', 'GJ')
                    ->first();

                if (empty($existing)) {
                    throw new \Exception('Transaksi jurnal tidak ditemukan');
                }

                $tglNota = $header['tglNota'] ?? $existing->tgl;
                $total = $header['total'] ?? $existing->total_trans;
                $memo = $header['notes'] ?? $existing->memo;

                DB::table('general_ledger')
                    ->where('notrans', $targetNoTrans)
                    ->update([
                        'tgl' => $tglNota,
                        'total_trans' => $total,
                        'memo' => $memo,
                        'us_update' => 'user',
                    ]);

                DB::table('gl_detail')->where('rgl', $targetNoTrans)->delete();

                $detailRows = [];
                for ($i = 0; $i < count($detail); $i++) {
                    $detailRows[] = [
                        'rgl' => $targetNoTrans,
                        'acc_id' => $detail[$i]['acc'],
                        'debet' => $detail[$i]['debet'],
                        'kredit' => $detail[$i]['kredit'],
                        'trans_detail' => 'Jurnal-Umum',
                        'void_flag' => 0,
                    ];
                }

                insert_gl_detail($detailRows);
                DB::commit();
            });

            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Jurnal Berhasil diupdate!',
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Jurnal Gagal Diupdate!',
                ], 500);
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json([
             'success' => false,
             'message' => 'exception'.$e,
         ], 400);
        }
    }
}
