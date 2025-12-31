import { createApp } from 'vue'
import './style.css'
import VueTheMask from 'vue-the-mask';
import App from './App.vue'
import router from './router/router.js';
import '@vueform/multiselect/themes/default.css';
import Multiselect from '@vueform/multiselect';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

createApp(App)
  .use(router)
  .use(VueTheMask)
  .use(VueToast, { duration: 3000, position: 'top-right' })
  .component('Multiselect', Multiselect)
  .mount('#app');
