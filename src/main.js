import Vue from 'vue';
import App from './App';
import router from './router';

import VueScrollMagnet from '../index';

Vue.use(VueScrollMagnet);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
