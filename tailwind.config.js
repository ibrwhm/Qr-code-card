/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'white': 'hsl(0, 0%, 100%)',
      'light-gray': 'hsl(212, 45%, 89%)',
      'graysh-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)'
    },
    extend: {
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif']
      },
    },
  },
  plugins: [],
  mode: 'jit'
}
