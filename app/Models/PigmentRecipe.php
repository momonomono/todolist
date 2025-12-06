<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PigmentRecipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'munsell_value',
        'pigment1_name', 'pigment1_gram',
        'pigment2_name', 'pigment2_gram',
        'pigment3_name', 'pigment3_gram',
        'pigment4_name', 'pigment4_gram',
        'pigment5_name', 'pigment5_gram',
        'pigment6_name', 'pigment6_gram',
    ];

    protected $casts = [
        'pigment1_gram' => 'decimal:2',
        'pigment2_gram' => 'decimal:2',
        'pigment3_gram' => 'decimal:2',
        'pigment4_gram' => 'decimal:2',
        'pigment5_gram' => 'decimal:2',
        'pigment6_gram' => 'decimal:2',
    ];
}
