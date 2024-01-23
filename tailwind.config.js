
// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5856D6',
        secondary: '#e8e8e8',
      },
      borderColor: {
        primary: '#5856D6',
      },
      fontFamily: {
        'sans': ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],

}
