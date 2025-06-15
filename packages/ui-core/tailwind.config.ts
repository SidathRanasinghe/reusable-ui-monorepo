import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../stories/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("../tailwind-config/tailwind.config.ts")],
};

export default config;
module.exports = config;