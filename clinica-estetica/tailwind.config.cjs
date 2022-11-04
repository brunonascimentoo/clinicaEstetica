/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    colors: {
      black: "#000",
      white: "#fff",

      gray: {
        50: "#f1f5f9",
        100: "#e1e1e1",
        200: "#e2e8f0",
      },

      rose: {
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        600: "#e11d48",
        800: "#9f1239",
      },
    },

    extend: {
      fontFamily: {
        sans: "Poppins, sans serif",
      },
    },
  },
  plugins: [],
};
