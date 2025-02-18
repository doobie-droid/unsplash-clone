<template>
  <div>
    <backdrop>
      <h1>
        Search results for <span>"{{ queryParam }}"</span>
      </h1>
    </backdrop>
    <div class="index-body">
      <Skeleton v-if="isLoading" />
      <PictureDisplay @pictureDisplayLoaded="toggleLoading" />
    </div>
  </div>
</template>

<script>
import Backdrop from "~/components/ui/Backdrop.vue";
import SearchBar from "~/components/widgets/SearchBar.vue";
import PictureDisplay from "~/components/unsplash/PictureDisplay.vue";
import Skeleton from "~/components/ui/Skeleton.vue";

export default {
  components: { Backdrop, SearchBar, PictureDisplay, Skeleton },
  name: "SearchPage",
  data() {
    return {
      isLoading: true,
      queryParam: "",
    };
  },
  mounted() {
    this.queryParam = this.$route.query.query;
  },
  methods: {
    toggleLoading() {
      this.isLoading = false;
    },
  },
};
</script>