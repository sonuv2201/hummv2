/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FFC702",
        primary: "#1C1C1C",
        secondary: "#707070",
        menu: "#3d4152",
      }, 
      screens: {
        '2xl': '1280px',
      },
      fontFamily: {
        'body': ['DM Sans', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          'from ': { transform: 'rotate(0deg)' },
          'to': { transform: ' rotate(359deg)' },
        }
      }

    },
  },
  plugins: [],
}
