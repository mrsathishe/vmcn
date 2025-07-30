import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: [
      "localhost",
      ".ngrok.io",
      ".ngrok-free.app",
      "0c0a594de662.ngrok-free.app",
      "vmcn.satz.co.in",
      ".satz.co.in",
      "mrsathishe.github.io",
      ".github.io",
    ],
    host: true,
  },
});
