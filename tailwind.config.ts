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
    fontFamily: {
      'manrope-xs': ['Manrope-ExtraLight', 'Arial', 'sans-serif'],
      'manrope-sm': ['Manrope-Light', 'Arial', 'sans-serif'],
      'manrope': ['Manrope-Regular', 'Arial', 'sans-serif'],
      'manrope-md': ['Manrope-Medium', 'Arial', 'sans-serif'],
      'manrope-lg': ['Manrope-SemiBold', 'Arial', 'sans-serif'],
      'manrope-xl': ['Manrope-Bold', 'Arial', 'sans-serif'],
      'manrope-2xl': ['Manrope-ExtraBold', 'Arial', 'sans-serif'],
      'clashgrotesk-xs': ['ClashGrotesk-Extralight', 'Arial', 'sans-serif'],
      'clashgrotesk-sm': ['ClashGrotesk-Light', 'Arial', 'sans-serif'],
      'clashgrotesk': ['ClashGrotesk-Regular', 'Arial', 'sans-serif'],
      'clashgrotesk-md': ['ClashGrotesk-Medium', 'Arial', 'sans-serif'],
      'clashgrotesk-lg': ['ClashGrotesk-Semibold', 'Arial', 'sans-serif'],
      'clashgrotesk-xl': ['ClashGrotesk-Bold', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
};
export default config;
