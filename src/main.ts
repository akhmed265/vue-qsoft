import { createApp } from 'vue'
import AppComponent from './App.vue'
import './assets/font-awesome/scss/font-awesome.scss'

import router from './router'

const app = createApp(AppComponent)
app.use(router)

app.mount('#app')
