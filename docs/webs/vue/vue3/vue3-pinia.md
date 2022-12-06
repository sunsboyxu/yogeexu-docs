# pinia

## 相关文档

- [pinia](https://pinia.vuejs.org/)
- [pinia中文](https://pinia.vuejs.org/zh/index.html)
- [新一代状态管理工具，Pinia.js 上手指南](https://mp.weixin.qq.com/s/rA879t1-pI_F4TdWNkXafQ)
- [pinia入门教程1](https://www.jianshu.com/p/c7e6386577ce)

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。
如果熟悉组合式 API 的话，你可能会认为可以通过一行简单的 ***export const state = reactive({ })*** 来共享一个全局状态，对于单页应用来说确实可以，
如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞，

使用 Pinia，即使在小型单页应用中，可以获得如下功能：

## devtools 支持

- 追踪 actions、mutations 的时间线
- 在组件中展示它们所用到的 Store
- 让调试更容易的 Time travel
  
## 热更新

- 不必重载页面即可修改 Store
- 开发时可保持当前的 State

## 插件

- 可通过插件扩展 Pinia 功能
- 为 JS 开发者提供适当的 TypeScript 支持以及自动补全功能
- 支持服务端渲染

## 对比 vuex

pinia 用于取代 vuex，支持 vue2 和 vue3，同时 有更好的 typescript 的类型支持

pinia 默认支持多仓库，而 vuex 是典型的单仓库，$store.state 导致所有的状态都放到一个 store 里，当然 vuex 可以使用模块（modules）来区分不同的模块

pinia 默认不采用命名空间的方式管理，拍平化，每个状态都可以是单独的 store，如：orderStore.orderinfo、userStore.userinfo，使用起来比较方便，各个 store 之间可以相互调用

- 假设 $store.state.a 有个 a 属性，此时又有个同名的 a 模块，就会产生冲突
- vuex 下的 树状结构不好维护，如 $store.state.user.userinfo.username

## 创建一个 vue3 + vite3 + pinia 项目用于测试

项目名称：vite3-pinia-app

```bash
yarn create vite vite3-pinia-app --template vue
# pnpm create vite vite3-pinia-app --template vue
# npm create vite@latest vite3-pinia-app --template vue

```

## 安装 pinia

```bash
yarn add pinia -S
# pnpm install pinia -S
# npm install pinia -S
```
