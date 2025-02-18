<template>
  <div id="picture-details" v-if="showPhotoDetail && photo" class="overlay">
    <div class="picture-details-card">
      <button
        aria-controls="picture-details"
        role="button"
        title="Close overlay"
        @click="toggleModal"
      >
        <svg
          fill="#ffffff"
          width="32px"
          height="32px"
          viewBox="0 0 256.00 256.00"
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
          stroke-width="25.6"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#000"
            stroke-width="25.6"
          >
            <path
              d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"
            ></path>
          </g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"
            ></path>
          </g>
        </svg>
      </button>
      <img
        :src="blurHashToBase64(photo.blur_hash)"
        class="placeholder"
        :class="{ 'fade-out': imageLoaded }"
      />
      <img
        sizes="75vh"
        :alt="`${photo.alt_description}`"
        :srcset="`${generateSrcSet(photo.urls.full, 'h')}`"
        :class="{ 'fade-in': imageLoaded }"
        @load="hidePlaceholder"
      />
      <span class="metadata">
        <div class="name">{{ photo.user.name }}</div>
        <div class="location">{{ photo.user.location }}</div>
      </span>
    </div>
  </div>
</template>

<script>
import { decodeBlurHash } from "fast-blurhash";
export default {
  name: "PictureDetail",
  data() {
    return {
      imageLoaded: false,
      showPhotoDetail: true,
    };
  },
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    blurHashToBase64(blurHash) {
      if (!blurHash) return "";
      let width = 32;
      let height = 32;
      const pixels = decodeBlurHash(blurHash, width, height);
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      const imageData = ctx.createImageData(width, height);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL("image/bmp");
    },
    generateSrcSet(url, dimension = "w") {
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set("q", "80");

      const sizes = Array.from({ length: 13 }, (_, i) => (i + 1) * 100);
      return sizes
        .map((size) => `${parsedUrl.href}&${dimension}=${size} ${size}w`)
        .join(", ");
    },
    hidePlaceholder() {
      this.imageLoaded = true;
    },
    toggleModal() {
      this.showPhotoDetail = !this.showPhotoDetail;
      if (this.showPhotoDetail) {
        document.body.classList.add("fixed-body");
      } else {
        document.body.classList.remove("fixed-body");
      }
    },
  },
};
</script>