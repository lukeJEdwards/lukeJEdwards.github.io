import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

// https://vitejs.dev/config/
export default defineConfig({
  base: "lukeJEdwards.github.io",
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
  ],
});
