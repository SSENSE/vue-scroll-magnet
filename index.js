/* eslint-disable */

var ScrollMagnetContainer = require('./src/components/ScrollMagnetContainer.vue'),
    ScrollMagnetItem = require('./src/components/ScrollMagnetItem.vue');

module.exports = {
  install: function(Vue) {
    Vue.component('scroll-magnet-container', ScrollMagnetContainer);
    Vue.component('scroll-magnet-item', ScrollMagnetItem);
  },
  ScrollMagnetContainer: ScrollMagnetContainer,
  ScrollMagnetItem: ScrollMagnetItem
};
