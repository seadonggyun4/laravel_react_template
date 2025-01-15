import '../css/app.css';
import '../css/reset.css';
import '../css/theme.css';
import '../css/global.css';
import '@/bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

// provider
import { DeviceSizeProvider } from '@/ux/provider/DeviceSize';
import { ShowPopUpProvider } from "@/ux/provider/ShowPopUp";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const App = createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx')
        ),
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

export default App;
