<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu', function (Blueprint $table) {
            $table->id();
            $table->string('site');
            $table->string('url')->unique();
            $table->string('title')->unique();
            $table->text('description');
            $table->string('view');
            $table->string('keyword');
            $table->rememberToken();
            $table->timestamps();
        });

    }

};
