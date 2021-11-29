//способ 1
const App ={

    data(){
        return{
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    watch:{
        inputValue(value){

            console.log("inputValue")
        }
    },
    computed:{
        doubleCount(){
            return this.notes.length * 2
        }
    },
    methods:{

        addNewNote(){
            if(this.inputValue !=='') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        deleteNote(index,event){
            this.notes.splice(index,1)
            console.log(this.notes + event)

        },
        UpperCaseText(item){
            return item.toUpperCase()
        },


    }
}
// const app = Vue.createApp(App)
// app.mount('#app')
const app = Vue.createApp(App).mount('#app')