import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//導入懶加載組件
import { lazyPlugin } from '@/directives/lazyPlugin.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)

//使用懶加載
app.use(lazyPlugin)

app.mount('#app')

