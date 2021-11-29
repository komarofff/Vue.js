<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>
<async-component></async-component>
      <app-button
        ref="myBtn"
        :color="oneColor"
        @action="active = '1'"
      >One
      </app-button>
      <app-button
        :color="twoColor"
        @action="active = '2'"
      >Two
      </app-button>
    </div>

<keep-alive>
    <component :is="componentName"></component>
</keep-alive>
  </div>

</template>


<script>
import AppButton from "@/AppButton";
import AppText1 from "@/AppText1";
import AppText2 from "@/AppText2";

export default {
  data() {
    return {
      active: '1'//2
    }

  },
  mounted() {
    // setTimeout(()=>{
    //   this.componentName = 'new comp name'
    // },1500)
    this.$refs.myBtn.btnLog()
  },
  computed: {
    // componentName() {
    //   return 'app-text'+this.active
    // },
    componentName:{
      get(){
        return 'app-text'+this.active
      },
      set(value){
        console.log("componentName = "+value)
      }
    },
    oneColor(){
      return this.active === '1' ? 'primary':''
    }
    ,
    twoColor(){
      return this.active === '2' ? 'primary':''
    }

  }
 ,
  components: {AppButton, AppText1, AppText2}
}
</script>

<style>
</style>
