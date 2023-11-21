import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(VCalendar, {}).use(pinia).mount('#app')
