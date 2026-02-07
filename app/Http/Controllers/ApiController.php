<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValiSampleRequest;
use App\Models\Like;
use App\Models\Sample;
use App\Models\TodoList;
use Illuminate\Http\Request;


class ApiController extends Controller
{
    public function storeSample(ValiSampleRequest $request)
    {
        $validated = $request->validated();

        Sample::create($validated);

        // サンプルとして、バリデーション済みデータをそのまま返す
        return response()->json([
            'message' => 'Sample data stored successfully',
            'data' => $validated,
        ], 201);
    }

    public function getLikes()
    {
        $likes = Like::all();
        return response()->json([
            'likes' => $likes
        ], 201);
    }
}   
