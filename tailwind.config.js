// tailwind.config.js
module.exports = {
    purge: [
        './*.html',
        './**/*.html'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  plugins: [],
}