import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/iiif-visualizer/",
  css: {
    preprocessorOptions: {
      scss: {
        addditionalData: `@import "./src/App.scss";`,
      },
    },
  },
  plugins: [react()],
});
