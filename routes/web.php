<?php

use Inertia\Inertia;

// 공통 메타정보 생성 함수
function generateMeta($title, $description) {
    return [
        'meta' => [
            'title' => $title,
            'description' => $description,
        ],
    ];
}

// AngelCar 도메인 라우트 그룹
Route::domain('angelcar.example.com')->group(function () {
    Route::get('/', function () {
        return Inertia::render("angelcar/HomePage", generateMeta(
            "AngelCar | 제주도 렌터카 서비스",
            "AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
        ));
    });

    Route::prefix('rentcar')->group(function () {
        Route::get('/', function () {
            return redirect('rentcar/reservation');
        });

        Route::get('/reservation', function () {
            return Inertia::render("angelcar/RentCarPage", generateMeta(
                "AngelCar | 제주도 렌터카 서비스",
                "AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
            ));
        });

        Route::get('/limited', function () {
            return Inertia::render("angelcar/LimitedCarPage", generateMeta(
                "AngelCar | 제주도 렌터카 서비스",
                "AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
            ));
        });
    });
});

// Shinhan AngelCar 도메인 라우트 그룹
Route::domain('shinhan.example.com')->group(function () {
    Route::get('/', function () {
        return Inertia::render("shinhan/HomePage", generateMeta(
            "Shinhan AngelCar | 제주도 렌터카 서비스",
            "Shinhan AngelCar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
        ));
    });
});

// fallback 분기
Route::fallback(function () {
    $currentDomain = request()->getHost();
    if ($currentDomain === 'shinhan.example.com') {
        return Inertia::render("shinhan/NotFoundPage");
    }
    return Inertia::render("angelcar/NotFoundPage");
});
