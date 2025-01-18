import '../css/reset.css';
import '../css/constants.css';
import '../css/global.css';
import '@/bootstrap';
import initI18n from '@/utils/i18n';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

// provider
import { DeviceSizeProvider } from '@/ux/provider/DeviceSize';
import { ShowPopUpProvider } from "@/ux/provider/ShowPopUp";
import { LanguageProvider } from "@/ux/provider/Language";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const el = document.getElementById('app');

// Inertia App 생성
(async () => {
    const sessionLocale = sessionStorage.getItem('app_locale') || 'ko'; // sessionStorage에서 언어 가져오기
    const module = 'angelcar';

    await initI18n(sessionLocale, module); // JSON 파일 로드 및 i18n 초기화

    await createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: async (name) => {
            // 페이지 컴포넌트 가져오기
            const page = (await resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob('./Pages/**/*.tsx')
            )).default;
            return page;
        },
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
