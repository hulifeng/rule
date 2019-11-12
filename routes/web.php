<?php

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

Route::post('setStatus', 'RulesController@setStatus')->name('rules.setStatus');


Route::resource('rules', 'RulesController');


Route::get('/', function () {
    return redirect()->route('rules.index');
});

Route::get('oauth2', 'OAuthController@index');

Route::get('getAccessToken', 'OAuthController@getAccessToken');

Route::get('refreshAccessToken', 'OAuthController@refreshAccessToken');

// 更新计划状态
Route::get('planStatus', 'PlanController@planStatus');

// 更新计划预算
Route::get('planBudget', 'PlanController@planBudget');

// 更新计划出价
Route::get('planBid', 'PlanController@planBid');