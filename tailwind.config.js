/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F766E',
          hover: '#115E59',
        },
        secondary: {
          DEFAULT: '#10B981',
          hover: '#059669',
        },
        background: '#F8FAFC',
        textMain: '#1E293B',
        textMuted: '#64748B',
        alert: '#E11D48',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
