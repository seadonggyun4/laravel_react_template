import React, { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import initI18n from '@/utils/i18n';

interface LanguageContextProps {
    currentLocale: string;
    changeLanguage: (locale: string) => Promise<void>;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const browserLocale = navigator.language.split('-')[0];
    const [currentLocale, setCurrentLocale] = useState<string>(
        sessionStorage.getItem('app_locale') || browserLocale || 'ko'
    );

    const changeLanguage = async (locale: string) => {
        if (locale === currentLocale) return; // 동일 언어 선택 시 무시

        try {
            const module = 'angelcar'; // 로드할 단일 모듈 이름
            await initI18n(locale, module); // i18n 초기화
            sessionStorage.setItem('app_locale', locale); // 언어 상태를 sessionStorage에 저장
            setCurrentLocale(locale); // React 상태 업데이트
        } catch (error) {
            console.error('Error initializing i18n:', error);
        }
    };

    useEffect(() => {
        // i18n 초기화 시 현재 언어와 동기화
        const sessionLocale = sessionStorage.getItem('app_locale');
        if (sessionLocale && sessionLocale !== i18n.language) {
            const module = 'angelcar';
            initI18n(sessionLocale, module).then(() => setCurrentLocale(sessionLocale));
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ currentLocale, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
