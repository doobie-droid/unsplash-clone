<template>
  <div>
    <div class="index-backdrop">
      <form
        method="GET"
        action="#"
        role="search"
        aria-label="Find images by type on Unsplash Clone"
        class="index-search__form"
      >
        <button type="submit" title="Search Unsplash Clone">
          <svg
            fill="currentcolor"
            height="24px"
            width="24px"
            version="1.1"
            aria-hidden="false"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490.4 490.4"
            xml:space="preserve"
          >
            <g>
              <path
                d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"
              />
            </g>
          </svg>
        </button>
        <div role="combobox" class="index-search__box">
          <input
            type="search"
            autocomplete="off"
            aria-autocomplete="list"
            style="-webkit-appearance: none"
            placeholder="Search for photo"
            title="Search Unsplash Clone"
            autocapitalize="none"
            spellcheck="false"
            required="true"
            name="keywordForSearch"
            aria-controls="search-result-header"
            value=""
            class="index-search__input"
          />
          <div
            id="index-search__header"
            class="index-search__header"
            role="presentation"
          >
            Search Results for "Search Item"
          </div>
        </div>
      </form>
    </div>
    <div class="index-body">
      <div class="picture-display">
        <div class="picture-carousel">
          <figure
            v-for="photo in photoStore.GetPhotos"
            :key="photo.id"
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              :title="`${photo.alt_description}`"
              :href="`/photos/${photo.slug}`"
            >
              <div class="picture-toggler">
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  :alt="`${photo.alt_description}`"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 288px, (min-width: 992px) calc(calc(100vw - 572px) / 3), (min-width: 768px) calc(calc(100vw - 400px) / 2), 75vw"
                  :srcset="`${generateSrcSet(photo.urls.full)}`"
                />
                <span class="metadata"
                  ><div class="name">{{ photo.user.name }}</div>
                  <div class="location">{{ photo.user.location }}</div>
                </span>
              </div>
            </a>
          </figure>
        </div>
      </div>
    </div>
    <!-- <p>Total Courses: {{ photoStore.GetPhotos }}</p>
    <button @click="getPhotos">Click me</button> -->
  </div>
</template>

<script>
import { decodeBlurHash } from "fast-blurhash";
import { usePhotoStore } from "~/stores/photoStore";

export default {
  name: "HomePage",
  data() {
    return {
      photoStore: usePhotoStore(),
    };
  },
  mounted() {
    window.addEventListener("resize", this.adjustGridRows);
    window.addEventListener("scroll", this.adjustGridRows);
    this.photoStore.FetchAllPhotos();
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
    blurHashToBase64(blurHash) {
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
      const base64String = canvas.toDataURL("image/bmp");

      return base64String;
    },
    generateSrcSet(url) {
      const parsedUrl = new URL(url);
      parsedUrl.searchParams.set("q", "80");

      const sizes = Array.from({ length: 13 }, (_, i) => (i + 1) * 100);
      return sizes
        .map((size) => `${parsedUrl.href}&w=${size} ${size}w`)
        .join(", ");
    },
  },
};
</script>