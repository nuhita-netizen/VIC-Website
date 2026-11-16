/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        vic: { purple: '#38258E', deep: '#24165F', red: '#C83B32', lilac: '#F3F0FF', ink: '#19152B' }
      },
      boxShadow: { soft: '0 18px 55px rgba(39, 24, 98, .10)' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
}