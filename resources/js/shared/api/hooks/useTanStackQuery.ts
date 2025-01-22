import { useQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/shared/api";
import { AxiosResponse } from "axios";

/**
 * TanStack Query를 사용하는 커스텀 훅
 * @param key - React Query 캐시 키
 * @param url - API 엔드포인트
 * @param method - HTTP 메서드 (GET, POST, PUT, DELETE, PATCH)
 * @param headers - 추가 요청 헤더
 * @param queryOptions - React Query의 추가 옵션
 * @param data - 요청 데이터 (POST, PUT, DELETE, PATCH 용)
 * @returns 데이터 패칭 또는 조작을 위한 훅 결과
 */
export const useTanStackQuery = <T>(
    key: readonly unknown[],
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
    headers: Record<string, string> = {},
    queryOptions: Record<string, any> = {},
    data?: any
) => {
    if (method === "GET") {
        return useQuery<T, Error>({
            queryKey: key, // key는 항상 배열이어야 함
            queryFn: async () => {
                const response: AxiosResponse<T> = await apiClient(url, null, method, headers);
                return response.data;
            },
            ...queryOptions,
        });
    } else {
        return useMutation<T, Error, any>({
            mutationKey: key, // key는 항상 배열이어야 함
            mutationFn: async (mutationData: any) => {
                const response: AxiosResponse<T> = await apiClient(url, mutationData || data, method, headers);
                return response.data;
            },
            ...queryOptions,
        });
    }
};
