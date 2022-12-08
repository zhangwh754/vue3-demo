import type { App } from 'vue'

type Filter = {
  format<T>(value: T): string
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $label: string
    $label2?: string
    $filter: Filter
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.$label = 'zwh'
    app.config.globalProperties.$label2 = 'lorem'
    app.config.globalProperties.$filter = {
      format<T>(value: T) {
        return `前缀-${value}`
      }
    }
  }
}
