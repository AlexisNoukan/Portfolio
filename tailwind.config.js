/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
};
