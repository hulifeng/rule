<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRulesItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rule_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('item')->default(1)->comment('项');
            $table->tinyInteger('condition')->default(1)->comment('条件');
            $table->unsignedInteger('val1')->comment('值1');
            $table->unsignedInteger('val2')->comment('值2');
            $table->unsignedBigInteger('rule_id');
            $table->foreign('rule_id')->references('id')->on('rules')->onDelete('cascade');
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
        Schema::dropIfExists('rule_items');
    }
}
