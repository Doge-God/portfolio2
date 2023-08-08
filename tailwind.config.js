/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'plex':['IBM Plex Mono', 'monospace']
      },

      boxShadow: {
        'md-even':'0 0 15px -3px rgb(0 0 0 / 0.1)',
        'lg-even':'0 0px 30px -2px rgba(0, 0, 0, 0.3)',
        'lg-neu-5' : '5px 5px 10px #b9b9b9,-5px -5px 10px #ffffff',
        'lg-neu-5-inner': "inset 5px 5px 10px #b9b9b9, inset -5px -5px 10px #ffffff",
        'lg-neu-10' : '10px 10px 24px #b9b9b9, -10px -10px 24px #ffffff',
        'lg-neu-10-inner' : 'inset 10px 10px 20px #b9b9b9, inset -10px -10px 20px #ffffff',
        'lg-neu-30' : '30px 30px 60px #b9b9b9, -30px -30px 60px #ffffff',
      },
      colors:{
        "bg-main" : "#ededed",
        "ui-main" : "#8a8a8a",
        "ui-key" : "#606060"
      },
      borderRadius: {
        "4xl" : "2rem",
        "5xl" : "4rem"
      }
    },
  },
  plugins: [],
}

