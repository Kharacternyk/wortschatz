import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      manifest: false,
      workbox: {
        globPatterns: [
          "**/*.{html,js,css,ico,svg,woff,woff2}",
        ],
        navigateFallbackDenylist: [
          /^\/nouns(?:\/|\?|$)/,
        ],
      },
    }),
  ],
});
