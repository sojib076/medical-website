import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#E12354",
        secondary: {
          100: "#8FB569",
          200: "#223645",
        },
      },
      fontFamily: {
        custom: ["Nunito"],
      },
    },

    
    
    
  },
  
  plugins: [],
};
export default config;
