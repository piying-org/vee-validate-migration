import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.prod.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Antd from 'ant-design-vue'
import naive from 'naive-ui'
import {createBootstrap} from 'bootstrap-vue-next'

// 污染样式,请查看bootstrap组件时打开
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(Quasar, {})
app.use(ElementPlus)
app.use(Antd)
app.use(naive)
app.use(createBootstrap())
app.use(createPinia())
app.use(router)

app.mount('#app')
