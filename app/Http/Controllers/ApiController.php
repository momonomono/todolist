<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;


class ApiController extends Controller
{
    public function getTodolist()
    {
        $todos = TodoList::all();
        return response()
            ->json(['todos' => $todos]);
    }
    
    public function createTodolist(Request $request)
    {
        $todos = TodoList::create([
            'task' => $request->input('task'),
        ]);
        return response()
            ->json(['todos' => $todos]);
    }
}
