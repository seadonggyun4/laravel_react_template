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
