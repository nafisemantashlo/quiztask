/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgligt:'rgb(245,245,245',
        bgbigi:'rgb(255,248,231',
        bgbotton:'rgb(51,153,255)',
        bgbtn:'rgb(58,163,116)',
      }
    },
  },
  plugins: [],
}
