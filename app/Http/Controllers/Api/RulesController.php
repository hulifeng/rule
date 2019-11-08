<?php

namespace App\Http\Controllers\Api;

use App\Models\Rule;

class RulesController extends Controller
{
    public function list()
    {
        $rules = Rule::where('is_del', 0)->get();

        return $this->response($rules);
    }
}
