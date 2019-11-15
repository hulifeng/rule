<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    protected $fillable = [
        'acid', 'rule_name', 'excute_item', 'excute_switch', 'excute_condition', 'excute_val', 'excute_val_type',
        'frequency', 'frequency_type', 'upper_limit', 'condition_relation', 'notice', 'check_time',
        'clock', 'shell', 'excute_action'
    ];

    public function rules()
    {
        return $this->hasMany(RuleItem::class);
    }
}
