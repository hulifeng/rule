<?php

namespace App\Http\Controllers;

use App\Models\Rule;
use Illuminate\Support\Facades\Redis;
use Zttp\Zttp;

class TimingController extends Controller
{
    /**
     * 处理数据
     * @param $acid
     */
    public function executeRequest($acid)
    {
        // 获取广告计划
        $url = 'https://ad.oceanengine.com/open_api/2/ad/get/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => Redis::get(env('AD_APP_ID') . '_access_token')
        ])->get($url, [
            "advertiser_id" => env('AD_ADVERTISER_ID'),
            "page" => '1',
            "page_size" => '20'
        ]);

        $planList = $response->json();

        $ruleInfo = Rule::where("acid", $acid)->first();

        $rulePolicy = $ruleInfo->rule_policy;

        $executeVal = $ruleInfo->execute_val;

        if (sizeof($planList['data']['list'])) {
            foreach ($planList['data']['list'] as $v) {
                $flag = 0; // 标识
                $adID = str_replace('.0', '', $v['ad_id']);
                $adDataInfo = $this->adData($adID);
                // 消耗撞线
                if ($v['cost'] == $v['budget']) {
                    $newBudget = sprintf('%.2f', ($v['budget'] + $executeVal));
                    $budgetRes = $this->changeBudget($adID, $newBudget);
                    if ($budgetRes) {
                        // 执行成功
                        file_put_contents('./loading_log.txt', '消耗撞线执行成功：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                    } else {
                        file_put_contents('./loading_log.txt', '消耗撞线执行失败：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                    }
                }
                foreach ($ruleInfo->rules as $rule) {
                    $item = $rule->item;
                    $v1 = $rule->val1;
                    if ($rulePolicy == 1) {
                        // 出价有量走赔付
                        // ①：转化成本介于 出价 - 出价（20%）
                        if ($v['convert_cost'] > $v['bid'] && ($v['convert_cost'] < (sprintf('%.2f', $v['bid'] * 1.2)))) {
                            $flag += 1;
                            file_put_contents('./loading_log.txt', '转化成本介于 出价 - 出价（20%）：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                        }
                        if ($item == 2) {
                            // ②：消耗大于出价的 n 倍
                            if (!empty($adDataInfo)) {
                                if ($adDataInfo["cost"] > sprintf('%.2f',$v['bid'] * $v1)) {
                                    $flag += 1;
                                    file_put_contents('./loading_log.txt', '消耗大于出价的 n 倍：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                                }
                            }
                        }
                        if ($flag == 2) {
                            // 满足条件执行 (修改出价降至转化成本的 20%)
                            $bid = sprintf('%.2f', $v['convert_cost'] * 0.2);
                            $res = $this->changeBID($adID, $bid);
                            if ($res) {
                                // 增加频次 每天两次
                                if ($ruleInfo->frequency < 2) {
                                    Rule::where("acid", $acid)->increment('frequency');
                                    file_put_contents('./loading_log.txt', '增加频次 每天两次：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                                }
                            }
                        }
                    } else if ($rulePolicy == 2) {
                        // 出价有量走效果
                        $mediaData = $this->mediaData($adID);

                        if (sizeof($mediaData)) {
                            foreach ($mediaData as $value) {
                                if ($item == 1) {
                                    // ①：创意的转化成本超出 kpi 考核成本的 n 倍
                                    if (!empty($mediaData)) {
                                        if ($value['convert_cost'] > $v1) {
                                            $flag += 1;
                                            file_put_contents('./loading_log.txt', '创意的转化成本超出 kpi 考核成本的 n 倍：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                                        }
                                    }
                                } else if ($item == 2) {
                                    // ②：消耗 大于 kpi 成本的 n 倍
                                    if (!empty($adDataInfo)) {
                                        if ($value['cost'] > $v1) {
                                            $flag += 1;
                                            file_put_contents('./loading_log.txt', '消耗 大于 kpi 成本的 n 倍：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                                        }
                                    }
                                }
                                if ($flag == 2) {
                                    // 满足条件执行关停创意
                                    $this->changeMediaStatus([$value['creative_id']], 'disable');
                                    file_put_contents('./loading_log.txt', '满足条件执行关停创意：' .date('Y-m-d H:i:s', time()) . PHP_EOL, FILE_APPEND);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * 广告计划数据
     * @param $adID
     * @return array
     */
    public function adData($adID)
    {
        $url = 'https://ad.oceanengine.com/open_api/2/report/ad/get/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => env('AD_ACCESS_TOKEN')
        ])->get($url, [
            "advertiser_id" => env('AD_ADVERTISER_ID'),
            "start_date" => '2019-10-23',
            "end_date" => '2019-10-23',
            "page" => 1,
            "page_size" => 20,
            "group_by" => json_encode(["STAT_GROUP_BY_FIELD_ID"]),
            "filtering" => json_encode([
                'ad_ids' => [$adID]
            ])
        ]);

        $list = $response->json()['data']['list'];

        if (sizeof($list)) {
            return $list[0];
        } else {
            return [];
        }
    }

    /**
     * 计划创意数据
     * @param $adID
     * @return array
     */
    public function mediaData($adID)
    {
        $url = 'https://ad.oceanengine.com/open_api/2/report/creative/get/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => Redis::get(env('AD_APP_ID') . '_access_token')
        ])->get($url, [
            'advertiser_id' => env('AD_ADVERTISER_ID'),
            'start_date' => '2019-10-23',
            'end_date' => date('Y-m-d', time()),
            'page' => 1,
            'page_size' => 20,
            'group_by' => json_encode(['STAT_GROUP_BY_FIELD_ID']),
            'filtering' => json_encode([
                'ad_ids' => [$adID]
            ])
        ]);

        $list = $response->json()['data']['list'];

        if (sizeof($list)) {
            return $list;
        } else {
            return [];
        }
    }

    /**
     * 更改计划出价
     * @param $adID
     * @param $BID
     * @return bool
     */
    public function changeBID($adID, $BID)
    {
        $url = 'https://ad.oceanengine.com/open_api/2/ad/update/bid/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => Redis::get(env('AD_APP_ID') . '_access_token')
        ])->post($url, [
            'advertiser_id' => env('AD_ADVERTISER_ID'),
            'data' => [[
                'ad_id' => $adID,
                'bid'   => $BID
            ]]
        ]);

        $responseJson = $response->json();

        if ($responseJson['code'] == 0) {
            // 更改成功
            return true;
        } else {
            // 更改失败
            return false;
        }
    }

    /**
     * 改变计划预算
     * @param $adID
     * @param $budget
     * @return bool
     */
    public function changeBudget($adID, $budget)
    {
        $url = 'https://ad.oceanengine.com/open_api/2/ad/update/budget/';

        $response = Zttp::withHeaders([
            'Access-Token' => Redis::get(env('AD_APP_ID') . '_access_token'),
            'Content-Type' => 'application/json'
        ])->post($url, [
            'advertiser_id' => env('AD_ADVERTISER_ID'),
            'data' => [[
                'ad_id' => $adID,
                'budget' => $budget
            ]]
        ]);

        $responseJson = $response->json();

        if ($responseJson['code'] == 0) {
            // 更改成功
            return true;
        } else {
            // 更改失败
            return false;
        }
    }

    /**
     * 关停创意
     */
    public function changeMediaStatus($creativeIds, $status)
    {
        $url = 'https://ad.oceanengine.com/open_api/2/creative/update/status/';

        $response = Zttp::withHeaders([
            'Access-Token' => Redis::get(env('AD_APP_ID') . '_access_token'),
            'Content-Type' => 'application/json'
        ])->post($url, [
            'advertiser_id' => env('AD_ADVERTISER_ID'),
            'creative_ids' => $creativeIds,
            'opt_status' => $status
        ]);

        $responseJson = $response->json();

        if ($responseJson['code'] == 0) {
            return true;
        } else {
            return false;
        }
    }
}
