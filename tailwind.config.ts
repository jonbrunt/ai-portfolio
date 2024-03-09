import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light", "dark", "winter", "luxury"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
