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
          /*   external: () =>
            new Promise((resolve) => {
              resolve(window.remoteUrl);
            }), */
          external: `Promise.resolve(window?.remoteUrl || "http://localhost:5000/versions/01/assets/shared.js")`,
          externalType: "promise",
        },
      },

      /* remotes: {
        // shared: "http://localhost:5000/assets/shared.js",
        shared: "http://localhost:5000/versions/02/assets/shared.js",
      }, */
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
