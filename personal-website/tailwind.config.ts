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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-purple': '#dc0bef',
        'secondary-purple': '#3a033f',
        'primary-red': '#3a040d',
        'secondary-red': '#1d0211',
        'accent-orange': '#af5608',
        'background': '#120113',
      },
    },
  },
  plugins: [],
};
export default config;
