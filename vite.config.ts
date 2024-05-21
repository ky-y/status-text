import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        dts(),
        tsconfigPaths()
    ],
    build: {
        lib: {
            fileName: "[name]",
            entry: {
                "index": resolve(__dirname, "src/index.ts")
            },
            formats: ["es"]
        }
    }
});