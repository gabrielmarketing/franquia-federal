<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Grupo de Rotas do Controller "Main"
Route::name('main.')->group(function (){

    Route::get('/', [ MainController::class, "index" ])
        ->name('index');

});
Route::name('faq.')->group(function (){

    Route::get('/faq', [ MainController::class, "faq" ])
        ->name('faq.index');

});
