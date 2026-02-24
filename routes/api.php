<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;

 Route::post('/top', [ApiController::class, 'storeTop'])->name('api.top');
