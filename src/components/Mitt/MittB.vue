<script lang="ts" setup>
import Bus from '@/utils/mittBus'
import { ref } from 'vue'

const data = ref<any>(null)

Bus.on('get-data', (e: any) => {
  data.value = e
})
</script>

<template>
  <h2>接收到的值：{{ data }}</h2>
</template>

<style scoped lang="scss"></style>
