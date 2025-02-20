// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL || "/unsplash-clone/",
    head: {
      title: process.env.npm_package_title || "",
      meta: [
        {
          name: "description",
          content:
            "This is a clone of the Unsplash web application created as part of my cowrywise recruitment",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
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
      unsplashAccessKey:
        process.env.UNSPLASH_ACCESS_KEY ||
        "eoh2qpNxq8-V3c_zYtpTRFapvcD3Lzpb53i3RIulLwo",
      unsplashSecretKey: process.env.UNSPLASH_SECRET_KEY,
    },
  },
  routeRules: {
    "/": {
      redirect: { to: "/photos", statusCode: 301 },
    },
  },
});
