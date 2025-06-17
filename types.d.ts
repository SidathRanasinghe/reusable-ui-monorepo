// Type declarations for ESLint plugins without official types

declare module "eslint-plugin-import" {
  const plugin: any;
  export default plugin;
}

declare module "eslint-plugin-storybook" {
  const plugin: any;
  export default plugin;
}

// Declaration for CSS modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
