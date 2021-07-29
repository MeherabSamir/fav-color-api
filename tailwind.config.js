module.exports = {
  purge: [
    './public/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {

      'poppins': ['\'Poppins\',sans-serif']
     },
     screens: {
      'xs': '275px',
      'sm': '640px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
