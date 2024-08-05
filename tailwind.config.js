/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'light-bg': '#ffffff',
        'light-text': '#000000',
        'dark-bg': '#1F2937',
        'dark-text': '#ffffff',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'xxs': '0.65rem',
        'xxl': '1.75rem',
      },
    },
  },
  plugins: [],
};
