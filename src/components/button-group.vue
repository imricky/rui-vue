<template>
  <div class="r-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "RButtongroup",

    mounted() {
      for(let i of this.$el.children){
        if(i.nodeName.toLowerCase() !== 'button'){
          console.warn(`button group 中所有子元素应该是r-button，但是你的子元素是${i.nodeName}`)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .r-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .g-button {
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
