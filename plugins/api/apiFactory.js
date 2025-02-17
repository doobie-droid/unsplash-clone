import unsplash from "~/core/api/unsplash";

export default defineNuxtPlugin((nuxtApp) => {
  const { $axiosUnsplash } = nuxtApp;

  const apiFactory = {
    unsplash: unsplash($axiosUnsplash),
  };

  nuxtApp.provide("api", apiFactory);
});
