import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "MF-3",
      filename: "remoteEntry.js",
      exposes: {
        "./Mf3app": "./src/mount.jsx",
      },
      // shared: ["react", "react-router-dom", "styled-components"],
    }),
  ],
  server: {
    port: 5004,
  },
  preview: {
    port: 5004,
  },
  build: {
    target: "esnext",
  },
});
