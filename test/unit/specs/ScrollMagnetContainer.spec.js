/* eslint-disable */

import Vue from 'vue';
import VueScrollMagnet from '../../../src/index.js';
import ScrollMagnetContainer from '../../../src/ScrollMagnetContainer.vue';
import { createAppContainer, simulateScroll } from '../utils';

simulateScroll(0); // Reset scroll position

describe('ScrollMagnetContainer.vue', () => {
  it('should install successfully when used globally', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    createAppContainer();
    Vue.use(VueScrollMagnet);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container></scroll-magnet-container>',
    });
    vm.$mount;
    expect(vm.$children[0]._isMounted).to.equal(true);
  });

  it('should mount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container></scroll-magnet-container>',
    });
    vm.$mount;
    expect(vm.$children[0]._isMounted).to.equal(true);
  });

  it('should match an element when targetElement prop is set', (done) => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container targetElement="#app"></scroll-magnet-container>'
    });
    vm.$mount;
    expect(vm.$children[0].target).to.not.equal(undefined);
    expect(vm.$children[0].target.id).to.equal('app');
    done();
  });

  it('should update scrollTop attribute when scroll occurs', (done) => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container></scroll-magnet-container>'
    });
    vm.$mount;
    simulateScroll(600);
    expect(vm.$children[0].scrollTop).to.equal(600);
    done();
  });

  it('should not attach listeners if window is not defined', (done) => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container></scroll-magnet-container>'
    });
    vm.$mount;
    simulateScroll(600);
    expect(vm.$children[0].scrollTop).to.equal(600);
    done();
  });

  it('should unmount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container></scroll-magnet-container>'
    });
    vm.$mount;
    vm.$destroy();
    expect(vm.$children[0]._isDestroyed).to.equal(true);
  });
});
