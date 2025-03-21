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
        'serif': ['Roboto Slab', 'serif'],
        'allura': ['Allura', 'cursive'], // Fixed space issue
      },
      textColor:{
        colorPrimary:'#FF6B6B'
      }
    },
  },
  plugins: [],
};
