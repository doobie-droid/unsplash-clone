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
      const { $api } = useNuxtApp();
      const response = await $api.unsplash.GetPhotos();
      this.Photos = response;
    },
  },
});
