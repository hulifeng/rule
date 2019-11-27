<?php

namespace App\Http\Requests;

class UserRequest extends Request
{
    public function rules()
    {
        return [
            'name' => 'required|between:3,12|unique:users,name,' . \Auth::id(),
            'email' => 'required|unique:users,email,' . \Auth::id(),
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '用户名必填',
            'name.unique' => '用户名称已存在',
            'name.between' => '规则名称字符数必须在3-12的字符之间',
            'email.required' => '邮箱必填',
            'email.unique' => '邮箱已存在',
        ];
    }
}
