<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    protected $fillable = [
        'acid', 'rule_name', 'rule_object', 'rule_policy',
        'ad_id', 'execute_item', 'execute_condition',
        'execute_val', 'clock', 'frequency', 'shell'
    ];

    public function rules()
    {
        return $this->hasMany(RuleItem::class);
    }
}
