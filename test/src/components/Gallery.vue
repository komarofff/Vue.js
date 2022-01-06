<template>
gallery
  <button @click="$emit('closeGallery')"> close gallery</button>
</template>

<script>

export default {
  emits: ['closeGallery'],
  name: "Gallery"
}
</script>

<style scoped>

</style>