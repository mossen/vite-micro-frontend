import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import dts from 'vite-plugin-dts';
import dns from "dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared",
      filename: "shared.js",
      exposes: {
        "./Button": { name: "Button", import: "./src/components/Button" },
      },
      shared: { react: "^18.2.0" },
    }),
    dts({
      entry: "./src/components/Button/interfaces.ts",
      out: "dist/index.d.ts",
      dtsBundleOptions: {
        include: ["src/**/*.ts"],
        exclude: ["node_module/**"],
      },
    }),
  ],
  preview: {
    host: "localhost",
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    /*   lib: {
      entry: "./src/components",
      name: "Button",
      fileName: (format) => `Button.${format}.js`,
      formats: ["es"],
      exports: {
        exclude: ["node_modules"],
      },
    }, */
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
