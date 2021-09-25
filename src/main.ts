import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import plugins from './plugins';
import Vant from 'vant';
import 'vant/lib/index.css';
import './style/index.scss';

const app = createApp(App);
app.use(Vant).use(router).use(store, key).use(plugins).mount('#app');
