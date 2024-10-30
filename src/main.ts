import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './assets/styles/global.css'; // Импортируем глобальные стили

const app = createApp(App);
app.use(router);
app.use(createPinia());  // Подключаем Pinia
app.mount('#app');