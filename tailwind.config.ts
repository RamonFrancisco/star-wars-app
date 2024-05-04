import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        app: "url('/background-planets.png')",
      },
      colors: {
        app: {
          gray: {
            100: "#F1F1F1",
            500: "#909090",
          },
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
export default config;
