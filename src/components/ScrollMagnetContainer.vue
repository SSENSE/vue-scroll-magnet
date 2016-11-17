<template>
  <div class="scroll-magnet-container" style="height: 1000px;">
    <slot></slot>
  </div>
</template>

<script>
  /* eslint-disable no-undef */

  export default {
    name: 'scroll-magnet-container',
    data() {
      return {
        width: 0,
        height: 'auto',
        offsetTop: 0,
        scrollTop: 0,
      };
    },
    created() {
      if (typeof window !== 'undefined') {
        this.attachScroll();
      }
    },
    mounted() {
      this.getElementPosition();
    },
    destroyed() {
      this.detachScroll();
    },
    methods: {
      /**
       * Attach a scroll listener to the window and update scrollTop data attribute
       * Child scroll magnets will listen on this scroll value to determine their position
       */
      attachScroll() {
        window.addEventListener('scroll', () => {
          this.scrollTop = window.pageYOffset;
        });
      },
      /**
       * Remove the scroll event listener
       */
      detachScroll() {
        window.removeEventListener('scroll', () => {});
      },
      /**
       * Get the container's dimensions and offset and update data attributes
       */
      getElementPosition() {
        const viewportOffset = this.$el.getBoundingClientRect();
        this.offsetTop = viewportOffset.top + window.scrollY;
        this.width = this.$el.clientWidth;
        this.height = viewportOffset.height;
      },
    },
  };
</script>

<style scoped>
  .scroll-magnet-container {
    position: relative;
  }
</style>