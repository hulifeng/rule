@extends('layouts.app')

@section('AfterCss')
    <style>
        .sweetAlert {
            margin-right: 25px;
        }
    </style>
@endsection

@section('content')
    <div class="layui-row">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">
                    <span class="layui-breadcrumb">
                      <a href="{{ route('rules.index') }}"><cite>规则列表</cite></a>
                      <a href="{{ route('rules.create') }}">新建规则</a>
                    </span>
                </div>
                <div class="layui-card-body">
                    <a href="{{ route('rules.create') }}" class="layui-btn rule-purple-bg">新建规则</a>
                    <table class="layui-table" id="rule_list" lay-filter="rule_list"></table>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('AfterJS')
    <script>
        layui.use(['table', 'form'], function () {
            var table = layui.table,
                form = layui.form;

            table.render({
                elem: "#rule_list",
                url: "/api/v1/rules",
                cols: [[
                    {
                        field: '', title: '运行/暂停', templet: function (res) {
                            var _checked = res.status == 1 ? 'checked' : '';
                            return '<div><input type="checkbox" data-id="' + res.id + '" ' + _checked + ' lay-filter="run" name="switch" lay-skin="switch" lay-text="ON|OFF"></div>';
                        }
                    }
                    , {field: 'rule_name', title: '规则名称'}
                    , {field: 'id', title: '规则ID'}
                    , {field: 'created_at', title: '创建时间'}
                    , {field: '', title: '操作', templet: function (res) {
                            return '<div class="layui-btn-group">' +
                                '<a href="/rules/' + res.id + '/edit" class="layui-btn-xs" style="color: #b6adc5;"><i class="fa fa-edit"></i></a>\n' +
                                '<a type="button" data-id="'+res.id+'"  class="layui-btn-xs" style="color: #b6adc5;" onclick="delete_rule(this)"><i class="fa fa-trash-o"></i></a>\n' +
                                '</div>';
                        }}
                ]],
                page: true
            });

            form.on('switch(run)', function (data) {
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
                    swal('状态切换失败！', '', 'error');
                });
            });
        });

        function delete_rule(obj) {
            var id = $(obj).data('id');

            Swal.fire({
                title: "您确定要删除该规则吗？",
                icon: 'warning',
                text: "删除后将无法恢复，请谨慎操作！",
                confirmButtonColor: '#3085d6',// 确定按钮的 颜色
                confirmButtonText: '确定',// 确定按钮的 文字
                showCancelButton: true,
                cancelButtonColor: '#d33', // 取消按钮的 颜色
                cancelButtonText: "取消", // 取消按钮的 文字
            }).then((isConfirm) => {
                try {
                    if (isConfirm.value) {
                        axios.delete('/rules/' + id).then(function () {
                            Swal.fire('删除成功', '', 'success').then(function () {
                                location.reload();
                            });
                        });
                    } else {
                        Swal.fire('取消', '', 'error');
                    }
                } catch (e) {
                    alert(e);
                }
            });
        }
    </script>
@endsection