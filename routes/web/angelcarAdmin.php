<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::domain('angelcar.example.com')->group(function () {
     // 관리자 로그인 페이지
     Route::get('/admin/login', function () {
         return Inertia::render("angelcarAdmin/LoginPage");
     })->name('admin.login');

     Route::prefix('/admin')->group(function () {
         // 관리자 홈 페이지 (auth 및 role:admin 미들웨어 적용)
         Route::middleware(['role:admin'])->group(function () {
             Route::get('/', function () {
                 return Inertia::render("angelcarAdmin/HomePage");
             })->name('admin.home');
         });
     });
});
