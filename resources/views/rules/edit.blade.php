@extends('layouts.app')

@section('AfterCss')
    <link rel="stylesheet" href="/static/layui/css/layui.css">
@endsection

@section('content')
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">
                        <span class="layui-breadcrumb">
                          <a href="{{route('rules.index')}}">规则列表</a>
                          <a href="{{route('rules.create')}}"><cite>新建规则</cite></a>
                        </span>
                </div>
                <div class="layui-card-body">
                    <form class="layui-form" method="post" action="{{route('rules.update', $rule->id)}}">
                        <input type="hidden" name="_method" value="PUT">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div class="layui-form-item">
                            <label class="layui-form-label">应用对象</label>
                            <div class="layui-input-block">
                                <a class="layui-btn layui-btn-primary layui-disabled">所有投放中的计划</a>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label"><i class="fa fa-question-circle"></i> 满足条件</label>
                            <div class="layui-inline">
                                <select name="" id="" class="layui-select">
                                    <option value="">满足以下所有条件</option>
                                </select>
                            </div>
                            <div class="layui-inline">
                                <select name="" id="" class="layui-select">
                                    <option value="">当天数据</option>
                                </select>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div id="variable_list" class="">
                                @foreach($rule->rules as $k => $v)
                                    <div class="variable_child">
                                        <label class="layui-form-label"></label>
                                        <div class="layui-inline">
                                            <label class="layui-form-label">项</label>
                                            <div class="layui-input-inline">
                                                <select name="item[]" class="my-item{{$k+1}}">
                                                    <option value="1">消耗</option>
                                                    <option value="2">转化数</option>
                                                    <option value="3">转化成本</option>
                                                    <option value="4">点击数</option>
                                                    <option value="5">转化率</option>
                                                    <option value="6">平均点击单价</option>
                                                    <option value="7">点击率</option>
                                                    <option value="8">展示数</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="layui-inline">
                                            <label class="layui-form-label">条件</label>
                                            <div class="layui-input-inline">
                                                <select name="condition[]" class="my-condition{{$k+1}}" id="excute_sel"
                                                        data-id="{{$k+1}}" lay-filter="excute_sel">
                                                    <option value="1">大于</option>
                                                    <option value="2">小于</option>
                                                    <option value="3">介于</option>
                                                    <option value="4">临近预算</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="layui-inline my_sel{{$k+1}} layui-form"
                                             lay-filter="fil3_sel{{$k+1}}">
                                            <label class="layui-form-label">值</label>
                                            @if(in_array($v->condition, [1, 2]))
                                                <div class="layui-input-inline">
                                                    <input type="text" class="layui-input" value="{{$v->val1}}" name="val1[]" lay-verify="val1"
                                                           style="width: 100px;" placeholder="元">
                                                    <input type="hidden" class="layui-input" name="val2[]" value="0">
                                                </div>
                                            @elseif($v->condition == 3)
                                                <div class="layui-input-inline">
                                                    <input type="text" name="val1[]" lay-verify="val1" value="{{$v->val1}}" class="layui-input" placeholder="1">
                                                </div>
                                                <label class="layui-form-label" style="text-align: center; padding: 9px 3px;"> - </label>
                                                <div class="layui-input-inline">
                                                    <input type="text" name="val2[]" lay-verify="val1" value="{{$v->val2}}" class="layui-input" placeholder="2">
                                                </div>
                                            @elseif($v->condition == 4)
                                                <div class="layui-input-inline" style="width: 120px;">
                                                    <select name="val1[]" id="budget{{$k+1}}" style="width: 100px;">
                                                        <option value="1">0.5倍预算</option>
                                                        <option value="2">0.8倍预算</option>
                                                    </select>
                                                    <input type="hidden" class="layui-input" name="val2[]" value="0">
                                                </div>
                                            @endif
                                        </div>
                                        @if($k == 1)
                                            <div class="layui-inline">
                                                <div class="layui-input-inline">
                                                    <i class="fa fa-trash-o fa-lg" onclick="delete_variable(this)" style="cursor: pointer; color: #999;"></i>
                                                </div>
                                            </div>
                                        @endif
                                    </div>
                                @endforeach
                            </div>
                            <div class="layui-input-block">
                                <label class="layui-form-label"></label>
                                <a class="layui-btn layui-btn-primary add_condition" style="border:1px dashed #e6e6e6;"><i
                                            class="layui-icon layui-icon-add-1"></i> 添加条件</a>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label"><i class="fa fa-question-circle"
                                                               lay-tips="设置您想让我们发送通知或执行操作的条件。条件是对投放数据做判断。条件之间的关系可以自由切换。"></i>
                                执行操作</label>
                            <div class="layui-inline">
                                <label class="layui-form-label">项</label>
                                <div class="layui-input-inline">
                                    <select name="excute_item" lay-filter="excute_item" id="excute_item">
                                        <option value="1">预算</option>
                                        <option value="2">出价</option>
                                        <option value="3">开关</option>
                                        <option value="4">仅发送通知</option>
                                    </select>
                                </div>
                            </div>
                            <div class="layui-inline" id="my_action">
                                <div class="layui-inline">
                                    <label class="layui-form-label">动作</label>
                                    <div class="layui-input-inline">
                                        <select name="excute_action" lay-filter="excute_action" id="excute_action">
                                            <option value="1">调整至</option>
                                            <option value="2">提高</option>
                                            <option value="3">降低</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="layui-inline" id="my_action_value">
                                    <div class="layui-inline">
                                        <label class="layui-form-label">值</label>
                                        <div class="layui-input-inline" style="margin-right: 0; width: 100px;">
                                            <input type="text" name="excute_val" id="excute_val" lay-verify="val1"
                                                   class="layui-input">
                                        </div>
                                        <div class="layui-input-inline" style="width: 70px;">
                                            <select name="excute_val_type" id="excute_val_type">
                                                <option value="1">元</option>
                                                <option value="2">%</option>
                                            </select>
                                        </div>
                                    </div>
                                    @if($rule->frequency)
                                        <div class="layui-inline">
                                            <label class="layui-form-label">频次</label>
                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">
                                                <select name="frequency" id="frequency">
                                                    <option value="1">1次</option>
                                                    <option value="2">2次</option>
                                                    <option value="3">3次</option>
                                                    <option value="4">4次</option>
                                                    <option value="5">5次</option>
                                                    <option value="6">不限</option>
                                                </select>
                                            </div>
                                            <div class="layui-input-inline" style="width: 70px;">
                                                <select name="frequency_type" id="frequency_type">
                                                    <option value="1">每天</option>
                                                    <option value="2">每周</option>
                                                    <option value="3">每月</option>
                                                </select>
                                            </div>
                                        </div>
                                    @endif
                                    @if($rule->upper_limit || $rule->lower_limit)
                                        <div class="layui-inline">
                                            @if($rule->upper_limit)
                                                <label class="layui-form-label">上限</label>
                                                <div class="layui-input-inline" style="margin-right: 0; width: 100px;">
                                                    <input type="text" value="{{$rule->upper_limit}}"
                                                           class="layui-input" name="upper_limit" id="upper_limit">
                                                </div>
                                                <div class="layui-input-inline" style="width: 70px;">
                                                    <select id="">
                                                        <option value="">元</option>
                                                    </select>
                                                </div>
                                            @else
                                                <label class="layui-form-label">下限</label>
                                                <div class="layui-input-inline" style="margin-right: 0; width: 100px;">
                                                    <input type="text" value="{{$rule->lower_limit}}"
                                                           class="layui-input" name="upper_limit" id="upper_limit">
                                                </div>
                                                <div class="layui-input-inline" style="width: 70px;">
                                                    <select id="">
                                                        <option value="">元</option>
                                                    </select>
                                                </div>
                                            @endif

                                        </div>
                                    @endif
                                </div>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">条件关系</label>
                            <div class="layui-input-block">
                                @if($rule->condition_relation)
                                    <input type="checkbox" name="condition_relation" checked lay-skin="switch"
                                           lay-text="OR|AND">
                                @else
                                    <input type="checkbox" name="condition_relation" lay-skin="switch"
                                           lay-text="OR|AND">
                                @endif
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">发送通知</label>
                            <div class="layui-input-block">
                                @if($rule->notice)
                                    <input type="checkbox" name="notice" checked lay-skin="switch" lay-text="发送|不发送">
                                @else
                                    <input type="checkbox" name="notice" lay-skin="switch" lay-text="发送|不发送">
                                @endif
                                <p class="help-block layui-word-aux">规则执行成功后，会给您发送通知。您可在 <a style="color: #1E9FFF;"
                                                                                            href="javascript:;">消息中心</a>
                                    修改接收对象与通知方式（站内信、短信、邮件）</p>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">检查时间</label>
                            <div class="layui-input-block">
                                @if($rule->check_time)
                                    <input type="checkbox" name="check_time" checked lay-filter="check_time"
                                           lay-skin="switch" lay-text="每天|每小时">
                                @else
                                    <input type="checkbox" name="check_time" lay-filter="check_time" lay-skin="switch"
                                           lay-text="每天|每小时">
                                @endif
                            </div>
                        </div>
                        <!--选择时间框-->
                        @php
                            $class = 'layui-hide';
                            if ($rule->check_time) $class = '';
                        @endphp
                        <div class="layui-form-item {{$class}}" id="choose_time" style="width: 295px;">
                            <label class="layui-form-label">选择时刻</label>
                            <div class="layui-input-block">
                                <input type="text" name="clock" value="{{ $rule->clock }}" class="layui-input"
                                      lay-filter="clock" id="time1">
                            </div>
                        </div>
                        <!--选择时间框-->
                        <div class="layui-form-item" style="width: 295px;">
                            <label class="layui-form-label">规则名称</label>
                            <div class="layui-input-block">
                                <input type="text" name="rule_name" value="{{ $rule->rule_name }}" class="layui-input"
                                       lay-verify="rule_name">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-block">
                                <button type="submit" class="layui-btn layui-btn-normal" lay-submit=""
                                        lay-filter="submit_rule">立即提交
                                </button>
                                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('AfterJS')
    <script src="/static/layui/jquery-3.4.1.min.js"></script>
    <script src="/static/layui/layui.all.js"></script>
    <script src="/static/layui/laydate.js"></script>
    @foreach($rule->rules as $k => $v)
        @if($v->condition == 4)
            <script>
                $('#budget{{$k+1}}').val({{$v->val1}});
            </script>
        @endif
        <script>
            $('.my-item{{$k+1}} option[value={{$v->item}}]').attr('selected', true);
            $('.my-condition{{$k+1}} option[value={{$v->condition}}]').attr('selected', true);
        </script>
    @endforeach
    <script>
        var html = '';
        var indexnum = 1;
        @php
            if (sizeof($rule->rules)) {
                $index = count($rule->rules);
                echo "indexnum = $index";
            }
        @endphp

        layui.use(['form', 'laydate'], function () {
            var form = layui.form,
                laydate = layui.laydate;

            //时间范围选择
            laydate.render({
                elem: '#time1'
                , type: 'time'
            });
            //时间范围选择

            form.verify({
                val1: function (value, item) {
                    if (!value) {
                        return '值不能为空！';
                    }
                },
                rule_name: function (value, item) {
                    if (!value) {
                        return '规则名称不能为空！';
                    }
                }
            });

            // 监听表单切换
            form.on('select(excute_item)', function (data) {
                var html = '';
                var current_val = $(data.elem[data.elem.selectedIndex]).val();
                if (current_val == 1) {
                    // 预算
                    html = '<div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">动作</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="excute_action[]" lay-filter="excute_action" id="excute_action">\n' +
                        '                                                <option value="1">调整至</option>\n' +
                        '                                                <option value="2">提高</option>\n' +
                        '                                                <option value="3">降低</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">值</label>\n' +
                        '                                        <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                            <input type="text" name="excute_val" lay-verify="val1" class="layui-input">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                            <select name="excute_option[]">\n' +
                        '                                                <option value="1">元</option>\n' +
                        '                                                <option value="2">%</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>';
                    $('#my_action').html(html);
                } else if (current_val == 2) {
                    // 出价
                    html = '<div class="layui-inline" id="my_action">\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">动作</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="excute_action[]" lay-filter="excute_action" id="excute_action">\n' +
                        '                                                <option value="1">调整至</option>\n' +
                        '                                                <option value="2">提高</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline" id="my_action_value">\n' +
                        '                                        <div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">值</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <input type="text" name="excute_val" class="layui-input">\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select name="excute_val_type">\n' +
                        '                                                    <option value="1">元</option>\n' +
                        '                                                    <option value="2">%</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>';
                    $('#my_action').html(html);
                } else if (current_val == 3) {
                    // 开关
                    $('#my_action').html('');
                    html = '<div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">动作</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="excute_switch" lay-filter="excute_action" id="excute_action">\n' +
                        '                                                <option value="">请选择动作</option>\n' +
                        '                                                <option value="1">开启</option>\n' +
                        '                                                <option value="0">暂停</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>';
                    $('#my_action').html(html);
                } else if (current_val == 4) {
                    // 仅发送通知
                    $('#my_action').html('');
                }
                form.render('select');
            });

            form.on('select(excute_action)', function (data) {
                var current_val = $(data.elem[data.elem.selectedIndex]).val();
                if (current_val == 1) {
                    // 调整至
                    html = ' <div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">值</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <input type="text" name="excute_val" class="layui-input">\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select name="excute_val_type">\n' +
                        '                                                    <option value="1">元</option>\n' +
                        '                                                    <option value="2">%</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>';
                    $('#my_action_value').html(html);
                } else if (current_val == 2) {
                    // 提高
                    html = '<div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">值</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <input type="text" class="layui-input">\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select class="" id="">\n' +
                        '                                                    <option value="">元</option>\n' +
                        '                                                    <option value="">%</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">频次</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <select name="" id="">\n' +
                        '                                                    <option value="">1次</option>\n' +
                        '                                                    <option value="">2次</option>\n' +
                        '                                                    <option value="">3次</option>\n' +
                        '                                                    <option value="">4次</option>\n' +
                        '                                                    <option value="">5次</option>\n' +
                        '                                                    <option value="">不限</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select class="" id="">\n' +
                        '                                                    <option value="">每天</option>\n' +
                        '                                                    <option value="">每周</option>\n' +
                        '                                                    <option value="">每月</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">上限</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <input type="text" class="layui-input">\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select class="" id="">\n' +
                        '                                                    <option value="">元</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>';
                    $('#my_action_value').html(html);
                } else if (current_val == 3) {
                    // 降低
                    html = '<div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">值</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <input type="text" class="layui-input">\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select class="" id="">\n' +
                        '                                                    <option value="">元</option>\n' +
                        '                                                    <option value="">%</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">频次</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <select name="" id="">\n' +
                        '                                                    <option value="">1次</option>\n' +
                        '                                                    <option value="">2次</option>\n' +
                        '                                                    <option value="">3次</option>\n' +
                        '                                                    <option value="">4次</option>\n' +
                        '                                                    <option value="">5次</option>\n' +
                        '                                                    <option value="">不限</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select class="" id="">\n' +
                        '                                                    <option value="">每天</option>\n' +
                        '                                                    <option value="">每周</option>\n' +
                        '                                                    <option value="">每月</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>\n' +
                        '                                        <div class="layui-inline">\n' +
                        '                                            <label class="layui-form-label">下限</label>\n' +
                        '                                            <div class="layui-input-inline" style="margin-right: 0; width: 100px;">\n' +
                        '                                                <input type="text" class="layui-input">\n' +
                        '                                            </div>\n' +
                        '                                            <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                                <select class="" id="">\n' +
                        '                                                    <option value="">元</option>\n' +
                        '                                                </select>\n' +
                        '                                            </div>\n' +
                        '                                        </div>';
                    $('#my_action_value').html(html);
                }
                form.render('select');
            });

            // 添加节点
            $('.add_condition').click(function () {
                indexnum++;
                html = '<div class="variable_child " >\n' +
                    '<label class="layui-form-label"></label>\n' +
                    '                                    <div class="layui-inline layui-form" lay-filter="fil1_sel' + indexnum + '">\n' +
                    '                                        <label class="layui-form-label">项</label>\n' +
                    '                                        <div class="layui-input-inline">\n' +
                    '                                            <select class="my-item' + indexnum + '" name="item[]" id="">\n' +
                    '                                                <option value="1">消耗</option>\n' +
                    '                                                <option value="2">转化数</option>\n' +
                    '                                                <option value="3">转化成本</option>\n' +
                    '                                                <option value="4">点击数</option>\n' +
                    '                                                <option value="5">转化率</option>\n' +
                    '                                                <option value="6">平均点击单价</option>\n' +
                    '                                                <option value="7">点击率</option>\n' +
                    '                                                <option value="8">展示数</option>\n' +
                    '                                            </select>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="layui-inline layui-form" lay-filter="fil2_sel' + indexnum + '">\n' +
                    '                                        <label class="layui-form-label">条件</label>\n' +
                    '                                        <div class="layui-input-inline">\n' +
                    '                                            <select name="condition[]" id="excute_sel" data-id="' + indexnum + '" lay-filter="excute_sel">\n' +
                    '                                                <option value="1">大于</option>\n' +
                    '                                                <option value="2">小于</option>\n' +
                    '                                                <option value="3">介于</option>\n' +
                    '                                                <option value="4">临近预算</option>\n' +
                    '                                            </select>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="layui-inline layui-form my_sel' + indexnum + '" lay-filter="fil3_sel' + indexnum + '">\n' +
                    '                                        <label class="layui-form-label">值</label>\n' +
                    '                                        <div class="layui-input-inline">\n' +
                    '                                            <input type="text" name="val1[]" class="layui-input" style="width: 100px;" placeholder="元" lay-verify="val1">\n' +
                    '                                            <input type="hidden" name="val2[]" value="0">\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                    <div class="layui-inline">\n' +
                    '                                        <div class="layui-input-inline">\n' +
                    '                                            <i class="fa fa-trash-o fa-lg" onclick="delete_variable(this)" style="cursor: pointer; color: #999;"></i></a>\n' +
                    '                                        </div>\n' +
                    '                                    </div>\n' +
                    '                                </input>';
                $('#variable_list').append(html);
                layui.form.render('select');
            });

            form.on('select(excute_sel)', function (data) {
                var current_index = $(data.elem).data('id');
                var current_val = $(data.elem[data.elem.selectedIndex]).val();
                var unit = $(".my-item" + current_index).val();
                var _html = '';
                if (current_val == 1 || current_val == 2) {
                    _html += '<label class="layui-form-label">值</label>\n' +
                        '                                            <div class="layui-input-inline">\n' +
                        '                                                <input type="text" name="val1[]" lay-verify="val1" class="layui-input" style="width: 100px;" placeholder="' + unit + '">\n' +
                        '                                            </div>\n' +
                        '                                            <input type="hidden" name="val2[]" value="0">';
                } else if (current_val == 3) {
                    _html += '<label class="layui-form-label">值</label>\n' +
                        '                                            <div class="layui-input-inline">\n' +
                        '                                                <input type="text" name="val1[]" lay-verify="val1" class="layui-input" placeholder="' + unit + '">\n' +
                        '                                            </div>\n' +
                        '                                            <label class="layui-form-label" style="text-align: center;padding: 9px 3px;"> - </label>\n' +
                        '                                            <div class="layui-input-inline">\n' +
                        '                                                <input type="text" name="val2[]" class="layui-input" placeholder="' + unit + '">\n' +
                        '                                            </div>';
                } else if (current_val == 4) {
                    _html +=
                        '                                        <label class="layui-form-label">值</label>\n' +
                        '                                        <div class="layui-input-inline"  style="width: 120px;">\n' +
                        '                                            <select name="val1[]" id="" lay-verify="val1">\n' +
                        '                                                <option value="1">0.5倍预算</option>\n' +
                        '                                                <option value="2">0.8倍预算</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div> \n' +
                        '                                        <input type="hidden" name="val2[]" value="0">';
                }
                $(".my_sel" + current_index).html(_html);
                form.render();
                // form.render('select');
                // form.render('select','fil3_sel' + current_index);
            })

            form.on('switch(check_time)', function (data) {
                var _checked = data.elem.checked;
                if (_checked) {
                    $('#choose_time').removeClass('layui-hide');
                } else {
                    $('#choose_time').addClass('layui-hide');
                }
            });

            //监听提交
            form.on('submit(submit_rule)', function (data) {
                form.render('select');
            });

            // 执行项
            $('#excute_item').val({{$rule->excute_item}});
            // 执行动作
            $('#excute_action').val({{$rule->excute_action}});
            // 执行值
            $('#excute_val').val({{$rule->excute_val}});
            // 执行值类型
            $('#excute_val_type').val({{$rule->excute_val_type}});
            // 执行频次
            $('#frequency').val({{$rule->frequency}});
            // 执行频次类型
            $('#frequency_type').val({{$rule->frequency_type}});

            form.render();
        });

        // 删除节点
        function delete_variable(obj) {
            $(obj).parent().parent().parent().remove();
            indexnum--;
            layui.use('form', function () {
                var form = layui.form;
                form.render();
            });
        }
    </script>
@endsection
