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
            'rule_name' => 'required|between:3,25|unique:rules,rule_name'
        ];
    }

    public function messages()
    {
        return [
          'rule_name.required' => '规则名称不能为空',
          'rule_name.unique'   => '规则名称已存在'
        ];
    }
}
