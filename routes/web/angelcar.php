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
                return Inertia::render("angelcar/HomePage", generateMeta(
                    $lang === 'en' ? "AngelCar | Jeju Car Rental Service" : "AngelCar | 제주도 렌터카 서비스",
                    $lang === 'en'
                        ? "AngelCar: The best car rental service in Jeju. Make your trip more convenient with a variety of car options and top-notch services."
                        : "AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
                ));
            });

            Route::prefix('rentcar')->group(function () use ($lang) {
                Route::get('/', function () use ($lang) {
                    return redirect(($lang === 'ko' ? '' : '/' . $lang) . '/rentcar/reservation');
                });

                Route::get('/reservation', function () use ($lang) {
                    return Inertia::render("angelcar/RentCarPage", generateMeta(
                        $lang === 'en' ? "AngelCar | Jeju Car Rental Service" : "AngelCar | 제주도 렌터카 서비스",
                        $lang === 'en'
                            ? "AngelCar: The best car rental service in Jeju. Make your trip more convenient with a variety of car options and top-notch services."
                            : "AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
                    ));
                });

                Route::get('/limited', function () use ($lang) {
                    return Inertia::render("angelcar/LimitedCarPage", generateMeta(
                        $lang === 'en' ? "AngelCar | Jeju Car Rental Service" : "AngelCar | 제주도 렌터카 서비스",
                        $lang === 'en'
                            ? "AngelCar: The best car rental service in Jeju. Make your trip more convenient with a variety of car options and top-notch services."
                            : "AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
                    ));
                });
            });
        });
    }
});

