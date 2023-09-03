/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      desktop: '1440px'
    },
    fontFamily: {
      'kumbh-sans': 'Kumbh Sans, sans-serif'
    },
    colors: {
      'dark-cyan': 'hsl(185, 75%, 39%)',
      'very-dark-blue': 'hsl(229, 23%, 23%)',
      'dark-grayish-blue': 'hsl(227, 10%, 46%)',
      'dark-gray': 'hsl(0, 0%, 59%)',
      white: 'hsl(0, 0%, 100%)'
    },
    backgroundImage: {
      'wallpaper-top': "url('./assets/img/bg-pattern-top.svg')",
      'wallpaper-bottom': "url('./assets/img/bg-pattern-bottom.svg')"
    },
    extend: {},
  },
  plugins: [],
}

