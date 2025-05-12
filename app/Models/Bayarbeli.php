<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bayarbeli extends Model
{
    use HasFactory;
    protected $table = 'tblpembayaran_pembelian';
    protected $fillable = [
        'noBayar', 'tglBayar','jmlBayar', 'noBeli', 'metodeBayar', 'created_at', 'updated_at'
    ];
}
