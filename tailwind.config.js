/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },
      // Primary, Secondary, Tertiary, Quaternary
      colors:{
        primary: '#0C0C0C',
        secondary: '#481E14',
        tertiary: '#9B3922',
        quaternary:'#F2613F',
        quinary: '#D9D9D9'
      }
    },

    // theme: {
    //   screens: {
    //     'sm': '730px',
    //     // => @media (min-width: 576px) { ... }
  
    //     'md': '960px',
    //     // => @media (min-width: 960px) { ... }
  
    //     'lg': '1440px',
    //     // => @media (min-width: 1440px) { ... }
    //   },
    // }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
}