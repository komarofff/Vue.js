<template>
gallery
  <button @click="Close()"> close gallery</button>
  <br>
  <hr>
  {{ index}}
<hr>

  {{ dataForGallery }}
</template>

<script>

export default {
  emits: ['closeGallery'],
  props: ['dataForGallery','index'],
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