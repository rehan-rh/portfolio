/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-50': '#ebf8ff',
        'purple-50': '#f5f3ff',
        'pink-50': '#fff5f7',
      },
    },
  },
  plugins: [],
};
