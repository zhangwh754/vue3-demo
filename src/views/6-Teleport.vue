<script lang="ts" setup>
import MyTeleport from '@/components/Teleport.vue'
import { ref } from 'vue'

const flag = ref(true)

const switchFlag = () => (flag.value = !flag.value)
</script>

<template>
  <Teleport :disabled="true" to="body">
    <MyTeleport v-if="flag" @close="switchFlag"></MyTeleport>
  </Teleport>

  <el-button @click="switchFlag">Switch</el-button>
</template>

<style scoped lang="scss"></style>
