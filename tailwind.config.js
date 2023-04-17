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

    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        ccDark: "#2C2828",
        ccOrange: "#BB4430",
        ccTeal: "#7EBDC2",
        ccGray: "#EFE6DD",
        ccYellow: "#F3DFA2",
      },
      backgroundImage: {
        contact:
          "url('https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80')",
      },
    },
  },
  plugins: [],
};
