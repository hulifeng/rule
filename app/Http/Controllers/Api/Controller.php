<?php

namespace App\Http\Controllers\Api;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function response($data = [], $code = 0, $msg = '')
    {
        return json_encode([
            'code'  => $code,
            'msg'   => $msg,
            'count' => count($data),
            'data'  => $data
        ]);
    }
}
