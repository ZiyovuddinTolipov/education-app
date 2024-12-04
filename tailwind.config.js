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
          light: '#6C5DD3', // Asosiy binafsha rang
          dark: '#8B7DFF', // Dark mode uchun ochroq binafsha
        },
        secondary: {
          light: '#A0D7E7', // Och ko'k
          dark: '#64B5F6', // Dark mode uchun to'qroq ko'k
        },
        background: {
          light: '#ffffff', // Juda och kulrang
          dark: '#000000', // To'q ko'k-kulrang
        },
        text: {
          light: '#4B5563', // To'q kulrang
          dark: '#E0E0E0', // Och kulrang
        },
        surface: {
          light: '#FFFFFF', // Oq
          dark: '#2B2B40', // To'q ko'k-kulrang
        },
        accent: {
          light: '#FF8A65', // Och qizg'ish
          dark: '#FF7043', // Dark mode uchun to'qroq qizg'ish
        },
        chart: {
          background: {
            light: '#FFFFFF',
            dark: '#2B2B40'
          },
          text: {
            light: '#333333',
            dark: '#E0E0E0'
          },
          grid: {
            light: '#E0E0E0',
            dark: '#3F3F5F'
          }
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};