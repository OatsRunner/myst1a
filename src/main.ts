import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//引入app根组件
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入createapp创建应用
const app = createApp(App)

app.use(createPinia())
//挂载路由
app.use(router)

app.use(ElementPlus)

app.mount('#app')




