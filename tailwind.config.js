/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          800: '#155e75',
          900: '#164e63',
        },
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        green: {
          400: '#4ade80',
        },
        red: {
          400: '#f87171',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}