<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redis;

class OAuthController extends Controller
{
    public function index()
    {
        return view('oauth.index');
    }

    public function getAccessToken()
    {
        return response(request()->input('auth_code'));
    }

    public function refreshAccessToken()
    {

    }

    public function get()
    {
        dd(Redis::get('mason'));
    }
}
