<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'AI智能优化师') - AI命令列表</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link type="text/css" rel="stylesheet" href="/static/beta/css/core.css">
    <link type="text/css" rel="stylesheet" href="/static/beta/css/icon.css">
    <link type="text/css" rel="stylesheet" href="/static/beta/css/home.css">
    {{--加载 layui--}}
    <link type="text/css" rel="stylesheet" href="/static/layui/css/layui.css">
    {{--加载自定义样式--}}
    <link type="text/css" rel="stylesheet" href="/static/mason/mason.css">
    <link type="text/css" rel="stylesheet" href="">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    @yield('afterCss')
</head>
<body>

<!-- head YDC begin -->
<header class="ydc-header">
    <div class="ydc-entered">
        <div class="ydc-header-content ydc-flex">
            <div class="ydc-column">
                <a href="index.html" class="ydc-column-ydc-logo">
                    <img src="/images/title_logo.png" title="" about="" alt="">
                </a>
            </div>
            <div class="ydc-column">
                <div class="ydc-column-user">
                    <div class="ydc-user-photo">
                        <a href="javascript:;">
                            <img src="{{ Auth::user()->avatar }}" title="" about="" alt="">
                        </a>
                    </div>
                    <div class="ydc-user-info">
                        <div class="ydc-user-info-name">
                            <a href="javascript:;">{{ Auth::user()->name }}</a>
                        </div>
                        <div class="ydc-user-info-func ydc-flex">
                            <span class="ydc-tag">新手期</span>
                            <span class="ydc-mal"><i class="ydc-icon ydc-icon-mail fl"></i><em>12</em></span>
                            <form action="{{ route('logout') }}" method="post">
                                {{ csrf_field() }}
                                <button class="ydc-tag" type="submit" style="border: 0px solid transparent;">退出</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- head YDC end -->

<!-- content YDC begin -->
<section>
    <div class="ydc-content-slide ydc-body">
        <div class="ydc-flex">
            <!-- left begin -->
            <div class="ydc-column ydc-column-2">
                <div class="ydc-menu">
                    <ul>
                        <li class="ydc-menu-item">
                            <a href="index.html" class="">
                                <i class="ydc-icon ydc-icon-home fl"></i>
                                首页
                            </a>
                        </li>
                        <li class="ydc-menu-item">
                            <span class="ydc-menu-sub-title">
                                <i class="ydc-icon ydc-icon-set fl"></i>
                                设置
                            </span>
                            <ul>
                                <li>
                                    <a class="{{ active_class(if_route('users.edit', Auth::id())) }}" href="{{ route('users.edit', Auth::id()) }}">账号信息</a>
                                </li>
                            </ul>
                        </li>
                        <li class="ydc-menu-item">
                            <span class="ydc-menu-sub-title">
                                <i class="ydc-icon ydc-icon-file fl"></i>
                                管理
                            </span>
                            <ul>
                                <li>
                                    <a href="{{route('rules.index')}}" class="{{ active_class(if_route('rules.index') || if_route('rules.create') || if_route('rules.edit')) }}">AI命令列表</a>
                                </li>
                                <li>
                                    <a href="{{route('reports.index')}}" class="{{ active_class(if_route('reports.index')) }}">AI智能报表</a>
                                </li>
                                <li>
                                    <a href="javascript:;">AI智能创意</a>
                                </li>
                                <li>
                                    <a href="javascript:;">AI系统进程日志</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- left end -->
            <!-- right begin -->
            @yield('content')
            <!-- right end -->
        </div>
    </div>

</section>
<!-- content YDC end -->

<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
<script src="/static/layui/jquery-3.4.1.min.js"></script>
<script src="/static/layui/layui.all.js"></script>
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
</script>
@include('shared._message')
@include('errors')
@yield('afterJS')
</body>
</html>