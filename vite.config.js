import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
    plugins: [solidPlugin()],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
    },
    resolve: {
        alias: {
            root: path.resolve(__dirname),
            "@": path.resolve(__dirname, "src"),
            assets: path.resolve(__dirname, "src/assets"),
            db: path.resolve(__dirname, "src/db"),
            hooks: path.resolve(__dirname, "src/hooks"),
            css: path.resolve(__dirname, "src/css"),
            lib: path.resolve(__dirname, "src/lib"),
            public: path.resolve(__dirname, "src/public"),
            ui: path.resolve(__dirname, "src/ui"),
            icons: path.resolve(__dirname, "src/ui/icons"),
        },
    },
});
