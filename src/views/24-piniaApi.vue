<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

const dispatch = () => {
  counterStore.$patch(state => {
    state.name = 'lj'
    state.count = 200
  })
}

// 监听state的一切修改
counterStore.$subscribe((args, state) => {
  // console.log(args) // 可以获取修改的详情
  // console.log(state) //返回修改后的state
})

// 只监听actions的使用
counterStore.$onAction(({ onError, after }) => {
  onError(err => {
    console.log('可以收集action的错误', err)
  })
  // action执行完毕的回调，在这个函数的最后执行
  after(() => {
    console.log('end')
  })
})
</script>

<template>
  <h2>{{ counterStore.count }}</h2>
  <h2>{{ counterStore.doubleCount }}</h2>
  <h2>{{ counterStore.name }}</h2>
  <el-button @click="dispatch">直接修改</el-button>
  <el-button @click="counterStore.increment">actions:increment</el-button>
  <el-button @click="counterStore.error">actions:error</el-button>
  <hr />
  <el-button @click="() => counterStore.$reset()">$reset：重置pinia状态</el-button>
</template>

<style scoped lang="scss">
hr {
  margin: 20px;
}
</style>
