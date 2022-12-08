import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/style/style.scss'

import 'uno.css'

const app = createApp(App)

import global from './utils/globalVars'

import Loading from './plugins/Loading'

app.use(createPinia()).use(router).use(global).use(Loading)

app.mount('#app')
