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
      },
      screens: {
        "sm": "	730px",
        "md": "	868px",
        "lg": "	1024px",
        "xl": "	1280px",
        "2xl": "	1536px",
      }
    },
    colors: {
      'main-dark': '#1a1a1a',
      'black': '#101010',
      'light-dark': '#4a4a4a',
      'tr-dark': '#101010ba',
      'white': '#fff',
      'lgrey': '#f2f2f2',
      'error': '#eb2b2b',
      'pink': '#c500c5',
      'blue': '#004d84',
      'brown': '#753600',
      'red': '#f70808',
      'orange': '#ff6f00',
      'green': '#24f558'
    },
    container:{
      center: true,
      padding: '20px'
    }
  },
  plugins: [],
}