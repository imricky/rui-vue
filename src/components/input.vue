<template>
  <div class="wrapper">
    <input type="text" :value="value" :disabled="disabled"
           :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <r-icon icon-class="added" class="icon-error"></r-icon>
      <span class="errorMsg">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: "RInput",
    components: {
      'r-icon':Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
  }
</script>

<style scoped lang="scss">
  @import 'var';

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;

    > :not(:last-child) {
      margin-right: .5em;
    }

    > input {
      height: 32px;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly]{
      border-color: #bbb;
      color: #bbbbbb;
      cursor: not-allowed;
    }
    &.error{
      > input{
        border-color: $red;
      }
    }
    .icon-error{
      fill: $red;
    }
    .errorMsg{
      color: $red;
    }
  }
</style>
