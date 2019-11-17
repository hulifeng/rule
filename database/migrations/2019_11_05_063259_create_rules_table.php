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
            $table->tinyInteger('rule_object')->default(1)->comment('应用对象');
            $table->tinyInteger('rule_policy')->default(1)->comment('策略模板');
            $table->unsignedBigInteger('ad_id')->nullable()->comment('广告ID');
            $table->tinyInteger('execute_item')->default(1)->comment('执行项');
            $table->tinyInteger('execute_condition')->default(1)->comment('执行条件');
            $table->string('execute_val')->nullable()->comment('执行值');
            $table->string('clock')->nullable()->comment('时刻');
            $table->tinyInteger('frequency')->default(0)->comment('频率每天两次');
            $table->string('shell')->default('');
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
