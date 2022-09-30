/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      fontFamily: {
        playfair: ["Playfair Display, serif"],
        sourceSans: ["Source Sans Pro, sans-serif"],
      },
    },
  },
  plugins: [],
}
