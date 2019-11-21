<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Redis;
use Zttp\Zttp;

class RefreshTokenMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // 判断当前 token 是否无效，无效重新刷新 token
        if (empty(Redis::get(env('AD_APP_ID') . '_access_token'))) {

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

        }

        // 如果存在执行下一步请求
        return $next($request);
    }
}
