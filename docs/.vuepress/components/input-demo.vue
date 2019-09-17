<template>
  <div>
    <h3>预览</h3>

    <r-input></r-input>
    <hr>
    <r-input error="错误啦"  @change="inputChange"></r-input>
    <hr>
    <r-input disabled  @change="inputChange" placeholder="disabled"></r-input>
    <hr>
    <r-input readonly  @change="inputChange" placeholder="readonly"></r-input>
    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>

    <h3>双向绑定</h3>
    <r-input v-model="test"></r-input>
    <hr>
    {{test}}
    <h3>代码</h3>
    <pre><code>{{content1}}</code></pre>

  </div>
</template>
<script>
  import Input from '../../../src/components/input'
  import hljs from 'highlight.js/lib/highlight';
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  hljs.highlightCode = function() {
    let blocks = document.querySelectorAll("pre code");
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    components: {
      'r-input': Input
    },
    data () {
      return {
        content: `
<r-input></r-input>
<r-input error="123"  @change="inputChange"></r-input>
<r-input disabled  @change="inputChange"></r-input>
<r-input readonly  @change="inputChange" placeholder="readonly"></r-input>
      `,
        content1: `
<r-input v-model="test"></r-input>
      `,
        test:''
      }
    }
  }
</script>
