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
            $table->string('acid')->default('')->comment('唯一标志');
            $table->string('rule_name')->nullable()->comment('规则名称');
            $table->tinyInteger('policy')->default(1)->comment('策略模板');
            $table->tinyInteger('application_object')->default(1)->comment('应用对象');
            $table->unsignedInteger('budget')->nullable()->comment('预算');
            $table->unsignedInteger('kpi')->nullable()->comment('预期KPI值');
            $table->unsignedInteger('append_budget')->nullable()->comment('追加预算');
            $table->string('cron_time')->nullable()->comment('扫描时间');
            $table->tinyInteger('status')->default(0)->comment('状态 1, 开启 0, 关闭');
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
