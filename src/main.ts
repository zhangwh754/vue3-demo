import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/style.scss'

const app = createApp(App)

app.config.globalProperties.$label = 'zwh'
app.config.globalProperties.$filter = {
  format<T>(value: T) {
    return `前缀-${value}`
  }
}

type Filter = {
  format<T>(value: T): string
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $label: string
    $filter: Filter
  }
}

app.use(createPinia())
app.use(router)

app.mount('#app')
