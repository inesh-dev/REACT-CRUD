import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative paths so the built site in `docs/` works on GitHub Pages.
  // If you publish to https://<user>.github.io/<repo>/ set base: '/<repo>/' instead.
  base: "./",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
