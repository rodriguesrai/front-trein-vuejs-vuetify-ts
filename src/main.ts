import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n/i18n.config'
import { createPinia } from 'pinia'

const pinia = createPinia()

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

const app = createApp(App)
app.use(router).use(pinia).use(i18n).use(vuetify).mount('#app')
