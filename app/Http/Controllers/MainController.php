<?php

namespace App\Http\Controllers;

use App\Models\Like;
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

    public function like()
    {
        $likes = Like::all();
        return view('like', compact('likes'));
    }

    public function postLike(Request $request)
    {
        
        return view('like');
    }

    public function material()
    {
        return view('material');
    }

    public function showProduct()
    {
        
        return view('product');
    }
}
