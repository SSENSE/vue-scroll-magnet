<template>
  <div id="app">
    <h1>Vue Scroll Magnet</h1>
    <example></example>
  </div>
</template>

<script>
import Example from './pages/Example';

export default {
  name: 'app',
  components: {
    Example,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
