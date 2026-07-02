import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/src/main.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
            '@themeConfig': path.resolve(__dirname, 'resources/js/theme.config.js'),
            '~': path.resolve(__dirname, 'node_modules'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: ['node_modules', 'resources/js/src/assets'],
            },
        },
    },
    build: {
        manifest: 'manifest.json',
        outDir: 'public/build',
        cssCodeSplit: true,
        minify: false,
        emptyOutDir: false,
        rollupOptions: {
            output: {
                chunkFileNames: 'js/chunks/[name]-[hash].js',
            },
        },
    },
});
