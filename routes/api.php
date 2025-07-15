<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CakeController;
use App\Http\Controllers\OrderController;
use App\Models\Order;

Route::get('/cakes', [CakeController::class, 'index']);
Route::post('/orders', [OrderController::class, 'store']);
Route::get('/orders', function () {
    return Order::with('cake')->oldest()->get(); // include nama kue
});
Route::delete('/orders/{id}', [OrderController::class, 'destroy']);
Route::get('/orders/{id}', [OrderController::class, 'show']);
Route::put('/orders/{id}', [OrderController::class, 'update']);




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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
