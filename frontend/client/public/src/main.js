import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
