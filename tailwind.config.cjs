/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans: ['Inter', 'sans-serif']
    } ,
    extend: {
      colors: {
        // 'nlw-gradient': 'background: linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)'
      },
      backgroundImage:{
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(90.86deg, #9572FC 20.08%, #43E7AD 60.94%, #E1D55D 18.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
      }
    },
  },
  plugins: [],
}
