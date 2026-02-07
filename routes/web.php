<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

Route::get('/', [MainController::class, 'top'])->name('top');
Route::get('/learn', [MainController::class, 'learn'])->name('learn');

Route::get('/like', [MainController::class, 'like'])->name('like');
Route::get('/material', [MainController::class, 'material'])->name('material');

Route::post('/api/top', [ApiController::class, 'storeSample'])->name('api.top');
Route::post('/api/liked', [ApiController::class, 'getLikes'])->name('api.liked');