<template>
  <div>
    <h3>预览</h3>
    <r-toast position="middle" :autoClose=2>
      123
    </r-toast>
    <r-button icon="added" @click="$toast('点击弹出',{position: 'top'})">弹出top</r-button>


    <r-button @click="autoClose">设置关闭时间</r-button>
    <r-button @click="onClickButton">弹出bottom</r-button>

    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>

    <h3>代码</h3>
    <pre><code>{{content1}}</code></pre>
    <h3>参数</h3>
    <table >
      <tr>
        <th>position位置</th>
        <th>autoClose自动关闭(秒数)</th>
      </tr>
      <tr>
        <td>middle | top | bottom</td>
        <td>right | left | bottom | top</td>
      </tr>
    </table>

  </div>
</template>
<script>
  import Vue from 'vue'
  import Toast from '../../../src/components/toast'
  import Button from '../../../src/components/button'
  import plugin from '../../../src/components/plugins'
  Vue.use(plugin)
  import hljs from 'highlight.js/lib/highlight';
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  hljs.highlightCode = function() {
    let blocks = document.querySelectorAll("pre code");
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    components: {
      'r-toast': Toast,
      'r-button': Button,

    },
    data () {
      return {
        content: `
<r-toast position="middle" :autoClose=2>
      456
</r-toast>
      `,
        content1:`
      autoClose() {
        this.$toast("3秒后关闭", { autoClose: 3 });
      },
      onClickButton() {
        this.$toast("点击弹出提示", {
          position:'bottom',
          closeButton: {
            text: "确定",
            callback: () => {
              console.log("To do something...");
            }
          }
        });
        `
      }
    },
    mounted() {
      hljs.highlightCode();
    },
    methods: {
      autoClose() {
        this.$toast("3秒后关闭", { autoClose: 3 });
      },
      onClickButton() {
        this.$toast("点击弹出提示", {
          position:'bottom',
          closeButton: {
            text: "确定",
            callback: () => {
              console.log("To do something...");
            }
          }
        });
      },
    }
  }
</script>

<style>
  .wrapper {
    z-index: 100;
  }
</style>
