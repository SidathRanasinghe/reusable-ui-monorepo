import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

import { boxShadows, colors, screens } from "./theme";

const config: Config = {
  darkMode: ["class"],
  content: [
    // relative to where this config is used
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    // more specific paths for better detection
    "../../packages/ui-core/src/**/*.{js,ts,jsx,tsx}",
    "../../stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        ...colors,
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderColor: {
        ...colors,
      },
      ringColor: {
        ...colors,
      },
      fontSize: {
        h1: ["45px", "120%"],
        h2: ["37px", "120%"],
        h3: ["31px", "120%"],
        h4: ["26px", "120%"],
        title: ["22px", "120%"],
        body: ["18px", "120%"],
        "caption-sm": ["15px", "120%"],
        "caption-xsm": ["12.5px", "120%"],
        "caption-xs": ["12px", "120%"],
        "caption-xxs": ["11px", "120%"],
        "sub-caption": ["10.5px", "120%"],
        "sub-caption-xs": ["10px", "120%"],
      },
      screens: {
        ...screens,
      },
      fontFamily: {
        merriweather: ["var(--font-merriweather)", "serif"],
        hankenGrotesk: ["var(--font-hanken-grotesk)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        ...boxShadows,
      },
      animation: {
        "loading-dot": "loading 1.4s infinite ease-in-out both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        loading: {
          "0%, 80%, 100%": { opacity: "0" },
          "40%": { opacity: "1" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".animation-delay-200": { "animation-delay": "0.2s" },
        ".animation-delay-400": { "animation-delay": "0.4s" },
        ".animation-delay-600": { "animation-delay": "0.6s" },
        ".animation-delay-800": { "animation-delay": "0.8s" },
        ".animation-delay-full": { "animation-delay": "1s" },
      };
      addUtilities(newUtilities);
    },
  ],
};

// Export both as default and named export for compatibility
export default config;
module.exports = config;
