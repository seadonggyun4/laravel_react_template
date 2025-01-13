import '../css/app.css';
import '../css/reset.css';
import '../css/theme.css';
import '../css/global.css';
import '@/bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

export default createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
    setup({ el, App, props }) {
        // hydrateRoot(el, <App {...props} />); // 서버렌더링
        createRoot(el).render(<App {...props} />); // 클라이언트 렌더링
    },
    progress: {
        color: '#4B5563',
    },
});


