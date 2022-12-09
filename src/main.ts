import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/style/style.scss'

import 'uno.css'

import { setupStore } from '@/stores'

const app = createApp(App)

import global from './utils/globalVars'

import Loading from './plugins/Loading'

// 配置 store
setupStore(app)

app.use(router).use(global).use(Loading)

app.mount('#app')
