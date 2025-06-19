import { resolve } from "path";

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    name: "ui-tests",
    browser: {
      enabled: true,
      headless: true,
      provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
    setupFiles: [".storybook/vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./packages/ui-core/src"),
      "@assets": resolve(__dirname, "./assets"),
      "@ui": resolve(__dirname, "./packages/ui-core/src/components/ui"),
      "@core": resolve(__dirname, "./packages/ui-core/src/components/core"),
      "@common": resolve(__dirname, "./packages/ui-core/src/components/common"),
      "@lib": resolve(__dirname, "./packages/ui-core/src/lib"),
    },
  },
});
