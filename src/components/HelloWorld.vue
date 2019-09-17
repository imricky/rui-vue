<template>
  <div class="hello">
    <r-content>
      <r-button icon="added" icon-position="left">nihao</r-button>
      <r-button-group>
        <r-button icon="added" icon-position="left" :loading="true">添加</r-button>
        <r-button icon="left" icon-position="left">上一页</r-button>
      </r-button-group>
      <r-input error="123"  @change="inputChange"></r-input>
      <r-row gutter="2" align="left">
        <r-col span="12" offset="2">123</r-col>
        <r-col span="2" offset="2">456</r-col>
      </r-row>
    </r-content>
    <r-sider>just test</r-sider>
    <r-toast position="middle" :autoClose=2>
      123
    </r-toast>

    <r-popover trigger="hover" position="right">
      <template slot="content">弹啊啊啊啊</template>
      <button>点我</button>
    </r-popover>

    <r-pagingbar :total-page="20" :current-page.sync="currentPage"></r-pagingbar>

<!--    <Popover placement="right" title={text} content={content} trigger="click">-->
<!--      <Button>Right</Button>-->
<!--    </Popover>-->

    <div style="margin-top: 20px">
        <r-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :number-visible="true"></r-table>
    </div>
  </div>
</template>

<script>
  import RButton from './button'
  import RButtonGroup from './button-group'
  import RInput from './input'
  import RRow from './row'
  import RCol from './col'
  import RHeader from './header'
  import RFooter from './footer'
  import RContent from './content'
  import RSider from './sider'
  import RToast from './toast'
  import RPopover from './popover'
  import RPagingbar from './paging-bar'
  import RTable from './table'

  export default {
    name: 'HelloWorld',
    components: {
      'r-button': RButton,
      'r-button-group':RButtonGroup,
      'r-input':RInput,
      'r-row':RRow,
      'r-col':RCol,
      'r-header':RHeader,
      'r-footer':RFooter,
      'r-content':RContent,
      'r-sider':RSider,
      'r-toast':RToast,
      'r-popover':RPopover,
      'r-pagingbar':RPagingbar,
      'r-table':RTable
    },
    props: {
      msg: String
    },
    data(){
      return {
        popoverMsg:'弹出啊啊啊啊',
        currentPage:3,
        columns: [
          {text: '姓名', field: 'name'},
          {text: '分数', field: 'score'},
        ],
        dataSource: [
          {id: 1, name: '方方', score: 100},
          {id: 2, name: '圆圆', score: 99},
          {id: 3, name: '张三', score: 100},
          {id: 4, name: '李四', score: 99},
          {id: 5, name: '超人', score: 100},
          {id: 6, name: '蝙蝠侠', score: 99},
          {id: 7, name: '蜘蛛侠', score: 100},
          {id: 8, name: '钢铁侠', score: 99},
        ]
      }
    },
    methods:{
      inputChange(e){
        console.log(`输入框改变了`+e)
      }
    }
  }
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
