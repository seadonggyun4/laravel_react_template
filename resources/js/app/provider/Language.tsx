import React, { createContext, useContext, useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import initI18n from '@/app/utils/i18n';
import { SUPPORT_LANGUAGE } from '@/shared/config';

interface Language {
    title: string;
    type: string;
}

interface LanguageContextProps {
    currentLocale: Language; // 현재 언어 객체
    changeLanguage: (locale: Language) => void; // 언어 변경 함수
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; site: string }> = ({ children, site }) => {
    const [currentLocale, setCurrentLocale] = useState<Language>(SUPPORT_LANGUAGE[0]); // 기본 언어: 한국어

    // URL에서 언어 추출 및 설정
    useEffect(() => {
        const pathLocale = window.location.pathname.split('/')[1]; // URL에서 첫 번째 경로 추출
        const foundLocale =
            SUPPORT_LANGUAGE.find((lang) => lang.type === pathLocale) || SUPPORT_LANGUAGE[0]; // 유효한 언어인지 확인
        setCurrentLocale(foundLocale); // 현재 언어 설정
        initI18n(foundLocale.type, site); // i18n 초기화
    }, [site]);

    const changeLanguage = (locale: Language) => {
        if (locale.type === currentLocale.type) return; // 동일 언어 선택 시 무시

        const pathParts = window.location.pathname.split('/');
        pathParts[1] = locale.type === 'ko' ? '' : locale.type; // 첫 번째 경로를 언어로 대체
        const newPath = pathParts.filter(Boolean).join('/'); // 빈 경로 제거 및 새 경로 생성

        Inertia.visit(`/${newPath}`); // Inertia를 통해 경로 변경
        setCurrentLocale(locale); // 상태 업데이트
        initI18n(locale.type, site); // i18n 초기화
    };

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
