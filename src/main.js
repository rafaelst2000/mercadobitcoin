import { createApp } from 'vue'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import App from './App.vue'

createApp(App).use(Vue3Toastify, { autoClose: 3000 }).mount('#app')
