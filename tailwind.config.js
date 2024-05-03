/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#121511',
        'green-light': '#9FE870',
        'white-transparent': 'rgba(255, 255, 255, 0.1)',
        'white-off': '#F3F5F1',
        'gray-disable': '#787A77'
      },
    },
  },
  plugins: [],
}