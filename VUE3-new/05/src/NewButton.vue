<template>
  <button class="btn" @click="$emit('hujaction')"> <slot /></button>
</template>

<script>
export default {
  emits:['hujaction'],
}
</script>

<style scoped>

</style>
