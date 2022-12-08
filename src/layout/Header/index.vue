<script lang="ts" setup>
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { autoRoutes } from '@/utils/routes'

const titles = reactive([
  'Test',
  '瀑布流',
  '树-递归',
  '动态组件',
  '异步组件',
  '传送门',
  'transition',
  '过渡列表1',
  '过渡列表2',
  '依赖注入',
  '兄弟传参&事件总线',
  'Mitt事件总线库',
  '自定义指令',
  '自定义拖拽',
  '封装hook',
])
</script>

<template>
  <h2 class="header">
    <div id="header">
      <template v-for="(item, index) in autoRoutes" :key="item">
        <RouterLink :to="{ name: item.name }">
          <el-button>{{ titles[index] || '未命名' }}</el-button>
        </RouterLink>
      </template>
    </div>
  </h2>
</template>

<style scoped lang="scss">
#header {
  padding: 20px 5px;
  height: auto;
  border-bottom: 2px dashed #a2a9b6;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 20px;
  flex-wrap: wrap;
  a {
    display: block;
    text-decoration: none;
  }
  a + a {
    margin-left: 5px;
  }
}
</style>
