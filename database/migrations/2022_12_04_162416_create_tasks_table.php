<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(false);
            $table->string('description')->nullable(true);
            $table->enum('status',['To Do','In Progress','In Revision','Completed'])->default('TO DO');
            $table->enum('priority',['No priority','Normal','High','Urgent'])->default('No priority');
            $table->foreignIdFor(\App\Models\Goal::class)->nullable(true);
            $table->foreignIdFor(\App\Models\Task::class)->nullable(true);
            $table->foreignIdFor(\App\Models\User::class)->nullable(false);
            $table->timestamp('start_date')->nullable(true);
            $table->timestamp('end_date')->nullable(true);
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
        Schema::dropIfExists('tasks');
    }
};
