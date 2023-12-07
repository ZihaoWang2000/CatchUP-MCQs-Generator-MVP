import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.css'  // 使用图标库
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

createApp(App).use(store).use(router).mount('#app')
