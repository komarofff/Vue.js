<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
  </div>
  <app-list>
    <!--  <template #default="slotProps">-->
    <template #count="{idx,iter}">
  <span style="color:darkgoldenrod">
    item: {{ iter }} //slotProps.iter
    idx= {{ idx }}
  </span>
    </template>
  </app-list>


  <app-block>
    <template v-slot:p="{num}">
      <h1>{{num}}</h1>
      <p>Это самый важный текст для нового блока</p>
    </template>
    <template v-slot:header>
      <h1>Это самый важный текст для нового блока</h1>
    </template>
    <template #footer>
      <div>
        <hr>
        <small>footer</small>
        <hr>
      </div>
    </template>
  </app-block>
  <!-- v-slot:slots_name === #slots_name-->
<app-slot>
  <template #button="{i}">
    {{ i.title }}{{i.id}}
  </template>

  <template #center="{title55}">
    <div class="card">
  <h1>{{title55}}</h1>
    </div>
  </template>
  <template #foot2="{title55}">
    <div class="card">
      <h1>{{title55}}</h1>
    </div>
  </template>
</app-slot>

</template>

<script>
import AppBlock from "@/AppBlock";
import AppList from "@/AppList";
import AppSlot from "@/AppSlot";
export default {
  components: {
    AppBlock,
    AppList,
    AppSlot
  }
}
</script>

<style>
</style>
