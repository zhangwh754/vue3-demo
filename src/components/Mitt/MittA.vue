<script lang="ts" setup>
import Bus from '@/utils/mittBus'

const btnClick = () => {
  Bus.emit('get-data', { a: 'b' })
}
</script>

<template>
  <button @click="btnClick">EmitData</button>
</template>

<style scoped lang="scss"></style>
