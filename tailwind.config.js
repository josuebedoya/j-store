/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 5px rgba(50, 50, 0, 0.2)',
        'inset': 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)',
        'extense': '0 0 22px #c0c0c0',
        'custom-white': '0 0 7px #fff',
        'bottom-x': '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        'modal': '0 0 20px #00000050',
        'bottom-right': '5px 5px 8px 2px #00000020',
      },
      colors: {
        'Primary': '#7f7f7f',
        'Secondary': '#2140da',
        'Gray-dark': '#b4b4b4',
      },
      spacing: {
        '600': '40pc',
        'five': '5px',
        '86': '86px',
      },
      fontSize: {
        '13': '13px',
      },
      aspectRatio: {
        '100/83': '100/83',
      },
      scale: {
        '130': '1.3',
      },
      minHeight: {
        '600': '600px',
      },
      maxWidth: {
        '93': '930px'
      }
    },
  },
  plugins: [],
}