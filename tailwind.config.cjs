/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,}"],
  theme: {
    extend: {
      colors:{
        'brand':{
          base: "#112E2E",
          h2: "#2e612f",
          details: "BDD84F",
          text: "#7A7A7A",
        }
      }
    },
  },
  plugins: [],
}
