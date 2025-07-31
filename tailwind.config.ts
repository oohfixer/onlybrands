/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // OnlyBrands Brand Colors
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
        // OnlyBrands Background Colors (Dark Theme)
        bg: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#111111',
          quaternary: '#1a1a1a',
          hover: '#222222',
          active: '#2a2a2a',
        },
        // OnlyBrands Text Colors
        text: {
          primary: '#ffffff',
          secondary: '#cccccc',
          tertiary: '#888888',
          quaternary: '#666666',
          disabled: '#444444',
          inverse: '#000000',
        },
        // OnlyBrands Border Colors
        'border-custom': {
          primary: '#333333',
          secondary: '#444444',
          tertiary: '#555555',
          focus: '#00B8E6',
        },
        // OnlyBrands Status Colors
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
        // Shadcn/ui compatibility (keep existing)
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
      // OnlyBrands Typography
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'],
        'logo': ['Inter', 'system-ui', 'sans-serif'],
      },
      // OnlyBrands Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00B8E6, #0088D9)',
        'gradient-secondary': 'linear-gradient(135deg, #0088D9, #0066B3)',
        'gradient-accent': 'linear-gradient(135deg, #00D4FF, #0099FF)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a, #0a0a0a)',
      },
      // OnlyBrands Shadows
      boxShadow: {
        'glow': '0 0 20px rgba(0, 184, 230, 0.3)',
        'glow-strong': '0 0 30px rgba(0, 184, 230, 0.5)',
        'dark-sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
        'dark-md': '0 4px 6px rgba(0, 0, 0, 0.5)',
        'dark-lg': '0 10px 15px rgba(0, 0, 0, 0.6)',
        'dark-xl': '0 20px 25px rgba(0, 0, 0, 0.7)',
      },
      // OnlyBrands Animation
      keyframes: {
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
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
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 184, 230, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 184, 230, 0.6)' },
        },
        // Keep existing animations
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
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        // Keep existing animations
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
