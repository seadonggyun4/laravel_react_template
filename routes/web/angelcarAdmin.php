<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::domain('angelcar.example.com')->group(function () {
    Route::prefix('/admin')->group(function () {
        // 로그인 페이지
        Route::get('/login', function () {
            return Inertia::render("angelcarAdmin/LoginPage");
        })->name('admin.login');

        // 관리자 홈 페이지
        Route::middleware(['role:admin'])->group(function () {
            Route::get('/', function () {
                return Inertia::render("angelcarAdmin/HomePage");
            })->name('admin.home');
        });
    });
});
