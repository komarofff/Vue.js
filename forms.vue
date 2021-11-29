<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group" v-for="(num,index) in forms">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="forms[index].email"
        >
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="forms[index].name"
        >
      </div>
    </form>
    <hr>
    <button @click="addForm()">Добавить форму</button>
    <ul >
      <li v-for="item in forms">   Name: - {{ item.name }} | Email - {{ item.email }}</li>
    </ul>


  </div>
</template>

<script>

export default {
  data() {
    return {
      forms: [
        [{email: ''}, {name: ''}]
      ]
    }
  },
  methods:{
    addForm(){
      this.forms.push(['', ''])
    }
  }
}
</script>

<style scoped>

</style>
