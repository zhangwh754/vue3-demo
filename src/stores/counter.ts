import { defineStore } from 'pinia'
import { Name } from './store-name'

interface Data {
  code: number
  msg: string
  data: number
}

export const useCounterStore = defineStore(Name.COUNTER, {
  state: () => ({
    count: 1,
    name: 'zwh'
  }),
  getters: {
    doubleCount(): number {
      return this.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    },
    asyncFn: async function () {
      const p1: Promise<Data> = new Promise(resolve => {
        setTimeout(() => {
          const data: Data = {
            code: 200,
            msg: 'ok',
            data: Math.floor(Math.random() * 100)
          }
          resolve(data)
        }, 3000)
      })
      const res = await p1
      this.count = res.data
    },
    error() {
      throw new Error('这是个手动抛出的错误')
    }
  }
})
