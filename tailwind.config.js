/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        vic: {
          purple: '#3B2A9E', // Primary indigo
          deep: '#1E1550',   // Deep indigo (Footer)
          red: '#D63A26',    // Accent red (CTAs, highlights)
          lilac: '#F1EFFD',  // Light tint
          ink: '#1E293B'     // Slate-800
        }
      },
      boxShadow: { soft: '0 18px 55px rgba(39, 24, 98, .10)' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] }
    }
  },
  plugins: []
}