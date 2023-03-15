/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ab854f",
        secondary: '#f8f5f0'
      },
      fontFamily: {
        gilda: ["Gilda Display", "serif"],
        barlow: ["Barlow", "sans-serif"],
        barlow_condensed: ["Barlow Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}