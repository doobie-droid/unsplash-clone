<template>
  <div>
    <backdrop>
      <search-bar></search-bar>
    </backdrop>
    <div class="index-body">
      <Skeleton v-if="isLoading" />
      <PictureDisplay @pictureDisplayLoaded="toggleLoading" />
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from "~/stores/photoStore";
import Backdrop from "~/components/ui/Backdrop.vue";
import SearchBar from "~/components/widgets/SearchBar.vue";
import PictureDisplay from "~/components/unsplash/PictureDisplay.vue";
import PictureDetail from "~/components/unsplash/PictureDetail.vue";
import Skeleton from "~/components/ui/Skeleton.vue";

export default {
  components: { Backdrop, SearchBar, PictureDisplay, PictureDetail, Skeleton },
  name: "HomePage",
  data() {
    return {
      photoStore: usePhotoStore(),
      foundPhoto: null,
      isLoading: true,
    };
  },
  async mounted() {
    await this.photoStore.FetchAllPhotos();
  },
  methods: {
    toggleLoading() {
      this.isLoading = false;
    },
  },
};
</script>