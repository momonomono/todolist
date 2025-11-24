<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TodoList extends Model
{
    protected $table = 'todo_lists';
    
    protected $fillable = [
        'task',
        'is_completed'
    ];

    public $timestamps = true;
}
