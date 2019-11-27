<?php

namespace App\Http\Controllers;

use App\Handlers\ImageUploadHandler;
use App\Http\Requests\UserRequest;
use App\User;
use Illuminate\Contracts\Support\MessageProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    /**
     * 编辑资料
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit(User $user)
    {
        return view('users.edit', compact('user'));
    }

    public function update(User $user, UserRequest $request)
    {
        $user->update($request->only([
            'name', 'email', 'introduction', 'mobile', 'avatar'
        ]));

        session()->flash('success', '更新个人资料成功！');

        return redirect()->back();
    }

    public function upload_avatar(ImageUploadHandler $uploader)
    {
        $validator = Validator::make(request()->all(), [
            'avatar' => 'mimes:jpeg,bmp,png,gif|dimensions:min_width=145,min_height=145'
        ], [
            'avatar.mimes' => '头像必须是 jpeg, bmp, png, gif 格式的图片',
            'avatar.dimensions' => '图片的清晰度不够，宽和高需要 145px 以上',
        ]);

        if ($validator->fails()) {
            if ($validator instanceof MessageProvider) {
                $avatarErrors = $validator->getMessageBag()->get('avatar');
                $tip = '';
                foreach ($avatarErrors as $k => $v) {
                    $tip .= $v . '。';
                }
            }
            return [
                'status' => '0', 'info' => $tip
            ];
        }

        if (request()->hasFile('avatar')) {
            $result = $uploader->save(request()->avatar, 'avatars', Auth::id());
            if ($result) {
                return ['status' => 200, 'path' => $result['path']];
            }
        }
    }
}
