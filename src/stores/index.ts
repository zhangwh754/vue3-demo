import type { App } from 'vue'
import { createPinia } from 'pinia'
import piniaPlugin from './plugins/persist'

const pinia = createPinia()

pinia.use(piniaPlugin({}))

export function setupStore(app: App<Element>) {
  app.use(pinia)
}
