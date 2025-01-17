<?php

use Inertia\Inertia;

// [엔젤카 메인 라우트]
Route::group(['prefix' => '/'], function () {
    // Home Page
    Route::get('/', function () {
        return Inertia::render('web/HomePage', [
            'meta' => [
                'title' => 'Angelcar | 제주도 렌터카 서비스',
                'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
            ],
        ]);
    });

    // Rentcar Group
    Route::group(['prefix' => 'rentcar'], function () {
        Route::get('/', function () {
            return redirect('rentcar/reservation');
        });

        Route::get('/reservation', function () {
            return Inertia::render('web/RentCarPage', [
                'meta' => [
                    'title' => 'Angelcar | 제주도 렌터카 서비스',
                    'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
                ],
            ]);
        });

        Route::get('/limited', function () {
            return Inertia::render('web/LimitedCarPage', [
                'meta' => [
                    'title' => 'Angelcar | 제주도 렌터카 서비스',
                    'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
                ],
            ]);
        });
    });

    // Fallback Route
    Route::fallback(function () {
        return Inertia::render('web/NotFoundPage');
    });
});

// [엔젤카 메인 라우트]
Route::group(['prefix' => '/sinhan'], function () {
    // Home Page
    Route::get('/', function () {
        return Inertia::render('web/HomePage', [
            'meta' => [
                'title' => 'Angelcar | 제주도 렌터카 서비스',
                'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
            ],
        ]);
    });

    // Rentcar Group
    Route::group(['prefix' => 'rentcar'], function () {
        Route::get('/', function () {
            return redirect('rentcar/reservation');
        });

        Route::get('/reservation', function () {
            return Inertia::render('web/RentCarPage', [
                'meta' => [
                    'title' => 'Angelcar | 제주도 렌터카 서비스',
                    'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
                ],
            ]);
        });

        Route::get('/limited', function () {
            return Inertia::render('web/LimitedCarPage', [
                'meta' => [
                    'title' => 'Angelcar | 제주도 렌터카 서비스',
                    'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
                ],
            ]);
        });
    });

    // Fallback Route
    Route::fallback(function () {
        return Inertia::render('web/NotFoundPage');
    });
});






