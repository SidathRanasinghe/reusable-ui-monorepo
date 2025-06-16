module.exports = {
  // Basic formatting
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,

  // JSX specific
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",

  // File specific overrides
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
    {
      files: "*.md",
      options: {
        proseWrap: "always",
        printWidth: 80,
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      options: {
        tabWidth: 2,
      },
    },
  ],

  // Plugins
  plugins: ["prettier-plugin-tailwindcss"],
};
