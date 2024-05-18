import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani', ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

