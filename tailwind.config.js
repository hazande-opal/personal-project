/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}","index.html" , "hard.css"],
  theme: {
    extend: {
      height : {
        '100' : '400px',
        '104' : '416px',
        '108' : '432px',
        '112' : '448px',
        '116' : '464px'
      },
      width : {
        '84' : '320px',
        '88' : '336px',
        '92' : '352px'
      },
      fontSize : {
        'xsm' : '0.85rem',
        'xssm' : '0.7rem',
        'lg' : '1.5rem'
      },
     
    },
  },
  plugins: [],
}

