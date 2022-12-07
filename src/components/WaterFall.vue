<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'

type picture = {
  id: number
  color: string
  height: number
  left: number
  top: number
}
const props = defineProps<{
  pictureList: { id: number; color: string; height: number }[]
}>()

const waterList = reactive<picture[]>([])

const heightList = reactive<number[]>([])
const init = () => {
  const width = 90
  const clientWidth = document.body.clientWidth
  const column = Math.floor(clientWidth / width)
  for (let i = 0; i < props.pictureList.length; i++) {
    if (i < column) {
      waterList.push({
        ...props.pictureList[i],
        left: i * width,
        top: 0
      })
      heightList.push(props.pictureList[i].height)
    } else {
      let index = 0
      let current = heightList[0]
      // 找到当前最短的那一项
      heightList.forEach((h, i) => {
        if (current > h) {
          current = h
          index = i
        }
      })
      heightList[index] = heightList[index] + props.pictureList[i].height + 20
      waterList.push({
        ...props.pictureList[i],
        left: index * width,
        top: current + 20
      })
      // debugger
    }
  }
  console.log(waterList)
}
onMounted(() => {
  init()
})
</script>

<template>
  <div class="wrapper">
    <div
      v-for="item in waterList"
      :key="item.id"
      class="items"
      :style="{
        left: item.left + 'px',
        top: item.top + 'px',
        height: item.height + 'px',
        backgroundColor: item.color
      }"
    >
      {{ item.id }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  .items {
    position: absolute;
    width: 80px;
  }
}
</style>
