<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()

// 虽然可以解构，但是会丢失响应式
// const { name, count } = counterStore
// 使用storeToRefs可以正常解构
// const { name, count } = storeToRefs(counterStore)

const dispatch1 = () => {
  counterStore.$patch({
    name: 'xyf',
    count: 100
  })
}

const dispatch2 = () => {
  counterStore.$patch(state => {
    state.name = 'lj'
    state.count = 200
  })
}

const edit = () => {
  counterStore.$state = {
    count: 300,
    name: 'np'
  }
}
</script>

<template>
  <h2>{{ counterStore.count }}</h2>
  <h2>{{ counterStore.doubleCount }}</h2>
  <h2>{{ counterStore.name }}</h2>
  <el-button @click="() => counterStore.$reset()">$reset</el-button>
  <hr />
  <el-button @click="counterStore.count++">1、直接修改数据</el-button>
  <el-button @click="dispatch1">2、dispatch对象方法</el-button>
  <el-button @click="dispatch2">3、dispatch函数方法（推荐）</el-button>
  <el-button @click="edit">4、直接修改整个对象</el-button>
  <el-button @click="counterStore.increment">5、通过actions修改</el-button>
  <hr />
  <h2>以上修改都可在vue调试工具的timeline正常检测到</h2>
  <hr />
  <h2>默认不能解构counterStore，会丢失响应式</h2>
  <h2>想要解构，需要用</h2>
  <hr />
  <h2>异步</h2>
  <el-button @click="counterStore.asyncFn">异步修改</el-button>
</template>

<style scoped lang="scss">
hr {
  margin: 20px;
}
</style>
