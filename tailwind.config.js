/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          cream: '#FFF8E7',
          beige: '#F5E6D3',
          orange: '#FF6B35',
          rust: '#D84315',
          brown: '#6D4C41',
          gold: '#FFB300',
          teal: '#00BCD4',
          purple: '#9C27B0',
          pink: '#FF6090',
          navy: '#1A237E',
        },
      },
      fontFamily: {
        'retro': ['Courier New', 'monospace'],
        'display': ['Georgia', 'serif'],
      },
      boxShadow: {
        'retro': '8px 8px 0px rgba(0, 0, 0, 0.3)',
        'retro-hover': '12px 12px 0px rgba(0, 0, 0, 0.4)',
        'neon': '0 0 10px currentColor, 0 0 20px currentColor',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'flicker': 'flicker 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41%': { opacity: '0.9' },
          '42%': { opacity: '1' },
          '43%': { opacity: '0.95' },
          '45%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor' },
          '50%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
    },
  },
  plugins: [],
}
