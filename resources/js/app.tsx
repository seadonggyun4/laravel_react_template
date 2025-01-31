import '../css/reset.css';
import '../css/constants.css';
import '../css/global.css';
import '@/bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import {initializeLogging} from "@/app/services/initializeLogging";
import {renderPageUi} from "@/app/services/renderPageUi";
import AppWrapper from "@/app/AppWrapper";


// 모든 페이지 컴포넌트를 정적으로 가져온다.
const pages = import.meta.glob<{
    default: React.ComponentType<any>;
}>("./sites/**/pages/**/*.tsx");

// 사이트에 대한 전역 변수
const SITE = window.location.hostname ? window.location.hostname.split('.')[0] : 'angelcar';


(async () => {
    // 프론트엔드 로깅 로직
    await initializeLogging(SITE);
    // Inertia App 생성
    await createInertiaApp({
        title: (title) => `${title}`,
        resolve: (name) => renderPageUi(name, SITE, pages),
        setup({ el, App, props }) {
            createRoot(el).render(<AppWrapper App={App} props={props} site={SITE}/>);
        },
        progress: {
            color: '#00A1E5',
        },
    });
})();
