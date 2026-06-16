import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/js/admin/dashboard.js',
                'resources/js/admin/absensi.js', // For student attendance (if still used)
                'resources/js/admin/absensi-pengajar.js', // For teacher attendance
            ],
            refresh: true,
        }),
    ],
});
