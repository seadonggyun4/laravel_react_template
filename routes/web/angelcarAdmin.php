<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// AngelCar Admin 도메인 라우트 그룹
Route::domain('angelcar.example.com')->group(function () {
    Route::get('/login', function () {
        return Inertia::render("angelcar/HomePage"); // 로그인 페이지 컴포넌트
    })->name('login');


    Route::prefix('/admin')->group(function () {
        // 로그인 페이지
        Route::get('/login', function () {
            return Inertia::render("angelcarAdmin/LoginPage");
        })->name('admin.login');

        // 관리자 홈 페이지 (auth 및 role:admin 미들웨어 적용)
        Route::middleware(['auth', 'role:admin'])->group(function () {
            Route::get('/', function () {
                return Inertia::render("angelcarAdmin/HomePage");
            })->name('admin.home');
        });
    });
});
