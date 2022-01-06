<template>
  <div class="container mx-auto flex flex-col justify-start items-center px-2">
    <img src="../public/nasa.png" class="mb-12">
    <GetPhotos
        @startGallery="startShow"
    ></GetPhotos>
  </div>
  <template v-if="showGallery">
    <gallery
        :dataForGallery = "dataForGallery"
        :index="idx"
        @closeGallery="closeShow"
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
      dataForGallery: [],
      idx: 0

    }
  },
  methods: {
    startShow(someData,idxStart) {
      this.showGallery = true
      this.dataForGallery =  someData
      this.idx = idxStart
    },
    closeShow() {
      this.showGallery = false
    }
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
