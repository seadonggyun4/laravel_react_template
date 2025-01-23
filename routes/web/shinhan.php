<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Shinhan AngelCar 도메인 라우트 그룹
Route::domain('shinhan.example.com')->group(function () {
    Route::get('/', function () {
        return Inertia::render("shinhan/HomePage", [
           'meta' => [
               'title' => '신한카드 올댓 서비스 | 제주엔젤 렌터카',
               'description' => '신한카드 올댓 서비스 전용 사이트',
               'keywords' => '신한카드, 엔젤렌터카, 렌터카',
           ],
       ]);
    });
});
