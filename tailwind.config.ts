import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "accent-color": "var(--accent-color)",
        "grey-bg": "var(--bg-grey)",
      },
      // fontSize: {
      //   clamp: "clamp(18px, 5vw, 21px)",
      // },
      screens: {
        xsm: "700px",
      },
    },
  },
  plugins: [],
};
export default config;
