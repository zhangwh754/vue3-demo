<script lang="ts" setup>
import CssStyle from '@/components/CssStyle.vue'

const color = ref('red')
</script>

<template>
  <CssStyle>
    <div class="border color">Hello world</div>
  </CssStyle>
  <el-radio-group v-model="color">
    <el-radio label="red">red</el-radio>
    <el-radio label="blue">blue</el-radio>
    <el-radio label="green">green</el-radio>
  </el-radio-group>
</template>

<style scoped lang="scss">
.color {
  color: v-bind(color);
}
.module {
  font-size: 30px;
}
</style>
