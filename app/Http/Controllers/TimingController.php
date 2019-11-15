<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Zttp\Zttp;

class TimingController extends Controller
{
    public function check()
    {
        $url = 'https://ad.oceanengine.com/open_api/2/report/ad/get/';

        $access_token = Redis::get(env('AD_APP_ID') . '_access_token');

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => 'd1eedfe6639fb5687f26480f576a253c07b852da'
        ])->get($url, [
            "advertiser_id" => env('AD_ADVERTISER_ID'),
            "start_date" => '2019-10-23',
            "end_date" => '2019-10-23',
            "group_by" => ['STAT_GROUP_BY_FIELD_ID']
        ]);

        $planList = $response->json();
        dd($planList);

        foreach ($planList['data']['list'] as $v) {
            $cost = $v['cost']; // 消耗

            $convert = $v['convert']; // 转化

            $convert_cost = conversion_number($cost, $convert);  // 转化成本

            $click = $v['click']; // 点击

            $avg_click =  conversion_number($cost, $click, false); // 平均点击单价

            $show = $v['show']; // 展示

            $percentConversion = conversion_number($convert, $click); // 转化率（cvr）=转化数（conversion）/点击（click）

            $clickConversion = conversion_number($click, $show); // 点击率（ctr）=点击（click）/展现（show）

            $ruleInfo = Rule::find(1);

            // 条件关系
            $condition = $ruleInfo->condition_relation;

            $flag = 0; // 标识
            foreach ($ruleInfo->rules as $rule) {
                $item = $rule->item;
                $condition = $rule->condition;
                $v1 = $rule->val1;
                $v2 = $rule->val2;
                if ($item == 1) {
                    // 消耗
                    $flag += common_condition($condition, $cost, $v1, $v2);
                } else if ($item == 2) {
                    // 转化数
                    $flag += common_condition($condition, $convert_cost, $v1, $v2);
                } else if ($item == 3) {
                    // 转化成本
                    $flag += common_condition($condition, $convert_cost, $v1, $v2);
                } else if ($item == 4) {
                    // 点击数
                    $flag += common_condition($condition, $click, $v1, $v2);
                } else if ($item == 5) {
                    // 转化率
                    $flag += common_condition($condition, $percentConversion, $v1, $v2);
                } else if ($item == 6) {
                    // 平均点击单价
                    $flag += common_condition($condition, $avg_click, $v1, $v2);
                } else if ($item == 7) {
                    // 点击率
                    $flag += common_condition($condition, $clickConversion, $v1, $v2);
                } else if ($item == 8) {
                    // 展示数
                    $flag += common_condition($condition, $show, $v1, $v2);
                }

                // 满足执行条件
//                if ($flag) {
//                    $excute_item = $ruleInfo->excute_item;
//                    if ($excute_item == 1) {
//                        // 预算
//                    } else if ($excute_item == 2) {
//                        // 出价
//                    } else if ($excute_item == 3) {
//                        // 开关
//                    } else if ($excute_item == 4) {
//                        // 仅发送通知
//                    }
//                }
            }

            if ($condition == 1) {
                // OR 的关系
                if ($flag > 0) {
                    // 满足执行条件，执行执行操作
                    delivery_plan($ruleInfo);
                }
            } else  {
                // AND 的关系
                if ($flag == sizeof($ruleInfo->rules)) {
                    // 满足执行条件，执行执行操作
                    delivery_plan($ruleInfo);
                }
            }
        }
    }

    public function manyWithSimple()
    {
        $url = 'https://ad.oceanengine.com/open_api/2/report/integrated/get/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => 'd1eedfe6639fb5687f26480f576a253c07b852da'
        ])->get($url, [
            "advertiser_id" => env('AD_ADVERTISER_ID'),
            "start_date" => '2019-10-23',
            "end_date" => '2019-10-23',
            "group_by" => ["STAT_GROUP_BY_BIDWORD_ID", "STAT_GROUP_BY_AD_ID"]
        ]);

        dd($response->json());
    }
}
