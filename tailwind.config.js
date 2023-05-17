/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        '2xs': '320px',
        'xs': '480px',
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'primary-green': '#009EB7',
        'secondary-yellow': '#FFD766',
        'tertiary-red': '#DB3A34',
        'light-gray': '#585858',
        'glass-gray': '#767676'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  }
}

