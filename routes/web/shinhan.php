<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Shinhan AngelCar 도메인 라우트 그룹
Route::domain('shinhan.example.com')->group(function () {
    Route::get('/', function () {
        return Inertia::render("shinhan/HomePage", generateMeta(
            "Shinhan AngelCar | 제주도 렌터카 서비스",
            "Shinhan AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
        ));
    });
});
