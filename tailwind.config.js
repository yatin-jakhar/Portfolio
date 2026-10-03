/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#05070c',
          subtle: '#090d16',
          card: '#0e1422',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(56, 189, 248, 0.35)',
        },
        silicon: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
        logic: {
          high: '#10b981', // digital 1
          low: '#64748b',  // digital 0
          amber: '#f59e0b',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'circuit-grid': 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
        'chip-die': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'signal-flow': 'signal 2s linear infinite',
      },
      keyframes: {
        signal: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
