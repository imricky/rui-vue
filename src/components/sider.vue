<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "RSider",
    data() {
      return {
        visible: true
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .slide-enter-active, .slide-leave-active {
    transition: opacity .5s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>
