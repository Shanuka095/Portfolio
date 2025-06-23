/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        light: {
          background: '#F8F9FA',
          card: '#FFFFFF',
          text: '#343A40',
          textSecondary: '#6C757D',
          primary: '#007BFF',
          accent: '#17A2B8',
          border: '#DEE2E6',
        },
        dark: {
          background: '#1A202C',
          card: '#2D3748',
          text: '#E2E8F0',
          textSecondary: '#A0AEC0',
          primary: '#63B3ED',
          accent: '#4FD1C5',
          border: '#4A5568',
        },
      },
      // Add custom animations
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-primary': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 rgba(0, 123, 255, 0.7)' },
          '50%': { 'box-shadow': '0 0 0 10px rgba(0, 123, 255, 0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'pulse-primary': 'pulse-primary 2s infinite',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};