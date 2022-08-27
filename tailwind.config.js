/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'strong-cyan':'#26c0ab',
        'light-cyan':'#c5e4e7',
        'light-grey':'#f4fafa',
        'dark-cyan':'#00494d',
        'very-light-cyan':'#f4fafa',
      },
    },
  },
  plugins: [],
}
