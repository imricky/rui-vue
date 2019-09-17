<template>
  <div>
    <h3>预览</h3>
    <r-popover trigger="click" position="right">
      <template slot="content">右边</template>
      <r-button>点我</r-button>
    </r-popover>

    <r-popover trigger="click" position="bottom">
      <template slot="content">底部</template>
      <r-button>点我</r-button>
    </r-popover>

    <r-popover trigger="hover" position="top">
      <template slot="content">鼠标浮动</template>
      <r-button>点我</r-button>
    </r-popover>
    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>
    <h3>参数</h3>
    <table >
      <tr>
        <th>trigger</th>
        <th>position</th>
      </tr>
      <tr>
        <td>click | hover</td>
        <td>right | left | bottom | top</td>
      </tr>
    </table>

  </div>
</template>
<script>
  import Popover from '../../../src/components/popover'
  import Button from '../../../src/components/button'
  import hljs from 'highlight.js/lib/highlight';
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  hljs.highlightCode = function() {
    let blocks = document.querySelectorAll("pre code");
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    components: {
      'r-popover': Popover,
      'r-button': Button,

    },
    data () {
      return {
        content: `
<r-popover trigger="click" position="right">
   <template slot="content">弹啊啊啊啊</template>
   <button>点我</button>
</r-popover>

      `,
      }
    }
  }
</script>
