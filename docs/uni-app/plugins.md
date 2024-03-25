# uni-app 插件使用

## 插件使用集

- [uni-tool](https://www.yuque.com/pocky/aaeyux)
- [uni-tools 工具类](https://github.com/2460392754/uniapp-tools)
- [mp-html 富文本组件](https://ext.dcloud.net.cn/plugin?id=805)
- [七牛云图片上传封装组件](https://ext.dcloud.net.cn/plugin?id=1426)
- [aui-loading加载弹窗](https://ext.dcloud.net.cn/plugin?id=2122)
- [完全相似Vue-router的路由插件](https://ext.dcloud.net.cn/plugin?id=578)
- [request网络请求，支持拦截器 回调函数 Promise typescript](https://ext.dcloud.net.cn/plugin?id=468)
- [基于 mpvue 框架的小程序选择控件](https://ext.dcloud.net.cn/plugin?id=115)
- [Android 和 IOS 佳博 蓝牙小票 、标签 打印插件](https://ext.dcloud.net.cn/plugin?id=462)
- [人脸识别iOS原生插件](https://ext.dcloud.net.cn/plugin?id=1245)
- [lucky-canvas抽奖插件](https://ext.dcloud.net.cn/plugin?id=3499)
- [z-paging下拉刷新、上拉加载](https://ext.dcloud.net.cn/plugin?id=3935)
- [支付宝原生扫码插件](https://ext.dcloud.net.cn/plugin?id=2636)

## 语言插件

### vue-i18n国际化

- [vue-i18n官网](http://kazupon.github.io/vue-i18n/zh/)
- [Vue国际化（vue-i18n）](https://www.jianshu.com/p/df2550c6f1be)

### 安装使用步骤

::: tip vue-i18n插件安装

- uni-app npm初始化 npm init -y
- 安装vue-i18n插件 npm install vue-i18n --save
- 根目录 新建 i18n 目录，并新建 index.js，
- i18n目录下，新建自定义语言包 zh-CN.JS 和 en-US.js(为了方便管理各自的语言包)
:::

``` js
// i18n/zh-CN.js
 export default {
  user: {
   username: '用户名',
   password: '密码'
  }
 }
```

``` js
// i18n/en-US.js
export default {
 user: {
  username: 'Username',
  password: 'Password'
 }
}
```

``` js
// i18n/index.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'
   
Vue.use(VueI18n)
   
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
   'zh-CN': zhCN,
   'en-US': enUS
  }
})
     
export default i18n
```

## 引用 i18n 模块

``` js
// main.js
import Vue from 'vue'
import App from './App'
import i18n from './i18n'
import store from './store'

Vue.prototype._i18n = i18n
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
 i18n,
 store,
  ...App
})
app.$mount()
```

## 页面使用 i18n

``` html
<template>
 <view class="content">
  <button type="primary" plain size="mini" @click='changeL'>语言切换</button>
  
 </view>
</template>

<script>
export default {
 methods: {
  changeL() {
    if(this.$i18n.locale == 'en-US') {
    this.$i18n.locale = 'zh-CN' 
    } else {
     this.$i18n.locale = 'en-US'
    }
  }
 }
}
</script>
```

## 路由插件

[uni-simple-router](https://hhyang.cn/v2/)

### 安装插件

``` js
npm install uni-simple-router
```

### 初始化 router

``` js
//
```

### 配置 vue.config.js

``` js
const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()
module.exports = {
 configureWebpack: {
  plugins: [
   new webpack.DefinePlugin({
    ROUTES: webpack.DefinePlugin.runtimeValue(() => {
     const tfPages = new TransformPages({
      // 需要获取包涵的字段
      includes: ['path', 'name', 'meta','aliasPath']
     });
     return JSON.stringify(tfPages.routes)
    }, true )
   })
  ]
 }
}
```

## 自定义键盘

[仿微信充值金额输入组件](https://ext.dcloud.net.cn/plugin?id=3341)
[支付键盘/数字键盘/付款键盘/密码键盘](https://ext.dcloud.net.cn/plugin?id=4524)
[wly-keyboard模拟键盘](https://ext.dcloud.net.cn/plugin?id=7537)
[数字键盘、支付密码](https://ext.dcloud.net.cn/plugin?id=6661)
[身份证/数字键盘/密码键盘/支付键盘](https://ext.dcloud.net.cn/plugin?id=5646)

## 日历插件

[wly-datetime-picker 日期选择器](https://ext.dcloud.net.cn/plugin?id=8455)

## 商城模板

[mix-mall 电商项目模版](https://ext.dcloud.net.cn/plugin?id=200)
[创云商城](https://ext.dcloud.net.cn/plugin?id=2413)
[仿奈雪の茶前端模板](https://ext.dcloud.net.cn/plugin?id=1807)
[仿喜茶GO小程序前端模板](https://ext.dcloud.net.cn/plugin?id=1957)
[Mall 西瑾商城](https://ext.dcloud.net.cn/plugin?id=1276)
[心选微淘小程序商城项目模版](https://ext.dcloud.net.cn/plugin?id=2893)
[基于colorui和uniCloud的二手商城](https://ext.dcloud.net.cn/plugin?id=3827)
[根据crmeb改造的商品平台-可以做商城](https://ext.dcloud.net.cn/plugin?id=7331)

## 后台管理系统

[一体项目配套管理后台](https://ext.dcloud.net.cn/plugin?id=7293)

## 原生插件

## uni-app 原生插件

[引入 App 原生插件](https://uniapp.dcloud.io/api/extend/native-plugin?id=requirenativeplugin)
[uni-app原生插件（native plugin）开发指南](https://ask.dcloud.net.cn/article/35428)
[Android平台第三方插件开发指导](https://ask.dcloud.net.cn/article/66)
[uni-app原生插件开发教程 Android Studio 版](https://ask.dcloud.net.cn/article/35416)
[uni-app原生插件（native plugin）格式说明](https://ask.dcloud.net.cn/article/35414)
[iOS uni-app原生插件开发文档](https://ask.dcloud.net.cn/article/35415)

## 地图插件配置

[地图插件配置](https://ask.dcloud.net.cn/article/29)

## App更新插件

- [整包更新和热更新组件](https://ext.dcloud.net.cn/plugin?id=7286)
