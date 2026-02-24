<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValiSampleRequest;
use App\Models\Like;
use App\Models\Sample;
use App\Models\TodoList;
use Illuminate\Http\Request;


class ApiController extends Controller
{
    public function storeTop(Request $request)
    {
        $sample = new Sample();

        return response()->json($request->all());
    }
}   
