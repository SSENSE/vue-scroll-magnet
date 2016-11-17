/* eslint-disable */

import Vue from 'vue';
import ScrollMagnetContainer from 'src/components/ScrollMagnetContainer';
import ScrollMagnetItem from 'src/components/ScrollMagnetItem';

describe('ScrollMagnetContainer.vue', () => {
  it('should mount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const vm = new ContainerInstance().$mount();
    expect(vm._isMounted).to.equal(true);
  });

  it('should mount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const vm = new ContainerInstance().$mount();
    expect(vm._isMounted).to.equal(true);
  });

  it('should update scrollTop attribute when scroll occurs', (done) => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const vm = new ContainerInstance().$mount();
    const scrollEvent = document.createEvent('CustomEvent');

    scrollEvent.initCustomEvent('scroll', false, false, null);
    document.body.style.minHeight = '10000px';
    window.scrollTo(window.scrollX, 600);
    window.pageYOffset = 600;
    document.documentElement.scrollTop = 600;
    window.dispatchEvent(scrollEvent);
    expect(vm.scrollTop).to.equal(600);
    done();
  });

  it('should unmount successfully', () => {
    const ContainerInstance = Vue.extend(ScrollMagnetContainer);
    const vm = new ContainerInstance().$mount();
    vm.$destroy();
    expect(vm._isDestroyed).to.equal(true);
  });
});
