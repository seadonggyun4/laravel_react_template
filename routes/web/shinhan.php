<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Shinhan AngelCar 도메인 라우트 그룹
Route::domain('shinhan.example.com')->group(function () {
    Route::get('/', function () {
        return Inertia::render("shinhan/HomePage");
    });
});
