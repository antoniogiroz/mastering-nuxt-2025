// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/mdc'],

  runtimeConfig: {
    openaiApiKey: '',
  },

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
