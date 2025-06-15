/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        'utm-americana': ['"UTMAmericana"', 'sans-serif'],
        'grandma': ['iCielGrandma', 'sans-serif'],
        'gotham': ['SVN-Gotham', 'sans-serif'],
        'dmsans': ['DMSans', 'sans-serif'],

      },
      colors: {
        cocGreen: '#4B6052',
        txtGreen: '#667F69',
        cBg: '#f2f2f2'
        
      }
    },
  },
  plugins: [],
}
