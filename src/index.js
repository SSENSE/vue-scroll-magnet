/* eslint-disable */

var ScrollMagnetContainer = require('./ScrollMagnetContainer.vue'),
    ScrollMagnetItem = require('./ScrollMagnetItem.vue');

module.exports = {
  install: function(Vue) {
    Vue.component('scroll-magnet-container', ScrollMagnetContainer);
    Vue.component('scroll-magnet-item', ScrollMagnetItem);
  },
  ScrollMagnetContainer: ScrollMagnetContainer,
  ScrollMagnetItem: ScrollMagnetItem
};
