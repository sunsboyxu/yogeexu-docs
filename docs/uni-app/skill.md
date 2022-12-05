# uni-app 开发技巧

## vue.config.js 配置

[vue.config.js 配置](https://uniapp.dcloud.io/collocation/vue-config)

## 下拉刷新

- [onPulldownRefresh](https://uniapp.dcloud.net.cn/api/ui/pulldown.html#onpulldownrefresh)

页面设置允许下拉刷新

``` json
{
  "pages": [{
   "path": "pages/tabbar/home/home",
   "style": {
    // 是否允许下拉刷新
    "enablePullDownRefresh": true,
    // 下拉刷新样式
    "backgroundTextStyle": "light"
   }
  }],
  ...
}
```

## 全局配置不展示 topBar

``` js
// pages.json
"globalStyle": {
 "app-plus": {
  "titleNView": false
 }
}
```

## 设置网络请求时间

``` json
// manifest.json
{
 "networkTimeout": {
  "request": 30000
 }
}
```

## natapp 内网穿透

``` json
// manifest.json
"h5": {
 "devServer": {
  "disableHostCheck": false
 }
}
```

## 组件 esaycom

- [HBuilderX 2.5.5起支持easycom组件模式](https://uniapp.dcloud.io/collocation/pages?id=easycom)
::: tip 组件无需引入
- 传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。
- 在项目 components 目录下，符合 components/组件名称/组件名称。
- 直接在页面中使用, 如：

``` html
<table-x :list='list'></table-x>
```

:::

``` json
// pages.json
{
 // uView 配置 easycom
 "easycom": {
  "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
 }
}
```

## onLaunch 同步

[onLaunch 同步](https://blog.csdn.net/yfx000/article/details/108186719)

## getApp

[getApp](https://uniapp.dcloud.io/collocation/frame/window?id=getapp)

## getCurrentPages

- [getCurrentPages](https://uniapp.dcloud.io/api/window/window?id=getcurrentpages)

``` js
const pages = getCurrentPages()
const currentPage = pages[pages.length-1]
conso.log(currentPage)
conso.log(currentPage.$vm)
if(currentPages.$vm && currentPages.$vm.getUserinfo()) {
 currentPages.$vm.getUserinfo()
}
```

## uni-app h5开发

- [h5 自定义模板](https://uniapp.dcloud.io/collocation/manifest?id=h5-template)
- [uni-app的H5版使用注意事项](https://ask.dcloud.net.cn/article/35232)

### 微信 jssdk 集成

- [JS-SDK说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
- [UNI-APP 开发微信公众号（H5）JSSDK 的使用方式](https://ask.dcloud.net.cn/article/35380)
- [jweixin-1.4.0.js](https://res.wx.qq.com/open/js/jweixin-1.4.0.js)

- 方式一

``` bash
npm init -y
npm install weixin-js-sdk // 1.6.0 版本
```

``` js
const weixin = require('weixin-js-sdk')
import { getWxConfigApi, shareApi } from '@/api'

export const setupWxjssdk = () => {
 const url = location.href.split('#')[0]
 const shareData = {
  title: '分享标题',
  desc: '分享标题描述',
  link: 'https://xxx.xxx.com',
  imgUrl: 'https://xxx/xxx/xxx.png',
  success: function () {
   console.log('分享成功success~')
   // 分享成功后的操作
   const pages = getCurrentPages()
   const currentPage = pages[pages.length - 1]
   if(currentPage.$vm && currentPage.$vm.mobile) {
    shareApi({
     mobile: currentPage.$vm.mobile
    }).then(res => {
     if(res.data.code === 200) {
      if(currentPage.$vm.getUserinfo) {
       currentPage.$vm.getUserinfo()
      } 
     }
    }).catch(err => {
     console.log(err)
    })
   }
  }
 }
 // 获取微信 jssdk 配置数据
 getWxConfigApi({ url }).then(res => {
  if (res.statusCode === 200) {
   if (res.data) {
    const info = res.data
    weixin.config({
     debug: false,
     appId: info.appid,
     timestamp: info.timestamp,
     nonceStr: info.noncestr,
     signature: info.signature,
     jsApiList: [
      'checkJsApi',
      'hideMenuItems',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo'
     ]
    })
    weixin.ready((res) => {
     // 隐藏菜单
     weixin.hideMenuItems({
      menuList: [
       'menuItem:copyUrl',
       'menuItem:originPage',
       'menuItem:openWithQQBrowser',
       'menuItem:openWithSafari',
       'menuItem:share:facebook',
       'menuItem:share:QZone',
       'menuItem:share:email'
      ]
     })
     // 分享，这里调用老版本的，可以监听分享的 success
     weixin.onMenuShareAppMessage(shareData)
     weixin.onMenuShareTimeline(shareData)
     weixin.onMenuShareQQ(shareData)
     weixin.onMenuShareWeibo(shareData)
    })
   }
  }
 }).catch(err => {
  console.log(err)
 })
}
```

- 方式二
在 template.h5.html 即 自定义模版中，通过 cdn 的方式引用

``` html
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1.0">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="description" content="助力一夏！旋转吧，大转盘！">
  <meta name="keywords" content="助力一夏！旋转吧，大转盘！">
  <meta name="apple-mobile-web-app-title" content="助力一夏！旋转吧，大转盘！">
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="x5-orientation" content="portrait">
  <meta name="format-detection" content="telephone=no" />
  <meta name="renderer" content="webkit">
  <link rel="stylesheet" href="<%= BASE_URL %>static/index.<%= VUE_APP_INDEX_CSS_HASH %>.css" />
  <title><%= htmlWebpackPlugin.options.title %></title>
  <script>
      var coverSupport = 'CSS' in window && typeof CSS.supports === 'function' && (CSS.supports('top: env(a)') || CSS.supports('top: constant(a)'))
      document.write(
        '<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' +
        (coverSupport ? ', viewport-fit=cover' : '') + '" />')
    </script>
  <!-- 移动端调试 -->
  <!-- <script src='https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js'></script> -->
  <!-- <script> var vConsole = new VConsole() </script> -->
  <script src='https://res.wx.qq.com/open/js/jweixin-1.4.0.js'></script>
  <script>
   window.jweixin = wx
  </script>
 </head>
 <body>
  <noscript>
   <strong>请升级您的浏览器！</strong>
  </noscript>
  <div id="app"></div>
 </body>
</html>
```

``` js
// ...
// jweixin.xxx 来调用
jweixin.config({
 debug: false,
 appId: info.appid,
 timestamp: info.timestamp,
 nonceStr: info.noncestr,
 signature: info.signature,
 jsApiList: [
  'checkJsApi',
  'hideMenuItems',
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'onMenuShareQQ',
  'onMenuShareWeibo'
 ]
})
// ...
```

## 其他

- [pages.json 详细配置](https://uniapp.dcloud.io/collocation/pages?id=customnav)
- [深入理解高度。获取屏幕、webview、软键盘高度](https://ask.dcloud.net.cn/article/205)
