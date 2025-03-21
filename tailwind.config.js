/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather-sans': ['Merriweather Sans', 'sans-serif'],
      },
      serif: ['Roboto Slab', 'serif'],
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
}