<template>
  <div>
    <div class="picture-display">
      <div class="picture-carousel">
        <h2 v-if="!photoCount" class="warning">No images were found</h2>
        <PictureCard v-else v-for="photo in photos" :key="photo.id" :photo="photo"
          @pictureCardLoaded="handleImageLoaded" @displayInDetail="displayInDetail" />
      </div>
    </div>
    <transition name="fade">
      <PictureDetail :photo="foundPhoto" v-if="foundPhoto" @closeModal="invalidateFoundPhoto" />
    </transition>
  </div>

</template>

<script>
import { usePhotoStore } from "~/stores/photoStore";
import PictureCard from "./PictureCard.vue";
import PictureDetail from "./PictureDetail.vue";

export default {
  name: "PictureDisplay",
  components: {
    PictureCard,
    PictureDetail,
  },
  data() {
    return {
      photoStore: usePhotoStore(),
      foundPhoto: null,
    };
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    if (!this.photoCount) {
      this.$emit("pictureDisplayLoaded");
    }
    this.adjustGridRows()
  },
  computed: {
    photoCount() {
      return this.photos.length;
    },
  },
  methods: {
    adjustGridRows() {
      // alert(this.getMinRowHeight())
      const gridItems = document.querySelectorAll(".picture-card");
      gridItems.forEach((item) => {
        let rowSpan;
        const height = item.clientHeight;
        rowSpan = Math.floor(height / this.getMinRowHeight());
        console.log(rowSpan)
        item.style.gridRow = `span ${rowSpan}`;
      });
    },
    getMinRowHeight() {
      const gridItems = document.querySelectorAll(".picture-toggler");
      let minHeight = 20000;
      gridItems.forEach((item) => {
        const height = item.clientHeight;
        minHeight = height < minHeight ? height : minHeight;
      });
      return minHeight;
    },
    handleImageLoaded(photoId) {
      let _ = photoId;
      this.adjustGridRows();
      this.$emit("pictureDisplayLoaded");
    },
    invalidateFoundPhoto() {
      this.foundPhoto = null
    },
    displayInDetail(photoId) {
      const photos = this.photoStore.GetPhotos;
      if (!Array.isArray(photos) || photos.length === 0) {
        return null;
      }
      this.foundPhoto = photos.find((photo) => photo.id === photoId) || null;
    }
  },
};
</script>