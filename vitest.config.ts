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
});
