<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function top()
    {
        $todos = TodoList::all();
        return view('top', compact('todos'));
    }
}
