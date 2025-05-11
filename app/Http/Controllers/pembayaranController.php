<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Bayarjual;
use App\Models\Penjualan;

class pembayaranController extends Controller
{
    //
    public function bayarPenjualan(Request $request)
    {
       try{
            $exception = DB::transaction(function() use ($request){ 
                
                $noNota = $request->input('noJual');
                $nobayar = $request->input('noBayar');
                $tglbayar = $request->input('tglBayar');
                $jmlbayar = $request->input('jmlBayar');
                $metodebayar =  $request->input('metodeBayar');
                $sisapiutang = $request->input('sisaPiutang');
                $nsisa = (int)$sisapiutang - (int)$jmlbayar ;

                Penjualan::where('noPenjualan', $noNota)->update([
                    'piutangPenjualan' => $nsisa,
                    'updated_at' => \Carbon\Carbon::now()->toDateTimeString()
                ]);
               
                $bayar = new Bayarjual();
                $bayar->noBayar = $nobayar;
                $bayar->noJual = $noNota;
                $bayar->tglBayar = $tglbayar;
                $bayar->jmlBayar = $jmlbayar;
                $bayar->metodeBayar = $metodebayar;
                $bayar->created_at = \Carbon\Carbon::now()->toDateTimeString();
                $bayar->updated_at = \Carbon\Carbon::now()->toDateTimeString();
                $bayar->save();

                //===========jurnal
                if($metodebayar == 'cash'){
                    $accid = '11110'; // $detpro[$i]['accid']; // acc id yg di debet
                }else{
                    $accid = '11210'; // $detpro[$i]['accid']; // acc id yg di debet
                }
                $accid_k = '11501'; // $detpro[$i]['accid']; // acc id yg di debet
                // $acc_id_d = '11110'; // $request[0]['subtotal']; // acc id yg di kredit
                $memo = 'Pembayaran Penjualan No. '.$noNota;
                $jurnal = 'JK';
                $t = $jmlbayar;
                insert_gl($noNota,$tglbayar,$t,$memo,$jurnal);
                $rgl = DB::table('general_ledger')->get()->last()->notrans;
                $ac = [
                    [
                        'rgl' => $rgl,
                        'acc_id' => $accid_k,
                        'debet' => 0,
                        'kredit' => $t,
                        'trans_detail' => 'Pembayaran Penjualan No. '.$noNota,
                        'void_flag' => 0,
                    ],
                    [
                        'rgl' => $rgl,
                        'acc_id' => $accid,
                        'debet' => $t,
                        'kredit' => 0,
                        'trans_detail' => 'Pembayaran Penjualan No. '.$noNota,
                        'void_flag' => 0,
                    ],
                    
                ];
                insert_gl_detail($ac);
                    //===========end jurnal
                
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
}
