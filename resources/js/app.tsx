import '../css/reset.css';
import '../css/constants.css';
import '../css/global.css';
import '@/bootstrap';
import initI18n from '@/app/utils/i18n';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { LanguageProvider } from '@/app/provider/Language';
import { DeviceSizeProvider } from '@/app/provider/DeviceSize';
import { ShowPopUpProvider } from '@/app/provider/ShowPopUp';
import {SUPPORT_LANGUAGE} from "@/shared/config";
import TanStackQueryProvider from "@/app/store/TanStackQuery";

// 모든 페이지 컴포넌트를 정적으로 가져온다.
const pages = import.meta.glob('./sites/**/pages/**/*.tsx');
// 사이트에 대한 전역 변수
let SITE = ''

const resolvePage = async (name: string) => {
    SITE = name.split('/')[0] === '' ? 'angelcar' : name.split('/')[0];
    const pageName = name.split('/')[1];


    // 언어 세팅
    const pathLocale = window.location.pathname.split('/')[1]; // URL에서 첫 번째 경로 추출
    const foundLocale =
        SUPPORT_LANGUAGE.find((lang) => lang.type === pathLocale) || SUPPORT_LANGUAGE[0]; // 유효한 언어인지 확인
    await initI18n(foundLocale.type, SITE);

    // 동적 경로 생성
    const targetPath = `./sites/${SITE}/pages/${pageName}.tsx`;

    // 비동기 페이지 로드
    const page = await pages[targetPath]();
    return page.default;
};

// Inertia App 생성
(async () => {
    await createInertiaApp({
        title: (title) => `${title}`,
        resolve: (name) => resolvePage(name),
        setup({ el, App, props }) {
            createRoot(el).render(
                <TanStackQueryProvider>
                    <LanguageProvider site={SITE}>
                        <DeviceSizeProvider>
                            <ShowPopUpProvider>
                                <App {...props} />
                            </ShowPopUpProvider>
                        </DeviceSizeProvider>
                    </LanguageProvider>
                </TanStackQueryProvider>
            );
        },
        progress: {
            color: '#00A1E5',
        },
    });
})();
