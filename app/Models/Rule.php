<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    protected $fillable = [
        'rule_name', 'excute_item', 'excute_condition', 'excute_val', 'excute_val_type',
        'frequency', 'frequency_type', 'upper_limit', 'condition_relation', 'notice', 'check_time',
        'clock'
    ];

    public function rules()
    {
        return $this->hasMany(RuleItem::class);
    }
}
