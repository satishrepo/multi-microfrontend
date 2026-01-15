import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: "MF-4",
      filename: "remoteEntry.js",
      exposes: {
        "./SvelteApp": "./src/bootstrap.jsx",
      },
      // shared: ["react", "react-router-dom", "styled-components"],
    }),
  ],
  server: {
    port: 5005,
  },
  preview: {
    port: 5005,
  },
  build: {
    target: "esnext",
  },
});
