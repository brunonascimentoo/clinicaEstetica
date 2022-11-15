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
        50: "rgb(249 250 251)",
        100: "rgb(243 244 246)",
        200: "rgb(229 231 235)",
        300: "rgb(209 213 219)",
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

      boxShadow: {
        'cardShadow': '0 4px 20px rgba(0, 0, 0, 0.25);'
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