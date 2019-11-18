<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Zttp\Zttp;

class PlanController extends Controller
{
    public function planList()
    {
        $url = 'https://ad.oceanengine.com/open_api/2/ad/get/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            "Access-Token" => '6637583dcd8b302e50636352a576bfad50647547'
        ])->get($url, [
            'advertiser_id' => '2326195257476781', // 广告主 ID
        ]);

        return $response->json();
    }

    // 更改计划状态
    public function planStatus()
    {
        $access_token = 'e010c9c97b01fb033cc0a2eb416b45ad462488a4';
        $url = 'https://ad.toutiao.com/open_api/2/ad/update/status/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            "Access-Token" => $access_token
        ])->post($url, [
            'advertiser_id' => '2326195257476781', // 广告主 ID
            'ad_ids'        => ['1650343204111422'], // 计划ID
            'opt_status'    => 'disable'
        ]);

        return $response->json();
    }

    // 更改计划预算
    public function planBudget()
    {
        $url = 'https://ad.toutiao.com/open_api/2/ad/update/budget/';

        $access_token = 'c5eaff979b8fe280a7cd936f393d9f8133488697';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            "Access-Token" => $access_token
        ])->post($url, [
            'advertiser_id' => '2326195257476781', // 广告主 ID
            'data'          => [[
                'ad_id' => '1648175051387916',
                'budget'=> '300'
            ]]
        ]);

        return $response->json();
    }

    // 更新计划出价
    public function planBid()
    {
        $url = 'https://ad.toutiao.com/open_api/2/ad/update/bid/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => 'c5eaff979b8fe280a7cd936f393d9f8133488697'
        ])->post($url, [
            'advertiser_id' => '2326195257476781', // 广告主 ID
            'data' => [[
                'ad_id' => '1648175051387916',
                'bid' => '2.50'
            ]]
        ]);

        return $response->json();
    }

    public function mediaStatus()
    {
        $url = 'https://ad.oceanengine.com/open_api/2/creative/update/status/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => '24058451bc963ff7eb8c8bd0504f089c35acef3a'
        ])->post($url, [
            'advertiser_id' => env('AD_ADVERTISER_ID'),
            'ad_id' => '1650343545691150',
            'creative_ids' => ['1650362958428221'],
            'opt_status' => 'disable'
        ]);

        dd($response->json());
    }

    public function adPlanList()
    {
        $url = 'https://ad.oceanengine.com/open_api/2/report/ad/get/';

        $response = Zttp::withHeaders([
            'Content-Type' => 'application/json',
            'Access-Token' => 'abc377e94de2abe9f85018d704a03bcb12e5e632'
        ])->get($url, [
              "advertiser_id" => env('AD_ADVERTISER_ID'),
              "start_date" => "2019-10-23",
              "end_date" => "2019-10-23",
              "page" => 1,
              "page_size" => 10,
              "group_by" => json_encode(["STAT_GROUP_BY_FIELD_ID"]),
        ]);

        dd($response->json());
    }
}
