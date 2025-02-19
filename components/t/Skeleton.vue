<template>
  <div class="skeleton-display">
    <div class="skeleton-carousel">
      <div class="skeleton-card" v-for="n in 6" :key="n">
        <div class="skeleton-text"></div>
        <div class="skeleton-text short"></div>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "Skeleton",
};
</script>
  