/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premiumBlack: '#0D0D0D',
        premiumPurple: '#6D28D9',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6D28D9",
          "secondary": "#1FB2A6",
          "accent": "#2DD4BF",
          "neutral": "#191D24",
          "base-100": "#0D0D0D",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}