/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.md", "./src/**/*.liquid", "./src/**/*.njk", "./src/**/*.11ty.js"],
  theme: {
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    logs: false,
  },
}

