import './assets/main.css'

//載入vue套件
import {createApp } from 'vue'
//載入vue根組件root component，作為應用的主結構。
//.vue檔案有點像模版 ejs
import app from './testDefineEmitFather.vue'

//渲染app組件，並且掛載app到./index.html的id=app的元素上
createApp(app).mount('#app')
