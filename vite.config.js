import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages: replace "grocery-bud" if your repo name is different
  base: "/grocery-bud/",
});
