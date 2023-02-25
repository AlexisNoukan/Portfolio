/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: "false",
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
});
