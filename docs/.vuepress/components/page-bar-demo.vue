<template>
  <div>
    <h3>预览</h3>
    <r-pagingbar :total-page="20" :current-page.sync="currentPage"></r-pagingbar>

    <h3>代码</h3>
    <pre><code>{{content}}</code></pre>
    <h3>参数</h3>
    <table >
      <tr>
        <th>total-page总页数</th>
        <th>current-page当前页</th>
      </tr>
      <tr>
        <td>number：例如20</td>
        <td>number：例如3</td>
      </tr>
    </table>

  </div>
</template>
<script>
  import RPagingbar from '../../../src/components/paging-bar'
  import hljs from 'highlight.js/lib/highlight';
  import "highlight.js/styles/atom-one-dark-reasonable.css";
  hljs.highlightCode = function() {
    let blocks = document.querySelectorAll("pre code");
    [].forEach.call(blocks, hljs.highlightBlock);
  };
  export default {
    components: {
      'r-pagingbar':RPagingbar,

    },
    data () {
      return {
        currentPage:3,
        content: `
    <r-pagingbar :total-page="20" :current-page.sync="currentPage"></r-pagingbar>
      `,
      }
    }
  }
</script>
