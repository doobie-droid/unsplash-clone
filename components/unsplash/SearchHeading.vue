<template>
    <h1>
        <span v-if="isLoading">Searching for </span>
        <span v-else>Search results for </span>
        <span>"{{ queryParam }}"</span>
    </h1>
</template>

<script>
export default {
    props: {
        queryParam: String,
        isLoading: Boolean
    }
};
</script>