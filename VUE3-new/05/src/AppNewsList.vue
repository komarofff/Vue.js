<template>
  <hr>
  <h1>{{title}}</h1>
<ul>
  <li v-for="(item,index) in news" key="item.id">{{item.title}}
  <span v-if="item.wasRead" > !!!</span>
    <button @click="delItem(index)">{{item.id}} ) DELETE</button>
    <button @click="addItem">Add news</button>
  </li>

</ul>
</template>

<script>
export default {
data(){
  return{
    //news: this.news
  }
},
  inject:['title','news'],
  methods:{
    delItem(idx){
      this.news.splice(idx,1)
    },
    addItem(){
      this.news.push({title:`New news №${this.news.length+1}`,id: this.news.length+1, isOpen:false,wasRead: false})
    }
  }
}
</script>

<style scoped>

</style>
