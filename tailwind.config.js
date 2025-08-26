/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is the crucial line that enables class-based dark mode
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this path matches your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};