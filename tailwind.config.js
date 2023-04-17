/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      ccDark: "#2C2828",
      ccOrange: "#BB4430",
      ccTeal: "#7EBDC2",
      ccGray: "#EFE6DD",
      ccYellow: "#F3DFA2",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
