<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    use HasFactory;
    protected $table = 'tblpenjualan';
    protected $primaryKey = 'noPenjualan';
    protected $fillable = [
        'noPenjualan', 'penerimaNota'
    ];
}
