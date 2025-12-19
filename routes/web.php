<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

Route::get('/', [MainController::class, 'top'])->name('top');
Route::get('/learn', [MainController::class, 'learn'])->name('learn');


Route::post('/api/top', [ApiController::class, 'storeSample'])->name('api.top');