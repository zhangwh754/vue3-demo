<template>
  <div>
    <el-button @click="shuffle">Shuffle</el-button>
    <transition-group class="wraps" name="mmm" tag="ul">
      <li class="cell" v-for="item in items" :key="item.id">{{ item.number }}</li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let items = ref(
  Array.apply(null, { length: 81 } as number[]).map((_, index) => {
    return {
      id: index,
      number: (index % 9) + 1
    }
  })
)
const _shuffle = (arr: { id: number; number: number }[]) => {
  let index = arr.length
  while (index) {
    let changeIndex = Math.floor(Math.random() * index--)
    ;[arr[index], arr[changeIndex]] = [arr[changeIndex], arr[index]]
  }
  return arr
}

const shuffle = () => {
  items.value = _shuffle(items.value)
}
</script>

<style scoped lang="scss">
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(40px * 9 + 9px);
  .cell {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.mmm-move {
  transition: transform 0.8s ease;
}
</style>
