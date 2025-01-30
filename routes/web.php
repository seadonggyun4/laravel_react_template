<?php

use Inertia\Inertia;

// 공통 메타정보 생성 함수
function generateMeta( $site , $lang = 'ko') {
//     $menu = fopen('/home/angelcar/public_html/public/menu.json', 'r');
    $menu = fopen('/Users/dgseo/Desktop/angelcar_laravel/public/menu.json', 'r');
    $tmp = fgets($menu);
    fclose($menu);
    $header = json_decode($tmp , true);

    $data = array () ;

    foreach ($header['menu'] AS $K=>$V)
    {
        if($V['site'] == $site && isset( $lang ) )
        {
            if( $lang == $V['lang']){
                $data[$V['group']][$lang][] = $V;

            }
        }

    }
   return $data ;
}
