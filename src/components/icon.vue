<template>
    <svg class="svg-icon" aria-hidden="true">
      <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
  import './iconfont'
  export default {
    name: "Ricon",
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName() {
        return `#i${this.iconClass}`
      }
    },
  }
</script>

<style scoped lang="scss">
  .svg-icon{
    width: 1em;
    height: 1em;
  }
</style>
