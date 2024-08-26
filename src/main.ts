import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// @ts-ignore
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// @ts-ignore
import router from './router/router.js'

createApp(App).use(router).mount('#app')
