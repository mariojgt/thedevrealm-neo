/**
 * @thedevrealm/neo-css — Tailwind CSS v3/v4 Preset
 *
 * Usage in tailwind.config.js:
 *   const neoPreset = require('@thedevrealm/neo-css/tailwind-preset')
 *   module.exports = { presets: [neoPreset], ... }
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0d9668',
          light:   '#2bb885',
          dark:    '#047857',
        },
        surface: {
          DEFAULT: '#0c1222',
          light:   '#131d33',
          lighter: '#1a2742',
        },
        accent: {
          DEFAULT: '#e6930a',
          dark:    '#c27706',
        },
        'neo-border': '#3a506e',
        muted:         '#8594b0',
        subtle:        '#4b5c7a',
      },

      borderWidth: {
        3: '3px',
      },

      boxShadow: {
        'neo-xs': '2px 2px 0 #000',
        'neo-sm': '4px 4px 0 #000',
        neo:      '5px 5px 0 #000',
        'neo-lg': '6px 6px 0 #000',
        'neo-xl': '8px 8px 0 #000',
      },

      keyframes: {
        'neo-fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'neo-shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'neo-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'neo-bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-5px)' },
        },
        'neo-ping-slow': {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        'neo-gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
      },

      animation: {
        'fade-in-up':      'neo-fade-in-up 0.4s ease forwards',
        shimmer:           'neo-shimmer 2s linear infinite',
        'neo-float':       'neo-float 3s ease-in-out infinite',
        'bounce-gentle':   'neo-bounce-gentle 2s ease-in-out infinite',
        'ping-slow':       'neo-ping-slow 2s ease-out infinite',
        'gradient-shift':  'neo-gradient-shift 4s ease infinite',
      },
    },
  },
}
