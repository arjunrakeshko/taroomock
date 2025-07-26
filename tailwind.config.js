/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Updated primary palette following guidelines
        'primary-green': '#1ED760',
        'primary-blue': '#21A1FF',
        'accent-yellow': '#FFD24D',
        'accent-orange': '#FF9600',
        'accent-red': '#FF4B4B',
        'accent-purple': '#CE82FF',
        'accent-pink': '#FF86D0',
        'text-navy': '#002B5B',
        'text-gray': '#6B7280',
        'dark-green': '#1BC653',
        'light-green': '#89E219',
        'surface-gray': '#F8FAFC',
        'border-gray': '#E2E8F0',
        'success-green': '#1ED760',
        'warning-yellow': '#FFD24D',
        'error-red': '#FF4B4B',
        'info-blue': '#21A1FF',
        
        // Parent mode muted palette
        'parent-navy': '#1E293B',
        'parent-gray': '#64748B',
        'parent-light': '#F1F5F9',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],    // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],   // 14px
        'base': ['1rem', { lineHeight: '1.5' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.4' }],   // 18px
        'xl': ['1.25rem', { lineHeight: '1.3' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '1.2' }],    // 24px
        '3xl': ['1.875rem', { lineHeight: '1.2' }],  // 30px
      },
      borderRadius: {
        'card': '16px',
        'tile': '12px',
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 43, 91, 0.08)',
        'card': '0 8px 24px rgba(0, 43, 91, 0.12)',
        'button': '0 2px 8px rgba(30, 215, 96, 0.2)',
        'duolingo': '0 4px 0 rgba(27, 198, 83, 1)',
        'duolingo-pressed': '0 2px 0 rgba(27, 198, 83, 1)',
      },
      animation: {
        'bounce-in': 'bounceIn 0.4s ease-out',
        'confetti': 'confetti 0.4s ease-out',
        'pulse-gentle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.5s ease-in-out',
        'mascot-blink': 'blink 8s infinite',
        'slide-up': 'slideUp 0.3s ease-out',
        'button-press': 'buttonPress 0.2s ease-out',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-200px) rotate(720deg)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        blink: {
          '0%, 96%, 100%': { transform: 'scaleY(1)' },
          '98%': { transform: 'scaleY(0.1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        buttonPress: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
        '48dp': '48px',
      },
      backdropBlur: {
        'xl': '24px',
      },
      screens: {
        'xs': '375px',      // iPhone SE
        'sm': '390px',      // iPhone 12/13/14
        'md': '768px',      // iPad Mini/Air Portrait
        'lg': '820px',      // iPad Air Landscape
        'xl': '1024px',     // iPad Pro Portrait
        '2xl': '1366px',    // iPad Pro Landscape
      },
    },
  },
  plugins: [],
};