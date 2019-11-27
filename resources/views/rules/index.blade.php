@extends('layouts.app')

@section('afterCss')

@endsection

@section('content')
    <div class="ydc-column ydc-column-8">
        <div class="ydc-release-content">
            <div class="ydc-tabPanel ydc-tabPanel-release">
                <div class="ydc-release-tab-head">
                    <ul>
                        <li class="hit">命令列表</li>
                    </ul>
                    <div class="ydc-release-amount">
                        <span>
                            今日添加数量：<em>{{ $todayRules }}</em>
                            /{{ $rulesCount }} <a href="{{ route('rules.create') }}" target="_blank">添加命令</a>
                        </span>
                    </div>
                </div>
                <div class="ydc-panes">
                    <div class="ydc-pane" style="display:block;">
                        <div class="clearfix marginBottom20">
                            <form action="{{ route('rules.index') }}">
                                {{ csrf_field() }}
                                <div class="fl ydc-group-sel">
                                    <select name="status" id="status" style="width:160px;">
                                        <option value="">请选择状态</option>
                                        <option value="1" @if($request->status == 1) selected @endif>开启</option>
                                        <option value="0" @if($request->status != '' && $request->status == 0) selected @endif>关闭</option>
                                    </select>
                                </div>
                                <div class="fl ydc-group-input" style="width: 755px;">
                                    <input type="text" name="rule_name" placeholder="请输入规则名称进行搜索" style="width:88%">
                                    <button type="submit" class="ydc-group-button">确 定</button>
                                </div>
                            </form>
                        </div>
                        <div class="ydc-assetStyle">
                            <span>共<span class="ydc-assetStyle-span">{{ $rulesCount }}</span>条内容</span>
                        </div>
                        <div id="adTableDiv">
                            <form class="layui-form">
                                <table class="table01">
                                    <thead>
                                        <tr>
                                            <td width="130">开启状态 <i data-tips="开启后不能编辑扫描时间" class="fa fa-question-circle tooltip-icon"></i></td>
                                            <td width="200">命令名称</td>
                                            <td>测试的预算</td>
                                            <td>预期KPI值</td>
                                            <td>超成本追加预算</td>
                                            <td>扫描时间 <i data-tips="定时扫描计划" class="fa fa-question-circle tooltip-icon"></i></td>
                                            <td>添加时间</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($rules as $value)
                                            <tr>
                                                <td>
                                                    <input type="checkbox" data-id="{{ $value->id }}" name="status" {{$value->status == 1 ? 'checked' : ''}} lay-filter="change_status" lay-skin="switch" lay-text="开启|关闭">
                                                </td>
                                                <td>
                                                    <elem>
                                                        <a class="rule_name" href="{{ route('rules.edit', $value->id) }}">{{ $value->rule_name }}</a> <i class="layui-icon layui-icon-edit ai_hide"></i>
                                                    </elem>
                                                </td>
                                                <td>{{ $value->budget }}</td>
                                                <td>{{ $value->kpi }}</td>
                                                <td>{{ $value->append_budget }}</td>
                                                <td>{{ $value->cron_time }}</td>
                                                <td>{{ $value->created_at }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                                <div class="ydc-pagination">{{ $rules->links() }}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('afterJS')
    @include('shared._message')
    <script>
        $(".rule_name").mouseenter(function () {
            $(this).next().removeClass('ai_hide');
        }).mouseleave(function () {
            $(this).next().addClass('ai_hide');
        });

        layui.use(['form'], function () {
            var form = layui.form;

            //监听指定开关
            form.on('switch(change_status)', function (data) {
                var _checked = data.elem.checked, id = $(this).data('id'), status = 0;

                if (_checked) status = 1;

                axios.post('{{route("rules.setStatus")}}', {
                    id, status
                }).then(function (response) {
                    Swal.fire({
                        title: '状态切换成功',
                        icon: 'success'
                    }).then(function () {
                        location.reload();
                    });
                }).catch(function (error) {
                    Swal.fire('状态切换失败！', '', 'error');
                });
            });

            form.render();
        });
    </script>
@endsection