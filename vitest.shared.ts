import * as path from "node:path";
import type { ViteUserConfig } from "vitest/config";

const alias = (name: string) => {
  const target = process.env.TEST_DIST !== undefined ? "dist/dist/esm" : "src";
  const scopedName = `@org/${name}`;
  return {
    [`${scopedName}/test`]: path.join(__dirname, "packages", name, "test"),
    [`${scopedName}`]: path.join(__dirname, "packages", name, target),
    [`${scopedName}/*`]: path.join(__dirname, "packages", name, target),
  };
};

// This is a workaround, see https://github.com/vitest-dev/vitest/issues/4744
const config: ViteUserConfig = {
  esbuild: {
    target: "es2020",
  },
  optimizeDeps: {
    exclude: ["bun:sqlite"],
  },
  test: {
    onConsoleLog: (log) => {
      console.log(log);
    },
    setupFiles: [path.join(__dirname, "setupTests.ts")],
    fakeTimers: {
      toFake: undefined,
    },
    sequence: {
      concurrent: true,
    },
    pool: "forks",
    poolOptions: {
      forks: {
        isolate: true,
      },
    },
    slowTestThreshold: 5_000,
    include: ["test/**/*.test.ts", "src/**/*.test.ts"],
    alias: {
      ...alias("cli"),
      ...alias("database"),
      ...alias("domain"),
      ...alias("server"),
      ...alias("client-core"),
      ...alias("ui/shadcn"),
      // My Artist Type app aliases
      "@my-artist-type/domain": path.join(__dirname, "apps/my-artist-type/domain/src"),
      "@my-artist-type/domain/*": path.join(__dirname, "apps/my-artist-type/domain/src/*"),
      "@my-artist-type/database": path.join(__dirname, "apps/my-artist-type/database/src"),
      "@my-artist-type/database/*": path.join(__dirname, "apps/my-artist-type/database/src/*"),
      "@my-artist-type/server": path.join(__dirname, "apps/my-artist-type/server/src"),
      "@my-artist-type/server/*": path.join(__dirname, "apps/my-artist-type/server/src/*"),
      "@my-artist-type/web": path.join(__dirname, "apps/my-artist-type/web/src"),
      "@my-artist-type/web/*": path.join(__dirname, "apps/my-artist-type/web/src/*"),
    },
  },
};

export default config;
