<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useFetch } from '@vueuse/core'

import WaterFall from '@/components/WaterFall.vue'

const url = ref('/api/getPicture')
const flag = ref(false)

type picture = {
  id: number
  color: string
  height: number
}

let pictureList = reactive<picture[]>([])

const { data } = useFetch(url).json()

const getData = () => {
  pictureList = data.value.data
  flag.value = true
}
</script>

<template>
  <button @click="getData">getData</button>
  <hr />
  <WaterFall v-if="flag" :pictureList="pictureList"> </WaterFall>
</template>

<style scoped lang="scss"></style>
