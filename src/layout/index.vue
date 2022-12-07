<script lang="ts" setup>
import Sidebar from './Sidebar/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
</script>

<template>
  <div id="layout">
    <Sidebar></Sidebar>
    <div id="layout_right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style scoped lang="scss">
#layout {
  display: flex;
  height: 100%;
  overflow: hidden;
  &_right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
