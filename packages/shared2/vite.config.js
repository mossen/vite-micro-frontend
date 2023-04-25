import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared2",
      filename: "shared2.js",
      exposes: {
        "./Button": { name: "Button", import: "./src/components/Button" },
      },
      shared: { react: "^18.2.0" },
    }),
  ],
  preview: {
    host: "localhost",
    port: 5002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
