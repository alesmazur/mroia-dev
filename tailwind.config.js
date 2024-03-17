const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      base: 'Montserrat Alternates, sans-serif',
      heading: 'Hammersmith One, sans-serif'
    },

    screens: {
      'xs': '320px',
      'sm': '384px',
      'md': '448px',
      'lg': '512px',
      'xl': '576px',
      '2xl': '672px',
      '3xl': '768px',
      '4xl': '896px',
      '5xl': '1024px',
      '6xl': '1152px',
      '7xl': '1280px',
      '8xl': '1440px',
    },

    extend: {
      colors: {
        'mr-main': '#1a1a1a',
        'mr-footer': '#151515',
        'mr-main-active': colors.amber[400],
      },

      keyframes: {
        'logo-slice-1-in': {
          '0%': { transform: 'translate(0, 0)', background: colors.white },
          '50%': { background: colors.amber[400] },
          '100%': { transform: 'translate(10px, 10px)' },
        },
        'logo-slice-1-out': {
          '0%': { transform: 'translate(10px, 10px)', background: colors.amber[400] },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { background: colors.white },
        },

        'logo-slice-3-in': {
          '0%': { transform: 'translate(0, 0)', background: colors.white },
          '50%': { background: colors.amber[400] },
          '100%': { transform: 'translate(-10px, 10px)' },
        },
        'logo-slice-3-out': {
          '0%': { transform: 'translate(-10px, 10px)', background: colors.amber[400] },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { background: colors.white },
        },

        'logo-slice-7-in': {
          '0%': { transform: 'translate(0, 0)', background: colors.white },
          '50%': { background: colors.amber[400] },
          '100%': { transform: 'translate(10px, -10px)' },
        },
        'logo-slice-7-out': {
          '0%': { transform: 'translate(10px, -10px)', background: colors.amber[400] },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { background: colors.white },
        },

        'logo-slice-9-in': {
          '0%': { transform: 'translate(0, 0)', background: colors.white },
          '50%': { background: colors.amber[400] },
          '100%': { transform: 'translate(-10px, -10px)' },
        },
        'logo-slice-9-out': {
          '0%': { transform: 'translate(-10px, -10px)', background: colors.amber[400] },
          '50%': { transform: 'translate(0, 0)' },
          '100%': { background: colors.white },
        },

        'logo-slice-2': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -4px)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        'logo-slice-4': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-4px, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        'logo-slice-6': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(4px, 0)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        'logo-slice-8': {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, 4px)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        'contact-top': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        'contact-right': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },

        'contact-bottom': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },

        'contact-left': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },

        'pulse-right': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(8px)' },
          '100%': { transform: 'translateX(0)' },
        },

        'pulse-left': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-8px)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}

