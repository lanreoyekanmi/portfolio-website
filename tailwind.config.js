/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'portfolio-dark': '#0e0e11',
        'portfolio-purple': '#9b87f5',
        'portfolio-purple-light': '#b8a4ff',
        'portfolio-purple-dark': '#7e69ab',
      },
    },
  },
  plugins: [],
}; 