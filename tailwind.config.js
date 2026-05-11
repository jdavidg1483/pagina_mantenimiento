/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%,100%': {
            textShadow: '0 0 20px rgba(129,140,248,0.5)'
          },
          '50%': {
            textShadow: '0 0 35px rgba(168,85,247,0.8)'
          }
        },
        float: {
          '0%,100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      }
    },
  },
  plugins: [],
}