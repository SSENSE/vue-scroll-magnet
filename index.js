var ScrollMagnetContainer = require('./src/ScrollMagnetContainer.vue'),
    ScrollMagnetItem = require('./src/ScrollMagnetItem.vue');

module.exports = {
  install: function(Vue) {
    Vue.component('scroll-magnet-container', ScrollMagnetContainer);
    Vue.component('scroll-magnet-item', ScrollMagnetItem);
  },
  ScrollMagnetContainer: ScrollMagnetContainer,
  ScrollMagnetItem: ScrollMagnetItem
};
