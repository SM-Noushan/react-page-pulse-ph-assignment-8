/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      'orange-01': '#FFAC33',
      'green-01': '#23BE0A',
      'blue-01': '#59C6D2',
      'blue-02': '#328EFF',
      'dark-01': '#131313',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'playfair_display': ['Playfair Display', 'serif'],
      'work_sans': ['Work Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

