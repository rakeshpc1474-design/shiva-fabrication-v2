/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef3f8',
          100: '#d9e4ed',
          500: '#121A24',
          600: '#0B1118',
          700: '#121A24',
          900: '#0B1118',
        },
        accent: '#F5A623',
        steel: '#18222F',
        gunmetal: '#121A24',
        graphite: '#18222F',
        construction: '#F5A623',
        safety: '#F5A623',
        industrial: '#0B1118',
        muted: '#AEB8C5',
      },
      boxShadow: {
        premium: '0 20px 70px rgba(11, 19, 24, 0.24)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(8, 27, 33, 0.65), rgba(8, 27, 33, 0.65)), url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80)',
      },
    },
  },
  plugins: [],
};
