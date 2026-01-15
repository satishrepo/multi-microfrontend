import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mf_1",
      filename: "remoteEntry.js",
      exposes: {
        // "./List": "./src/list.jsx",
        // "./Products": "./src/components/products.jsx",
        "./App": "./src/mount.jsx",
      },
      resolve: {
        dedupe: ["react", "react-dom"],
      },
      shared: {
        "my-react-lib": { singleton: true, requiredVersion: "1.0.0" },
      },
      // shared: ["react"],
      // shared: {
      //   react: false,
      //   "react-dom": false,
      // },
      // shared: {
      //   react: { singleton: true, requiredVersion: "^18.2.0" },
      //   "react-dom": { singleton: true, requiredVersion: "^18.2.0" },
      // },
    }),
  ],

  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: ["my-react-lib"], // ⚠️ Vite will not bundle it
    },
  },
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
});
