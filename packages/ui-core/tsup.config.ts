import { defineConfig } from "tsup";

// This configuration file is for building a UI core package using tsup.
// It specifies the entry point, output formats, and other build options.
// The `external` option excludes React and ReactDOM from the bundle.
// The `esbuildOptions` adds a banner to the generated JavaScript files.
// The `onSuccess` command runs a script to build CSS after the TypeScript files are compiled.
// The `dts` option generates TypeScript declaration files.
// The `clean` option ensures that the output directory is cleared before building.
// The `sourcemap` option generates source maps for easier debugging.
// The `format` option specifies that both CommonJS and ES Module formats should be generated.
// The `entry` option specifies the main TypeScript file to compile.
// The `defineConfig` function is used to create a configuration object for tsup.
// The `tsup` package is a zero-config bundler for TypeScript projects.
// The `tsup.config.ts` file is used to configure the build process for the UI core package.
// The `tsup` tool is designed to be simple and fast, making it suitable for building libraries and applications.
// The `tsup` configuration can be extended with additional options as needed.

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
  onSuccess: "npm run build:css",
});
