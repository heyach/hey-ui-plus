import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        vue(),
    ],
    publicDir: "public", // 直接使用不hash的静态资源，代码中通过 /icon.png 可以直接访问到根目录下的public文件里的icon.png
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'MyVue3Components',
            fileName: (format) => `my-vue3-components.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    server: {
        host: "0.0.0.0",
        port: 3456,
        open: true,
        https: false,
        proxy: {
            "/api": {
                target: "http://192.168.3.97",
                // target: "http://127.0.0.1:18080",
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
            '/user/v1': {
                target: "http://192.168.3.97",
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/user/v1': '/user/v1'
                }
            },
        },
    },
});
