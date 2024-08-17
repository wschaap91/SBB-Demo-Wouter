// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: [
    ["@nuxtjs/google-fonts", { families: { 'Open Sans': [400, 600, 700] } }],
    '@vueuse/nuxt'
  ]
})