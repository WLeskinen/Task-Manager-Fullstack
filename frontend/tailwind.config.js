/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ebrima: ['Ebrima', 'sans-serif'],
        corbel: ['Corbel', 'sans-serif'],
      },
      colors: {
        primary: '#1b1b1b', // Set default background color
        secondary: '#FFFFFF', // Alternative color for certain sections
      },
    },
  },
  plugins: [],
}