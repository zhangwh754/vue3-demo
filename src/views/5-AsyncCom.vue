<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
const Sync = defineAsyncComponent(() => import('@/components/AsyncCom.vue'))
</script>

<template>
  <Suspense>
    <template #default>
      <Sync></Sync>
    </template>
    <template #fallback>
      <div>loading...</div>
    </template>
  </Suspense>
</template>

<style scoped lang="scss"></style>
