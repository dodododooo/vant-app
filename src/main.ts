import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import plugins from './plugins';
import App from './App.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import './style/index.scss';

const app = createApp(App);
app.use(createPinia()).use(Vant).use(router).use(plugins).mount('#app');
