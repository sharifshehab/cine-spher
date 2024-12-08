/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        secondaryColor: 'var(--secondary-color)',
        textColor: 'var(--text-color)',
      },
      backgroundImage: {
        'comingSoonBG': "url('https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/hero-whats-on.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}