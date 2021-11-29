<template>
<div class="card">
  <slot name="header">
    No text
  </slot>
  <slot name="p" :num="5555">
    No text
  </slot>
  <div v-if="$slots.footer">
  <slot name="footer">
    No text
  </slot>
  </div>

</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots)
  }
}
</script>

<style scoped>

</style>
