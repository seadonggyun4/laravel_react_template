<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// AngelCar 도메인 라우트 그룹
Route::domain('angelcar.example.com')->group(function () {
    // 언어별 라우트 그룹 설정
    $supportedLanguages = ['ko', 'en'];

    foreach ($supportedLanguages as $lang) {
        Route::prefix($lang === 'ko' ? '' : $lang)->group(function () use ($lang) {
            Route::get('/', function () use ($lang) {
                return Inertia::render("angelcar/HomePage", generateMeta('/', $lang));
            });

            Route::prefix('rentcar')->group(function () use ($lang) {
                Route::get('/', function () use ($lang) {
                    return redirect(($lang === 'ko' ? '' : '/' . $lang) . '/rentcar/reservation');
                });

                Route::get('/reservation', function () use ($lang) {
                    return Inertia::render("angelcar/RentCarPage");
                });

                Route::get('/limited', function () use ($lang) {
                    return Inertia::render("angelcar/LimitedCarPage");
                });
            });
        });
    }
});

