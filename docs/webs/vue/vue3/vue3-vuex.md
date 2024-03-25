# Vuex

## vuex 2.0

- vuex 集中式 可预测性
- 对vue响应式的活学活用

## vuex 3.0

[vuex](https://next.vuex.vuejs.org/index.html)

### 安装 vuex

``` js
npm install vuex@next --save
```

### 初始化 vuex

``` js
// /src/store/index.js
import { createStore } from 'vuex'
const store = createStore({
 state: {
  msg: '123456'
 },
 mutations: {
  change_msg(state, data) {
   state.msg = data
  }
 },
 actions: {
  
 },
 modules: {
 
 }
})
export default store
```

### 引用 vuex

``` js
// /src/main.js
import store from './store'
app.use(store)
```

### 页面使用

``` html
<template>
 <div>{{msgText}}</div>
 <button @click="changeState">Change State</button> 
</template>
```

``` js
import { definedComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default definedComponent({
 name: 'xx',
 setup () {
  const store = useStore()
  const msgText = computed(() => store.state.msg)
  const changeState = () => {
   store.commit('change_state', 'Hello World!!!')
  }
  return {
   msgText,
   changeState
  }
 }
})
```

## 其他相关

[源码解读：Vuex 的一些缺陷](https://mp.weixin.qq.com/s/ClC1w2OPac682yHzKAU3wQ)

## Pinia vs Vuex

[pinia](https://pinia.esm.dev/)
