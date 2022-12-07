<script lang="ts" setup>
import type { Directive } from 'vue'

const vMove: Directive = (el: HTMLElement) => {
  const moveElement = el.firstElementChild as HTMLDivElement
  const mouseDown = (e: MouseEvent) => {
    const X = e.clientX - el.offsetLeft
    const Y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }
  moveElement.addEventListener('mousedown', mouseDown)
}
</script>

<template>
  <div v-move id="box">
    <div id="header">可拖拽区域</div>
    <div>内容</div>
  </div>
</template>

<style scoped lang="scss">
#box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  background-color: #fff;
  user-select: none;
  z-index: 999;
  #header {
    height: 40px;
    background-color: #cfc;
    cursor: move;
  }
}
</style>
