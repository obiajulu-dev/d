import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    screens: {
      'mobile': {'min': '200px'},
      'tablet': {'min': '780px'},
      'laptop': '1024px',
      'desktop': '1280px'
  },

  colors: {
    midWhite : '#F5F6F8',
    black : '#131313',
    blue : "#223A8A",
    teal : "#508991",
    amber : "#E68A00",
    mintGreen : "#6CAE75",
    accent : '#FF7F00',
    midBlack : " #4e4e4e",
    primary: "black",
    white : '#ffffff'
  },
  },

  plugins: [],
};
export default config;
