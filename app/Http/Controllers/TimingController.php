<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Illuminate\Http\Request;

class TimingController extends Controller
{
    public function check()
    {
        $rule = Rule::where("status", 1)->where("is_del", "0")->get();
    }
}
