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
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              title="The inside of a computer case lit up at night"
              href="/photos/a-person-sitting-in-the-doorway-of-a-restaurant-3XMMBl5W4C4"
              ><div>
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  alt="A person sitting in the doorway of a restaurant"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 420px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                  srcset="
                    https://images.unsplash.com/photo-1739641375724-dfea74e0df69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwxfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=200 200w,
                    https://images.unsplash.com/photo-1739641375724-dfea74e0df69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwxfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=400 400w
                  "
                /></div
            ></a>
          </figure>
          <figure
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              title="A city in the sun"
              href="/photos/the-inside-of-a-computer-case-lit-up-at-night-3XMMBl5W4C4"
              ><div>
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  alt="A city in the sun"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 420px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                  srcset="
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 100w,
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 200w,
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 400w,
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 800w
                  "
                /></div
            ></a>
          </figure>
          <figure
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              title="A person taking a picture of a city"
              href="/photos/the-inside-of-a-computer-case-lit-up-at-night-3XMMBl5W4C4"
              ><div>
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  alt="A person taking a picture of a city"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 420px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                  srcset="
                    https://images.unsplash.com/photo-1739590485766-fad3dadd2056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwzfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=100 100w,
                    https://images.unsplash.com/photo-1739590485766-fad3dadd2056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwzfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=200 200w,
                    https://images.unsplash.com/photo-1739590485766-fad3dadd2056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwzfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=400 400w,
                    https://images.unsplash.com/photo-1739590485766-fad3dadd2056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwzfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=800 800w
                  "
                /></div
            ></a>
          </figure>
          <figure
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              title="A person holding a flower in their hand"
              href="/photos/the-inside-of-a-computer-case-lit-up-at-night-3XMMBl5W4C4"
              ><div>
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  alt="A person holding a flower in their hand"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 420px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                  srcset="
                    https://images.unsplash.com/photo-1739641375724-dfea74e0df69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwxfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=100 100w,
                    https://images.unsplash.com/photo-1739632141610-018cfc9e60ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHw0fHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=200 200w,
                    https://images.unsplash.com/photo-1739632141610-018cfc9e60ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHw0fHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=400 400w,
                    https://images.unsplash.com/photo-1739632141610-018cfc9e60ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHw0fHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=800 800w
                  "
                /></div
            ></a>
          </figure>
          <figure
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              title="The inside of a computer case lit up at night"
              href="/photos/a-person-sitting-in-the-doorway-of-a-restaurant-3XMMBl5W4C4"
              ><div>
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  alt="A person sitting in the doorway of a restaurant"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 420px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                  srcset="
                    https://images.unsplash.com/photo-1739641375724-dfea74e0df69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwxfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=200 200w,
                    https://images.unsplash.com/photo-1739641375724-dfea74e0df69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTAzMjZ8MHwxfGFsbHwxfHx8fHx8fHwxNzM5NzUxNTcyfA&ixlib=rb-4.0.3&q=80&w=400 400w
                  "
                /></div
            ></a>
          </figure>
          <figure
            class="picture-card"
            itemprop="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <a
              itemprop="imageUrl"
              title="A city in the sun"
              href="/photos/the-inside-of-a-computer-case-lit-up-at-night-3XMMBl5W4C4"
              ><div>
                <!-- <img
                  src="data:image/bmp;base64,Qk32BAAAAAAAADYAAAAoAAAACAAAAAgAAAABABgAAAAAAMAAAAATCwAAEwsAAAAAAAAAAAAAAgAABgAACwEADwgAEw0pGhY3IyArKygAGhgjGBkgGB8pICpILTVjNDtsNThcMDE0Jic/Iic+IC1JKztnPEqCRE+LQUh4NDdMKSpHJStHIjFUL0FxQFCMSVWUREyBNDhTJCU/ISVAHyxNKztoOkiAQUyHPUR0LjJJFBIjFBUnFh42HylMKDJeLDRhKi9RIyQrAAAAAAAACAAACgAOAAAQAAAAAgAAFA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAA"
                /> -->
                <img
                  alt="A city in the sun"
                  loading="lazy"
                  itemprop="thumbnailUrl"
                  sizes="(min-width: 1440px) 420px, (min-width: 992px) calc(calc(100vw - 88px) / 3), (min-width: 768px) calc(calc(100vw - 64px) / 2), 100vw"
                  srcset="
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 100w,
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 200w,
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 400w,
                    https://plus.unsplash.com/premium_photo-1734607187630-f5dba4be6f6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8 800w
                  "
                /></div
            ></a>
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
  data() {
    return {
      photoStore: usePhotoStore(),
    };
  },
  mounted() {
    window.addEventListener("resize", this.adjustGridRows);
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
  },
};
</script>