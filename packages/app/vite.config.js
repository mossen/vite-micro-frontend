import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import dns from "dns";
import react from "@vitejs/plugin-react";

dns.setDefaultResultOrder("verbatim");


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        shared: {
          external: `Promise.resolve((window?.remoteUrl || "http://localhost:5000/versions/01/assets/shared.js"))`,
          externalType: "promise",
        },
      },
      shared: ["react"],
    }),
  ],
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
