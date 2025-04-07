/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        "primary": "rgb(85 81 227)",
        "secondary": "#1687a7",
        "tertiary": "#014955"
      },
      textColor: {
        primary: "#e4d1d3",
        secondary: "#1687a7",
        tertiary: "#dd0a35",
        quaternary: "#014955"
      }
    },
    fontFamily: {
      "hero-font": "Lobster"
    },
  },
  plugins: [],
}

