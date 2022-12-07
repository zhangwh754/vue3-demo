<script lang="ts" setup>
const data = ref('hello world')
</script>

<template>
  <h2>{{ data }}</h2>
</template>

<style scoped lang="scss">
h2 {
  color: red;
  font-size: 3rem;
}
</style>
