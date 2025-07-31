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
import 'quasar/dist/quasar.prod.css';

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

app.use(createPinia())
app.use(router)

app.mount('#app')
