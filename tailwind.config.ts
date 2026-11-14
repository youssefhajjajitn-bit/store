import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-stone': {
          50: '#faf8f5',
          100: '#f5f3f0',
          200: '#e6dfda',
          300: '#d4cfc7',
          400: '#c9a976',
          500: '#b89461',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    plugins: [],
  },
} satisfies Config
