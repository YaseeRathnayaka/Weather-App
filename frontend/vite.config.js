module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // custom colors if needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
