import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "30px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#292F36",
          hover: "#343E4A",
        },
        secondary: "#4D5053",
        accent: {
          DEFAULT: "#CDA274",
          seconday: "#F4F0EC",
          hover: "#B88C5D",
        },
      },
      fontFamily: {
        "dm-serif": ["var(--font-dm-serif)"],
        jost: ["var(--font-jost)"],
      },
      backgroundImage: {
        hero: 'url("/hero/bg.jpg")',
        grid: 'url("/grid.png")',
      },
    },
  },
  plugins: [],
};
export default config;
