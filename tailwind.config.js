
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FFF8F0', // Main background
          200: '#FFE8D1',
          300: '#FFD8B3',
        },
        chocolate: {
          50: '#F5EBE6',
          100: '#EBD6CD',
          600: '#6B4423', // Secondary text
          800: '#4E342E',
          900: '#3E2723', // Primary text
        },
        caramel: {
          400: '#E5B887',
          500: '#D4A574', // Primary CTA
          600: '#C28E5D',
        },
        mint: {
          50: '#F5FFF5', // Section background
          100: '#E0F2E0',
        },
        rose: {
          50: '#FFF0F0',
          100: '#FFE5E5', // Accent
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
