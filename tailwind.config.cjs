/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,}"],
  theme: {
    fontFamily:{
      'title': ['Libre Baskerville'],
      'base': ['Open Sans'],
    },
    
    extend: {
      backgroundImage:{
        'home-image': "url('assets/image-home.jpg')"
      },
      gridTemplateColumns:{
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
