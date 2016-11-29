---
title: Examples
---

# Examples

## Basic example

``` html
<div class="example-container">
  <scroll-magnet-container>
    <scroll-magnet-item>
      <div class="example-sticky-item">
        <div class="text">This item will stick as you scroll!</div>
      </div>
    </scroll-magnet-item>
  </scroll-magnet-container>
  <!-- Placeholder paragraphs -->
</div>
```

``` css
.example-container {
  min-height: 600px;
}
.example-item {
  min-height: 200px;
}
```

<style>
  .paragraphs {
    margin-bottom: 40px;
  }

  .paragraph {
    width: 100%;
    min-height: 15px;
    background: rgba(0,0,0,0.1);
    margin-bottom: 15px;
  }
  .paragraph.short {
    width: 80%;
  }
  .example-container {
    min-height: 600px;
  }
  .example-item {
    position: relative;
    font-size: 24px;
    text-align: center;
    width: 100%;
    min-height: 200px;
    background: #34495e;
    color: white;
  }
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<div class="content"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/toddlawton/vue-scroll-magnet/master/dist/vue-scroll-magnet.min.js"></script>
<script type="text/javascript">
  function paragraphs(ct) {
    var paras = '';
    var short = '';
    for (var i = 0; i <= ct; i++) {
      if (i === ct) {
        short = ' short';
      }
      paras += '<div class="paragraph'+short+'"></div>';
    }
    return '<div class="paragraphs">' + paras +  '</div>';
  }

  new Vue({
    el: '.content',
    components: {
      'scroll-magnet-container': VueScrollMagnet.ScrollMagnetContainer,
      'scroll-magnet-item': VueScrollMagnet.ScrollMagnetItem
    },
    template: '<div class="example-container"><scroll-magnet-container><scroll-magnet-item><div class="example-item"><div class="text">This item will stick as you scroll!</div></div></scroll-magnet-item></scroll-magnet-container>'+ paragraphs(20) + paragraphs(20) +'</div>'
  });
</script>