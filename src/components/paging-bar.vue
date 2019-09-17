<template>
  <div class="paging-bar">
    <span class="paging-bar-nav prev" :class="{disabled:currentPage===1}"
          @click="onClickChange(currentPage-1)">
      <
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="paging-bar-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="paging-bar-separator">...</span>
      </template>
      <template v-else>
        <span class="paging-bar-item other" @click="onClickChange(page)">{{page}}</span>
      </template>
    </template>
    <span class="paging-bar-nav next" :class="{disabled:currentPage===totalPage}"
          @click="onClickChange(currentPage+1)">
      >
    </span>
  </div>
</template>

<script>
  export default {
    name: "RPagingBar",
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
    },
    computed: {
      pages() {
        let pages = [1, this.totalPage,
          this.currentPage,
          this.currentPage - 1, this.currentPage - 2,
          this.currentPage + 1, this.currentPage + 2]
        pages = unique(pages.filter((i) => {
          return i >= 1 && i <= this.totalPage
        }).sort((a, b) => a - b))
        pages = pages.reduce((total, curValue, curIndex, arr) => {
          total.push(curValue)
          arr[curIndex + 1] !== void 0 && arr[curIndex + 1] - arr[curIndex] > 1 && total.push('...')
          return total
        }, [])
        return pages
      }
    },
    methods: {
      onClickChange(i) {
        console.log(i)
        if (i >= 1 && i <= this.totalPage) {
          this.$emit('update:currentPage', i)
        }
      }
    },
  }

  function unique(arr) {
    let final = []
    for (let i = 0; i < arr.length; i++) {
      if (final.indexOf(arr[i]) === -1) {
        final.push(arr[i])
      }
    }
    return final
  }
</script>

<style scoped lang="scss">
  @import "var";

  .paging-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    $width: 20px;
    $height: 20px;
    $font-size: 12px;

    &.hide {
      display: none;
    }

    &-separator {
      width: $width;
      font-size: $font-size;
    }

    &-item {
      min-width: $width;
      height: $height;
      font-size: $font-size;
      border: 1px solid #e1e1e1;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      cursor: pointer;

      &.current, &:hover {
        border-color: $blue;
      }

      &.current {
        cursor: default;
      }
    }

    &-nav {
      margin: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: $grey;
      height: $height;
      width: $width;
      border-radius: $border-radius;
      font-size: $font-size;
      cursor: pointer;

      &.disabled {
        cursor: default;

        svg {
          fill: darken($grey, 30%);
        }
      }
    }
  }
</style>
