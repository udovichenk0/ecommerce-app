/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(270px, 1fr))',
        'auto-row': 'auto 1fr auto',
      }
    },
    colors: {
      'main-dark': '#1a1a1a',
      'light-dark': '#4a4a4a',
      'tr-dark': '#101010ba',
      'white': '#fff',
      'lgrey': '#f2f2f2',
      'error': '#eb2b2b'
    },
    container:{
      center: true
    }
  },
  plugins: [],
}