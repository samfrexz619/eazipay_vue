/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pry: '#11453B',
        textPry: '#515251',
        bgg: 'rgba(17,69,59,.5)',
        eazi_red: {
          10: '#ea4e4b'
        },
        grey_10: '#7C7C7C',
        txtBold: '#292A29',
        pryHov: 'rgba(240, 247, 235, 0.50)'
      },
      boxShadow: {
        100: '0px 8px 16px 0px rgba(17, 69, 59, 0.20)',
        200: '-11px 0px 19px 0px rgba(23, 23, 23, 0.30), 0px 13px 20px 0px rgba(23, 23, 23, 0.20)',
        300: '0px 20px 48px 0px rgba(170, 170, 170, 0.29)',
        10: '4px 0px 25px 0px rgba(170, 170, 170, 0.08)',
        20: '0px 4px 25px 0px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '9px': '9px',
        96: '96%',
        86: '86%',
        '60px': '60px',
        '50px': '50px',
        '100': '100vh',
        115: '115vh',
        w_calc: 'calc(100% - 272px)',
        272: '272px',
      },
      fontSize: {
        55: '55px',
        40: '40px'
      },
      borderRadius: {
        100: '0px 2px 2px 0px'
      }
    },
  },
  plugins: [],
}

