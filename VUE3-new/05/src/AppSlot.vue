<template>
  <slot name="center" title55="ПРИВЕт Я титл из слота"></slot>
  <slot name="foot2" title55="ПРИВЕт Я foot из слота"></slot>

  <button class="btn" v-for="i in arr">
    <slot name="button" :i="i"> </slot>
  </button>


</template>

<script>
export default {
  data(){
    return{
      arr:[
        {id:1,title:'Title 1'},
        {id:2,title:'Title 2'},
        {id:3,title:'Title 3'},
        {id:4,title:'Title 4'},
        {id:5,title:'Title 5'},
        {id:6,title:'Title 6'},

      ]
    }
  },
  mounted() {
    console.log(this.$slots)
  }
}
</script>

<style scoped>

</style>
