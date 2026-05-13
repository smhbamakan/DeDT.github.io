/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040d1a',
          900: '#0A1628',
          800: '#0f1f3d',
          700: '#162847',
        },
        electric: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#1D4ED8',
        },
        cyan: {
          brand: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.25) 0%, transparent 60%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.37)',
        'glow-blue': '0 0 20px rgba(59,130,246,0.4)',
        'glow-cyan': '0 0 20px rgba(6,182,212,0.4)',
        'glow-blue-lg': '0 0 40px rgba(59,130,246,0.3)',
      },
    },
  },
  plugins: [],
}
