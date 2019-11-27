@extends('layouts.app')

@section('afterCss')

@endsection

@section('content')
    <div class="ydc-column-8">
        <div class="ydc-release-content marginBottom20">
            <div class="ydc-tabPanel ydc-tabPanel-release">
                <div class="ydc-release-tab-head">
                    <ul>
                        <li class="hit">命令列表</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="ai_Rule_borderBg"></div>
        <div class="ai_Rule_box">
            <div class="ai_Rule_info">
                <p style="font-size: 16px;padding:23px 0 30px"><b>AI智能命令添加</b></p>
                <!--AI策略模板-->
                <div class="ai_Rule_policyTemplate">
                    <div class="select005_box">
                        <select class="choosePolicy select005">
                            <option value="">请选择</option>
                            <option value="1">出价有量走赔付</option>
                            <option value="2">出价有量走效果</option>
                        </select>
                        <div class="select005_tip">策略模板</div>
                    </div>
                </div>
                <!--AI策略模板结束-->

                <!--AI应用对象-->
                <div class="ai_Rule_AO ai_hide">
                    <ul class="ai_little_tab_1 ai_allCus_tab">
                        <li class="choose all_plan">所有计划</li>
                        <li class="assign_plan">指定计划</li>
                    </ul>
                </div>
                <!--AI应用对象结束-->

                <!--AI规则文字-->
                <div class="ai_RuleParams ai_hide">
                    <div class="ai_ruleTip marginTop20" style="width: 250px;">
                        <p>请认真填写您想要匹配AI智能参数！</p>
                        <div>
                            <span onclick="$(this).parent().parent().remove()">×</span>
                        </div>
                    </div>

                    <div class="paramData marginTop20">
                        <form class="layui-form" method="post" action="{{route('rules.store')}}">
                            {{ csrf_field() }}
                            <input type="hidden" name="policy" id="policy">
                            <input type="hidden" name="application_object" id="application_object">
                            <div class="ai_param ai_param1">
                                <p>1.请输入您要测试的预算 <input type="text" class="input08" name="budget"> 值 <span class="colorff4a4a">（值为正整数）</span></p>
                            </div>
                            <div class="ai_param ai_param2">
                                <p>2.输入您的预期KPI值 <input type="text" class="input08" name="kpi"> 值 <span class="colorff4a4a">（值为正整数）</span></p>
                            </div>
                            <div class="ai_param ai_param3">
                                <p>3.若您的转化成本控制在预期范围内，计划预算撞线后，您想要追加多少预算？<input type="text" class="input08" name="append_budget"> 值 <span class="colorff4a4a">（值为正整数，最低100，撞线后，循环增加）</span></p>
                            </div>
                            <div class="ai_param ai_param4">
                                <p>4.AI命令扫描时间 <input type="number" class="input08" name="cron_time" min="1" max="60">  自定义时间，min/单位，共60s <span class="colorff4a4a">（建议扫描时间30小时，根据之前账户投放情况：包括消耗进度、跑量情况等，选择扫描时间）</span></p>
                            </div>
                            <div class="ai_param">
                                <div class="ai_param_submit">
                                    <button type="submit" class="ai_param_submit_button" lay-submit="" lay-filter="submit_rule">提交AI命令</button>
                                </div>
                            </div>
                            <div class="ai_param_submitOpen">
                                <div class="layui-inline">
                                    <div class="layui-input-inline" style="margin-top: 10px;">发布命令的同时，并开启命令。</div>
                                    <div class="layui-input-inline">
                                        <input type="checkbox" name="status" lay-skin="switch" lay-text="ON|OFF">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!--AI规则文字结束-->
            </div>
        </div>
        <div class="ai_Rule_bottom_borderBg"></div>
    </div>
@endsection

@section('afterJS')
    <script>
        // 监听选择策略模板
        $('.choosePolicy').change(function () {
            var policyVal = $(this).val();
            $('#policy').val(policyVal);

            // 显示选择对象
            $('.ai_Rule_AO').removeClass('ai_hide');
            $('.ai_RuleParams').removeClass('ai_hide');

            if (policyVal == 1) {
                // 出价有量走赔付
                $('#application_object').val(1);
                $('.all_plan').text('所有计划').attr('data-id', 1);
                $('.assign_plan').text('指定计划').attr('data-id', 2);
            } else if (policyVal == 2) {
                // 出价无量走效果
                $('#application_object').val(3);
                $('.all_plan').text('所有创意').attr('data-id', 3);
                $('.assign_plan').text('指定创意').attr('data-id', 4);
            } else {
                $('.ai_Rule_AO').addClass('ai_hide');
                $('.ai_RuleParams').addClass('ai_hide');
            }
        });

        // 切换选项卡
        $('.ai_allCus_tab li').click(function () {
            $(this).addClass('choose').siblings().removeClass('choose');
            // 获取当前对象的 id
            var data_id = $(this).data('id');
            $('#application_object').val(data_id);
        });

        layui.use(['form'], function () {
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

            form.on('submit(submit_rule)', function (data) {
                // console.log(JSON.stringify(data.field));
                // return false;
                form.render('select');
            });
        });
    </script>
@endsection