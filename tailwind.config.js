/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hacker-green': {
          500: '#00ff00',
          400: '#00cc00',
        }
      }
    },
  },
  plugins: [],
};