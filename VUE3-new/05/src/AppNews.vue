<template>
  <div class="card">
    <new-button
      @hujaction="newFunc">
      Акция из нового компонента
    </new-button>

    <h3>{{ title }} - {{ id }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? 'Close' : 'Open' }}
    </app-button>


    <!--    <button class="btn danger" v-if="wasRead" @click="unmark">-->
    <!--      Отметить непрочитанной-->
    <!--    </button>-->
    <app-button color="danger"
                v-if="wasRead"
                @action="$emit('unmark',id)"

    >
      Отметить непрочитанной
    </app-button>
    <div v-if="isNewsOpen">
      <hr>
      <p>Lorem ipsum dolor.</p>
      <app-button
        v-if="!wasRead"
        color="primary"
        @action="mark">
        Прочесть новость
      </app-button>

      <app-news-list></app-news-list>

    </div>

  </div>
</template>

<script>
import AppButton from "@/AppButton";
import NewButton from "@/NewButton";
import AppNewsList from "@/AppNewsList";

export default {
  //props:['title'],
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        console.log(value)
        return true
        //если возвращает true то всё в порядке , false чтото не совпало
        // использовать например для проверки логина юзера , или авторизации
      }
    },
    wasRead: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  //emits:['open-news'] //сообщаем что эмитим событие
  emits: {
    'open-news'(num) {
      if (num) {
        return true
      }
      console.warn('no data in open-news emit')
      return true
    },
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('нет параметра id lkz emit read-news')
      return false
    },
    'unmark': null,
    'new-action': null
  },
  data() {
    return {
      isNewsOpen: this.isOpen

    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if (this.isNewsOpen === true) {
        this.$emit('open-news', 34,)
      }
    },
    mark() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    newFunc(){
      console.log('Новая акция из button')
      this.$emit('new-action','5555555- new action')
    }
    // unmark(){
    //   this.$emit('unmark',this.id)
    // }
  },
  components: {
    AppButton,
    NewButton,
    AppNewsList
  }

}
</script>

<style scoped>

</style>
