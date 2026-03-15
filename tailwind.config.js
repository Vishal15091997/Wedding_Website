/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FCFBF4",
        gold: "#D4AF37",
        blush: "#FDE2E4",
        champagne: "#F7E7CE",
      },
      fontFamily: {
        serif: ['var(--font-cormorant)'],
        sans: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
};
