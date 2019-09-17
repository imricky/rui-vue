<template>
  <div>
    <h3>预览</h3>
    <r-row gutter="2" align="left">
      <r-col span="12" offset="2" style="background-color: #0092C7">123</r-col>
      <r-col span="2" offset="2" style="background-color: #9FE0F6">456</r-col>
    </r-row>
    <hr>
    <r-row gutter="3" align="right">
      <r-col span="6" offset="2" style="background-color: #F3E59A">第一列</r-col>
      <r-col span="6" style="background-color: #F3B59B">第二列</r-col>
      <r-col span="6" style="background-color: #F29C9C">第三列</r-col>
    </r-row>
    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Row from '../../../src/components/row'
  import Col from '../../../src/components/col'
  import hljs from 'highlight.js/lib/highlight';
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  hljs.highlightCode = function() {
    let blocks = document.querySelectorAll("pre code");
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    components: {
      'r-row': Row,
      'r-col':Col
    },
    data () {
      return {
        content: `
<r-row gutter="2" align="left">
  <r-col span="12" offset="2">123</r-col>
  <r-col span="2" offset="2">456</r-col>
</r-row>


<r-row gutter="3" align="right">
   <r-col span="6" offset="2">第一列</r-col>
   <r-col span="6" >第二列</r-col>
   <r-col span="6" >第三列</r-col>
</r-row>
      `,
        test:''
      }
    }
  }
</script>
