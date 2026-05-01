/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        chocolate: '#4A2B18',
        bakeryPink: '#F6C8D1',
        cream: '#FFFDFB',
        maroon: '#8A2C38',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px rgba(74, 43, 24, 0.08)',
      },
    },
  },
  plugins: [],
};
