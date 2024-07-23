/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      deepBlue: '#1a202c',
      neonGreen: '#39ff14',
      neonPink: '#ff1493',
    },
  },
  },
  plugins: [],
}