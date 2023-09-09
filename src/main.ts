import App from '@/App.vue'
import '@/common/access'
import router from '@/router'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(mavonEditor)

app.mount('#app')
