import { createApp } from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import component
import Loading from 'vue3-loading-overlay'
// Import stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import App from './App.vue';
import router from './router';
import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as mdb from 'mdb-ui-kit'; // library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
// 註冊元件
app.component('Loading', Loading);
app.component('font-awesome-icon', FontAwesomeIcon) //使用kebab-case
app.mount('#app');
