/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'quick': ['Quicksand', 'sans-serif'],
      },
      colors: {
        dark: "#202023",
        light: "#F0E7DB",
        textDark: "#282828",
        textLight: "#f5f5f5",
        whiteAlpha200: "rgba(255, 255, 255, 0.08)",
        whiteAlpha500: "rgba(255, 255, 255, 0.36)",
      },
    },
  },
  plugins: [],
}
