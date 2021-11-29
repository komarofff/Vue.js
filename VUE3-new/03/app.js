Vue.createApp({
    // data(){
    //     return{
    //
    //     }
    // }
    data: ()=>({
        title: 'Я всё смогу сделать и всего достигнуть!!!!!',
        myHtml: '<h1>Vue 3 APP</h1>',
        person:{
            firstname: 'Anatoliy',
            lastName: 'Komarov',
            age : 45
        },
        items:[1,2,3,4,5,6]
    }),
    computed:{
        evenItems(){
            return this.items.filter(i=> i % 2 ===0)
        }
    },
    methods:{
        addItem(event){
            this.items.unshift(this.$refs.myInput.value)
            console.log(event.key)
            this.$refs.myInput.value =''
        },
        remove(index){
            this.items.splice(index,1)
        },
        log(item){
            console.log("log item - "+ item)
        }
    }

}).mount('#app')