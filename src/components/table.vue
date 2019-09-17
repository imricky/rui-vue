<template>
  <div class="gulu-table-wrapper">
    <table class="gulu-table" :class="{bordered,compact,stripped:stripped}">
      <thead>
      <tr>
        <th><input type="checkbox" @change="onChangeAllItems" ref="allChecked"></th>
        <th v-if="numberVisible">#</th>
        <th v-for="column in columns" :key="column.field">
          {{column.text}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource" :key="item.id">
        <td>
          <input type="checkbox" @change="onChangeItem(item,index,$event)"
                 :checked="inSelectedItems(item)">
        </td>
        <td v-if="numberVisible">{{index+1}}</td>
        <template v-for="column in columns">
          <td :key="column.field">{{item[column.field]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<!--<div style="margin: 20px;">-->
<!--  <g-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected"></g-table>-->
<!--</div>-->

<script>
  export default {
    name: "RTable",
    props: {
      stripped: {
        type: Boolean,
        default: true
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      compact: {
        type: Boolean,
        default: false
      },
      columns: {
        type: Array,
        required: true
      },
      dataSource: {
        type: Array,
        required: true,
        validator(array) {
          return !(array.filter(item => item.id === void 0).length > 0)
        }
      },
      numberVisible: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      selectedItems() {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else this.$refs.allChecked.indeterminate = this.selectedItems.length !== 0
      }
    },
    methods: {
      inSelectedItems(item){
        return this.selectedItems.filter(i=>i.id === item.id).length >0
      },
      onChangeItem(item,index,e){
        let selected = e.target.checked
        let copy = JSON.parse(JSON.stringify(this.selectedItems))
        if(selected){
          copy.push(item)
        }else {
          copy = copy.filter(i =>i.id !== item.id)
        }
        this.$emit('update:selectedItems',copy)
      },
      onChangeAllItems(e){
        let selected = e.target.checked
        this.$emit('update:selectedItems',selected)
      }
    },

  }
</script>

<style scoped lang="scss">
  @import "var";
  $grey: darken($grey, 10%);
  .gulu-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $grey;
    &.bordered {
      border: 1px solid $grey;
      td, th {
        border: 1px solid $grey;
      }
    }
    &.compact {
      td, th {
        padding: 4px;
      }
    }
    td, th {
      border-bottom: 1px solid $grey;
      text-align: left;
      padding: 8px;
    }
    &.striped {
      tbody {
        > tr {
          &:nth-child(odd) {
            background: white;
          }
          &:nth-child(even) {
            background: lighten($grey, 10%);
          }
        }
      }
    }
  }
</style>
