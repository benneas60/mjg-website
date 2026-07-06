/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        // MJG Brand Guide: source of truth
        forest: {
          DEFAULT: '#386927', // primary brand green
          50: '#f1f7ee',
          100: '#dcebd3',
          200: '#b8d7a9',
          300: '#8fbe7b',
          400: '#5f9c4c',
          500: '#386927',
          600: '#2f5a21',
          700: '#25481a',
          800: '#1c3714',
          900: '#12250d',
        },
        leaf: {
          DEFAULT: '#71bb61', // secondary brand green
          50: '#f2faf0',
          100: '#e0f3da',
          200: '#c1e7b6',
          300: '#a1da91',
          400: '#8ccd77',
          500: '#71bb61',
          600: '#5a984d',
          700: '#45753b',
          800: '#2f5228',
          900: '#1a2f16',
        },
        ink: '#000000',
        charcoal: {
          DEFAULT: '#424242', // brand charcoal
          950: '#1F2937', // added dark charcoal for text contrast per brief
        },
        stone: {
          DEFAULT: '#949494', // brand gray
        },
        paper: '#ffffff',
      },
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['Gagalin', 'Montserrat', 'ui-sans-serif', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['clamp(2.75rem, 5vw + 1rem, 5.5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.25rem, 3.5vw + 1rem, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(1.75rem, 2vw + 1rem, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(31, 41, 55, 0.04), 0 8px 24px -8px rgba(31, 41, 55, 0.12)',
        'card-hover': '0 4px 8px rgba(31, 41, 55, 0.06), 0 16px 40px -12px rgba(31, 41, 55, 0.18)',
        nav: '0 1px 0 rgba(31, 41, 55, 0.06), 0 8px 24px -16px rgba(31, 41, 55, 0.15)',
      },
      backgroundImage: {
        'paver-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23386927' stroke-opacity='0.08' stroke-width='1.5'%3E%3Cpath d='M0 40 L40 0 L80 40 L40 80 Z'/%3E%3Cpath d='M0 40 L40 80'/%3E%3Cpath d='M40 0 L80 40'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        reveal: 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
