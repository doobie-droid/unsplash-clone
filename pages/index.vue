<template>
  <div>
    <backdrop>
      <search-bar></search-bar>
    </backdrop>
    <div class="index-body">
      <PictureDisplay />
    </div>
    <PictureDetail :photo="foundPhoto" />
  </div>
</template>

<script>
import { usePhotoStore } from "~/stores/photoStore";
import { useRoute } from "vue-router";
import Backdrop from "~/components/ui/Backdrop.vue";
import SearchBar from "~/components/widgets/SearchBar.vue";
import PictureDisplay from "~/components/unsplash/PictureDisplay.vue";
import PictureDetail from "~/components/unsplash/PictureDetail.vue";

export default {
  components: { Backdrop, SearchBar, PictureDisplay, PictureDetail },
  name: "HomePage",
  data() {
    return {
      photoStore: usePhotoStore(),
      foundPhoto: null,
    };
  },
  mounted() {
    this.photoStore.FetchAllPhotos();
    const route = useRoute();
    this.foundPhoto = this.findPhotoBySlug(route.params.slug);
  },
  methods: {
    findPhotoBySlug(slug) {
      const photos = this.photoStore.GetPhotos;
      if (!Array.isArray(photos) || photos.length === 0) {
        return null;
      }
      this.foundPhoto = photos.find((photo) => photo.slug === slug) || null;
      return this.foundPhoto;
    },
  },
};
</script>