import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["split-type"], // pre-bundle for dev
  },
  ssr: {
    noExternal: ["split-type"], // ensure Vite bundles it for SSR/build
  },
  build: {
    rollupOptions: {
      // leave external empty (recommended) — do NOT externalize split-type unless you
      // will provide it at runtime. If you must externalize, add here:
      // external: ['split-type']
    },
  },
});