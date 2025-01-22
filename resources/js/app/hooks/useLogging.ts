import { useEffect } from "react";
// import { apiClient } from "@/shared/api";

interface LogData {
    type: "warn" | "error" | "global-error";
    message: string;
    timestamp: string;
    site?: string; // 사이트 정보 추가
}

export const useLogging = (site: string) => {
    const logQueue: LogData[] = [];
    let isProcessing = false;

    // 배치 전송 처리 함수
    const processLogQueue = async () => {
        if (isProcessing || logQueue.length === 0) return;

        isProcessing = true;
        const logsToSend = [...logQueue]; // 현재 큐의 로그 복사
        logQueue.length = 0; // 큐 비우기
        logsToSend.forEach((log) => (log.site = site)); // 로그에 사이트 정보 추가

        try {
            // await apiClient("/logs/batch", logsToSend, "POST"); // 배치 전송
        } catch (error) {
            logQueue.push(...logsToSend); // 실패 시 다시 큐에 추가
        }

        isProcessing = false;
    };

    useEffect(() => {
        // 2초마다 배치 처리 실행
        const interval = setInterval(processLogQueue, 2000);

        // 전역 로깅 처리
        const originalWarn = console.warn;
        const originalError = console.error;

        // `console.warn` 오버라이드
        console.warn = (...args: any[]) => {
            const logData: LogData = {
                site,
                type: "warn",
                message: args.join(" "),
                timestamp: new Date().toISOString(),
            };
            logQueue.push(logData);
            originalWarn(...args); // 기존 동작 유지
        };

        // `console.error` 오버라이드
        console.error = (...args: any[]) => {
            const logData: LogData = {
                site,
                type: "error",
                message: args.join(" "),
                timestamp: new Date().toISOString(),
            };
            logQueue.push(logData);
            originalError(...args); // 기존 동작 유지
        };

        // 전역 에러 핸들러
        window.onerror = (message, source, lineno, colno, error) => {
            const logData: LogData = {
                site,
                type: "global-error",
                message: `${message} at ${source}:${lineno}:${colno}`,
                timestamp: new Date().toISOString(),
            };
            logQueue.push(logData);
        };

        // 정리 작업
        return () => {
            clearInterval(interval); // 배치 프로세스 종료
            console.warn = originalWarn; // 원래 동작 복원
            console.error = originalError; // 원래 동작 복원
            window.onerror = null; // 전역 핸들러 제거
        };
    }, [site]); // 사이트 정보가 변경될 때 다시 설정
};
