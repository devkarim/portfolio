/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1B1B26',
        primary: '#FF00B8',
        secondary: '#9847FF',
      },
      fontFamily: {
        pacifico: ['Pacifico'],
        oleo: ['Oleo Script Swash Caps'],
      },
      fontSize: {
        '10xl': '9rem',
      },
    },
  },
};
