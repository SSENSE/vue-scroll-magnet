<template>
  <div id="app">
    <div id="header">
      <router-link id="logo" to="home">Vue Scroll Magnet</router-link>
      <ul id="nav">
        <li><router-link class="nav-link" to="home">Home</router-link></li>
        <li><router-link class="nav-link" to="guide">Guide</router-link></li>
        <li><router-link class="nav-link" to="api">API</router-link></li>
        <li><router-link class="nav-link" to="examples">Examples</router-link></li>
        <li><a class="nav-link" href="//github.com/toddlawton/vue-scroll-magnet">Github</a></li>
      </ul>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
