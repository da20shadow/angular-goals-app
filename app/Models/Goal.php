<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
    use HasFactory;

    protected  $fillable = [
        'title',
        'description',
        'start_date',
        'due_date',
        'category',
        'completed',
        'user_id'
    ];

}
