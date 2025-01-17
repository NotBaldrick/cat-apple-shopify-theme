/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./assets/*.js",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/**/*.liquid",
    "./templates/**/*.json"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      screens: {
        "max-lg": {"max": defaultTheme.screens.lg}
      }
    }
  },
  daisyui: {
    themes: ["lofi"]
  },
  plugins: [require("daisyui")],
}
