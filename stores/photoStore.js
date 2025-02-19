import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const usePhotoStore = defineStore("photos", {
  state: () => ({
    Photos: {},
  }),
  getters: {
    GetPhotos: (state) => state.Photos,
  },
  actions: {
    async FetchAllPhotos() {
      if (this.Photos?.length > 0) {
        // Skip fetching photos if photos already exist to reduce hits to the main api
        return;
      }
      const { $api } = useNuxtApp();
      const response = await $api.unsplash.GetPhotos();
      this.Photos = response;
    },
    async SearchPhotos(searchParams) {
      const { $api } = useNuxtApp();
      const response = await $api.unsplash.SearchPhotos(searchParams);
      this.Photos = response.results;
    },
  },
});
