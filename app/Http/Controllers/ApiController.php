<?php

namespace App\Http\Controllers;

use App\Http\Requests\ValiSampleRequest;
use App\Models\TodoList;
use Illuminate\Http\Request;


class ApiController extends Controller
{
    public function storeSample(ValiSampleRequest $request)
    {
        $validated = $request->validated();

        // サンプルとして、バリデーション済みデータをそのまま返す
        return response()->json([
            'message' => 'Sample data stored successfully',
            'data' => $validated,
        ], 201);
    }
}   
