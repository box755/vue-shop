import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//導入懶加載組件
import { lazyPlugin } from '@/directives/lazyPlugin.js'
// 導入全局組件
import { componentPlugin } from '@/components/index.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)

//使用懶加載
app.use(lazyPlugin)

//使用權局組件
app.use(componentPlugin)

app.mount('#app')

