<?php

namespace App\Http\Controllers;

use App\Http\Requests\RuleRequest;
use Carbon\Carbon;
use function GuzzleHttp\Promise\queue;
use Illuminate\Http\Request;
use App\Models\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;
use Zttp\Zttp;

class RulesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $request->except('_token');

        // 查询今天查询的数量
        $todayRules = Rule::where(function ($query) use ($request) {
            $request->status && $query->where('status', $request->status);
            $request->rule_name && $query->where('rule_name', 'like', $request->rule_name);
            $query->where("is_del", 0);
            $query->whereDate("created_at", date("Y-m-d", time()));
        })->count();

        $rulesCount = Rule::where(function ($query) use ($request) {
            $request->status && $query->where('status', $request->status);
            $request->rule_name && $query->where('rule_name', 'like', $request->rule_name);
            $query->where("is_del", 0);
        })->count();

        $rules = Rule::where(function ($query) use ($request) {
            $request->status && $query->where('status', $request->status);
            $request->rule_name && $query->where('rule_name', 'like', $request->rule_name);
            $query->where("is_del", 0);
        })->paginate(5);

        return view('rules.index', compact('todayRules', 'rules', 'rulesCount', 'request'));
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

            $acid = uniqid();

            $rule_name = $request->rule_name ?: date("YmdHis", time());

            $rule = new Rule([
                'acid' => $acid,
                'rule_name' => $rule_name,
                'policy' => $request->policy,
                'application_object' => $request->application_object,
                'budget' => $request->budget,
                'kpi' => $request->kpi,
                'append_budget' => $request->append_budget,
                'cron_time' => $request->cron_time,
                'status' => $request->status ? 1 : 0
            ]);

            $rule->save();

            // 如果是指定计划，提交到关联表中保存记录
        });

        session()->flash('success', '规则创建成功！');

        return redirect()->route('rules.index');
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

    public function update(Request $request, Rule $rule)
    {
        $rule = DB::transaction(function () use ($request, $rule) {
            $status = 0;
            if ($request->status == 'on') $status = 1;

            // 修改 request 状态
            $request->merge(['status' => $status]);

            $rule->update($request->only([
                'policy', 'application_object',
                'budget', 'kpi', 'append_budget', 'cron_time', 'status'
            ]));
        });

        session()->flash('success', '规则编辑成功！');

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

        $ruleInfo = DB::table('rules')->where("id", $id)->select('cron_time', 'acid')->get();

        $acid = $ruleInfo[0]->acid;

        $minute = $ruleInfo[0]->cron_time;

        $command = 'stop';
        if ($status == 1) $command = 'start';

//         shell_exec("php /www/wwwroot/rule.usigh.com/test.php $command $acid $minute $acid 2>&1");

        DB::table('rules')->where('id', $id)->update(['status' => $status, 'updated_at' => Carbon::now()]);

        return [];
    }
}
