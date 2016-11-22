<template>
  <div class="content">
    <h1>Getting Started</h1>
    <h2>What is Vue Scroll Magnet?</h2>
    <p>Vue Scroll Magnet is a pair of component wrappers which allow elements to follow the viewport while scrolling and then anchor at the upper and lower extremeties of their parent container. This module is inspired by a jQuery plugin called <a href="//github.com/leafo/sticky-kit">Sticky kit</a>.</p>

    <h2>Installation</h2>
    <p class="tip">The component setup relies on ES6 and may not be compatible with Vue 1.x projects.</p>
    <p>Install the node module using npm:</p>
    <pre>
      npm install -S vue-scroll-magnet
    </pre>

    <h2>Usage (Global)</h2>
    <p>Install the components globally:</p>
    <figure class="highlight js"><table><tbody><tr><td class="code"><pre><div class="line"><span class="keyword">import</span> Vue <span class="keyword">from <span class="function"><span class="keyword">'vue'</span></span>;</span></div><div class="line"><span class="keyword">import</span> VueScrollMagnet <span class="keyword">from</span> <span class="function"><span class="keyword">'vue-scroll-magnet'</span></span>;</div><br/><div class="line">Vue.use(VueScrollMagnet);</div></pre></td></tr></tbody></table></figure>

    <h2>Usage (Component)</h2>
    <p>Include the wrappers into your component using import:</p>
    <figure class="highlight js"><table><tbody><tr><td class="code"><pre><div class="line"><span class="comment">/* inside your Vue component's script tag */</span></div><br/><div class="line"><span class="keyword">import</span> { ScrollMagnetContainer, ScrollMagnetItem } <span class="keyword">from</span> <span class="function"><span class="keyword">'vue-scroll-magnet'</span></span>;</div><br/><div class="line"><span class="keyword">export</span> default {</div><div class="line"><span class="comment">&nbsp;&nbsp;...</span></div><div class="line">&nbsp;&nbsp;components: {</div><div class="line">&nbsp;&nbsp;&nbsp;&nbsp;ScrollMagnetContainer,</div><div class="line">&nbsp;&nbsp;&nbsp;&nbsp;ScrollMagnetItem</div><div class="line">&nbsp;&nbsp;}</div><div class="line"><span class="comment">&nbsp;&nbsp;...</span></div><div class="line">};</div></pre></td></tr></tbody></table></figure>

    <h2>HTML structure</h2>
    <p>The scrollable height boundary will be determined as the direct parent of the &lt;scroll-magnet-container&gt; by default, however it can be configured using an element selector which it can use as a fixed context. See the <router-link to="api">API reference</router-link> for configuration options.</p>
    <p>In the example below, &lt;scroll-magnet-container&gt; will automatically use the top of #app as its upper boundary and its height of 500px as its lower boundary unless a specific element context is provided.</p>
    <figure class="highlight html"><table><tbody><tr><td class="code"><pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">"app"</span> <span class="attr">style=</span><span class="string">"height: 500px;"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">scroll-magnet-container</span>&gt;</span></div><div class="line">    <span class="tag">&lt;<span class="name">scroll-magnet-item</span>&gt;</span>This content will scroll<span class="tag">&lt;/<span class="name">scroll-magnet-item</span>&gt;</span></div><div class="line">  <span class="tag">&lt;/<span class="name">scroll-magnet-container</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre></td></tr></tbody></table></figure>
  </div>
</template>

<script>
  export default {
    name: 'guide',
  };
</script>
