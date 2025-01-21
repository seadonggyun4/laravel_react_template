import {ErrorCode} from "@/shared/types/errorType";

// UI
export const MOBILE_WIDTH = 768;


// Data
export const VEHICLE_TYPES = [
    { title: "전체", type: 0 },
    { title: "경차", type: 1 },
    { title: "소형", type: 2 },
    { title: "중형", type: 3 },
    { title: "고급", type: 4 },
    { title: "RV", type: 5 },
    { title: "승합", type: 6 },
    { title: "수입", type: 7 },
    { title: "전기", type: 8 },
]

export const SUPPORT_LANGUAGE = [
    {
        title: '한국어',
        type: 'ko'
    },
    {
        title: 'English',
        type: 'en'
    }
]

// Regex
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// Error Code
export const ERROR_CODE: Record<number, ErrorCode> = {
    409: {
        status: 409,
        key: 'DUPLICATE_EMAIL',
        message: '이미 사용 중인 계정 입니다.'
    },
    500: {
        status: 500,
        key: "SERVER_ERROR",
        message: "서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.",
    },
    404: {
        status: 404,
        key: "NOT_FOUND",
        message: "요청한 리소스를 찾을 수 없습니다.",
    },
    403: {
        status: 403,
        key: "BAD_REQUEST",
        message: "잘못된 요청입니다.",
    },
    999: {
        status: 999,
        key: "UNKNOWN_ERROR",
        message: "알 수 없는 에러가 발생했습니다. 나중에 다시 시도해주세요.",
    },
    0: {
        status: 0,
        key: "NO_RESPONSE",
        message: "서버로부터 응답이 없습니다. 네트워크 상태를 확인해주세요.",
    }
}

