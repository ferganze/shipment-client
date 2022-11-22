import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import store from '@/store'
import App from './App.vue'

axios.defaults.baseURL = process.env.baseURL || 'http://127.0.0.1:8000/api/shipments/';

const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
app.use(store)
app.mount('#app')
