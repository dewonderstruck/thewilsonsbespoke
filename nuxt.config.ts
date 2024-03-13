// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  devServer: {},
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  routeRules: {
    // Homepage pre-rendered at build time
    '/': {
      prerender: true,
    },
    // Products page generated on demand, revalidates in background, cached until API response changes
    '/products': {
      swr: true,
    },
    // Product page generated on demand, revalidates in background, cached for 1 hour (3600 seconds)
    '/products/**': {
      swr: 3600,
    },
    // Admin dashboard renders only on client-side
    '/admin/**': {
      ssr: false,
    },
    // Add cors headers on API routes
    '/api/**': {
      cors: true,
    },
  },
  srcDir: 'src/',
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Crimson Pro': true,
          download: true,
          inject: true,
          useStylesheet: true,
        },
      },
    ],
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  },
})
