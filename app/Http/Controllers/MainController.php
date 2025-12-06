<?php

namespace App\Http\Controllers;

use App\Models\TodoList;
use Illuminate\Http\Request;
use App\Models\PigmentRecipe;
use ValiPigmentRecipesRequest;

class MainController extends Controller
{
    public function top()
    {
        $todos = TodoList::all();
        return view('top', compact('todos'));
    }

    public function learn()
    {
        return view('learn');
    }

    public function postLearn(ValiPigmentRecipesRequet $request)
    {

        return view('learn');
    }
}
