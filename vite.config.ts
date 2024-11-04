import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { resolve } from 'path';
import AutoImportDeps from "unplugin-auto-import/vite";
import AutoImportComponents from "unplugin-vue-components/vite";

export default defineConfig({
    plugins: [
        vue(),
        AutoImportDeps({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                /\.vue$/,
                /\.vue\?vue/, // .vue
                /\.md$/, // .md
            ],
            imports: ["vue", "vue-router"],
            dts: "src/types/auto-imports.d.ts",
        }),
        AutoImportComponents({
            dts: "src/types/components.d.ts",
            types: [
                {
                    from: "vue-router",
                    names: ["RouterLink", "RouterView"],
                },
            ],
        }),
    ],
    publicDir: "public", // 直接使用不hash的静态资源，代码中通过 /icon.png 可以直接访问到根目录下的public文件里的icon.png
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, './src/index.ts'),
            name: 'MyComponentLibrary',
            fileName: (format) => `my-component-library.${format}.js`,
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
