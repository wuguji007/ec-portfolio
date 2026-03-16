/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Mono', 'monospace'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#FF2D6B',
          cyan: '#00F5FF',
          purple: '#BF5AF2',
          green: '#39FF14',
        },
        dark: {
          900: '#050508',
          800: '#0A0A12',
          700: '#0F0F1A',
          600: '#161622',
        }
      },
      animation: {
        'scan': 'scan 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'previewScan': 'previewScan 3s linear infinite',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        previewScan: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' }
        },
      }
    },
  },
  plugins: [],
}
