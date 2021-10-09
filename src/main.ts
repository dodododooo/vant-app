import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vant from 'vant';
import router from './router';
import plugins from './plugins';
import App from './App.vue';
import 'vant/lib/index.css';
import './style/index.scss';

import './mock';

createApp(App).use(createPinia()).use(Vant).use(router).use(plugins).mount('#app');
