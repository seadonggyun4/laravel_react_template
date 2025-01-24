<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::domain('angelcar.example.com')->group(function () {
    $supportedLanguages = ['ko', 'en'];

    foreach ($supportedLanguages as $lang) {
        Route::prefix($lang === 'ko' ? '' : $lang)->group(function () use ($lang) {
            $data = generateMeta('angelcar.example.com', $lang);

            foreach ($data as $K => $V) {
                if ($K == '/') {
                    $meta = $V[$lang][0];

                    Route::get($V[$lang][0]['url'], function (Request $request) use ($meta) {
                        Session::regenerateToken();
                        return Inertia::render($meta['view'], [
                            'meta' => [
                                'title' => $meta['title'],
                                'description' => $meta['description'],
                                'keywords' => $meta['keyword'],
                                'token' => csrf_token(),
                            ],
                        ]);
                    });
                } else {
                    Route::prefix($K)->group(function () use ($lang, $V) {
                        foreach ($V[$lang] as $K2 => $V2) {
                            $meta = $V2;

                            Route::get($V2['url'], function (Request $request) use ($meta) {
                                Session::regenerateToken();
                                return Inertia::render($meta['view'], [
                                    'meta' => [
                                        'title' => $meta['title'],
                                        'description' => $meta['description'],
                                        'keywords' => $meta['keyword'],
                                        'token' => csrf_token(),
                                    ],
                                ]);
                            });
                        }
                    });
                }
            }
        });
    }
});



