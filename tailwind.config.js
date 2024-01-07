/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'vibrant-yellow': '#EAFC12',
      'light-green': '#75E35D',
      'lime': '#00C187',
      'dark-cyan': '#009995',
      'white': '#FFFFFF'
    },
    extend: {
      backgroundImage: {
        'coding-bg': 'url(src/assets/img/coding-bg.jpeg)'
      }
    }
  },
  plugins: [],
}

