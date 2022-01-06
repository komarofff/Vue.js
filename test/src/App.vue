<template>
  <div class="container mx-auto flex flex-col justify-start items-center px-2">
  <img src="../public/nasa.png" class="mb-12">
  <GetPhotos></GetPhotos>
  </div>
</template>

<script>

import GetPhotos from "./components/GetPhotos";
export default {
  data(){
    return {
      listOfPhotos: {}
    }
  },
  name: 'App',
  components: {
    GetPhotos
  }
}
</script>

<style>
#app {
  font-family: 'Space Grotesk';
}
</style>
