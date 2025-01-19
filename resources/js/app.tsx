import '../css/reset.css';
import '../css/constants.css';
import '../css/global.css';
import '@/bootstrap';
import initI18n from '@/common/utils/i18n';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

// 프로바이더 import
import { LanguageProvider } from '@/common/ux/provider/Language';
import { DeviceSizeProvider } from '@/common/ux/provider/DeviceSize';
import { ShowPopUpProvider } from '@/common/ux/provider/ShowPopUp';

// 모든 페이지 컴포넌트를 정적으로 가져온다.
const pages = import.meta.glob('./sites/**/pages/**/*.tsx');

const resolvePage = async (name: string) => {
    const site = name.split('/')[0] === '' ? 'angelcar' : name.split('/')[0];
    const pageName = name.split('/')[1];

    // 언어 세팅
    const fullLanguage = navigator.language || 'ko';
    const language = fullLanguage.split('-')[0];
    const sessionLocale = sessionStorage.getItem('app_locale') || language;
    await initI18n(sessionLocale, site);
    console.log(name)

    // 동적 경로 생성
    const targetPath = `./sites/${site}/pages/${pageName}.tsx`;

    // 비동기 페이지 로드
    const page = await pages[targetPath]();
    return page.default;
};

// Inertia App 생성
(async () => {
    await createInertiaApp({
        title: (title) => `${title} - Laravel`,
        resolve: (name) => resolvePage(name),
        setup({ el, App, props }) {
            createRoot(el).render(
                <LanguageProvider>
                    <DeviceSizeProvider>
                        <ShowPopUpProvider>
                            <App {...props} />
                        </ShowPopUpProvider>
                    </DeviceSizeProvider>
                </LanguageProvider>
            );
        },
        progress: {
            color: '#4B5563',
        },
    });
})();
