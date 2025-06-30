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
        sans: ['Jost', 'sans-serif'],
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
        // Typing animation keyframes
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'var(--tw-colors-light-primary)' }
        },
        'blink-caret-dark': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'var(--tw-colors-dark-primary)' }
        },
        'navbar-name-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.9' },
        },
        // Super professional background image animation for Home page
        'background-subtle-float': {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1) rotate(12deg)',
            filter: 'brightness(1) blur(1px)',
            opacity: '0.05'
          },
          '25%': {
            transform: 'translateY(-5px) scale(1.01) rotate(10deg)',
            filter: 'brightness(1.05) blur(0.8px)',
            opacity: '0.06'
          },
          '75%': {
            transform: 'translateY(5px) scale(0.99) rotate(14deg)',
            filter: 'brightness(0.95) blur(1.2px)',
            opacity: '0.04'
          },
        },
        // Pop up for modal
        'scale-in': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
        // Lift and subtle glow for cards on hover
        'lift-and-glow': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            'box-shadow': '0 4px 10px rgba(0, 0, 0, 0.1)',
          },
          '50%': {
            transform: 'translateY(-5px) scale(1.01)',
            'box-shadow': '0 8px 20px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 123, 255, 0.4)',
          },
        },
        'lift-and-glow-dark': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1)',
            'box-shadow': '0 4px 10px rgba(0, 0, 0, 0.3)',
          },
          '50%': {
            transform: 'translateY(-5px) scale(1.01)',
            'box-shadow': '0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(88, 166, 255, 0.4)',
          },
        },
        // New: Profile breathing animation
        'profile-breathe': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.01) rotate(1deg)' },
        },
        // New: Profile hover scale and pulse
        'profile-hover-scale-pulse': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.1)' },
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
        'typing': 'typing forwards steps(var(--steps))',
        'blink-caret': 'blink-caret 0.75s step-end infinite',
        'navbar-name-pulse': 'navbar-name-pulse 2s ease-in-out infinite alternate',
        'background-subtle-float': 'background-subtle-float 15s ease-in-out infinite alternate',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'scale-out': 'scale-out 0.3s ease-out forwards',
        'lift-and-glow': 'lift-and-glow 3s ease-in-out infinite alternate',
        'lift-and-glow-dark': 'lift-and-glow-dark 3s ease-in-out infinite alternate',
        'profile-breathe': 'profile-breathe 4s ease-in-out infinite alternate', // Applied to ShanukaProfile.png
        'profile-hover-scale-pulse': 'profile-hover-scale-pulse 1.5s ease-in-out infinite alternate', // Applied on hover
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};