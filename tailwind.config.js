/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portbg: '#1C1D21',
        portTextPink: '#A288A6',
        portTextLightPink: '#F1E3E4'
      },
      spacing: {
        '100': '100px',
        '600': '600px',
        '450': '450px',
      }
    },
  },
  plugins: [],
}


