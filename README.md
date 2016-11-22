# vue-scroll-magnet

## What is Vue Scroll Magnet?

Vue Scroll Magnet is a pair of component wrappers which allow elements to follow the viewport while scrolling and then anchor at the upper and lower extremeties of their parent container. This module is inspired by a jQuery plugin called <a href="//github.com/leafo/sticky-kit">Sticky kit</a>.

## Installation

> This component relies on ES6 and may not be compatible with Vue 1.x projects.

``` bash
npm install -S vue-scroll-magnet
```

## Usage (Global)
Install the components globally:
``` js
import Vue from 'vue';
import VueScrollMagnet from 'vue-scroll-magnet';

Vue.use(VueScrollMagnet);
```

## Usage (Component)
Include the wrappers into your component using import:
``` js
/* inside your Vue component's script tag */

import { ScrollMagnetContainer, ScrollMagnetItem } from 'vue-scroll-magnet';

export default {
  ...
  components: {
    ScrollMagnetContainer,
    ScrollMagnetItem
  }
  ...
};
```

### HTML structure
The scrollable height boundary will be determined as the direct parent of the &lt;scroll-magnet-container&gt; by default, however it can be configured using an element selector which it can use as a fixed context.

In the example below, &lt;scroll-magnet-container&gt; will automatically use the top of #app as its upper boundary and its height of 500px as its lower boundary unless a specific element context is provided.

``` html
<div id="app" style="height: 500px;">
  <scroll-magnet-container>
    <scroll-magnet-item>This content will scroll</scroll-magnet-item>
  </scroll-magnet-container>
</div>
```

### Development
To run a local dev server, clone this repo and run:
``` bash
npm install
npm run dev
```

### Tests
To run unit tests & code coverage:
``` bash
npm test
```