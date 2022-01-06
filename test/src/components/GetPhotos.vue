<template>
  <div class="w-7/12 mx-auto grid grid-cols-3 gap-20 items-end mb-6">
    <div class="flex flex-col justify-start items-center w-full ">
      <label class="mb-2 text-lg">Number of images:</label>
      <select v-model="amount"
              class="border border-gray-200 text-xl rounded-lg w-full p-2 h-12 focus:border-4 focus:border-blue-200 outline-none">
        <option v-for="i in 50">{{ i }}</option>
      </select>
    </div>
    <div class="flex flex-col justify-start items-center w-full ">
      <label class="mb-2 text-lg">Select date:</label>
      <input type="date" v-model="date"
             class="border border-gray-200 text-lg rounded-lg w-full p-2 h-12  focus:border-4 focus:border-blue-200 outline-none">
    </div>
    <div>
      <button @click="getData" class="bg-blue-600 text-white text-lg rounded-lg py-2 px-8 self-center h-12"> Submit
      </button>
    </div>

  </div>

  <div v-for="item in dataFromServer" class="min-w-screen  grid grid-cols-4 gap-20">

    <div v-for="photo in item" v-if="item.length > 0"
         class="flex flex-col justify-start items-center border border-gray-100 bg-white self-straight">
      <img :src="photo.img_src" class="w-full">
      <p>{{ photo.id }}</p>
      <p>{{ photo.earth_date }}</p>
    </div>
    <p v-if="item.length == 0" class="col-start-1 col-end-4 text-lg text-gray-700">No photos found on this date.</p>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      today: new Date(),
      dataFromServer: {},
      //date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() - 1),
      totalPhotos: 20,
      amount: 0,
       date: new Date().getFullYear() + '-' + ('0'+ (new Date().getMonth() + 1)).slice(-2) + '-' + ('0'+ (new Date().getDate())).slice(-2),
    }
  },
  computed: {
    getData() {
      axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=jQilTRWcRu4qDJtVc2NSQlqEAMCALh7zLDmzoDOT&earth_date=' + this.date + '&total_photos=' + this.totalPhotos)
          .then(response => {
            this.dataFromServer = response.data
          })
    }
  }
}
</script>

<style scoped>

</style>