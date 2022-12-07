<script lang="ts" setup>
import type { Directive, DirectiveBinding } from 'vue'

const color = ref('red')
const color2 = ref('yellow')

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

const vBg2: Directive = (el: HTMLElement, dir: DirectiveBinding<string>) => {
  el.style.backgroundColor = dir.value
}
</script>

<template>
  <div id="box" v-bg="color"></div>
  <input v-model.lazy="color" />
  <div id="box" v-bg2="color2"></div>
  <input v-model.lazy="color2" />
</template>

<style scoped lang="scss">
#box {
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
}
</style>
