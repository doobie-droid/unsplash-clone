<template>
  <figure :key="photo.id" class="picture-card" itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
    <div class="picture-toggler" :style="{
      '--aspect-ratio': `${photo.width} / ${photo.height}`
    }">
      <img :src="blurHashToBase64(photo.blur_hash)" class="placeholder fade opacity-1"
        :class="{ 'fade-out': imageLoaded }" />
      <img :alt="`${photo.alt_description}`" itemprop="thumbnailUrl"
        sizes="(min-width: 1440px) 288px, (min-width: 992px) calc(calc(100vw - 572px) / 3), (min-width: 768px) calc(calc(100vw - 400px) / 2), 75vw"
        :srcset="`${generateSrcSet(photo.urls.full)}`" @load="handleImageLoad" @click="displayInDetail"
        class="fade opacity-0" :class="{ 'fade-in': imageLoaded }" />
      <span class="metadata">
        <div class="name">{{ photo.user.name }}</div>
        <div class="location">{{ photo.user.location }}</div>
      </span>
    </div>
  </figure>
</template>

<script>
import { decodeBlurHash } from "fast-blurhash";
export default {
  data() {
    return {
      imageLoaded: false,
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
    handleImageLoad() {
      this.imageLoaded = true
      this.$emit("pictureCardLoaded", this.photo.id);
    },
    displayInDetail() {
      this.$emit("displayInDetail", this.photo.id)
    }
  },
};
</script>