import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {apiClient} from "@/shared/api";
import { loadJSON } from '@/shared/lib'

// i18n 초기화 함수
const initI18n = async (locale: string, site: string) => {
    const translations = await loadJSON(`/lang/${locale}/${site}.json`);

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
