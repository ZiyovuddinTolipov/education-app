/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#10B981", // Emerald
          dark: "#059669", // Darker Emerald
        },
        secondary: {
          light: "#34D399", // Light Emerald
          dark: "#047857", // Dark Emerald
        },
        background: {
          light: "#F3F4F6", // Light gray
          dark: "#1F2937", // Dark blue-gray
        },
        text: {
          light: "#1F2937", // Dark gray
          dark: "#F9FAFB", // Very light gray
        },
        card: {
          light: "#FFFFFF", // White
          dark: "#374151", // Darker blue-gray
        },
      },
      backgroundImage: {
        'gradient-light': 'linear-gradient(to right, #10B981, #34D399)',
        'gradient-dark': 'linear-gradient(to right, #059669, #047857)',
      },
    },
  },
  darkMode: 'class',
};