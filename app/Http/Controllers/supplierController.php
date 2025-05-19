<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Supplier;
use Illuminate\Support\Facades\DB;

class supplierController extends Controller
{
    //
    public function index(){
        $supplier = Supplier::get();
        //$posts = Barang::latest()->get();
        return response([
            'success' => true,
            'message' => 'List Semua supplier',
            'data' => $supplier
        ], 200);

    }
    public function store(Request $request)
    {
        try{
            $exception = DB::transaction(function() use ($request){ 
                
                // $image = $request->get('gambar');
                // $name = $request->input('path');
                // $path = 'image/foto/';
                // if (!file_exists($path)) {
                //     File::makeDirectory($path, 0755, true);
                // }
                // Image::make($request->get('gambar'))->save($path.$name);

                Supplier::updateOrCreate(
                    ['kdSupplier' => $request->input('kdSupplier')],
                    [
                        'nmSupplier'     => $request->input('nmSupplier'),
                        'almtSupplier'   => $request->input('almtSupplier'),
                        'tlpSupplier'   => $request->input('tlpSupplier'),
                        'picSupplier'   => $request->input('picSupplier'),
                    ]
                );
                DB::commit();
            });
            if(is_null($exception)) {
                return response()->json([
                    'success' => true,
                    'message' => 'Supplier Berhasil Disimpan!',
                ], 200);
            } else {
                DB::rollback();
                return response()->json([
                    'success' => false,
                    'message' => 'Supplier Gagal Disimpan!',
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
    public function destroy($id)
    {
        $post = Supplier::findOrFail($id);
        $post->delete();

        if ($post) {
            return response()->json([
                'success' => true,
                'message' => 'Post Berhasil Dihapus!',
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Post Gagal Dihapus!',
            ], 500);
        }
    }
}
