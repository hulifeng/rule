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
Route::group(['middleware' => 'auth'], function () {
    Route::group(['middleware' => 'refreshToken'], function () {
        Route::get('/', function () {
            return redirect()->route('rules.index');
        });
        Route::post('setStatus', 'RulesController@setStatus')->name('rules.setStatus');
        Route::resource('rules', 'RulesController')->only(['index', 'create', 'edit', 'store', 'update', 'destroy']);
        Route::get('oauth2', 'OAuthController@index');
        Route::get('getAccessToken', 'OAuthController@getAccessToken');
        Route::get('refreshAccessToken', 'OAuthController@refreshAccessToken');
        // 更新计划状态
        Route::get('planStatus', 'PlanController@planStatus');
        // 更新计划预算
        Route::get('planBudget', 'PlanController@planBudget');
        // 更新计划出价
        Route::get('planBid', 'PlanController@planBid');
        // 获取广告计划列表
        Route::get('planList', 'PlanController@planList');
        // 测试发送 post 请求
        Route::get('executes/{execute}', 'TimingController@executeRequest')->where(['execute' => '[0-9a-z]+']);
        Route::get('mediaStatus', 'PlanController@mediaStatus');
        Route::get('adPlanList', 'PlanController@adPlanList');
        // 获取广告出价
        Route::get('bids/{bid}', 'TimingController@getBid');
        // 智能报表
        Route::resource('reports', 'ReportController');
        Route::resource('users', 'UsersController')->only(['edit', 'update']);
        Route::post('upload_avatar', 'UsersController@upload_avatar')->name('users.upload_avatar');
    });
});

// 用户登录
Auth::routes();