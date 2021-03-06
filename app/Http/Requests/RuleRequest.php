<?php

namespace App\Http\Requests;

use App\Models\Rule;

class RuleRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'rule_name' => 'between:3,25|unique:rules,rule_name'
        ];
    }

    public function messages()
    {
        return [
          'rule_name.unique'   => '规则名称已存在',
          'rule_name.between'  => '规则名称字符数必须在3-25的字符之间'
        ];
    }
}
