import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Quicksand"', "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#BA4E63", // Deep Rose
          dark: "#9C3F52",
          light: "#D06C7D",
        },
        secondary: {
          light: "#FFFBFA",
          DEFAULT: "#FFF8F6",
          dark: "#F8E1DE",
        },
        text: {
          DEFAULT: "#80424D", // Muted Rosewood
          light: "#A56B77",
          soft: "#B98793",
        },
        accent: {
          DEFAULT: "#D88B99", // Dusty Pink
        },
      },
    },
  },
  plugins: [],
};
export default config;
