import '../css/app.css';
import '../css/reset.css';
import '../css/theme.css';
import '../css/global.css';
import '@/bootstrap';
import initI18n from '@/utils/i18n';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

// provider
import { DeviceSizeProvider } from '@/ux/provider/DeviceSize';
import { ShowPopUpProvider } from "@/ux/provider/ShowPopUp";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const el = document.getElementById('app');
const userLocale = document.documentElement.lang || 'ko'; // HTML lang 속성을 기반으로 언어 설정

(async () => {
    // Inertia App 생성
    await createInertiaApp({
        title: (title) => `${title} - ${appName}`,
        resolve: async (name) => {
            // 페이지 컴포넌트 가져오기
            const page = (await resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob('./Pages/**/*.tsx')
            )).default;

            await initI18n(userLocale, 'angelcar'); // JSON 파일 로드 및 i18n 초기화

            return page;
        },
        setup({ el, App, props }) {
            createRoot(el).render(
                <DeviceSizeProvider>
                    <ShowPopUpProvider>
                        <App {...props} />
                    </ShowPopUpProvider>
                </DeviceSizeProvider>
            );
        },
        progress: {
            color: '#4B5563',
        },
    });
})();
