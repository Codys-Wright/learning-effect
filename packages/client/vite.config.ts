/// <reference types="vitest/config" />
/* eslint-disable */
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackStart(),
    tailwindcss(),
    tsconfigPaths(),
    visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: "stats.html",
      template: "treemap",
    }),
  ],
  server: {
    allowedHosts: true,
  },
  build: {
    target: "esnext",
    minify: "terser",
    rollupOptions: {
      external: ["crypto"],
    },
  },
  envDir: "../../",
  // @ts-expect-error - Vitest config is not typed
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
  },
});
