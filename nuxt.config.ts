// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components:[
    {
      path:"~/widgets",pathPrefix:true,global:true
    }
  ],
  modules: [
    '@unocss/nuxt',
    'dayjs-nuxt',
    "@nuxt/ui"
  ],
})
