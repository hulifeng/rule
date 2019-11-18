@extends('layouts.app')

@section('AfterCss')
    <style>
        .rule-active {
            background-color: #342d59;
            color: white;
        }
    </style>
@endsection

@section('content')
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">
                        <span class="layui-breadcrumb">
                          <a href="{{route('rules.index')}}">AI命令列表</a>
                          <a href="{{route('rules.edit', $rule->id)}}"><cite>编辑AI命令</cite></a>
                        </span>
                </div>
                <div class="layui-card-body" style="position: relative;">
                    <form class="layui-form" method="post" action="{{route('rules.update', $rule->id)}}">
                        <input type="hidden" name="_method" value="PUT">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <div class="layui-form-item">
                            <label class="layui-form-label">策略模板</label>
                            <div class="layui-inline">
                                <select name="policy" id="policy" lay-filter="choose_template">
                                    <option value="">选择模板</option>
                                    <option value="1" @if($rule->rule_policy == 1) selected @endif>出价有量走赔付</option>
                                    <option value="2" @if($rule->rule_policy == 2) selected @endif>出价没量走效果</option>
                                </select>
                            </div>
                            <div class="layui-inline">
                                <i class="fa fa-question-circle tooltip-icon template_1 layui-hide" data-tips="出价有量走赔付：当前出价可以跑出去量，但超出KPI考核成本，选择该策略模板"></i>
                                <i class="fa fa-question-circle tooltip-icon template_2 layui-hide" data-tips="出价没量走效果，当前出价跑量困难，可提高出价选择该策略模板"></i>
                            </div>
                        </div>
                        <div id="template_main">
                            <div class="layui-form-item">
                                <label class="layui-form-label">应用对象</label>
                                <div id="use_object" class="layui-btn-group">
                                    <input type="hidden" name="rule_object" id="rule-object" value="{{$rule->rule_object}}">
                                    @if ($rule->rule_policy == 1)
                                        <a class="layui-btn layui-btn-primary @if($rule->rule_object == 1) rule-active @endif rule-object" id="object_1" data-id="1">所有计划</a>
                                        <a class="layui-btn layui-btn-primary @if($rule->rule_object == 2) rule-active @endif rule-object" id="object_2" data-id="2">指定计划</a>
                                    @else
                                        <a class="layui-btn layui-btn-primary @if($rule->rule_object == 3) rule-active @endif rule-object" id="object_3" data-id="3">所有创意</a>
                                        <a class="layui-btn layui-btn-primary @if($rule->rule_object == 4) rule-active @endif rule-object" id="object_4" data-id="4">指定计划中的创意</a>
                                    @endif
                                </div>
                            </div>
                            <div class="layui-form-item @if(in_array($rule->rule_object, [1, 3])) layui-hide @endif" id="choose_plan">
                                <label class="layui-form-label">选择计划</label>
                                <div class="layui-input-block" style="width: 212px;">
                                    <select name="ad_id" id="ad_id" lay-filter="ad_id" lay-search>
                                        <option value="">选择计划</option>
                                        @foreach($planList as $value)
                                            <option value="{{$value['id']}}" @if($rule->ad_id == $value['id']) selected @endif>{{$value['name']}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div id="condition">
                                @if($rule->rule_object == 1)
                                    <div class="layui-form-item">
                                        <label class="layui-form-label">满足条件</label>
                                        @foreach ($rule->rules as $value)
                                            <div class="layui-inline">
                                                <label class="layui-form-label">项</label>
                                                <div class="layui-input-inline">
                                                    <select name="item[]" id="item[]">
                                                        <option value="2">消耗</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="layui-inline">
                                                <label class="layui-form-label">条件</label>
                                                <div class="layui-input-inline">
                                                    <select name="condition[]" id="condition[]">
                                                        <option value="1">大于bid</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="layui-inline">
                                                <label class="layui-form-label">值</label>
                                                <div class="layui-input-inline" style="width: 100px; margin-right: 0;">
                                                    <input type="text" class="layui-input" name="val1[]" value="{{$value->val1}}">
                                                    <input type="hidden" name="val2[]" value="0">
                                                </div>
                                                <div class="layui-input-inline" style="width: 70px;">
                                                    <select name="" id="">
                                                        <option value="">倍</option>
                                                    </select>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>
                                @else
                                        @foreach ($rule->rules as $key => $value)
                                            <div class="layui-form-item">
                                                @if($key == 0)
                                                    <label class="layui-form-label">满足条件</label>
                                                @else
                                                    <label class="layui-form-label"></label>
                                                @endif
                                                <div class="layui-inline">
                                                    <label class="layui-form-label">项</label>
                                                    <div class="layui-input-inline">
                                                        <select name="item[]" id="item[]">
                                                            @if($value->item == 1)
                                                                <option value="1">转化成本</option>
                                                            @elseif ($value->item == 2)
                                                                <option value="2">消耗</option>
                                                            @endif
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="layui-inline">
                                                    <label class="layui-form-label">条件</label>
                                                    <div class="layui-input-inline">
                                                        <select name="condition[]" id="condition[]">
                                                            <option value="1">大于</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="layui-inline">
                                                    <label class="layui-form-label">@if($key == 0) KPI @endif值</label>
                                                    <div class="layui-input-inline" style="width: 100px; margin-right: 0;">
                                                        <input type="text" class="layui-input" name="val1[]" value="{{$value->val1}}">
                                                        <input type="hidden" name="val2[]" value="0">
                                                    </div>
                                                    <div class="layui-input-inline" style="width: 70px;">
                                                        <select name="" id="">
                                                            <option value="">倍</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                @endif
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">执行操作</label>
                                <div class="layui-inline">
                                    <label class="layui-form-label">项</label>
                                    <div class="layui-input-inline">
                                        <select name="execute_item" id="execute_item">
                                            <option value="1">计划预算</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="layui-inline">
                                    <label class="layui-form-label">条件</label>
                                    <div class="layui-input-inline">
                                        <select name="execute_condition" id="execute_condition">
                                            <option value="1">提高</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="layui-inline">
                                    <label class="layui-form-label">值</label>
                                    <div class="layui-input-inline" style="width: 100px; margin-right: 0;">
                                        <input type="text" class="layui-input" name="execute_val" value="{{$rule->execute_val}}">
                                    </div>
                                    <div class="layui-input-inline" style="width: 70px;">
                                        <select name="" id="">
                                            <option value="">倍</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">扫描时间</label>
                                <div class="layui-inline">
                                    <input type="text" class="layui-input" name="clock" value="{{$rule->clock}}">
                                </div>
                                <div class="layui-inline">
                                    <i class="fa fa-question-circle tooltip-icon" data-tips="可填写 1 - 60的正整数"></i>
                                </div>
                            </div>
                            <div class="layui-form-item">
                                <label class="layui-form-label">命令名称</label>
                                <div class="layui-input-block" style="width: 212px;">
                                    <input type="text" class="layui-input" name="rule_name" lay-verify="rule_name" value="{{$rule->rule_name}}">
                                </div>
                            </div>
                            <img src="/images/logo.png" alt="" width="300" style="position: absolute; margin-top: 100px; right: 25px; bottom: 15px;">
                            <div class="layui-form-item">
                                <div class="layui-input-block">
                                    <button type="submit" class="layui-btn rule-purple-bg" lay-submit="" lay-filter="submit_rule">立即提交</button>
                                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                                </div>
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
    <script>
        var tips;
        $('i.tooltip-icon').on({
            mouseenter: function () {
                var that = this,
                    text = $(that).data('tips');
                tips = layer.tips("<span style='color: white;'>" + text + "</span>", that, {
                    tips: [3],
                    time: 0,
                    area: 'auto',
                    maxWidth: 200
                });
            },
            mouseleave: function () {
                layer.close(tips);
            }
        });

        $('.rule-object').click(function () {
            var id = $(this).data('id');
            if (id == 2 || id == 4) {
                $('#choose_plan').removeClass('layui-hide');
            } else {
                $('#choose_plan').addClass('layui-hide');
            }
            $('#rule-object').val(id);
            $(this).addClass('rule-active').siblings().removeClass('rule-active');
            layui.form.render();
        });

        layui.use(['form', 'laydate'], function(){
            var form = layui.form;

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
            
            form.on('select(ad_id)', function (data) {
                form.render('select');
            });

            form.on('select(choose_template)', function (data) {
                $('#template_main').removeClass('layui-hide');
                if (data.value == 1) {
                    // 出价有量走赔付
                    $('.template_1').removeClass('layui-hide');
                    $('.template_2').addClass('layui-hide');
                    $("#object_1").text('所有计划').attr('data-id', 1);
                    $("#object_2").text('指定计划').attr('data-id', 2);
                    var test = $('#use_object .rule-active').attr('data-id');
                    $('#rule-object').val(test);

                    // 修改满足条件
                    var html = '<div class="layui-form-item">\n' +
                        '                                    <label class="layui-form-label">满足条件</label>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">项</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="item[]" id="item[]">\n' +
                        '                                                <option value="2">消耗</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">条件</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="condition[]" id="condition[]">\n' +
                        '                                                <option value="1">大于bid</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">值</label>\n' +
                        '                                        <div class="layui-input-inline" style="width: 100px; margin-right: 0;">\n' +
                        '                                            <input type="text" class="layui-input" name="val1[]" lay-filter="val1">\n' +
                        '                                        <input type="hidden" value="0" name="val2[]">\n' +
                        '                                        </div>\n' +
                        '                                        <div class="layui-input-inline" style="width: 70px;">\n' +
                        '                                            <select name="" id="">\n' +
                        '                                                <option value="">倍</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>';
                    $('#condition').html(html);
                } else if (data.value == 2) {
                    // 出价无量走效果
                    $('.template_1').addClass('layui-hide');
                    $('.template_2').removeClass('layui-hide');
                    $("#object_1").text('所有创意').attr('data-id', 3);
                    $("#object_2").text('指定计划中的创意').attr('data-id', 4);
                    var test = $('#use_object .rule-active').attr('data-id');
                    $('#rule-object').val(test);

                    // 满足条件
                    var html = '<div class="layui-form-item">\n' +
                        '                                    <label class="layui-form-label">满足条件</label>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">项</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="item[]" id="item[]">\n' +
                        '                                                <option value="1">转化成本</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">条件</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="condition[]" id="condition[]">\n' +
                        '                                                <option value="1">大于</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">KPI值</label>\n' +
                        '                                        <div class="layui-input-inline" style="width: 100px; margin-right: 0;">\n' +
                        '                                            <input type="text" class="layui-input" name="val1[]" lay-filter="val1">\n' +
                        '                                            <input type="hidden" name="val2[]" value="0">\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                                <div class="layui-form-item">\n' +
                        '                                    <label class="layui-form-label"></label>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">项</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="item[]" id="item[]">\n' +
                        '                                                <option value="2">消耗</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">条件</label>\n' +
                        '                                        <div class="layui-input-inline">\n' +
                        '                                            <select name="condition[]" id="condition[]">\n' +
                        '                                                <option value="1">大于</option>\n' +
                        '                                            </select>\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                    <div class="layui-inline">\n' +
                        '                                        <label class="layui-form-label">值</label>\n' +
                        '                                        <div class="layui-input-inline" style="width: 100px; margin-right: 0;">\n' +
                        '                                            <input type="text" class="layui-input" name="val1[]" lay-filter="val1">\n' +
                        '                                            <input type="hidden" name="val2[]" value="0">\n' +
                        '                                        </div>\n' +
                        '                                    </div>\n' +
                        '                                </div>';
                    $('#condition').html(html);
                } else {
                    $('.template_1').addClass('layui-hide');
                    $('.template_2').addClass('layui-hide');
                    $('#template_main').addClass('layui-hide');
                }
                form.render('select');
            });

            form.on('submit(submit_rule)', function (data) {
                form.render('select');
            });

            form.render();
        });

    </script>
@endsection