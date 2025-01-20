<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

// Fallback 처리
Route::fallback(function () {
    $currentDomain = request()->getHost();
    if ($currentDomain === 'shinhan.example.com') {
        return Inertia::render("shinhan/NotFoundPage");
    }
    return Inertia::render("angelcar/NotFoundPage");
});
