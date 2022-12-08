<script lang="ts" setup>
const isShow = ref(false)

const show = () => (isShow.value = true)

const hide = () => (isShow.value = false)

defineExpose({
  show,
  hide
})
</script>

<template>
  <div v-if="isShow" class="loading">
    <div class="loading-content">Loading...</div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    font-size: 30px;
    color: #fff;
  }
}
</style>
