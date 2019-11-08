<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rules', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('rule_name')->comment('规则名称');
            $table->tinyInteger('excute_item')->default(1)->comment('执行操作项');
            $table->tinyInteger('excute_action')->nullable()->comment('执行操作条件');
            $table->tinyInteger('excute_switch')->nullable()->comment('执行操作条件');
            $table->unsignedInteger('excute_val')->nullable()->comment('执行操作项值');
            $table->boolean('excute_val_type')->nullable()->default(0)->comment('执行操作项值类型 0, 元 1, 百分值');
            $table->tinyInteger('frequency')->nullable()->comment('执行操作频次');
            $table->tinyInteger('frequency_type')->nullable()->comment('执行操作频次类型');
            $table->unsignedInteger('upper_limit')->nullable()->comment('执行操作上限');
            $table->unsignedInteger('lower_limit')->nullable()->comment('执行操作下限');
            $table->boolean('condition_relation')->default(0)->comment('条件关系 0, and 1, or');
            $table->boolean('notice')->default(0)->comment('发送提醒 0, 不发送 1, 发送');
            $table->boolean('check_time')->default(0)->comment('检查时间 0, 每小时 1,每天');
            $table->string('clock')->nullable()->comment('检查时刻');
            $table->boolean('status')->default(0)->comment('规则开启状态 1, 开启');
            $table->boolean('is_del')->default(0)->comment('是否删除 1, 删除 0, 正常');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rules');
    }
}
