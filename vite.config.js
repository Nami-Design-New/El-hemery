import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api-chat": {
        target: "https://elhamiryelhag.nami-tec.com/ar/api-chat",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-chat/, ""),
      },
    },
  },
});
