const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00B8E6',
          'primary-hover': '#0099CC',
          'primary-active': '#007AA3',
          'primary-light': '#33C7EC',
          'primary-dark': '#005577',
          secondary: '#0088D9',
          'secondary-hover': '#0066B3',
          'secondary-active': '#004488',
        },
        
        // OnlyBrands Background Colors - Dark theme optimized
        bg: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#111111',
          quaternary: '#1a1a1a',
          hover: '#222222',
          active: '#2a2a2a',
        },
        
        // OnlyBrands Text Colors - Semantic text hierarchy
        text: {
          primary: '#ffffff',
          secondary: '#cccccc',
          tertiary: '#888888',
          quaternary: '#666666',
          disabled: '#444444',
          inverse: '#000000',
        },
        
        // OnlyBrands Border Colors - Subtle border system
        'border-custom': {
          primary: '#333333',
          secondary: '#444444',
          tertiary: '#555555',
          focus: '#00B8E6',
        },
        
        // OnlyBrands Status Colors - Feedback and states
        status: {
          success: '#10b981',
          'success-hover': '#059669',
          'success-bg': 'rgba(16, 185, 129, 0.1)',
          error: '#ef4444',
          'error-hover': '#dc2626',
          'error-bg': 'rgba(239, 68, 68, 0.1)',
          warning: '#f59e0b',
          'warning-hover': '#d97706',
          'warning-bg': 'rgba(245, 158, 11, 0.1)',
          info: '#3b82f6',
          'info-hover': '#2563eb',
          'info-bg': 'rgba(59, 130, 246, 0.1)',
        },
        
        // Shadcn/ui Integration - Maps to CSS custom properties
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      
      // OnlyBrands Typography System
      fontFamily: {
        primary: ['Inter', 'system-ui', 'sans-serif'],
        logo: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      
      // OnlyBrands Font Sizes - Consistent scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      // OnlyBrands Gradients - Brand consistent gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00B8E6, #0088D9)',
        'gradient-secondary': 'linear-gradient(135deg, #0088D9, #0066B3)',
        'gradient-accent': 'linear-gradient(135deg, #00D4FF, #0099FF)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      // OnlyBrands Shadows - Depth and glows
      boxShadow: {
        'glow': '0 0 20px rgba(0, 184, 230, 0.3)',
        'glow-strong': '0 0 30px rgba(0, 184, 230, 0.5)',
        'glow-intense': '0 0 40px rgba(0, 184, 230, 0.7)',
        'dark-sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'dark-md': '0 4px 6px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 10px 15px rgba(0, 0, 0, 0.6)',
        'dark-xl': '0 20px 25px rgba(0, 0, 0, 0.7)',
        'dark-2xl': '0 25px 50px rgba(0, 0, 0, 0.8)',
        'inset-dark': 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
      },
      
      // OnlyBrands Border Radius - Consistent rounding
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': 'calc(var(--radius) - 2px)',
        'lg': 'var(--radius)',
        'xl': 'calc(var(--radius) + 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      
      // OnlyBrands Spacing - 8px base grid
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // OnlyBrands Animations - Enhanced motion
      keyframes: {
        // Entrance animations
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          'from': { opacity: '0', transform: 'translateX(20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          'from': { opacity: '0', transform: 'translateX(-20px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          'from': { opacity: '0', transform: 'scale(0.95)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Brand effects
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 184, 230, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 184, 230, 0.6)' },
        },
        'brand-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        
        // Loading states
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        
        // Keep existing shadcn animations
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      
      animation: {
        // Entrance animations
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        
        // Brand effects
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'brand-shimmer': 'brand-shimmer 2s linear infinite',
        
        // Loading states
        'spin-slow': 'spin-slow 3s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        
        // Keep existing animations
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      
      // OnlyBrands Z-Index Scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Add custom plugin for OnlyBrands utilities
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.glass-effect': {
          'backdrop-filter': 'blur(10px)',
          'background': 'rgba(17, 17, 17, 0.8)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.brand-shimmer-bg': {
          'background': 'linear-gradient(90deg, transparent, rgba(0, 184, 230, 0.2), transparent)',
          'background-size': '200% 100%',
        }
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies config;

export default config;
