/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#E96D7B",
        
"secondary": "#A992F7",
        
"accent": "#88DCDD",
        
"neutral": "#AF4670",
        
"base-100": "#F0D6E8",
        
"info": "#2463EB",
        
"success": "#16A249",
        
"warning": "#DB7706",
        
"error": "#DC2828",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],

}
