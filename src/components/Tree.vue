<script lang="ts" setup>
type Tree = {
  name: string
  checked: boolean
  children?: Tree[]
}

type Props = {
  data?: Tree[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="tree" v-for="item in data" :key="item.name">
    <el-checkbox v-model="item.checked" :label="item.name" size="large" />
    <Tree v-if="item?.children" :data="item.children" />
  </div>
</template>

<style scoped lang="scss">
.tree {
  margin-left: 20px;
  .el-checkbox {
    padding-left: 20px;
    display: flex;
    align-items: center;
    &:hover {
      background-color: lightblue;
    }
  }
}
</style>
