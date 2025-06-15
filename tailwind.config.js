/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'wiggle-strong': 'wiggle-strong 0.4s ease-in-out infinite',
      },
      keyframes: {
        'wiggle-strong': {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },

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
