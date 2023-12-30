import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        turnIconKeyframes: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.4)" },
        },
        turnTextKeyframes: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        turnIconAnimation: "turnIconKeyframes 0.6s ease-in-out",
        turnTextAnimation: "turnTextKeyframes 0.6s ease-in-out",
      },
      colors: {
        primary: {
          DEFAULT: colors.neutral["200"],
          dark: "#353231",
        },
        secondary: {
          DEFAULT: colors.neutral["300"],
          dark: "#575352",
        },
        terciary: {
          DEFAULT: "#00de7e",
          dark: "#00ac62",
        },
        quaternary: {
          DEFAULT: "#ff9ccf",
          dark: "#d87cac",
        },
        /* =x=x=x=x=x=x=x=x= */
        onPlayer: {
          DEFAULT: colors.black,
          dark: colors.white,
        },
        /* =x=x=x=x=x=x=x=x= */
        ties: {
          DEFAULT: colors.neutral["300"],
          dark: colors.neutral["400"],
          darker: colors.neutral["600"],
          darkest: colors.neutral["700"],
        },
      },
    },
  },
  plugins: [],
};
export default config;
