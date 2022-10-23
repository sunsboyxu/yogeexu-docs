# vueSSR

- [Vue.js 服务器端渲染指南](https://v2.ssr.vuejs.org/zh/)
- [vue-server-renderer插件Api介绍](https://v2.ssr.vuejs.org/zh/api/#api-%E5%8F%82%E8%80%83)
- [vue-hackernews-官方demo](https://github.com/vuejs/vue-hackernews-2.0)

**传统web开发**，⽹⻚内容在服务端渲染完成，⼀次性传输到浏览器，⻚⾯查看源码，浏览器拿到的是全部的dom结构。

**单⻚应⽤SPA（Single-Page-App）**，单⻚应⽤优秀的⽤户体验，使其逐渐成为主流，⻚⾯内容由JS渲染出来，这种⽅式称为 **客户端渲染**，
⻚⾯查看源码，浏览器拿到的仅有宿主元素#app，并没有内容

## 单⻚应⽤SPA 优点

- 渲染计算放到客户端
- 省流量

### 单⻚应⽤SPA 缺点

- 不利于 SEO
- 首屏的加载速度

## 什么是服务器端渲染SSR

- [什么是服务器端渲染SSR](https://v2.ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr)

SSR 解决⽅案，后端渲染出完整的⾸屏的dom结构返回，前端拿到的内容包括⾸屏及完整 spa 结构，应
⽤激活后依然按照 spa⽅式运⾏，这种⻚⾯渲染⽅式被称为 **服务端渲染(Server Side Render)**

## 为什么使用服务器端渲染

- [为什么使用服务器端渲染](https://v2.ssr.vuejs.org/zh/#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr)

## 从以下几个点去理解 vueSSR

## 使用 vueSSR 版本要求

- vue & vue-server-renderer 2.3.0+
- vue-router 2.5.0+
- vue-loader 12.0.0+ & vue-style-loader 3.0.0+
- vue-ssr项目 安装的 vue 与 vue-server-renderer 版本保持一致

### 当前基于 vue-cli @vue/cli 5.0.1 开发测试

- vue@2.7.10
- vue-server-renderer@2.7.10

## vue-server-renderer 插件

- [vue-server-renderer](https://v2.ssr.vuejs.org/zh/api/)

### createRenderer

``` js
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer()
```

## 创建测试项目

### 使用 vue-cli创建项目

``` js
vue create vue-ssr1
// 选择 Manually select features 自定义配置
// 勾选 Babel、Router、Vuex、CSS Pre-processors、Lintter / Formatter 这几个配置的
// 路由 选择默认的 history 模式
// CSS Pre-processors 选择 Sass/SCSS(with dart-sass)
// Lintter / Formatter 选择 Standard config
// 选择 Lint on save
// 选择 In dedicated config files
```

在项目 vue-ss1 的，根目录 新建 demo 和 server 目录，demo 用于前期的测试，server 用于后面整体 vueSSR 服务端的测试

### 项目目录结构

``` md
 vue-ssr1
 ├── README.md
 ├── babel.config.js
 ├── demo
 │   ├── demo1.js
 │   └── demo2.js
 ├── jsconfig.json
 ├── package.json
 ├── public
 │   ├── favicon.ico
 │   └── index.html
 ├── server
 │   └── index.js
 ├── src
 │   ├── App.vue
 │   ├── assets
 │   │   └── logo.png
 │   ├── components
 │   │   └── HelloWorld.vue
 │   ├── main.js
 │   ├── router
 │   │   └── index.js
 │   ├── store
 │   │   └── index.js
 │   └── views
 │       ├── AboutView.vue
 │       └── HomeView.vue
 ├── vue.config.js
 └── yarn.lock
```

### 更改 .eslintrc.js 的配置

``` js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-irregular-whitespace': 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'no-throw-literal': 'off',
    eqeqeq: 'off'
  }
}
```

### vue 版本查看

在 main.js 中，打印查看 vue 版本的日志

``` js
// src/main.js
console.log('vue 版本:' + Vue.version)
// vue 版本: 2.7.10
```

将项目跑起来，看是否有报错

``` js
yarn serve
```

### 服务端渲染首次体验

安装2个插件 vue-server-renderer、express，vue-server-renderer 版本需要和 vue 的版本保持一致

``` js
// 上面拿到 vue版本 是 2.7.10
// vue-server-renderer 版本需要和 vue 的版本保持一致
yarn add express vue-server-renderer@2.7.10
```

在 demo 目录下新建，demo1.js

``` js
 // /demo/demo1.js
 const express = require('express')
 const app = express()
 
 const Vue = require('vue')
 
 // 导入 创建渲染器方法 createRenderer
 const { createRenderer } = require('vue-server-renderer')
 
 // 得到一个渲染器
 const renderer = createRenderer()
 
 // 解析浏览器的请求，和响应
 app.get('*', async (req, res) => {
   try {
     // 当有服务器请求时，创建一个 Vue 实例
     const vm = new Vue({
       template: '<div>{{ msg }}</div>',
       data () {
         return {
           msg: '服务端渲染首次体验'
         }
       }
     })
     // 调用 renderer 的 renderToString 方法，并传入 一个 Vue 实例 vm
     // 回得到一个 字符串
     // <div data-server-rendered="true">服务端渲染首次体验</div>
     const html = await renderer.renderToString(vm)
 
     // 服务端响应浏览器请求，将生成的 字符串 返回给浏览器
     res.send(html)
   } catch (error) {
     res.status(500).end('Server Error!')
   }
 })
 
 app.listen(3000, async () => {
   console.log('服务器运行了，端口：3000')
 })
```

### 接下来，进行 demo2

- 创建重复执行的工厂函数 creteApp，为每个请求创建一个新的根 Vue 实例
- 创建渲染器时，指定 template 模板
- render 渲染器执行 renderToString 的额外参数 [render参数](https://v2.ssr.vuejs.org/zh/api/#renderer-%E9%80%89%E9%A1%B9)

在 demo 目录下新建，一个 ssr.template.html 模板

``` html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1.0">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <meta name ="viewport" content ="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="vueSSR">
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="x5-orientation" content="portrait">
  <meta name="format-detection" content="telephone=no" />
  <meta name="renderer" content="webkit">
  {{{ meta }}}
  <title>{{ title }}</title>
 </head>
 <body>
  <!--vue-ssr-outlet-->
 </body>
</html>
```

``` js
// /demo/demo2.js
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

const Vue = require('vue')
const { createRenderer } = require('vue-server-renderer')
const renderTemplate = fs.readFileSync(resolve('../public/index.html'), 'utf-8')
const render = createRenderer({
  template: renderTemplate
})
const renderOptions = {
  meta: [
    '<meta name="renderer" content="webkit">'
  ]
}
app.get('*', async(req, res) => {
  try {
    const vm = new Vue({
      template: '<h3>{{ msg }}</h3>',
      data() {
        return {
          msg: 'Vue SSR demo2'
        }
      }
    })
    const html = await render.renderToString(vm, renderOptions)
    res.send(html)
  } catch (error) {
    res.status(500).end('Server Error!')
  }
})

app.listen(3000, function() {
  console.log('server run at 3000 port')
})
```

## 构建步骤

[构建步骤](https://v2.ssr.vuejs.org/zh/guide/structure.html#%E4%BB%8B%E7%BB%8D%E6%9E%84%E5%BB%BA%E6%AD%A5%E9%AA%A4)

![vueSSR1](/images/webs/vue/vueSSR1.png)

⽬标是⽣成⼀个「服务器 bundle」⽤于服务端⾸屏渲染，和⼀个「客户端bundle」⽤于客户端激活

### 同构开发SSR应⽤

对于同构开发，我们依然使⽤ webpack 打包，我们要解决两个问题：**服务端⾸屏渲染** 和 **客户端激活**

### 组件生命周期钩子函数

- [组件生命周期钩子函数](https://v2.ssr.vuejs.org/zh/guide/universal.html#%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0)

由于没有动态更新，所有的生命周期钩子函数中，只有 beforeCreate 和 created 会在服务器端渲染 (SSR) 过程中被调用。
这就是说任何其他生命周期钩子函数中的代码（例如 beforeMount 或 mounted），只会在客户端执行

注意：

## vue-hackernews 官方 demo

- [vue-hackernews](https://github.com/vuejs/vue-hackernews-2.0)

node版本要求 >4 | <9，node 使用 8 这个版本的进行安装 node_modules

组件缓存使用 lru-cache@4.1.1
[lru-cache@4.1.1](https://github.com/isaacs/node-lru-cache/tree/e992f26547a575299fc8d232580e53229393ea7a)

``` bash
nvm current
nvm install 8
nvm use 8
```

## vueSSR 服务端渲染缓存

- [render渲染器 cache参数](https://v2.ssr.vuejs.org/zh/api/#cache)

[](https://www.sofineday.com/vuepress-catalog.html#_3-%E6%B8%85%E9%99%A4-cdn-%E7%BC%93%E5%AD%98)
[](https://www.cnblogs.com/jingh/p/11133250.html)
[](https://www.jb51.net/article/211143.htm)
