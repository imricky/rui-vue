<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RRow",
    props: {
      gutter: {
        type: [Number, String]
      },
      align: {
        type: String,
        validator(value) {
          return ['left', 'right', 'center'].includes(value)
        }
      }
    },
    computed: {
      rowStyle() {
        let gutter = this.gutter
        return {
          marginLeft: -gutter / 2 + 'px',
          marginRight: -gutter / 2 + 'px'
        }
      },
      rowClass() {
        let align = this.align
        return [align && `align-${align}`]
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    },
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-wrap: wrap;

    &.align-left {
      justify-content: flex-start;
    }

    &.align-right {
      justify-content: flex-end;
    }

    &.align-center {
      justify-content: center;
    }
  }
</style>
