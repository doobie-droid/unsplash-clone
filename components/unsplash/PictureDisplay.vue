<template>
  <div class="picture-display">
    <div class="picture-carousel">
      <h2 v-if="!photoCount" class="warning">No images were found</h2>
      <PictureCard v-else v-for="photo in photoStore.GetPhotos" :key="photo.id" :photo="photo"
        @pictureCardLoaded="handleImageLoaded" />
    </div>
  </div>
</template>

<script>
import { usePhotoStore } from "~/stores/photoStore";
import PictureCard from "./PictureCard.vue";

export default {
  name: "PictureDisplay",
  components: {
    PictureCard,
  },
  data() {
    return {
      photoStore: usePhotoStore(),
    };
  },
  mounted() {
    if (!this.photoCount) {
      this.$emit("pictureDisplayLoaded");
    }
  },
  computed: {
    photoCount() {
      return this.photoStore.GetPhotos.length;
    },
  },
  methods: {
    adjustGridRows() {
      const gridItems = document.querySelectorAll(".picture-card");
      gridItems.forEach((item) => {
        const image = item.querySelector("img");
        let rowSpan;
        const height = image.clientHeight;
        rowSpan = Math.round(height / this.getMinRowHeight());
        console.log(rowSpan)
        item.style.gridRow = `span ${rowSpan}`;
      });
    },
    getMinRowHeight() {
      const gridItems = document.querySelectorAll(".picture-card");
      let minHeight = 20000;
      gridItems.forEach((item) => {
        const image = item.querySelector("img");
        const height = image.clientHeight;
        minHeight = height < minHeight ? height : minHeight;
      });
      return minHeight;
    },
    handleImageLoaded(photoId) {
      let _ = photoId;
      this.adjustGridRows();
      this.$emit("pictureDisplayLoaded");
    },
  },
};
</script>