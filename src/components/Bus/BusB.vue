<script lang="ts" setup>
import Bus from '@/utils/Bus'
import { ref } from 'vue'

const Num = ref(0)

Bus.on('click', (num: number) => {
  console.log(num)

  Num.value = num
})
</script>

<template>
  <h2>接收到的值：{{ Num }}</h2>
</template>

<style scoped lang="scss"></style>
