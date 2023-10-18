/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'w-grey': '#e7edef',
        'w-red': '#ee1f2f',
        'w-black': '#243c5a',
      },
    },
  },
  plugins: [],
  // purge: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     './src/**/*.html',
  //     './src/**/*.js',
  //   ],
  // },
}

