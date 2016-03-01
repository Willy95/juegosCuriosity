<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/* ------------------------------------------------- */
Route::get('/', 'loginController@verPagina');
Route::match(array('GET','POST'),'/login', 'loginController@verPagina');
Route::post('/verificarUsuario', 'loginController@verificarUsuario');
/* ------------------------------------------------- */
Route::get('/menor-mayor', function(){
  return View::make('juegos.de-menor-a-mayor');
});
/* ------------------------------------------------- */
Route::get('/sumas-restas', function(){
  return View::make('juegos.sumas-restas');
});
/* ------------------------------------------------- */
