const colors = require('tailwindcss/colors')
const customColors = require('./tailwind.colors.js');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ...customColors        
      },
      textOpacity: ['dark']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
