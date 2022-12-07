<script lang="ts" setup>
import { ref } from 'vue'
import 'animate.css'

const flag = ref(true)
</script>

<template>
  <el-button @click="flag = !flag">切换</el-button>
  <transition
    leave-active-class="animate__animated animate__fadeOutUp"
    enter-active-class="animate__animated animate__fadeInTopLeft"
    appear
    appear-active-class="animate__animated animate__fadeInTopLeft"
  >
    <div v-if="flag" class="box"></div>
  </transition>
</template>

<style scoped lang="scss">
.el-button {
  margin: 20px;
}
.box {
  background-color: lightblue;
  width: 200px;
  height: 200px;
  margin: 20px;
}
// 过渡动画
//开始过度
.fade-enter-from {
  background: red;
  width: 0px;
  height: 0px;
  transform: rotate(360deg);
}
//开始过度了
.fade-enter-active {
  transition: all 1s linear;
}
//过度完成
.fade-enter-to {
  width: 200px;
  height: 200px;
}
//离开的过度
.fade-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}
//离开中过度
.fade-leave-active {
  transition: all 1s linear;
}
//离开完成
.fade-leave-to {
  width: 0px;
  height: 0px;
}
</style>
