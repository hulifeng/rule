<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redis;
use Zttp\Zttp;

class OAuthController extends Controller
{
    public function index()
    {
        return view('oauth.index');
    }

    public function getAccessToken()
    {
        $auth_code = request()->input('auth_code');

        $url = 'https://ad.toutiao.com/open_api/oauth2/access_token/';

        $client = Zttp::withHeaders(['Content-Type: application/json'])->post($url, [
            'appid' => env('AD_APP_ID'),
            'secret' => env('AD_SECRET'),
            'grant_type' => 'auth_code',
            'auth_code' => $auth_code
        ]);

        $responseJson = $client->json();

        // access_token 默认过期时间一天 refresh_token 默认过期时间三十天
        Redis::setex(env('AD_APP_ID') . '_access_token', 86300, $responseJson['data']['access_token']);
        Redis::setex(env('AD_APP_ID') . '_refresh_token', 86300 * 30, $responseJson['data']['access_token']);

        session()->flash('error', '获取 access_token 失败！');
        if ($responseJson['data']['access_token'])  session()->flash('success', '获取 access_token 成功！');

        return redirect()->route('rules.index');
    }

    public function refreshAccessToken()
    {
        $url = 'https://ad.toutiao.com/open_api/oauth2/refresh_token/';

        $response = Zttp::withHeaders(['Content-Type: application/json'])->post($url, [
            'app_id' => env('AD_APP_ID'),
            'secret' => env('AD_SECRET'),
            'grant_type' => 'refresh_token',
            'refresh_token' => Redis::get(env('AD_APP_ID') . '_refresh_token')
        ]);

        $responseJson = $response->json();

        Redis::setex(env('AD_APP_ID') . '_access_token', 86300, $responseJson['data']['access_token']);
        Redis::setex(env('AD_APP_ID') . '_refresh_token', 86300 * 30, $responseJson['data']['refresh_token']);

        session()->flash('error', '刷新 access_token 失败！');
        if ($responseJson['data']['access_token'])  session()->flash('success', '刷新 access_token 成功！');

        return redirect()->route('rules.index');
    }
}
