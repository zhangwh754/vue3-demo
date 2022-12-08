<script lang="ts" setup>
type Props = {
  text?: string
}

const Btn = (props: Props, ctx: any) => {
  return h(
    'div',
    {
      class: ['rounded', 'bg-green-500', 'h-20', 'text-4xl', 'text-gray-50', 'text-center', 'p-1.5'],
      onClick: () => {
        ctx.emit('on-click', 'emit的数据')
      }
    },
    ctx.slots.default()
  )
}

const onClick = (data: string) => {
  console.log(data)
}
</script>

<template>
  <Btn @on-click="onClick">呼伦贝尔大草原</Btn>
</template>

<style scoped lang="scss"></style>
