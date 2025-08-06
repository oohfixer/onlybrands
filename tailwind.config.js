// ============================================
// tailwind.config.js
// ============================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  darkMode: 'class',
  
  theme: {
    extend: {
      // OnlyBrands Color System
      colors: {
        // Brand Colors
        'primary-blue': '#00B8E6',
        'primary-blue-hover': '#0099CC',
        'primary-blue-active': '#007AA3',
        
        // Surface Colors (matching globals.css)
        'surface-primary': '#000000',
        'surface-secondary': '#0a0a0a',
        'surface-tertiary': '#111111',
        'surface-quaternary': '#1a1a1a',
        
        // Text Colors
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'text-tertiary': '#888888',
        'text-muted': '#555555',
        
        // Border Colors
        'border-primary': '#333333',
        'border-secondary': '#444444',
        'border-tertiary': '#555555',
      },

      // Typography
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'logo': ['Brush Script MT', 'Lucida Handwriting', 'Segoe Script', 'cursive'],
      },

      // Shadows
      boxShadow: {
        'glow': '0 0 20px rgba(0, 184, 230, 0.3)',
        'glow-strong': '0 0 30px rgba(0, 184, 230, 0.5)',
      },

      // Animations
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
    },
  },
  
  plugins: [],
};
