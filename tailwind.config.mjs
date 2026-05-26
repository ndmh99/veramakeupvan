/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#F9F7F5',
        taupe: '#8C7B70',
        rosegold: '#E2C2B3',
        deeprose: '#C9A99B',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
