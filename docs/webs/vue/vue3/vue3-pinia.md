# pinia

## 相关文档

- [pinia](https://pinia.vuejs.org/)
- [pinia中文](https://pinia.vuejs.org/zh/index.html)
- [新一代状态管理工具，Pinia.js 上手指南](https://mp.weixin.qq.com/s/rA879t1-pI_F4TdWNkXafQ)
- [pinia入门教程1](https://www.jianshu.com/p/c7e6386577ce)

Pinia 是 Vue 的专属状态管理库，它允许你跨组件或页面共享状态。
如果熟悉组合式 API 的话，你可能会认为可以通过一行简单的 ***export const state = reactive({ })*** 来共享一个全局状态，对于单页应用来说确实可以，
如果应用在服务器端渲染，这可能会使你的应用暴露出一些安全漏洞，

Pinia.js 是新一代的状态管理器，由 Vue.js团队中成员所开发的，因此也被认为是下一代的 Vuex，即 Vuex5.x，在 Vue3.0 的项目中使用也是备受推崇

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

pinia 足够轻量，压缩后的体积只有1.6kb

pinia 去除 mutations，只有 state，getters，actions，actions 支持同步和异步

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

在 src 目录下，新建 store目录，并新建 index.js 用于初始化 pinia 即 vue.use() pinia 插件的注册、count1.js、count2.js

项目目录结构

```json title=vite3-pinia-app
├── README.md
├── index.html
├── package.json
├── public
|  └── vite.svg
├── src
|  ├── App.vue
|  ├── assets
|  |  └── vue.svg
|  ├── components
|  ├── main.js
|  ├── store
|  |  ├── count1.js // countStore1 采用 options API 写法
|  |  ├── count2.js // countStore2 采用 composition API 写法
|  |  └── index.js // 初始化 pinia,vue.use()
|  └── style.css
├── vite.config.js
└── yarn.lock
```

## createPinia pinia的初始化，插件的注册

src/store/index.js 代码

``` js
// src/store/index.js
import { createPinia } from 'pinia'

const store = createPinia()

export default store
```

src/main.js

``` js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store).mount('#app')
```

## defineStore 创建 store

defineStore 方法 用于 创建 store

``` js
import { defineStore } from 'pinia'
// const store = defineStore(id,options)
// const store = defineStore(options)
// const store = defineStore(id, fn)
```

## 创建 store 的几种方式

- defineStore(id,options)
- defineStore(options)
- defineStore(id, fn)

``` js
// defineStore(id,options) 方式
import { defineStore } from 'pinia'

// 使用的地方解构的方式导入
export const useCountStore1 = defineStore('countStore1', {
  // state 需要定义为函数
  state:() => ({ // state 定义方式一
    count: 0 
  }),
  state: () => { // state 定义方式二
    return {
      count: 0
    }
  },
  getters: {
    dounbleCount() {
      return this.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
```

将 定义 id 放在 options 中

``` js
import { defineStore } from 'pinia'
const useCountStore1 = defineStore({
  id: 'countStore1',
  state: () => ({
    count: 0
  }),
  getters: {
    ...
  },
  actions: {
    ...
  }
})
```

采用函数式方式，类似 hooks，更好的将代码聚集

``` js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
const useCountStore1 = defineStore('countStore2', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }
  return {
    count,
    doubleCount,
    increment,
    decrement
  }
})
```

## 页面或者组件使用创建的 store

上面介绍了 defineStore 的使用，即 store 创建以及创建方式，如：useCountStore1 和 useCountStore2

创建 store 后，下面介绍如何在页面使用

首先，在 src/store 下，建立 count1.js 和 count2.js

useCountStore1 使用 options API 的方式创建

```js title=src/store/count1.js
// src/store/count1.js
// useCountStore1

/**
 * options API 方式创建
 * state 需要返回一个函数
 * this 指向当前 store -> useCountStore1
*/
import { defineStore } from 'pinia'

const useCountStore1 = defineStore('countStore1', {
  // state: () => {
  //   return {
  //     count: 0
  //   }
  // },
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    }
  },
  actions: {
    // 加入购物车
    increment() {
      this.count++
    },
    // 移除购物车
    decrement() {
      this.count--
    }
  }
})

export default useCountStore1
```

useCountStore2 使用 Composition API 的方式创建

```js title=src/store/count2.js
// src/store/count2.js
// useCountStore2

/**
 * Composition API 方式创建
 * state 需要返回一个函数
*/
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useCountStore2 = defineStore('countStore2', () => {
  // 定义一个响应式数据，类似 state
  const count = ref(0)

  // 定义一个计算属性，类似 getters
  const doubleCount = computed(() => count.value * 2)

  // 下面的方法，类似 actions
  
  // 加入购物车
  // const increment = () => {
  //   count.value++
  // }
  
  /**
   * 上面使用的 箭头函数，this -> undefined
   * 尝试不使用 箭头函数 this 指向当前 store -> useCountStore2，this.count++ 或者 count.value++
  */
  
  // 加入购物车
  const increment = function() {
    // this.count++
    count.value++
    console.log(this)
    console.log(this.count)
    console.log(this.doubleCount)
  }

  // 移除购物车
  const decrement = () => {
    count.value--
  }

  return {
    count,
    doubleCount,
    increment,
    decrement
  }
  // 感觉就像写 .vue 中的 script??? 很像 hooks???觉得这样更好的将代码聚集起来，一目了然
})

export default useCountStore2
```

当前是在 App.vue 中来使用 useCountStore1 和 useCountStore2

```html title=src/App.vue
<template>
  <div>
    <h3>vue3 + vite3 + pinia</h3>
    <div>
      <h3>useCountStore1</h3>
      <p>购物车：{{ countStore1.count }} / {{ countStore1.doubleCount }}</p>
      <div>
        <button @click="handleAdd1">加入购物车1</button>
        <!-- 允许直接通过 countStore1 来修改 state，但这种操作一般都放在 actions 中来统一封装 -->
        <button @click="countStore1.count++">加入购物车2</button>
        <button @click="handleRemove1">移除购物车1</button>
      </div>
      <hr color="#646cff" />
      <h3>useCountStore2</h3>
      <p>使用，解构方式</p>
      <p>购物车：{{ count2 }} / {{ doubleCount2 }}</p>
      <div>
        <button @click="handleAdd2">加入购物车2</button>
        <button @click="handleRemove2">移除购物车2</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  /**
   * @store 是在 vite.config.js 中配置了 resolve 下的 alias
   */
  import useCountStore1 from '@store/count1'
  import useCountStore2 from '@store/count2'
  import { storeToRefs } from 'pinia'

  // useCountStore1
  const countStore1 = useCountStore1()
  console.log(countStore1, 'countStore1--')
  const handleAdd1 = () => {
    countStore1.increment()
  }
  const handleRemove1 = () => {
    countStore1.decrement()
  }

  // useCountStore2
  const countStore2 = useCountStore2()
  console.log(countStore2, 'countStore2--')

  // state 和 getter 的 解构
  // 直接解构会失去响应式，通过 pinia 提供的方法 storeToRefs 进行解构
  // count: count2 解构时，起别名
  const { count: count2, doubleCount: doubleCount2 } = storeToRefs(countStore2)

  // actions 的解构
  // decrement: decrement2 解构时，起别名
  const { increment, decrement: decrement2 } = countStore2
  const handleAdd2 = () => {
    increment()
  }
  const handleRemove2 = () => {
    decrement2()
  }
</script>
```
