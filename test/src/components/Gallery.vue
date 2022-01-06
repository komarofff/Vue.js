<template>
gallery
  <button @click="Close()"> close gallery</button>
  <br>
  {{ index }}

  {{ photosData }}
</template>

<script>

export default {
  emits: ['closeGallery'],
  props: ['index','photosData'],
  name: "Gallery",
  methods: {
    Close(){
      this.$emit('closeGallery')
    }
  }

}
</script>

<style scoped>

</style>