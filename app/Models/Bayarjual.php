<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bayarjual extends Model
{
    use HasFactory;
    protected $table = 'tblpembayaran_penjualan';
    protected $fillable = [
        'noBayar', 'tglBayar','jmlBayar', 'noJual', 'metodeBayar', 'created_at', 'updated_at'
    ];
}
