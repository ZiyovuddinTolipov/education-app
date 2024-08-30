/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-quill/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#006400', // Dark green
          dark: '#008000', // Slightly lighter green for dark mode
        },
        secondary: {
          light: '#00FF00', // Electric green
          dark: '#32CD32', // Lime green for dark mode
        },
        background: {
          light: '#FFFFFF', // White
          dark: '#000000', // Black
        },
        text: {
          light: '#000000', // Black
          dark: '#FFFFFF', // White
        },
        surface: {
          light: '#F0FFF0', // Honeydew (very light green)
          dark: '#1A1A1A', // Very dark gray (almost black)
        },
        accent: {
          light: '#90EE90', // Light green
          dark: '#228B22', // Forest green
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};