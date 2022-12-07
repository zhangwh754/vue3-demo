<script lang="ts" setup>
import Tree from '@/components/Tree.vue'
import { reactive } from 'vue'
type TreeType = {
  name: string
  checked: boolean
  children?: TreeType[]
}

const data = reactive<TreeType[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false
      }
    ]
  },
  {
    name: '2',
    checked: true
  },
  {
    name: '3',
    checked: false,
    children: [
      {
        name: '3-1',
        checked: false,
        children: [
          {
            name: '3-1-1',
            checked: true
          },
          {
            name: '3-1-2',
            checked: false
          },
          {
            name: '3-1-3',
            checked: true
          }
        ]
      },
      {
        name: '3-2',
        checked: false
      }
    ]
  }
])
</script>

<template>
  <Tree :data="data"></Tree>
</template>

<style scoped lang="scss"></style>
