/** @type {import('tailwindcss').Config} */
import flowbitePlugin from 'flowbite/plugin'
export default {
  content: [
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
    './node_modules/preline/preline.js',
    './src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('preline/plugin'),
    flowbitePlugin
  ],
}

