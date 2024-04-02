import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      color1: '#2B2C30',
      color2: '#35313B',
      color3: '#008EF5',
      color4: '#613C4C',
      color5: '#FF1457',
      color6: '#FCFCFC',
      color7: '#E3E800' 
    },
    keyframes: {
      rotate: {
        'from': { transform: 'rotate(0deg)' },
        'to': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      rotate: 'rotate 15s linear infinite',
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
