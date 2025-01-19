<?php

use Inertia\Inertia;

// 사이트별 공통 메타정보 생성 함수
function generateMeta($title, $description) {
    return [
        'meta' => [
            'title' => $title,
            'description' => $description,
        ],
    ];
}

function setupRoutes($prefix, $site) {
    // Home Page
    Route::get($prefix, function () use ($site) {
        return Inertia::render("$site/HomePage", generateMeta(
            "$site | 제주도 렌터카 서비스",
            "$site: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
        ));
    });

    // Rentcar Group
    Route::group(['prefix' => "$prefix/rentcar"], function () use ($site) {
        Route::get('/', function () {
            return redirect('rentcar/reservation');
        });

        Route::get('/reservation', function () use ($site) {
            return Inertia::render("$site/RentCarPage", generateMeta(
                "$site | 제주도 렌터카 서비스",
                "$site: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
            ));
        });

        Route::get('/limited', function () use ($site) {
            return Inertia::render("$site/LimitedCarPage", generateMeta(
                "$site | 제주도 렌터카 서비스",
                "$site: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요."
            ));
        });
    });

    // Group 내에서 Fallback 처리
    Route::group(['prefix' => $prefix], function () use ($site) {
        Route::fallback(function () use ($site) {
            $defaultSite = 'angelcar';
            $resolvedSite = $site === '' ? $defaultSite : $site;

            return Inertia::render("$resolvedSite/NotFoundPage");
        });
    });
}

// 엔젤카 라우트 설정
setupRoutes('/', '');

// 신한엔젤카 라우트 설정
setupRoutes('/sinhan', 'shinhan');


