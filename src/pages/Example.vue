<template>
  <div class="example">
    <div class="example-magnet-container">
      <scroll-magnet-container>
        <scroll-magnet-item>
          <div class="example-magnet-item">
            Scroll magnet content
          </div>
        </scroll-magnet-item>
      </scroll-magnet-container>
    </div>
  </div>
</template>

<script>
import ScrollMagnetContainer from '../components/ScrollMagnetContainer';
import ScrollMagnetItem from '../components/ScrollMagnetItem';

export default {
  name: 'example',
  components: {
    ScrollMagnetContainer,
    ScrollMagnetItem,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example {
  max-width: 500px;
  margin: 0 auto;
  min-height: 200vh;
}

.example-magnet-container {
  border: 1px solid #000;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.example-magnet-item {
  background: #efefef;
  border-radius: 20px;
  padding: 20px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
