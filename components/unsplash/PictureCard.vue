<template>
  <figure
    :key="photo.id"
    class="picture-card"
    itemprop="image"
    itemscope
    itemtype="https://schema.org/ImageObject"
  >
    <NuxtLink
      itemprop="imageUrl"
      :title="photo.alt_description"
      :to="`/photos/${photo.slug}`"
    >
      <div class="picture-toggler">
        <!-- <img :src="blurHashToBase64(photo.blur_hash)" /> -->
        <img
          :alt="`${photo.alt_description}`"
          loading="lazy"
          itemprop="thumbnailUrl"
          sizes="(min-width: 1440px) 288px, (min-width: 992px) calc(calc(100vw - 572px) / 3), (min-width: 768px) calc(calc(100vw - 400px) / 2), 75vw"
          :srcset="`${generateSrcSet(photo.urls.full)}`"
          @load="handleImageLoad"
        />
        <span class="metadata"
          ><div class="name">{{ photo.user.name }}</div>
          <div class="location">{{ photo.user.location }}</div>
        </span>
      </div>
    </NuxtLink>
  </figure>
</template>
  
  <script>
import { decodeBlurHash } from "fast-blurhash";
export default {
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
      this.$emit("imageLoaded", this.photo.id);
    },
  },
};
</script>
  

  