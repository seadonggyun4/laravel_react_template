<?php

use Illuminate\Foundation\Application;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::fallback(function () {
    return Inertia::render('NotFoundPage', [
        'message' => '페이지를 찾을 수 없습니다.',
    ]);
});
