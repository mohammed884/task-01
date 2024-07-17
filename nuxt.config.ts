// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon"],
  css: ['./assets/css/global.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // env: {
  //   baseURL: (process.env.NODE_ENV === 'production' ? 'http//your-url' : 'http://localhost:3000')
  // }
  // app: {
  //   baseURL: '/prefix/'
  // }
})