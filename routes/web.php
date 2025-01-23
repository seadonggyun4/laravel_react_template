<?php

use Inertia\Inertia;

// 공통 메타정보 생성 함수
function generateMeta( $site , $lang = 'ko') {
    $menu = fopen('../menu.txt', 'r');
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
