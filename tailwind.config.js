/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         header: {
          500: '#d4b3ff', // Your custom color
        },
      },
      
    },
  },
  plugins: [],
}


