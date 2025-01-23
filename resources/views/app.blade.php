<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ $page['props']['meta']['title'] ?? config('app.name', 'Laravel') }}</title>

        <!-- SEO 메타 태그 -->
        <meta name="description" content="{{ $page['props']['meta']['description'] ?? 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.' }}">
        <meta name="keywords" content="{{$page['props']['meta']['keywords'] ?? '제주도 렌터카, 제주 렌터카 추천, Angelcar, 제주 여행 차량 대여'}}">
        <meta name="author" content="Angelcar">
        <meta name="robots" content="index, follow">

        <!-- Open Graph 메타 태그 -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="{{ $page['props']['meta']['title'] ?? 'Angelcar | 제주도 렌터카 서비스' }}">
        <meta property="og:description" content="{{ $page['props']['meta']['description'] ?? 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.' }}">
        <meta property="og:image" content="https://angelcar.com/images/fixed-image.jpg"> <!-- 고정 이미지 URL -->
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:locale" content="ko_KR">

        <!-- Twitter 메타 태그 -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $page['props']['meta']['title'] ?? 'Angelcar | 제주도 렌터카 서비스' }}">
        <meta name="twitter:description" content="{{ $page['props']['meta']['description'] ?? 'Angelcar: 제주도 최고의 렌터카 서비스. 다양한 차량 옵션과 최고의 서비스로 제주 여행을 더 편리하게 만드세요.' }}">
        <meta name="twitter:image" content="https://angelcar.com/images/fixed-image.jpg"> <!-- 고정 이미지 URL -->

        <!-- Naver 검색 최적화를 위한 메타 태그 -->
        <meta property="naver-site-verification" content="네이버 웹마스터 도구에서 제공한 인증 코드">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
