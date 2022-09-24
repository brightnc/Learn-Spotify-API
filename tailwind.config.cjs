/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      'pic-desktop': "url('../src/asset/spotify.jpg')",
    },
    extend: {
      colors: {
        'purple-rgba': 'rgba(1, 12, 63, 0.7)',
        'b-rgba': 'rgba(256, 256, 256, 0.8)',
        'c-rgba': 'rgba(265, 265, 265, .5)'
      },
    },
  },
  plugins: [],
};
