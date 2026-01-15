import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "host-app",
      remotes: {
        mf_1: "http://localhost:5001/assets/remoteEntry.js",
        mf_2: "http://localhost:5002/assets/remoteEntry.js",
        mf_3: "http://localhost:5004/assets/remoteEntry.js",
        svelte_mf: "http://localhost:5005/assets/remoteEntry.js",
        // mf_1: {
        //   external: `Promise.resolve('http://localhost:5001/assets/remoteEntry.js')`,
        //   externalType: "promise",
        // },
      },
      shared: {
        "my-react-lib": { singleton: true, requiredVersion: "1.0.0" },
      },
      // shared: ["react", "react-router-dom", "styled-components"],
      // shared: {
      //   react: false,
      //   "react-dom": false,
      // },
      /* shared: {
        react: {
          singleton: true,
          // eager: true,
          requiredVersion: false,
          // requiredVersion: packageJsonDeps.react,
        },
        "react-dom": {
          singleton: true,
          // eager: true,
          requiredVersion: false,
          // requiredVersion: packageJsonDeps["react-dom"],
        },
      }, */
    }),
  ],
  build: {
    target: "esnext",
    // modulePreload: false,
  },
  preview: {
    port: 5010,
  },
  server: {
    port: 5500,
  },
});
