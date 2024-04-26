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
        secondary: '#F5F5F5', // Alternative color for certain sections
        box: '#292929', // Color of the box
        text: '#ffffff', // Text color inside the box
        outline: '#8f8f8f', // Outline color of the box
        slash: '#e80029', // New color for the slash
        navBar: '#111111', // Navbar color
      },
      width: {
        'box': '350px', // Width of the box
      },
      height: {
        'box': '70px', // Height of the box
      },
      borderWidth: {
        '2': '2px', // Border width
      },
    },
  },
  plugins: [],
}