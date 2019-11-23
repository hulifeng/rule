<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>登录 - AI智能优化师工具 - AD FEED</title>
    <link rel="stylesheet" type="text/css" href="/static/login/style/register-login.css">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
</head>
<body>
<div id="box"></div>
<div class="cent-box">
    <div class="cent-box-header">
        <h1 class="main-title hide">AI智能优化师</h1>
        <h2 class="sub-title">让广告实现自动化投放</h2>
    </div>

    <div class="cont-main clearfix">
        <div class="index-tab">
            <div class="index-slide-nav">
                <a href="javascript:;" class="active">登录</a>
                <a href="javascript:;">注册</a>
                <div class="slide-bar"></div>
            </div>
        </div>

        <form method="POST" action="{{ route('login') }}">
            @csrf
            <div class="login form">
                <div class="group">
                    <div class="group-ipt email">
                        <input type="text" name="email" id="email" class="ipt" placeholder="邮箱地址" value="{{ old('email') }}" required>
                    </div>
                    <div class="group-ipt password">
                        <input type="password" name="password" id="password" class="ipt" placeholder="输入您的登录密码" required>
                    </div>
                    <div class="group-ipt verify">
                        <input type="text" name="captcha" id="verify" class="ipt" placeholder="输入验证码" required>
                        <img src="{{captcha_src('inverse')}}" class="imgcode">
                    </div>
                </div>
            </div>

            <div class="remember clearfix">
                <label class="remember-me">
                    {{--<span class="icon"><span class="zt"></span></span>--}}
                    <input type="checkbox" name="remember"> 记住我
                    {{--<input type="checkbox" name="remember" id="remember-me" class="remember-mecheck" value="1" {{ old('remember') ? 'checked' : '' }}>记住我--}}
                </label>
                <label class="forgot-password">
                    <a href="javascript:;">忘记密码？</a>
                </label>
            </div>

            <div class="button">
                <button type="submit" class="login-btn register-btn" id="button">登录</button>
            </div>
        </form>
    </div>
</div>

<div class="footer">
    <p>AI智能优化师工具 - AD FEED</p>
    <p>Designed By Mason & <a href="javascript:;">AD FEED</a> 2019</p>
</div>

<script src='/static/login/js/particles.js' type="text/javascript"></script>
<script src='/static/login/js/background.js' type="text/javascript"></script>
<script src='/static/login/js/jquery.min.js' type="text/javascript"></script>
<script src='/static/login/js/layer/layer.js' type="text/javascript"></script>
<script src='/static/login/js/index.js' type="text/javascript"></script>
<script src="{{ mix('js/app.js') }}"></script>
@include('errors')
<script>
    $('.imgcode').hover(function () {
        layer.tips("看不清？点击更换", '.verify', {
            time: 6000,
            tips: [2, "#3c3c3c"]
        })
    }, function () {
        layer.closeAll('tips');
    }).click(function () {
        $(this).attr('src', '{{captcha_src("inverse")}}' + Math.random());
    });

    // $("#remember-me").click(function () {
    //     var n = document.getElementById("remember-me").checked;
    //     if (n) {
    //         $(".zt").hide();
    //     } else {
    //         $(".zt").show();
    //     }
    // });
</script>
</body>
</html>