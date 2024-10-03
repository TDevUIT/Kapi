/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './src/**/*.{js,ts,tsx}',
    './screens/**/*.{js,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        sunsetOrange: 'rgb(242, 139, 47)',
        peachOrange: 'rgb(241, 170, 106)',
        vibrantOrange: 'rgb(242, 92, 5)',
      },
    },
  },
  plugins: [],
};
