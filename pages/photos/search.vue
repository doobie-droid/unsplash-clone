<template>
  <div>
    <backdrop>
      <SearchHeading :queryParam="queryParam" :isLoading="isLoading" />
    </backdrop>
    <div class="index-body">
      <Skeleton v-if="isLoading" />
      <PictureDisplay v-else :photos="photoStore.GetPhotos" @pictureDisplayLoaded="toggleLoading" />
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from "~/stores/photoStore";
import Backdrop from "~/components/ui/Backdrop.vue";
import SearchBar from "~/components/widgets/SearchBar.vue";
import PictureDisplay from "~/components/unsplash/PictureDisplay.vue";
import Skeleton from "~/components/ui/Skeleton.vue";
import SearchHeading from "~/components/unsplash/SearchHeading.vue";

export default {
  components: { Backdrop, SearchBar, PictureDisplay, Skeleton, SearchHeading },
  name: "SearchPage",
  data() {
    return {
      isLoading: true,
      queryParam: "",
      photoStore: usePhotoStore(),
    };
  },
  async mounted() {
    this.queryParam = this.$route.query.query;
    await this.photoStore.SearchPhotos(this.queryParam);
    this.isLoading = false
  },
};
</script>