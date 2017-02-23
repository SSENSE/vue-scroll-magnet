<template>
  <div class="scroll-magnet-container" :style="`height: ${height}px`">
    <slot></slot>
  </div>
</template>

<script>
  /* eslint-disable no-undef */
  export default {
    name: "scroll-magnet-container",
    data() {
      return {
        width: 0,
        height: 0,
        offsetTop: 0,
        scrollTop: 0,
        mutationObserver: null,
        target: null,
      }
    },
    props: {
      boundsElementSelector: {
        type: String,
        default: "",
        required: false,
      },
    },
    created() {
      this.attachScroll()
      this.attachResize()
    },
    mounted() {
      // Assign a target element to the container. This element will be used as a reference
      // for the height of the scrollable area.
      if (!this.boundsElementSelector) {
        // If no prop is provided, use the parent element of <scroll-magnet-container>
        this.target = this.$el.parentElement
      } else {
        // Find the element by its selector and assign it as the target
        const $el = document.querySelector(this.boundsElementSelector)
        if ($el) {
          this.target = $el
        }
      }

      this.getElementPosition()
      this.attachMutationObserver()
    },
    beforeUpdate() {
      this.$nextTick(() => {
        this.getScrollPosition();
        this.getElementPosition({ recalcWidth: true, recalcHeight: true });
      });
    },
    destroyed() {
      this.detachScroll()
      this.detachResize()
      this.detachMutationObserver()
    },
    methods: {
      /**
       * Attach a scroll listener to the window and update scrollTop data attribute
       * Child scroll magnets will listen on this scroll value to determine their position
       */
      attachScroll() {
        if (typeof window !== "undefined") {
          this.scrollListener = window.addEventListener("scroll", () => {
            this.getScrollPosition()
            this.getElementPosition()
          })
        }
      },
      /**
       * Remove the scroll event listener
       */
      detachScroll() {
        if (typeof window !== "undefined") {
          window.removeEventListener("scroll", this.scrollListener)
        }
      },
      /**
       * Attach the resize event listener
       */
      attachResize() {
        if (typeof window !== "undefined") {
          this.resizeListener = window.addEventListener("resize", () => {
            setTimeout(() => {
              this.getScrollPosition()
              this.getElementPosition({ recalcWidth: true, recalcHeight: true })
            }, 16)
          })
        }
      },
      /**
       * Remove the resize event listener
       */
      detachResize() {
        if (typeof window !== "undefined") {
          window.removeEventListener("resize", this.resizeListener)
        }
      },
      /**
       * A mutation observer is used to detect changes to the containing node
       * in order to keep the magnet container in sync with the height its reference node.
       */
      attachMutationObserver() {
        if (typeof window !== "undefined") {
          const MutationObserver = window.MutationObserver
           || window.WebKitMutationObserver
           || window.MozMutationObserver

          if (MutationObserver) {
            const config = { attributes: true }

            this.mutationObserver = new MutationObserver(() => {
              // When the reference element changes, we must recompute the scroll attributes
              this.getElementPosition({ recalcWidth: true, recalcHeight: true })

              // The child magnet item listens for changes to this.scrollTop in this component
              // to update itself. this.scrollTop is manually adjusted so that the child updates
              // when the parent does.
              this.scrollTop = this.getScrollY() + 1
              this.$nextTick(() => { this.scrollTop = this.getScrollY() })
            })
            if (this.target) {
              this.mutationObserver.observe(this.target, config)
            }
          }
        }
      },
      /**
       * Stop listening to mutation changes
       */
      detachMutationObserver() {
        if (this.mutationObserver) {
          this.mutationObserver.disconnect()
        }
      },
      /**
       * Get the container"s dimensions and offset and update data attributes
       * @param  {object} options Configuration object for options
       */
      getElementPosition(options) {
        const recalcWidth = (options && options.recalcWidth) || false
        const recalcHeight = (options && options.recalcHeight) || false

        this.offsetTop = this.$el.getBoundingClientRect().top + this.getScrollY()

        if (!this.width > 0 || recalcWidth) {
          this.width = (this.$el && this.$el.clientWidth) || 0
        }

        if (!this.height > 0 || recalcHeight) {
          this.height = (this.target && this.target.clientHeight) || 0
        }
      },
      /**
       * Recalculate the scroll container"s position
       */
      getScrollPosition() {
        this.scrollTop = this.getScrollY()
        this.offsetTop = this.$el.getBoundingClientRect().top + this.getScrollY()
      },
      /**
       * Get the current scroll position
       * @return {number} Scroll position
       */
      getScrollY() {
        if (typeof window === "undefined") {
          return 0
        }

        // pageYOffset for IE compatibility
        return window.pageYOffset || window.scrollY
      },
    },
  }
</script>

<style scoped>
  .scroll-magnet-container {
    position: relative;
  }
</style>