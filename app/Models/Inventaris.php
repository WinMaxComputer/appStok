<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventaris extends Model
{
    use HasFactory;
    protected $table = 'tblinventaris';
    protected $fillable = [
        'kode_inventaris', 'nama_inventaris', 'tahun_pembuatan', 'tahun_perakitan',
        'group_inventaris', 'accid_akum', 'warna', 'merek', 'umur_ekonomis',
        'nilai_inventaris', 'qty_inventaris', 'kode_pengadaan',
        'is_disewakan', 'harga_sewa', 'acc_pendapatan_sewa',
    ];
}
