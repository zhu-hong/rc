import { createApp } from 'vue';
import App from './App.vue';
import 'virtual:windi.css';
import './assets/style.css';
import { VueVirtualScroll } from './plugins';

createApp(App)
  .use(VueVirtualScroll)
  .mount('#app');
