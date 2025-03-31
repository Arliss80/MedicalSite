/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        medallus: {
          blue: '#35495E',      // Primary blue
          secondary: '#1D6A9A', // Secondary blue
          tertiary: '#2880B9',  // Tertiary blue
          red: '#E51C24',       // Medallus red
          gray: '#6D6F70',      // Medallus gray
          text: '#323631',      // Text gray
        },
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};