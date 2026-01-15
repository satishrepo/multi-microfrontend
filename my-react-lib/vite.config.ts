import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyReactLib",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      // ⚠️ VERY IMPORTANT for React libraries
      external: ["react", "react-dom"],
    },
  },
});
