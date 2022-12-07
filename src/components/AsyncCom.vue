<script lang="ts" setup>
type Data = {
  name: string
  age: number
  desc: string
}

const data: Data = {
  name: 'zwh',
  age: 18,
  desc: 'hello world'
}

const getData = (): Promise<Data> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })
}

const asyncData = await getData()
</script>

<template>
  <div class="sync">
    <div class="sync-content">
      <div class="sync-info">
        <div>{{ asyncData.name }}</div>
        <div>{{ asyncData.age }}</div>
      </div>
    </div>
    <hr />
    <div>{{ asyncData.desc }}</div>
  </div>
</template>

<style scoped lang="scss"></style>
