import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axios from 'axios';

// JSON 파일 로드 함수
const loadModuleTranslations = async (locale: string, module: string) => {
    try {
        const response = await axios.get(`/lang/${locale}/${module}.json`);
        return response.data;
    } catch (error) {
        console.error(`Error loading ${module}.json for locale "${locale}":`, error);
        return {};
    }
};

// i18n 초기화 함수
const initI18n = async (locale: string, module: string) => {
    const translations = await loadModuleTranslations(locale, module);

    await i18n.use(initReactI18next).init({
        resources: {
            [locale]: { translation: translations },
        },
        lng: locale, // 현재 언어 설정
        fallbackLng: 'ko', // 기본 언어 설정
        interpolation: {
            escapeValue: false, // HTML 이스케이프 비활성화
        },
    });
};

export default initI18n;
