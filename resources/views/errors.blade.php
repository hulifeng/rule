@if (count($errors) > 0)
    @foreach ($errors->all() as $error)
        <script>
            // 触发消息提示
            fire();

            function fire() {
                Toast.fire({
                    title: "{{$error}}",
                    icon: "error",
                    timer: 3000
                });
            }
        </script>
    @endforeach
@endif