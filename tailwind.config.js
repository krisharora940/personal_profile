/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium neutral palette
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            '[class~="lead"]': {
              color: 'var(--color-text)',
            },
            strong: {
              color: 'var(--color-text)',
            },
            'ol[type="A"]': {
              color: 'var(--color-text)',
            },
            'ol[type="a"]': {
              color: 'var(--color-text)',
            },
            'ol[type="I"]': {
              color: 'var(--color-text)',
            },
            'ol[type="i"]': {
              color: 'var(--color-text)',
            },
            "> ol": {
              color: 'var(--color-text)',
            },
            "> ul": {
              color: 'var(--color-text)',
            },
            "hr": {
              borderColor: 'var(--color-border)',
            },
            "blockquote": {
              color: 'var(--color-text)',
              borderLeftColor: 'var(--color-border)',
            },
            "h1": {
              color: 'var(--color-text)',
            },
            "h2": {
              color: 'var(--color-text)',
            },
            "h3": {
              color: 'var(--color-text)',
            },
            "h4": {
              color: 'var(--color-text)',
            },
            ":is(h1, h2, h3, h4) > a": {
              color: 'var(--color-text)',
            },
            "table": {
              color: 'var(--color-text)',
              borderColor: 'var(--color-border)',
            },
            "tbody td, tfoot td": {
              borderColor: 'var(--color-border)',
            },
            "thead": {
              color: 'var(--color-text)',
              borderColor: 'var(--color-border)',
            },
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
