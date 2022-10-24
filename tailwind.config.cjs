/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'main-dark': '#1a1a1a',
      'light-dark': '#4a4a4a',
      'tr-dark': '#101010ba',
      'white': '#fff',
      'lgrey': '#f2f2f2'
    },
    container:{
      center: true
    }
  },
  plugins: [],
}