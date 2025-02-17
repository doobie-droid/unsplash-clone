// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/styles/main.scss"],
  modules: ["@pinia/nuxt"],
  plugins: ["@/plugins/api/axios.js", "@/plugins/api/apiFactory.js"],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL || "http://localhost:9000",
      unsplashApiBase:
        process.env.UNSPLASH_API_URL || "https://api.unsplash.com/",
      unsplashAccessKey: process.env.UNSPLASH_ACCESS_KEY,
      unsplashSecretKey: process.env.UNSPLASH_SECRET_KEY,
    },
  },
});
