import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // the paths where Tailwind classes are used
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/ui-core/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("./packages/tailwind-config/tailwind.config.ts")],
};

export default config;
