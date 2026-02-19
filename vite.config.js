import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Deploying to https://inesh-dev.github.io/ (root), so keep base at default "/"
  base: "/",
});
