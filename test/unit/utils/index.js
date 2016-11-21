var simulateScroll = function(distance) {
  var e = new CustomEvent('scroll')
  document.body.style.minHeight = '10000px';
  window.pageYOffset = distance;
  window.dispatchEvent(e);
}

var createAppContainer = function() {
  const appContainer = document.createElement('div');
  const innerContainer = document.createElement('div');
  appContainer.id = 'app';
  innerContainer.id = 'appInner';
  appContainer.style.height = '800px';
  appContainer.appendChild(innerContainer);
  document.body.appendChild(appContainer);
}

module.exports = {
  'simulateScroll': simulateScroll,
  'createAppContainer': createAppContainer
};
