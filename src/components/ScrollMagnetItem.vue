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
        parent: null,
        width: 0,
        height: 0,
        scrollDist: 0,
        scrollEnd: 0,
        isBottomed: false,
        isScrolling: false,
      };
    },
    props: {
      offsetTopPad: {
        type: Number,
        default: 0,
      },
    },
    computed: {
      top() {
        return this.isBottomed ? 'initial' : `${this.offsetTopPad}px`;
      },
      /**
       * Scroll position is within the container's bounds
       * @return {Boolean}
       */
      isWithinHeight() {
        return (this.scrollDist < this.scrollEnd);
      },
      /**
       * Magnet is stuck to the bottom of the container
       * @return {Boolean}
       */
      isBottomed() {
        return (this.scrollDist >= this.scrollEnd);
      },
    },
    created() {
      this.parent = this.getNearestMagnetContainer();

      // Listen on changes to the scroll position from the parent and update the magnet's status
      this.$watch('parent.scrollTop', () => {
        this.setMagnetStatus(this.parent);
      });
    },
    mounted() {
      // Get and set initial state dependend on DOM attributes
      this.setMagnetHeight();

      this.$nextTick(() => {
        this.setMagnetStatus(this.parent);
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
        this.width = this.$parent.width;
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
      setMagnetStatus(parent) {
        this.setMagnetHeight(); // Recheck for any changes in magnet height

        this.scrollDist = (parent.scrollTop + this.height);
        this.scrollEnd = (parent.offsetTop + (parent.height - this.offsetTopPad));
        this.isScrolling = (
          (parent.scrollTop + this.offsetTopPad) >= parent.offsetTop
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