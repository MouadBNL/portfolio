/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'DEFAULT': '#7F5AF0',
          '500': '#7F5AF0'
        },
        accent: {
          'DEFAULT': '#2CB67D',
          '500': '#2CB67D'
        },
        gr: {
          '900': '#16161A',
          '800': '#25252B',
          '700': '#32353B',
          '600': '#44484F',
          '500': '#58616D',
          '400': '#94A1B2',
          '300': '#B5BFCB',
          '200': '#C8D1DC',
          '100': '#E6EBF2',
          '50': '#FFFFFE',
        }
      }
    },
  },
  plugins: [],
}
