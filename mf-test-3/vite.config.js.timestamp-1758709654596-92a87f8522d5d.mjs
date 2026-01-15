// vite.config.js
import { defineConfig } from "file:///D:/projects/react/vite/mf-test-3/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/react/vite/mf-test-3/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///D:/projects/react/vite/mf-test-3/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "MF-3",
      filename: "remoteEntry.js",
      exposes: {
        "./Mf3app": "./src/App.jsx"
      },
      shared: ["react", "react-router-dom", "styled-components"]
    })
  ],
  server: {
    port: 5004
  },
  preview: {
    port: 5004
  },
  build: {
    target: "esnext"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxyZWFjdFxcXFx2aXRlXFxcXG1mLXRlc3QtM1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxccmVhY3RcXFxcdml0ZVxcXFxtZi10ZXN0LTNcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3RzL3JlYWN0L3ZpdGUvbWYtdGVzdC0zL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gXCJAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiBcIk1GLTNcIixcbiAgICAgIGZpbGVuYW1lOiBcInJlbW90ZUVudHJ5LmpzXCIsXG4gICAgICBleHBvc2VzOiB7XG4gICAgICAgIFwiLi9NZjNhcHBcIjogXCIuL3NyYy9BcHAuanN4XCIsXG4gICAgICB9LFxuICAgICAgc2hhcmVkOiBbXCJyZWFjdFwiLCBcInJlYWN0LXJvdXRlci1kb21cIiwgXCJzdHlsZWQtY29tcG9uZW50c1wiXSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogNTAwNCxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDUwMDQsXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRSLFNBQVMsb0JBQW9CO0FBQ3pULE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUd2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsTUFDZDtBQUFBLE1BQ0EsUUFBUSxDQUFDLFNBQVMsb0JBQW9CLG1CQUFtQjtBQUFBLElBQzNELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
