import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/mf2",
  plugins: [
    react(),
    federation({
      name: "MF-2",
      filename: "remoteEntry.js",
      exposes: {
        "./MF2": "./src/details.jsx",
      },
      // shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5002,
  },
  preview: {
    port: 5002,
  },
});
