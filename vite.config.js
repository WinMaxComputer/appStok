import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import os from 'os';

const getLocalIpv4 = () => {
    const interfaces = os.networkInterfaces();
    for (const group of Object.values(interfaces)) {
        if (!group) continue;
        for (const net of group) {
            if (net && net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const lanHost = env.VITE_DEV_HOST || getLocalIpv4();

    return {
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
        server: {
            host: '0.0.0.0',
            port: 5173,
            strictPort: true,
            hmr: {
                host: lanHost,
                protocol: 'ws',
                port: 5173,
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
    };
});
