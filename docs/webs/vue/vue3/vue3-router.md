# vue-router
vue-router 采用单例模式
vue.use(vue-router) => 执行 vue-router.install()

## vue-router 3.0
- [Vue Router](https://router.vuejs.org/zh/)
- [vue-router文档](https://www.cntofu.com/book/132/installation.md)

## vue-router 4.0
- [vue-router 4.0](https://next.router.vuejs.org/zh/)
- [Vue3中的Vue Router初探](https://blog.csdn.net/duninet/article/details/105976832)

## 基本使用
### 安装 vue-router 
``` js
npm install vue-router@next --save
```
### 初始化目录
``` js
// /src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
	history: createWebHashHistory(),
	routes: [{
    path: '/',
    redirect: '/home'
  }, {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/home.vue')
  }, {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/views/home.vue')
  }]
})
export default router
```
### 引用 vue-router
```js
// /src/main.js
import router from './router'
app.use(router)
```
### App.vue 添加视图
<router-view></router-view>

### 页面使用路由相关
``` js
import { definedComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default definedComponent({
	name: 'xxx',
	setup () {
		const router = useRouter()
		const route = useRoute()
		console.log(router)
		console.log(route)
	}
})
```

## 配合 typescript
``` js
// router/index.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [{
    path: "/",
    name: "home",
    meta: {
        title: "首页"
    },
    component: () => import("@/views/Home.vue")
}]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router
```

- [Vue 路由组件传参的 8 种方式](https://mp.weixin.qq.com/s/-mSBuGcjmSMT5C7KaLgftQ)
- [15 个炫酷的的 Vue 后台管理模板](https://mp.weixin.qq.com/s/YTX3JX09JeZJmOZJuecCig)
- [超实用：Vue 自定义指令合集](https://mp.weixin.qq.com/s/XIaJM8GHNYHReg91uRlCCg)