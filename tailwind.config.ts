import type { Config } from "tailwindcss";

import tailwindPreset from "./packages/tailwind-config/tailwind.config";

const config: Config = {
  content: [
    // the paths where Tailwind classes are used
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/ui-core/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [tailwindPreset],
};

export default config;
