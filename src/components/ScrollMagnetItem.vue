<template>
  <div
    class="scroll-magnet-item"
    v-bind:style="`width: ${width}px; top: ${top}`"
    v-bind:class="{ 'is-scrolling': isScrolling, 'is-bottomed': isBottomed }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'scroll-magnet-item',
    data() {
      return {
        nearestContainer: undefined,
        width: 0,
        height: 0,
        scrollDist: 0,
        scrollEnd: 0,
        isScrolling: false,
      };
    },
    props: {
      offsetTopPad: {
        type: Number,
        default: 0,
      },
    },
    created() {
      this.nearestContainer = this.getNearestMagnetContainer();

      // Listen on changes to the scroll position from the parent and update the magnet's status
      this.$watch('nearestContainer.scrollTop', () => {
        this.setMagnetStatus(this.nearestContainer);
      });
    },
    mounted() {
      // Get and set initial state dependend on DOM attributes
      this.setMagnetHeight();

      this.$nextTick(() => {
        this.setMagnetStatus(this.nearestContainer);
        this.setMagnetWidth();
      });
    },
    methods: {
      /**
       * Find the nearest container component
       * @return {object} The matching Vue component object
       */
      getNearestMagnetContainer() {
        return this.checkParentForMatch(this.$parent);
      },
      /**
       * Recursively lookup nearest parent which is a scroll magnet container
       * @param  {object} parent The parent's Vue component object
       * @return {object}        The matching Vue component object
       */
      checkParentForMatch(parent) {
        return (
          parent && parent.$options._componentTag === 'scroll-magnet-container' // eslint-disable-line no-underscore-dangle,max-len
          ) ? parent : this.checkParentForMatch(parent);
      },
      /**
       * Assign the magnet's width to match the parent's width
       * This will be used as an inline CSS property on the magnet
       */
      setMagnetWidth() {
        this.width = this.nearestContainer.width;
      },
      /**
       * Assign the magnet's height to match its content
       * This is used as a reference for how tall the magnet is while scrolling
       */
      setMagnetHeight() {
        const viewportOffset = this.$el.getBoundingClientRect();

        this.height = viewportOffset.height;
      },
      /**
       * Update the magnet's status while scrolling
       */
      setMagnetStatus(nearestContainer) {
        this.setMagnetHeight(); // Recheck for any changes in magnet height
        this.scrollDist = (nearestContainer.scrollTop + this.height);
        this.scrollEnd = (nearestContainer.offsetTop + (nearestContainer.height - this.offsetTopPad));
        this.isBottomed = (this.scrollDist >= this.scrollEnd);
        this.top = (this.isBottomed ? 'initial' : `${this.offsetTopPad}px`);
        this.isWithinHeight = (this.scrollDist < this.scrollEnd);
        this.isScrolling = (
          (nearestContainer.scrollTop + this.offsetTopPad) >= nearestContainer.offsetTop
          && this.isWithinHeight
        );
      },
    },
  };
</script>

<style scoped>
  .is-scrolling {
    position: fixed;
    top: 0;
  }

  .is-bottomed {
    position: absolute;
    bottom: 0;
  }
</style>