<script lang="ts" setup>
import { reactive, ref, markRaw } from 'vue'

import A from '@/components/dynamicCom/A.vue'
import B from '@/components/dynamicCom/B.vue'
import C from '@/components/dynamicCom/C.vue'

const data = reactive([
  {
    name: 'A组件',
    com: markRaw(A)
  },
  {
    name: 'B组件',
    com: markRaw(B)
  },
  {
    name: 'C组件',
    com: markRaw(C)
  }
])

const active = ref(0)

const switchCom = (index: number) => {
  active.value = index
}
</script>

<template>
  <div id="layout">
    <div
      :class="[active === index ? 'active' : '']"
      class="tabs"
      v-for="(item, index) in data"
      :key="item.name"
      @click="switchCom(index)"
    >
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component style="margin: 5px" :is="data[active].com"></component>
</template>

<style scoped lang="scss">
#layout {
  display: flex;
  .tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
  }
  .active {
    background-color: lightblue;
  }
}
</style>
