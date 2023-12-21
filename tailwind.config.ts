import type { Config } from "tailwindcss";

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
    },
  },
  plugins: [],
};
export default config;
