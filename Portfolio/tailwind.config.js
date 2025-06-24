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
          background: '#0D1117',
          card: '#161B22',
          text: '#C9D1D9',
          textSecondary: '#8B949E',
          primary: '#58A6FF',
          accent: '#39C5BB',
          border: '#30363D',
        },
      },
      boxShadow: {
        'custom-light': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'custom-dark': '0 10px 30px rgba(0, 0, 0, 0.5)',
        '3d-light': '5px 5px 20px rgba(0,0,0,0.15)',
        '3d-dark': '5px 5px 20px rgba(0,0,0,0.6)',
      },
      transitionTimingFunction: {
        'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'ease-in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
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
          '0%, 100%': { 'box-shadow': '0 0 0 0 var(--tw-colors-light-primary)' },
          '50%': { 'box-shadow': '0 0 0 12px rgba(0, 123, 255, 0)' },
        },
        'pulse-dark-primary': {
          '0%, 100%': { 'box-shadow': '0 0 0 0 var(--tw-colors-dark-primary)' },
          '50%': { 'box-shadow': '0 0 0 12px rgba(88, 166, 255, 0)' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        'pop-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'name-glow': {
          '0%, 100%': { 'text-shadow': '0 0 5px rgba(0, 123, 255, 0.5), 0 0 10px rgba(0, 123, 255, 0.2)' },
          '50%': { 'text-shadow': '0 0 10px rgba(0, 123, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.4)' },
        },
        'name-glow-dark': {
          '0%, 100%': { 'text-shadow': '0 0 5px rgba(88, 166, 255, 0.5), 0 0 10px rgba(88, 166, 255, 0.2)' },
          '50%': { 'text-shadow': '0 0 10px rgba(88, 166, 255, 0.8), 0 0 20px rgba(88, 166, 255, 0.4)' },
        },
        'profile-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'border-pulse-light': {
          '0%, 100%': { 'border-color': 'var(--tw-colors-light-primary)' },
          '50%': { 'border-color': 'var(--tw-colors-light-accent)' },
        },
        'border-pulse-dark': {
          '0%, 100%': { 'border-color': 'var(--tw-colors-dark-primary)' },
          '50%': { 'border-color': 'var(--tw-colors-dark-accent)' },
        },
        'slide-in-top': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-out-top': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-100%)' },
        },
        'float': {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'card-bg-scale': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '0.15', transform: 'scale(1)' },
        },
        'rotate-once': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'text-soft-glow': {
          '0%, 100%': { 'filter': 'drop-shadow(0 0 0px transparent)' },
          '50%': { 'filter': 'drop-shadow(0 0 2px rgba(0, 123, 255, 0.3))' },
        },
        'fade-rotate': {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-90deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        'fade-rotate-out': {
          '0%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '100%': { opacity: '0', transform: 'scale(0.8) rotate(90deg)' },
        },
        // New: Keyframes for layered images in About section
        'layer-float-1': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(5px, -5px) rotate(2deg)' },
          '66%': { transform: 'translate(-5px, 5px) rotate(-2deg)' },
        },
        'layer-float-2': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(-5px, -5px) rotate(-3deg)' },
          '66%': { transform: 'translate(5px, 5px) rotate(3deg)' },
        },
        'layer-float-3': {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(5px, 5px) rotate(1deg)' },
          '66%': { transform: 'translate(-5px, -5px) rotate(-1deg)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'pulse-light': 'pulse-primary 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-dark': 'pulse-dark-primary 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-move': 'gradient-move 30s ease infinite alternate',
        'pop-in': 'pop-in 0.4s ease-out forwards',
        'name-glow': 'name-glow 3s ease-in-out infinite alternate',
        'name-glow-dark': 'name-glow-dark 3s ease-in-out infinite alternate',
        'profile-pulse': 'profile-pulse 3s ease-in-out infinite alternate',
        'border-pulse-light': 'border-pulse-light 4s ease-in-out infinite alternate',
        'border-pulse-dark': 'border-pulse-dark 4s ease-in-out infinite alternate',
        'slide-in-top': 'slide-in-top 0.4s ease-out forwards',
        'slide-out-top': 'slide-out-top 0.4s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'card-bg-scale': 'card-bg-scale 0.3s ease-out forwards',
        'rotate-once': 'rotate-once 0.5s ease-out',
        'text-soft-glow': 'text-soft-glow 3s ease-in-out infinite alternate',
        'fade-rotate': 'fade-rotate 0.4s ease-out forwards',
        'fade-rotate-out': 'fade-rotate-out 0.4s ease-in forwards',
        // New animations for layered images
        'layer-float-1': 'layer-float-1 10s ease-in-out infinite alternate',
        'layer-float-2': 'layer-float-2 12s ease-in-out infinite alternate',
        'layer-float-3': 'layer-float-3 11s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};