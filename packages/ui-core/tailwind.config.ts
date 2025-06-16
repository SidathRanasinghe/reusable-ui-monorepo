import type { Config } from "tailwindcss";

import tailwindPreset from "../tailwind-config/tailwind.config";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "../../stories/**/*.{js,ts,jsx,tsx}"],
  presets: [tailwindPreset],
};

export default config;
module.exports = config;
