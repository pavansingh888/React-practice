/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //because we want darkMode to be run on class basis not on Media basis
  theme: {
    extend: {},
  },
  plugins: [],
}

