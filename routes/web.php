<?php

use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

Route::get('/', [MainController::class, 'top'])->name('top');

Route::get('/api/todolist', [ApiController::class, 'getTodolist'])->name('api.todolist.get');
Route::post('/api/todolist/create', [ApiController::class, 'createTodolist'])->name('api.todolist.create');