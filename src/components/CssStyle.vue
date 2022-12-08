<script lang="ts" setup></script>

<template>
  <h2>
    <slot></slot>
  </h2>
</template>

<style scoped lang="scss">
:slotted(.border) {
  padding: 10px;
  border: 2px solid #ccc;
}
</style>
