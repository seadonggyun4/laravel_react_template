<?php

use Illuminate\Foundation\Application;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'meta' => [
            'title' => 'Angelcar | 제주도 렌터카 서비스',
            'description' => 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.',
        ],
    ]);
});

Route::fallback(function () {
    return Inertia::render('NotFoundPage', [
        'message' => '페이지를 찾을 수 없습니다.',
    ]);
});
