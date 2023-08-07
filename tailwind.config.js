/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      boxShadow: {
        'lg-even':'0 0px 30px -2px rgba(0, 0, 0, 0.4)',
        'lg-neu-10' : '10px 10px 24px #b9b9b9, -10px -10px 24px #ffffff',
        'lg-neu-10-inner' : 'inset 10px 10px 20px #b9b9b9, inset -10px -10px 20px #ffffff',
        'lg-neu-30' : '30px 30px 60px #b9b9b9, -30px -30px 60px #ffffff',
      },
      colors:{
        "bg-main" : "#ededed",
      }
    },
  },
  plugins: [],
}

