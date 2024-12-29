/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scrollBehavior: ['responsive'], // Ensure smooth scrolling is enabled.
    },
  },
  plugins: [],
}

