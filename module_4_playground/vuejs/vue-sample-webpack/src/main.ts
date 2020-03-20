import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import { router } from './router';

Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App),
}).$mount('#root');