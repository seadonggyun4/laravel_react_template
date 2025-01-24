// import { apiClient } from "@/shared/api";

interface LogData {
    type: "warn" | "error"; // 에러
    message: string; // 메시지
    timestamp: string; // 에러시간
    url: string; // 현재 url Path
    filePath: string; // 에러파일 위치
    site?: string; // 어떤사이트
}

export const initializeLogging = (site: string) => {
    const logQueue: LogData[] = [];
    let isProcessing = false;

    // 배치 전송 처리 함수
    const processLogQueue = async () => {
        if (isProcessing || logQueue.length === 0) return;

        isProcessing = true;
        const logsToSend = [...logQueue]; // 현재 큐의 로그 복사
        logQueue.length = 0; // 큐 비우기
        logsToSend.forEach((log) => {
            log.site = site;
            log.url = window.location.pathname;
        }); // 로그에 사이트 정보 및 URL 추가

        try {
            // await apiClient("/logs/batch", logsToSend, "POST"); // 배치 전송
            console.log("에러 로그", logsToSend);
        } catch (error) {
            logQueue.push(...logsToSend); // 실패 시 다시 큐에 추가
        } finally {
            isProcessing = false;
        }
    };

    // 2초마다 배치 처리 실행
    const interval = setInterval(processLogQueue, 2000);

    // 전역 에러 핸들러
    window.onerror = (message, source, lineno, colno, error) => {
        const logData: LogData = {
            type: "error",
            message: `${message}`,
            timestamp: new Date().toISOString(),
            url: window.location.pathname,
            filePath: source || "N/A", // 에러 발생 파일 경로
        };
        logQueue.push(logData);
    };

    // Promise rejection 핸들러
    window.onunhandledrejection = (event) => {
        const logData: LogData = {
            type: "error",
            message: `Unhandled promise rejection: ${event.reason}`,
            timestamp: new Date().toISOString(),
            url: window.location.pathname,
            filePath: "N/A", // 파일 경로를 설정할 수 있으면 추가 가능
        };
        logQueue.push(logData);
    };

    // 정리 작업을 위한 반환 함수
    return () => {
        clearInterval(interval); // 배치 프로세스 종료
        window.onerror = null; // 전역 핸들러 제거
        window.onunhandledrejection = null; // Promise rejection 핸들러 제거
    };
};
