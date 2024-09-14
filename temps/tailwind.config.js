/** @type {import('tailwindcss').Config} */
const baseConfig = require('@mj/tailwind')
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  presets: [baseConfig, require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}

