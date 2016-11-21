/* eslint-disable */

import Vue from 'vue';
import ScrollMagnetContainer from 'src/components/ScrollMagnetContainer';
import ScrollMagnetItem from 'src/components/ScrollMagnetItem';
import { createAppContainer, simulateScroll } from '../utils';

describe('ScrollMagnetItem.vue', () => {
  it('should mount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const ItemInstance = Vue.extend(ScrollMagnetItem);
    const vm = new ContainerInstance();
    vm.$children.push(ItemInstance);
    vm.$mount();
    expect(vm._isMounted).to.equal(true);
  });

  it('should update default data attributes to match parent container context', (done) => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const ItemInstance = Vue.extend(ScrollMagnetItem);
    const appContainer = document.createElement('div');
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    Vue.component('scroll-magnet-item', ItemInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container><scroll-magnet-item></scroll-magnet-item></scroll-magnet-container>'
    });
    vm.$mount();
    const $container = vm.$children[0];
    const $item = $container.$children[0];
    setTimeout(() => {
      // Data attributes
      expect($item.nearestContainer).to.equal(vm.$children[0]);
      expect($item.width).to.equal($item.nearestContainer.$el.clientWidth);
      expect($item.height).to.equal(0);
      expect($item.scrollDist).to.equal(0);
      expect($item.scrollEnd).to.equal(($item.nearestContainer.offsetTop + ($item.nearestContainer.height - $item.offsetTopPad)));
      expect($item.isBottomed).to.equal(false);
      expect($item.isScrolling).to.equal(false);
      // Props
      expect($item.offsetTopPad).to.equal(0);
      done();
    }, 100);
  });

  it('should use default top value if not isBottomed', (done) => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const ItemInstance = Vue.extend(ScrollMagnetItem);
    createAppContainer();
    Vue.component('scroll-magnet-container', ContainerInstance);
    Vue.component('scroll-magnet-item', ItemInstance);
    const vm = new Vue({
      el: '#appInner',
      template: '<scroll-magnet-container><scroll-magnet-item></scroll-magnet-item></scroll-magnet-container>'
    });
    vm.$mount();
    const $container = vm.$children[0];
    const $item = $container.$children[0];
    Vue.set(vm.$children[0], 'scrollTop', 0);
    setTimeout(() => {
      expect($item.top).to.not.equal('initial');
      done();
    }, 100);
  });

  it('should unmount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const ItemInstance = Vue.extend(ScrollMagnetItem);
    const vm = new ContainerInstance();
    vm.$children.push(ItemInstance);
    vm.$mount();
    vm.$destroy();
    expect(vm._isDestroyed).to.equal(true);
  });
});
