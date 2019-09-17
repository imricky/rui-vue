<template>
  <div>
    <h3>预览</h3>
    <r-button>默认按钮</r-button>
    <r-button icon="added" icon-position="left">新增</r-button>
    <r-button :loading="true">默认按钮</r-button>
    <r-button disabled>默认按钮</r-button>
    <hr>
    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/components/button'
  import hljs from 'highlight.js/lib/highlight';
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  hljs.highlightCode = function() {
    let blocks = document.querySelectorAll("pre code");
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    components: {
      'r-button': Button
    },
    data () {
      return {
        content: `
          <r-button>默认按钮</r-button>
          <r-button  icon="settings">默认按钮</r-button>
          <r-button :loading="true">默认按钮</r-button>
          <r-button disabled>默认按钮</r-button>
      `.replace(/^ {8}/gm, "").trim(),
      }
    }
  }
</script>
