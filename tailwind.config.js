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
        }
      },
      boxShadow: {
        100: '0px 8px 16px 0px rgba(17, 69, 59, 0.20)',
        200: '-11px 0px 19px 0px rgba(23, 23, 23, 0.30), 0px 13px 20px 0px rgba(23, 23, 23, 0.20)'
      },
      spacing: {
        '9px': '9px',
        96: '96%',
        86: '86%',
        '60px': '60px',
        '50px': '50px',
      },
      fontSize: {
        55: '55px'
      }
    },
  },
  plugins: [],
}

