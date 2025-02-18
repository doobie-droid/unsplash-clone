<template>
  <div>
    <backdrop>
      <search-bar></search-bar>
    </backdrop>
    <div class="index-body">
      <PictureDisplay />
    </div>
  </div>
</template>

<script>
import Backdrop from "~/components/ui/Backdrop.vue";
import SearchBar from "~/components/widgets/SearchBar.vue";
import PictureDisplay from "~/components/unsplash/PictureDisplay.vue";

export default {
  components: { Backdrop, SearchBar, PictureDisplay },
  name: "SearchPage",
};
</script>