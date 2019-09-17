---
title: 简单上手
---

# rui-vue

- 这是一个基于 Vue 构建的的 ui 框架。
- 使用了重构、设计模式、单向数据流等技术概念。
- 注意：UI 框架的代码尚未完全完工,请不要在生产环境中使用本 UI 框架,欢迎讨论交流，如果你觉得还不错，请 Star。

### 使用

```javascript
import Vue from "vue";
import { button } from "rui-vue";
import "rui-vue/dist/index.css";

new Vue({
  el: "#app",
  components: {
    "R-button": button
  }
});
```

---

