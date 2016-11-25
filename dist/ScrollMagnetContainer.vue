<template>
  <div class="scroll-magnet-container" :style="`height: ${height}px;`">
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
        height: 0,
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
          this.offsetTop = this.$el.getBoundingClientRect().top + window.pageYOffset;
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
        const pageYOffset = (typeof window !== 'undefined') ? window.pageYOffset : 0;
        this.offsetTop = viewportOffset.top + pageYOffset;
        this.width = this.$el.clientWidth;
        this.height = (this.$el.parentElement && this.$el.parentElement.clientHeight) || 0;
      },
    },
  };
</script>

<style scoped>
  .scroll-magnet-container {
    position: relative;
  }
</style>