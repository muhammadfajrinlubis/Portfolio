/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        primari:'#14b8a6',
        secondary : '#64748b',
        dark:'#0f172a',
    },
    screens: {
      '2xl': '1320px',
    },
  },
},
  plugins: [],
}
