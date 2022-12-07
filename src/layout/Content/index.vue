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
  padding-left: 50px;
  flex: 1;
  overflow: auto;
  @include scrollbar;
}
</style>
