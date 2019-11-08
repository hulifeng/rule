<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RuleItem extends Model
{
    protected $fillable = [
        'item', 'condition', 'val1', 'val2', 'rule_id'
    ];

    public function rule()
    {
        return $this->belongsTo(Rule::class);
    }
}
