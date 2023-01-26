const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
  "./index.html",
  "./src/components/*.{js,jsx}",
  "./src/pages/*.{js,jsx}"
],
  theme: {
    extend: {
      colors: {
        escuro: colors.black,
        vermelho: colors.red,
        cinza: colors.slate
      }
    },
  },
  plugins: [],
}
