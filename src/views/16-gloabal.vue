<script lang="ts" setup>
const app = getCurrentInstance()
console.log(app?.proxy?.$label as string)
console.log(app?.proxy?.$filter.format('hello world') as string)
</script>

<template>
  <h2>{{ $label }}</h2>
  <h2>{{ $filter.format('hello world') }}</h2>
</template>

<style scoped lang="scss"></style>
