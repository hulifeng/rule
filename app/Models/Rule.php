<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rule extends Model
{
    protected $fillable = [
        'acid', 'rule_name', 'policy',
        'application_object', 'budget',
        'kpi', 'append_budget', 'cron_time', 'status'
    ];

    public function rules()
    {
        return $this->hasMany(RuleItem::class);
    }
}
