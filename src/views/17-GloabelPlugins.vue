<script lang="ts" setup>
const app = getCurrentInstance()

const btnClick = () => {
  app?.proxy?.$show()

  setTimeout(() => {
    app?.proxy?.$hide()
  }, 3000)
}
</script>

<template>
  <el-button @click="btnClick">loading</el-button>
</template>

<style scoped lang="scss"></style>
