/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        'background-light': '#111111',
        'background-lighter': '#191919',
        primary: '#5E6AD2',
        secondary: '#2E3857',
        accent: '#F7F8F8',
        success: '#2CB67D',
        error: '#E5484D',
        warning: '#F2BD24',
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          tertiary: '#52525B'
        },
        border: '#2E2E2E'
      },
      fontFamily: {
        sans: ['Inter-Regular', 'system-ui', 'sans-serif'],
        heading: ['Inter-Bold', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};