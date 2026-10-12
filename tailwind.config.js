/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './wholesale/index.html', './thanks/index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pink: { DEFAULT: '#F06A93', deep: '#C93A68', soft: '#F9B8CB' },
        dough: { DEFAULT: '#DDA15E', light: '#EDC489', deep: '#B97834' },
        choc: { DEFAULT: '#2B1610', soft: '#4A2A1C', milk: '#6E4430' },
        vanilla: { DEFAULT: '#FFF4E6', deep: '#F5E2C8' },
        sprinkle: {
          sky: '#4FA3F7',
          lemon: '#FFD447',
          mint: '#5CCB8F',
          tangerine: '#FF8A3D',
        },
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
        script: ['"Leckerli One"', 'cursive'],
      },
      boxShadow: {
        lift: '0 18px 40px -18px rgba(43, 22, 16, 0.55)',
        press: '0 6px 14px -6px rgba(43, 22, 16, 0.5)',
      },
    },
  },
  plugins: [],
};
