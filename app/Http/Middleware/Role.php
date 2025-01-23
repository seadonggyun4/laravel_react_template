<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Role
{
    public function handle(Request $request, Closure $next, $role): Response
    {
        // 인증되지 않은 경우
        if (!$request->user()) {
            return redirect()->route('admin.login')->with('error', '로그인이 필요합니다.');
        }

        // 역할이 맞지 않는 경우
        if ($request->user()->role != $role) {
            return redirect()->route('admin.login')->with('error', '권한이 없습니다.');
        }

        return $next($request);
    }
}

