@extends('layouts.app')

@section('afterCss')

@endsection

@section('content')
    <div class="ydc-column ydc-column-8">
        <div class="ydc-release-content">
            <div class="ydc-tabPanel ydc-tabPanel-release">
                <div class="ydc-release-tab-head">
                    <ul>
                        <li class="hit">账号设置</li>
                    </ul>
                </div>
                <div class="ydc-panes">
                    <div class="ydc-pane ydc-pane-clear" style="display:block;">
                        <form action="{{ route('users.update', $user->id) }}" method="post" enctype="multipart/form-data">
                            {{ method_field('PATCH') }}
                            {{ csrf_field() }}
                            @if($errors)
                                @foreach ($errors as $value)
                                    {{ $value }}
                                @endforeach
                            @endif
                            <div class="ydc-reg-form-group clearfix">
                                <label>账号名称</label>
                                <div class="ydc-reg-form-input">
                                    <input type="text" id="name" name="name" class="ydc-form-control"
                                           placeholder="请填写账号名称" style="width:200px;" value="{{ $user->name }}">
                                    <div style="padding: 20px 0;"></div>
                                </div>
                            </div>
                            <div class="ydc-reg-form-group clearfix">
                                <label>邮箱</label>
                                <div class="ydc-reg-form-input">
                                    <input type="text" id="email" name="email" value="{{ $user->email }}" class="ydc-form-control" placeholder="请填写邮箱">
                                    <div style="padding: 20px 0;"></div>
                                </div>
                            </div>
                            <div class="ydc-reg-form-group clearfix">
                                <label>账号简介</label>
                                <div class="ydc-reg-form-input">
                                    <input type="text" id="introduction" value="{{ $user->introduction }}" name="introduction" class="ydc-form-control" placeholder="请填写账号简介">
                                    <div style="padding: 20px 0;"></div>
                                </div>
                            </div>
                            <div class="ydc-reg-form-group clearfix">
                                <label>联系手机</label>
                                <div class="ydc-reg-form-input">
                                    <input type="text" id="mobile" name="mobile" class="ydc-form-control" value="{{ $user->mobile }}" placeholder="请填写手机号">
                                    <div style="padding: 20px 0;"></div>
                                </div>
                            </div>
                            <div class="ydc-reg-form-group clearfix">
                                <label>个人头像</label>
                                <div class="ydc-reg-form-input">
                                    <input type="hidden" name="avatar" id="avatar" value="{{ $user->avatar }}">
                                    <input type="file" id="file" style="display: none;">
                                    <img src="{{ $user->avatar ?: '/images/default-thumbnail.png' }}" id="upload_img" style="max-width: 145px;">
                                </div>
                            </div>
                            <div class="ydc-reg-form-group clearfix" style="margin-top:40px;">
                                <div class="ydc-reg-form-button" style="margin-left:255px;">
                                    <button type="submit" class="ad_save_button">保存</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('afterJS')
    <script>
        $('#upload_img').click(function () {
            $('#file').click();
        });

        function fire(title) {
            Toast.fire({
                title: title,
                icon: "success"
            });
        }
        
        $('#file').change(function () {
            var formData = new FormData();
            formData.append('avatar', $('#file')[0].files[0]);

            axios({
                method: 'post',
                url: '{{ route('users.upload_avatar') }}',
                data: formData,
                responseType: 'json'
            }).then(function (response) {
                console.log(response.data.status);
                if (response.data.status == 0) {
                    fire(response.data.info);
                } else if (response.data.status == 200) {
                    var src = response.data.path;
                    $('#upload_img').attr('src', src);
                    $('#avatar').val(src);
                    setTimeout(function () {
                        fire('图片上传成功！');
                    }, 1500);
                }
            }).catch(function (error) {
                // Swal.fire('');
            });
        });
    </script>
@endsection