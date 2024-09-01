/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './node_modules/preline/preline.js',
    './src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

