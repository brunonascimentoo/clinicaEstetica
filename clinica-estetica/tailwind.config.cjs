/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    fontSize: {
      xs: 12,
      '2xs': 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
      "4xl": 36,
      "6xl": 40,
      "8xl": 44,
      "10xl": 48,
      "12xl": '5rem',
    },

    colors: {
      black: "#000",
      white: "#fff",

      gray: {
        50: "#f1f5f9",
        100: "#e2e8f0",
        200: "#e1e1e1",
        300: "rgb(148 163 184)",
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
        vibe: "Great Vibes, sans serif"
      },
      backgroundImage: {
        woman: "url('./src/assets/images/woman.png')"
      },
      spacing: {
        '90': '90vh'
      },

      screen: {
        'mobile': '320px',
        'tablet': '640px',
        'laptop': '1024px',
        'destop': '1280px'
      }
    },
  },
  plugins: [],
};