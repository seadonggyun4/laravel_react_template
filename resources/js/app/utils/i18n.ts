import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {apiClient} from "@/shared/api";

// JSON 파일 로드 함수
const loadsiteTranslations = async (locale: string, site: string) => {
    try {
        const { data } = await apiClient(`/lang/${locale}/${site}.json`);
        return data;
    } catch (error) {
        console.error(`Error loading ${site}.json for locale "${locale}":`, error);
        return {};
    }
};

// i18n 초기화 함수
const initI18n = async (locale: string, site: string) => {
    const translations = await loadsiteTranslations(locale, site);

    await i18n.use(initReactI18next).init({
        resources: {
            [locale]: { translation: translations as Record<string, string> },
        },
        lng: locale,
        fallbackLng: 'ko',
        interpolation: {
            escapeValue: false,
        },
    });

};

export default initI18n;
