/* eslint-disable */

import Vue from 'vue';
import ScrollMagnetContainer from '../../../src/ScrollMagnetContainer.vue';
import { createAppContainer, simulateScroll } from '../utils';

simulateScroll(0); // Reset scroll position

describe('ScrollMagnetContainer.vue', () => {
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
