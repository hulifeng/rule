<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleRequest;
use Carbon\Carbon;
use function GuzzleHttp\Promise\queue;
use Illuminate\Http\Request;
use App\Models\Rule;
use Illuminate\Support\Facades\DB;

class RulesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('rules.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('rules.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RuleRequest $request)
    {
        $rule = DB::transaction(function () use ($request) {
            
            $condition_relation = $request->input('condition_relation'); //0: and 1: or
            $check_time = $request->input('check_time');
            $notice = $request->input('notice');

            // 同时生成 shell
            $shell_path = base_path() . "/shell/";
            if (!file_exists($shell_path)) {
                mkdir($shell_path, 0777, true);
            }

            // 生成 cron 路径文件
            $cron_path = base_path() . "/cron/";
            if (!file_exists($cron_path)) {
                mkdir($cron_path, 0777, true);
            }

            // 判断是每小时还是每天时刻
            if ($check_time == 'on') {
                // 自定义时刻
                $clockArray = explode(':', $request->input('clock' ));
                $hour = $clockArray[0];
                $minute = $clockArray[1];
            } else {
                // 每小时执行
                // 分 时 天 月 星期
                $hour = '*/';
                $minute = '*';
            }

            $str = md5(time());
            $shell_file_name = $shell_path . "$str.sh";

            file_put_contents($shell_file_name, 'curl http://rule.usigh.com/write');

            $json = [
                'shell' => $shell_file_name,
                'hour' => $hour,
                'minute' => $minute
            ];

            $rule = new Rule([
                'rule_name' => $request->input('rule_name'),
                'excute_item' => $request->input('excute_item'),
                'excute_action' => $request->input('excute_action'),
                'excute_switch' => $request->input('excute_switch'),
                'excute_val' => $request->input('excute_val'),
                'excute_val_type' => $request->input('excute_val_type'),
                'frequency' => $request->input('frequency'),
                'frequency_type' => $request->input('frequency_type'),
                'upper_limit' => $request->input('upper_limit'),
                'condition_relation' => $condition_relation == 'on' ? 1 : 0,
                'notice' => $notice == 'on' ? 1 : 0,
                'check_time' => $check_time == 'on' ? 1 : 0,
                'clock' => $check_time == 'on' ? $request->input('clock') : ' ',
                'shell' => json_encode($json, JSON_UNESCAPED_UNICODE)
            ]);

            $rule->save();

            $items = $request->input('item');
            $conditions = $request->input('condition');
            $val1s = $request->input('val1');
            $val2s = $request->input('val2');
            foreach ($items as $k => $v) {
                $item = $rule->rules()->make([
                    'item' => $v,
                    'condition' => $conditions[$k],
                    'val1' => $val1s[$k],
                    'val2' => $val2s[$k]
                ]);
                $item->save();
            }


            return $rule;
        });

        session()->flash('success', '规则创建成功！');

        return redirect()->route('rules.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Rule $rule)
    {
        return view('rules.edit', compact('rule'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rule $rule)
    {
        $rule = DB::transaction(function () use ($request, $rule) {

            $request['condition_relation'] = $request->input('condition_relation') == 'on' ? 1 : 0;
            $request['notice'] = $request->input('notice') == 'on' ? 1 : 0;
            $request['check_time'] = $request->input('check_time') == 'on' ? 1 : 0;
            $request['clock'] = $request['check_time'] ? $request->input('clock') : ' ';

            $rule->update($request->only([
                'rule_name', 'excute_item',
                'excute_action', 'excute_val',
                'excute_switch', 'excute_val_type',
                'frequency', 'frequency_type',
                'upper_limit', 'condition_relation',
                'notice', 'check_time', 'clock'
            ]));

            $rule->rules()->delete();

            $items = $request->input('item');
            $conditions = $request->input('condition');
            $val1s = $request->input('val1');
            $val2s = $request->input('val2');
            foreach ($items as $k => $v) {
                $item = $rule->rules()->make([
                    'item' => $v,
                    'condition' => $conditions[$k],
                    'val1' => $val1s[$k],
                    'val2' => $val2s[$k]
                ]);
                $item->save();
            }

            return $rule;
        });

        session()->flash('success', '规则修改成功！');

        return redirect()->route('rules.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table("rules")->where("id", $id)->update(['is_del' => 1, 'updated_at' => Carbon::now()]);

        return [];
    }

    public function setStatus(Request $request)
    {
        $id = $request->input('id');
        $status = $request->input('status');

        if ($status == 1) {
            $ruleInfo = DB::where("id", $id)->select('shell')->get();

            $shell_command = json_decode($ruleInfo);

            $shell = $shell_command->shell;

            $hour = $shell_command->hour;

            $minute = $shell_command->minute;

            shell_exec("php /www/wwwroot/rule.usigh.com/test.php start $shell $hour $minute");
        }
//
//        DB::table('rules')->where('id', $id)->update(['status' => $status, 'updated_at' => Carbon::now()]);
//
//        if ($status == 1) {
//            $shell = DB::table('rules')->where('id', $id)->select('shell')->get();
//            shell_exec($shell);
//        }
//
//        return [];
    }
}
