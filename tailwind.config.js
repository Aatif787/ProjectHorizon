/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Exo 2', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Orbitron', 'Exo 2', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
      },
      colors: {
        'cyber-blue': '#00d4ff',
        'neon-purple': '#b347d9',
        'dark-space': '#0f0f23',
        'space-gray': '#1a1a2e',
        'electric-blue': '#3b82f6',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
      },
      backgroundImage: {
        'futuristic-gradient': 'linear-gradient(-45deg, #0f0f23, #1a1a2e, #16213e, #0f3460)',
      }
    },
  },
  plugins: [],
};
