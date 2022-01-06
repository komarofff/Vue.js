<template>
  gallery
  <button @click="Close()"> close gallery</button>
  <br>
  <hr>
  amount-of photos {{amount}}
  <hr>
  start photo -index- {{ index }}
  <hr>

  data-from-gallery - {{ dataForGallery }}
</template>

<script>

export default {
  emits: ['closeGallery'],
  props: ['dataForGallery', 'index', 'amount'],
  name: "Gallery",
  methods: {
    Close() {
      this.$emit('closeGallery')
    }
  }

}
</script>

<style scoped>

</style>