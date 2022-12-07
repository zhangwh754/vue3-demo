<script lang="ts" setup>
import { provide, readonly, ref } from 'vue'
import Inject from '@/components/Inject.vue'

const color = ref('red')

provide('color', readonly(color))
</script>

<template>
  <el-radio-group v-model="color">
    <el-radio label="red" size="large">red</el-radio>
    <el-radio label="yellow" size="large">yellow</el-radio>
    <el-radio label="pink" size="large">pink</el-radio>
  </el-radio-group>
  <h2>provide父组件</h2>
  <div id="box"></div>
  <hr />
  <Inject></Inject>
</template>

<style scoped lang="scss">
#box {
  width: 100px;
  height: 100px;
  background-color: v-bind(color);
}
</style>
