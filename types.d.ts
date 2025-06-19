// Type declarations for ESLint plugins (which do not have the official types)
declare module "eslint-plugin-import" {
  const plugin: any;
  export default plugin;
}
declare module "eslint-plugin-storybook" {
  const plugin: any;
  export default plugin;
}

// CSS modules
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Asset type declarations
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.jpeg" {
  const content: string;
  export default content;
}
declare module "*.gif" {
  const content: string;
  export default content;
}
declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.webp" {
  const content: string;
  export default content;
}
declare module "*.ico" {
  const content: string;
  export default content;
}

// Other common file types
declare module "*.json" {
  const content: any;
  export default content;
}
