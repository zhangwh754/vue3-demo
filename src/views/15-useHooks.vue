<script lang="ts" setup>
import useBase64 from '@/hook/useBase64'

useBase64({ el: '#img' }).then(res => {
  const img = document.createElement('img')
  img.src = res
  document.querySelector('#box')?.appendChild(img)
})
</script>

<template>
  <img id="img" src="../assets/img/avatar.jpg" alt="头像" />
  <button @click="">convertToBase64</button>
  <div id="box"></div>
</template>

<style scoped lang="scss">
img {
  width: 50px;
  height: 50px;
}
</style>
