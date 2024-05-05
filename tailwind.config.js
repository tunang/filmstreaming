/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
     

    //   'md': '760px',
      

      
    // },


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

    
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  
}