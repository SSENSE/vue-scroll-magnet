<template>
  <div class="content">
    <h1>Examples</h1>
    <h2>Default, snap within parent container</h2>
    <div class="example-magnet-example-container">
      <scroll-magnet-container>
        <scroll-magnet-item :offsetTopPad="20">
          <div class="example-magnet-example-item">
            Scroll magnet content
          </div>
        </scroll-magnet-item>
      </scroll-magnet-container>
    </div>
    <div v-for="i in 5" class="paragraph">
      <div v-for="x in 10" class="line"></div>
    </div>
    <div class="paragraph">
      <div v-for="x in 10" class="line"></div>
    </div>
    <div class="example-magnet-example-container">
      <scroll-magnet-container>
        <scroll-magnet-item :offsetTopPad="20">
          <div class="example-magnet-example-item">
            Scroll magnet content
          </div>
        </scroll-magnet-item>
      </scroll-magnet-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example-offset-top-pad {
  width: 100%;
  background: rgba(79, 192, 141, 0.5);
  position: fixed;
  left: 0;
  z-index: 1;
  transition: 0.3s ease height;
}

.example-magnet-example-container {
  position: relative;
  box-sizing: border-box;
  min-height: 50vh;
  margin-bottom: 15px;
}

.example-magnet-example-item {
  background: #efefef;
  padding: 20px;
}

.paragraph {
  margin-bottom: 80px;
}

.paragraph .line:last-child {
  width: 70%;
}

.line {
  width: 100%;
  height: 15px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
