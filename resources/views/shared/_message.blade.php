@foreach (['danger', 'warning', 'success', 'info'] as $msg)
    @if(session()->has($msg))
        <script>
            // 触发消息提示
            fire();

            function fire() {
                Toast.fire({
                    title: "{{session()->get($msg)}}",
                    icon: "success"
                });
            }
        </script>
    @endif
@endforeach