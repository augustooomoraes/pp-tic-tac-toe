import type { Config } from "tailwindcss";

const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
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
        primary: "rgba(var(--color-primary-rgb))",
        secondary: "rgba(var(--color-secondary-rgb))",
        terciary: "rgba(var(--color-terciary-rgb))",
        quaternary: "rgba(var(--color-quaternary-rgb))",
        /* =x=x=x=x=x=x=x=x= */
        surface: {
          primary: "rgba(var(--surface-color-primary-rgb))",
          secondary: "rgba(var(--surface-color-secondary-rgb))",
          terciary: "rgba(var(--surface-color-terciary-rgb))",
          quaternary: "rgba(var(--surface-color-quaternary-rgb))",

          primaryDark: "rgba(var(--surface-color-primary-dark-rgb))",
          secondaryDark: "rgba(var(--surface-color-secondary-dark-rgb))",
          terciaryDark: "rgba(var(--surface-color-terciary-dark-rgb))",
          quaternaryDark: "rgba(var(--surface-color-quaternary-dark-rgb))",

          ties: "rgba(var(--surface-color-ties-rgb))",
          tiesDark: "rgba(var(--surface-color-ties-dark-rgb))",

          menuButton: "rgba(var(--surface-color-menu-button-rgb))",
          menuButtonHover: "rgba(var(--surface-color-menu-button-hover-rgb))",
          menuButtonActive: "rgba(var(--surface-color-menu-button-active-rgb))",
          menuButtonDark: "rgba(var(--surface-color-menu-button-dark-rgb))",
          menuButtonHoverDark: "rgba(var(--surface-color-menu-button-hover-dark-rgb))",
          menuButtonActiveDark: "rgba(var(--surface-color-menu-button-active-dark-rgb))",
        },
        /* =x=x=x=x=x=x=x=x= */
        text: {
          primary: "rgba(var(--font-color-primary-rgb))",
          secondary: "rgba(var(--font-color-secondary-rgb))",

          primaryDark: "rgba(var(--font-color-primary-dark-rgb))",
          secondaryDark: "rgba(var(--font-color-secondary-dark-rgb))",
        },
        /* =x=x=x=x=x=x=x=x= */
        player: {
          x: "rgba(var(--player-x-color-rgb), .8)",
          xDark: "var(--player-x-color)",
          o: "rgba(var(--player-o-color-rgb), .8)",
          oDark: "var(--player-o-color)",
        },
        /* =x=x=x=x=x=x=x=x= */
        onPlayer: {
          DEFAULT: colors.black,
          dark: colors.white,
        },
        /* =x=x=x=x=x=x=x=x= */
        ties: {
          DEFAULT: "",
          dark: colors.neutral["400"],
          darker: "",
          darkest: colors.neutral["700"],
        },
      },
    },
  },
  plugins: [],
};
export default config;
