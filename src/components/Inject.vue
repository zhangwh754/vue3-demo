<script lang="ts" setup>
import { inject, type Ref } from 'vue'

const color = inject<Ref<string>>('color')
</script>

<template>
  <h2>Inject子组件</h2>
  <el-radio-group v-model="color">
    <el-radio label="red" size="large">child red</el-radio>
    <el-radio label="yellow" size="large">child yellow</el-radio>
    <el-radio label="pink" size="large">child pink</el-radio>
  </el-radio-group>
  <div id="box"></div>
</template>

<style scoped lang="scss">
#box {
  width: 100px;
  height: 100px;
  background-color: v-bind(color);
}
</style>
