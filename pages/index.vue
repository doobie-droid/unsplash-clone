<template>
  <div>Redirecting...</div>
</template>

<script>
export default {
  mounted() {
    const baseURL = this.$config.public.baseURL || "";
    this.$router.replace(`${baseURL}/photos`);
  },
};
</script>


