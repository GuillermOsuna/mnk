<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\UsersController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::middleware('auth:api')->get('/user', function(Request $request) {
    return $request->user()->id;
});

Route::post('/login', [UsersController::class, 'login']);

Route::middleware('auth:api')->post('/books/get', [BooksController::class, 'index']);
Route::middleware('auth:api')->post('/books/store', [BooksController::class, 'store']);
Route::middleware('auth:api')->post('/books/update', [BooksController::class, 'update']);
Route::middleware('auth:api')->post('/books/delete', [BooksController::class, 'delete']);

Route::middleware('auth:api')->post('/categories/get', [CategoriesController::class, 'index']);
Route::middleware('auth:api')->post('/categories/store', [CategoriesController::class, 'store']);
Route::middleware('auth:api')->post('/categories/update', [CategoriesController::class, 'update']);
Route::middleware('auth:api')->post('/categories/delete', [CategoriesController::class, 'delete']);

Route::middleware('auth:api')->post('/users/get', [UsersController::class, 'index']);
Route::middleware('auth:api')->post('/users/store', [UsersController::class, 'store']);
Route::middleware('auth:api')->post('/users/update', [UsersController::class, 'update']);
Route::middleware('auth:api')->post('/users/delete', [UsersController::class, 'delete']);