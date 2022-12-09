import type { PiniaPluginContext } from 'pinia'

const UNIQUE_KEY = 'PINIA'
//定义兜底变量

type Options = {
  key?: string
}
//定义入参类型

//将数据存在本地
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

//存缓存中读取
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}

//利用函数柯里化接受用户入参
export default (options: Options) => {
  //将函数返回给pinia让pinia调用注入context
  return (context: PiniaPluginContext) => {
    const { store } = context

    const data = getStorage(`${options?.key ?? UNIQUE_KEY}_${store.$id}`)

    store.$subscribe(() => {
      setStorage(`${options?.key ?? UNIQUE_KEY}_${store.$id}`, toRaw(store.$state))
    })

    //返回值覆盖pinia 原始值
    return {
      ...data
    }
  }
}
