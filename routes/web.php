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

// 测试
Route::get('check', 'TimingController@check');

// 获取广告计划列表
Route::get('planList', 'PlanController@planList');

// 获取多个一数据报表
Route::get('manyWithSimple', 'TimingController@manyWithSimple');

// 测试发送 post 请求
Route::get('executes/{execute}', 'TimingController@executeRequest')->where(['execute' => '[0-9a-z]+']);

// 新版本提交请求
Route::post('rules', 'RulesController@store_new')->name('rules.store_new');

Route::get('mediaStatus', 'PlanController@mediaStatus');