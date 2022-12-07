type BusClass = {
  on: (name: string, callback: Function) => void
  emit: (name: string) => void
}

type paramKey = string | symbol | number

type List = {
  [key: paramKey]: Function[]
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
  }
  emit(name: string, ...args: any[]) {
    const fns = this.list[name] || []
    fns.forEach(fn => {
      fn.apply(this, args)
    })
  }
  on(name: string, callback: Function) {
    this.list[name] || (this.list[name] = [])
    this.list[name].push(callback)
  }
}

export default new Bus()
