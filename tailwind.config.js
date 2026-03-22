/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Ubuntu', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'Ubuntu', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        // Hero sizes (responsive)
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'hero-tablet': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'hero-mobile': ['36px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        // Section headings
        'section': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section-tablet': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'section-mobile': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        // Subsection headings
        'subsection': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'subsection-tablet': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'subsection-mobile': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        // Body text
        'body-lg': ['20px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
      },
      colors: {
        // Theme 1: "Sunset Coral" - Warm, Energetic, Modern
        'coral-red': '#FF6B6B',
        'sunset-orange': '#FFA07A',
        'golden-yellow': '#FFD93D',
        'deep-charcoal': '#2D3142',
        'cream': '#FAF3E0',
        'soft-peach': '#FFE5D9',
        'burnt-sienna': '#E76F51',

        // Theme 2: "Forest Emerald" - Natural, Premium, Sophisticated
        'forest-green': '#2D6A4F',
        'emerald': '#40916C',
        'sage': '#E9F5DB',
        'amber': '#F4A261',
        'deep-navy': '#1B263B',
        'mint': '#B7E4C7',
        'olive': '#52796F',

        primary: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF8787',
          500: '#FF6B6B', // Coral Red
          600: '#FA5252',
          700: '#F03E3E',
          800: '#E03131',
          900: '#C92A2A',
        },
        secondary: {
          50: '#FFF4E6',
          100: '#FFE8CC',
          200: '#FFD8A8',
          300: '#FFC078',
          400: '#FFA94D',
          500: '#FFA07A', // Sunset Orange
          600: '#FF922B',
          700: '#FD7E14',
          800: '#F76707',
          900: '#E8590C',
        },
        accent: {
          50: '#FFF9DB',
          100: '#FFF3BF',
          200: '#FFEC99',
          300: '#FFE066',
          400: '#FFD43B',
          500: '#FFD93D', // Golden Yellow
          600: '#FCC419',
          700: '#FAB005',
          800: '#F59F00',
          900: '#F08C00',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'glow-coral': '0 0 40px rgba(255, 107, 107, 0.4)',
        'glow-sunset': '0 0 40px rgba(255, 160, 122, 0.4)',
        'glow-golden': '0 0 40px rgba(255, 217, 61, 0.4)',
        'glow-warm': '0 0 60px rgba(255, 107, 107, 0.3), 0 0 100px rgba(255, 160, 122, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(123, 47, 255, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FFA07A 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFA07A 0%, #FFD93D 100%)',
        'gradient-coral': 'linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2D3142 0%, #1a1f2e 100%)',
        'gradient-soft': 'linear-gradient(135deg, #FAF3E0 0%, #FFE5D9 50%, #FFF4E6 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}