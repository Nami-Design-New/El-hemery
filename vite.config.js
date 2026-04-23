import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api-chat": {
        target: "https://dashboard.alhemery.sa/ar/api-chat",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-chat/, ""),
      },
    },
  },
});
