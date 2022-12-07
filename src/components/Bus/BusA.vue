<script lang="ts" setup>
import { ref } from 'vue'
import Bus from '@/utils/Bus'

const num = ref(0)

const btnClick = () => {
  num.value = Math.floor(Math.random() * 100)
  Bus.emit('click', num)
}
</script>

<template>
  <h2>A emit 事件 click，传参数字{{ num }}</h2>
  <button @click="btnClick">emit</button>
</template>

<style scoped lang="scss"></style>
