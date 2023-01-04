<script lang="ts" setup>
const name = ref('zwh')
const age = ref(18)
const height = ref(1.8)

const btnClick = () => {
  age.value++
}
const btnClick2 = () => {
  height.value = (height.value * 10 + 1) / 10
}
</script>

<!-- v-memo 只有当数组的值改变时，才会更新对应的dom -->
<!-- 下例中，height改变，视图不变，age改变，才会更新ul视图 -->

<template>
  <ul v-memo="[age]">
    <li>{{ name }}</li>
    <li>{{ age }}</li>
    <li>{{ height }}</li>
  </ul>

  <el-button @click="btnClick">btnClick</el-button>
  <el-button @click="btnClick2">btnClick2</el-button>
</template>

<style scoped lang="scss">
ul {
  margin: 10px;
  li {
    width: 100px;
    text-align: center;
    border: 1px solid #ccc;
  }
}
</style>
