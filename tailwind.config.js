/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
        quran: ['Amiri', 'serif'],
      },
      colors: {
        sage: {
          50: '#f4f8f5',
          100: '#e3efe5',
          200: '#c7dfcb',
          300: '#9fc4a6',
          400: '#6fa378',
          500: '#4f8557',
          600: '#3c6a43',
          700: '#315537',
          800: '#294430',
          900: '#1e3324',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edd0',
          200: '#ebd99c',
          300: '#ddbf5e',
          400: '#d4a73a',
          500: '#c08f25',
          600: '#a3701c',
          700: '#7f5519',
          800: '#6a461b',
          900: '#5a3c1c',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
        scaleIn: 'scaleIn 0.25s ease-out',
        shimmer: 'shimmer 3s linear infinite',
        pulseRing: 'pulseRing 0.6s ease-out',
      },
    },
  },
  plugins: [],
};
