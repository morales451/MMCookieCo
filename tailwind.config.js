/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EF',
        beige: '#E8DED6',
        tan: '#D2B8A3',
        mauve: '#C9A3A3',
        lilac: '#D8CFE3',
        brown: '#6B4F3A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(107, 79, 58, 0.08)',
        card: '0 10px 30px rgba(107, 79, 58, 0.10)',
      },
      letterSpacing: {
        wider: '0.08em',
        widest: '0.22em',
      },
    },
  },
  plugins: [],
};
