/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'tu-teal': '#0e7490',
        'tu-band': '#0e7894',
        'tu-navy': '#00233f',
        'tu-green': '#1e7b3e',
        'tu-bg': '#f8f9fb',
        'tu-tint': '#e6f1f6',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Mulish', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
