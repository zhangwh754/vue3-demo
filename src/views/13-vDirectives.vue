<script lang="ts" setup>
import type { Directive, DirectiveBinding } from 'vue'

const color = ref('red')

const vBg: Directive = {
  mounted(el: HTMLElement, dir: DirectiveBinding<string>) {
    console.log('mounted')
    if (typeof dir.value !== 'string') {
      console.warn('v-bg must bind a string.(eg. red)')
      return
    }
    el.style.backgroundColor = dir.value
  },
  updated(el: HTMLElement, dir: DirectiveBinding<string>) {
    console.log('updated')
    if (typeof dir.value !== 'string') {
      console.warn('v-bg must bind a string.(eg. red)')
      return
    }
    el.style.backgroundColor = dir.value
  },
  unmounted() {
    console.log('unmounted')
  }
}
</script>

<template>
  <div id="box" v-bg="color"></div>
  <input v-model.lazy="color" />
</template>

<style scoped lang="scss">
#box {
  height: 100px;
  width: 100px;
}
</style>
