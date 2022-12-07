<script lang="ts" setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.content {
  padding-top: 10px;
  flex: 1;
  overflow: auto;
  @include scrollbar;
}
</style>
