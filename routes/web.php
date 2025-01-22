<?php

use Inertia\Inertia;

// 공통 메타정보 생성 함수
function generateMeta($url, $lang = 'ko') {

    $menu = fopen('../menu.txt', 'r');
    $tmp = fgets($menu);
    fclose($menu);
    $header = json_decode(unserialize($tmp) , true);

    return [
        'meta' => [
            'title' => $header[$url][$lang]['title'],
            'description' => 'test',
        ],
    ];
}
