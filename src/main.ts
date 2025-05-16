import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts';

const pinia = createPinia()
const app = createApp(App);

app.use(VueApexCharts, pinia);

app.mount('#app');
