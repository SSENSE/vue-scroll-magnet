import Vue from 'vue';
import Router from 'vue-router'; // eslint-disable-line import/no-extraneous-dependencies
import Home from '../pages/Home';
import Example from '../pages/Example';
import Guide from '../pages/Guide';
import API from '../pages/API';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  linkActiveClass: 'current',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/examples', name: 'examples', component: Example },
    { path: '/guide', name: 'guide', component: Guide },
    { path: '/api', name: 'examples', component: API },
  ],
});
