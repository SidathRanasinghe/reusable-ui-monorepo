import { join, dirname } from "path";

import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  // Include Welcome story and component stories
  stories: [
    "../stories/Welcome.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-controls"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-viewport"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-links"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  staticDirs: ["../assets"], // To handle static assets
  viteFinal: async (config, { configType }) => {
    // eslint-disable-next-line no-console
    console.info(
      "===================================================\nENVIORNMENT: %s\n===================================================",
      configType
    );

    // Configure for GitHub Pages deployment
    if (configType === "PRODUCTION") {
      config.base = "/reusable-ui-monorepo/";

      config.build = {
        ...config.build,
        assetsDir: "assets",
        assetsInlineLimit: 0,
        rollupOptions: {
          ...config.build?.rollupOptions,
          output: {
            ...config.build?.rollupOptions?.output,
            assetFileNames: assetInfo => {
              if (
                /\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(
                  assetInfo.name || ""
                )
              ) {
                return `assets/images/[name]-[hash][extname]`;
              }
              if (/\.(css)$/i.test(assetInfo.name || "")) {
                return `assets/css/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            },
            chunkFileNames: "assets/js/[name]-[hash].js",
            entryFileNames: "assets/js/[name]-[hash].js",
          },
        },
        sourcemap: false,
      };
    }

    // CSS processing
    config.css = {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    };

    // Resolve configuration for monorepo
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // Main package alias
        "@": join(__dirname, "../packages/ui-core/src"),

        // Component-specific aliases
        "@ui": join(__dirname, "../packages/ui-core/src/components/ui"),
        "@core": join(__dirname, "../packages/ui-core/src/components/core"),
        "@common": join(__dirname, "../packages/ui-core/src/components/common"),

        // Utils and lib
        "@lib": join(__dirname, "../packages/ui-core/src/lib"),
      },
    };

    // Custom plugin to handle asset paths in production
    if (configType === "PRODUCTION") {
      config.define = {
        ...config.define,
        __ASSET_BASE_PATH__: '"/reusable-ui-monorepo"',
      };
    } else {
      config.define = {
        ...config.define,
        __ASSET_BASE_PATH__: '""',
      };
    }

    return config;
  },
};

export default config;
