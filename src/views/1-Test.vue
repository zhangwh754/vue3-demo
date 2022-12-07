<script lang="ts" setup></script>

<template>
  <h2 v-for="item in 5" :key="item">{{ item }}</h2>
</template>

<style scoped lang="scss">
h2 {
  margin: 10px;
  height: 30px;
  border: 1px solid #ccc;
}
</style>
