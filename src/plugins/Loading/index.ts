import { render, type App, type VNode } from 'vue'
import { createVNode } from 'vue'

import Loading from './index.vue'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $show(): void
    $hide(): void
  }
}

export default {
  install(app: App) {
    const vNode: VNode = createVNode(Loading)
    render(vNode, document.body)
    app.config.globalProperties.$show = vNode.component?.exposed?.show
    app.config.globalProperties.$hide = vNode.component?.exposed?.hide
  }
}
