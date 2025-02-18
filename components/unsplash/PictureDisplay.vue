<template>
  <div class="picture-display">
    <div class="picture-carousel">
      <PictureCard
        v-for="photo in photoStore.GetPhotos"
        :key="photo.id"
        :photo="photo"
        @imageLoaded="handleImageLoaded"
      />
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
  methods: {
    adjustGridRows() {
      const gridItems = document.querySelectorAll(".picture-card");
      gridItems.forEach((item) => {
        const image = item.querySelector("img");
        let rowSpan;
        const height = image.clientHeight;
        console.log(this.getMinRowHeight());
        rowSpan = Math.round(height / this.getMinRowHeight());
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
    },
  },
};
</script>
  

  