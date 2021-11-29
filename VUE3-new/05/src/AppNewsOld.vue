<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <p>открыто : <strong>{{ openRate}} </strong>||
        Прочитано : <strong>{{ readRate}}</strong> ||
       NewAction : <strong>{{ newAc}}</strong>

      </p>

    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id = "item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"

      @new-action="newActionFunction"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unReadNews"
    ></app-news>



  </div>

</template>

<script>
import AppNews from "@/AppNews";
export default {
  name: 'App',
  data() {
    return {
      newAc: '',
      openRate: 0,
      readRate: 0,
      now: new Date().toLocaleDateString(),
      news: [
        {title:"Байден победил на выборах",id:1, isOpen:false,wasRead: false},
        {title:'Путин предал всех',id:2, isOpen:false,wasRead: false},
        {title:"Vue 3 успешно работает",id:3, isOpen:false,wasRead: false}
      ]
    }
  },
  provide(){
    return{
      title:'sdvdsvdsvdsvds',
      news:this.news
    }
  },
methods:{
  openNews(val,val2){
    console.log(val, val2)
    this.openRate++
  },
  readNews(id){
    const idx = this.news.findIndex(news=> news.id===id)
    this.news[idx].wasRead = true
    this.readRate++
  },
  unReadNews(id){
    const news = this.news.find(news => news.id===id)
    news.wasRead =false
    this.readRate--
  },
  newActionFunction(val){
    this.newAc += val
  }

},
  components: {
   //'app-news': AppNews
   // 'AppNews':AppNews
    AppNews,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
