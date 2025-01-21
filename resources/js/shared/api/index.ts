import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { errorHandler } from "@/shared/api/apiErrorHandler";
import {CustomError} from "@/shared/api/CustomError";

/**
 * API 요청 함수
 * @param url - API 엔드포인트
 * @param options - Axios 요청 옵션
 * @param method - HTTP 메서드 (기본값: 'GET')
 * @param headers - 추가 요청 헤더 (기본값: 빈 객체)
 * @returns Promise<AxiosResponse<T>> - Axios 응답
 */
export const apiClient = async <T>(
    url: string,
    options: AxiosRequestConfig = {},
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
    headers: Record<string, string> = {}
): Promise<AxiosResponse<T>> => {
    const defaultOptions: AxiosRequestConfig = {
        url: `${url}`,
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };

    try {
        const response = await axios({
            ...defaultOptions,
            ...options,
        });
        return response as AxiosResponse<T>;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const { status, key, message } = errorHandler(error);
            throw new CustomError(status, key, message);
        } else {
            throw new CustomError(999, "UNKNOWN_ERROR", "알 수 없는 에러가 발생했습니다.");
        }
    }
};

