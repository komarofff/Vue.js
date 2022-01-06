<template>
  <div class="container mx-auto flex flex-col justify-start items-center px-2">
    <img src="../public/nasa.png" class="mb-12">
    <GetPhotos
        @startGallery="this.showGallery = true"
    ></GetPhotos>
  </div>
  <template v-if="showGallery">
    <gallery
        @closeGallery="this.showGallery = false"
    ></gallery>
  </template>

</template>

<script>
import Gallery from "./components/Gallery";
import GetPhotos from "./components/GetPhotos";

export default {
  data() {
    return {
      showGallery: false,

    }
  },
  methods: {

  },
  name: 'App',
  components: {
    GetPhotos,
    Gallery
  }
}
</script>

<style>
#app {
  font-family: 'Space Grotesk';
}
</style>
