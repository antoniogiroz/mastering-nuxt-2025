import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['./layers/base/app/assets/css/main.css'],

  modules: ['@nuxt/ui', '@nuxtjs/mdc'],

  vite: {
    optimizeDeps: {
      include: ['debug'],
    },
  },

  ui: {
    colorMode: false,
  },

  mdc: {
    highlight: {
      theme: 'material-theme-palenight',
      langs: [
        'javascript',
        'typescript',
        'html',
        'css',
        'vue',
        'markdown',
      ],
    },
  },
});
