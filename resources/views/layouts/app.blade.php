<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'AI智能优化师') - AI命令列表</title>
    <link rel="shortcut icon" href="/images/favicon.ico">
    <link rel="stylesheet" href="/static/layui/css/layui.css">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    {{--其他 css--}}
    @yield('AfterCss')
</head>
<body class="rule-body">
    <div class="rule-fluid {{ route_class() }}-page" style="max-width: 1200px;">
        {{--主体内容--}}
        @yield('content')
    </div>
<script src="{{ mix('js/app.js') }}"></script>
<script src="/static/layui/jquery-3.4.1.min.js"></script>
<script src="/static/layui/layui.all.js"></script>
{{--消息提示--}}
@include('shared._message')
@include('errors')
{{--其他 js--}}
@yield('AfterJS')
</body>
</html>