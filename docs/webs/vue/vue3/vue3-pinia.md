# pinia

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。如果你熟悉组合式 API 的话，你可能会认为可以通过一行简单的 export const state = reactive({}) 来共享一个全局状态。对于单页应用来说确实可以，但如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞。 而如果使用 Pinia，即使在小型单页应用中，你也可以获得如下功能

- Devtools 支持
  - 追踪 actions、mutations 的时间线
  - 在组件中展示它们所用到的 Store
  - 让调试更容易的 Time travel
- 热更新
  - 不必重载页面即可修改 Store
  - 开发时可保持当前的 State
- 插件：可通过插件扩展 Pinia 功能
- 为 JS 开发者提供适当的 TypeScript 支持以及自动补全功能
- 支持服务端渲染

- [pinia](https://pinia.vuejs.org/)
- [pinia中文](https://pinia.vuejs.org/zh/index.html)
- [新一代状态管理工具，Pinia.js 上手指南](https://mp.weixin.qq.com/s/rA879t1-pI_F4TdWNkXafQ)
- [pinia入门教程1](https://www.jianshu.com/p/c7e6386577ce)

## 安装 pinia

```bash
yarn add pinia -S
```
