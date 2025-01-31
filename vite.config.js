import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    server: {
        host: process.env.APP_URL,
    },
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: false
        }),
        react(),
    ],
});
