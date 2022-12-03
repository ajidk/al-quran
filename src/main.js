import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/css/tailwind.css';
import './assets/css/font.css';
import './assets/css/global.css';

createApp(App).use(router).mount('#app');
