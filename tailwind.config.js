/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glintGreen:"#39B54A"
      },
      backgroundImage: {
        contactBg :"url('/pictures/contactBg.png')"
      }
    },
  },
  plugins: [],
}
