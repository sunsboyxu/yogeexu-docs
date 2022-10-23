# 移动端开发技巧

## 1 移动端适配

- [移动端适配 - viewport](https://mp.weixin.qq.com/s/-2g1m9OLK9P6w2_Pl09n8w)
- [屏幕、图像、字体与布局的兼容适配](https://mp.weixin.qq.com/s/Z-eL4hv4dN4v9SfiGpCVSQ)
- [响应式布局](https://juejin.cn/post/6998355778943844365)
- lib-flexible
- postcss-pxtorem

### 移动端适配 - viewport

- 什么是 viewport?

- viewport的单位vw、vh
vw、vh将viewport分成了一百份。vw即 viewport width vh即viewport height

- 1vw 等于视图单位的1%的宽度
- 1vh 等于视图单位的1%的高度
-

如果设计稿的视图为375px 那么1vw 等于 3.75px

1 添加 meta viewport 支持

``` html
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">
```

2 使用插件 postcss-px-to-viewport

``` bash
yarn add postcss-px-to-viewport -D
```

项目根目录，新建 postcss.config.js

``` js
// postcss.config.js
module.exports = {
 plugins: {
  'postcss-px-to-viewport': {
   unitToConvert: 'px',
   viewportWidth: 375,
   unitPrecision: 5,
   propList: ['*'],
   viewportUnit: 'vw',
   fontViewportUnit: 'vw',
   selectorBlackList: [],
   minPixelValue: 1,
   mediaQuery: false,
   replace: true,
   exclude: [],
   landscape: false,
   landscapeUnit: 'vw',
   landscapeWidth: 568
  }
 }
}
```

## 2 常用的 meta 属性设置

``` html
//Android 禁止屏幕旋转
<meta name="screen-orientation" content="portrait">

//全屏显示
<meta name="full-screen" content="yes">

// UC应用模式，使用了application这种应用模式后，
// 页面讲默认全屏，禁止长按菜单，禁止收拾，标准排版，以及强制图片显示。           
<meta name="browsermode" content="application">

// QQ强制竖屏
<meta name="x5-orientation" content="portrait">
// QQ强制全屏     
<meta name="x5-fullscreen" content="true">
// QQ应用模式
<meta name="x5-page-mode" content="app">            
```

## 3 实现 0.5px 细线

``` css
// 四边框线
.isc-border {
 position: relative;
 &:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  box-sizing: border-box;
  transform: scale(.5);
  transform-origin: left top;
  border-radius: 4px;
  border: 1px solid #ccc;
 }
}

// 顶部边框线
.before {
 position: relative;
 &:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  transform: scaleY(0.5);
  transform-origin: 0 0;
 }
}
// 底部边框线
.after {
 position: relative;
 &:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  transform: scaleY(0.5);
  transform-origin: 0 0;
 }
}
```

## 4 设置 placeholder 字体的颜色

``` css
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
 color: red;
}
```

## 5 iOS 滑动不流畅

上下滑动页面会产生卡顿，手指离开页面，页面立即停止运动。整体表现就是滑动不流畅，没有滑动惯性
在 iOS 5.0 以及之后的版本，滑动有定义有两个值 auto 和 touch，默认值为 auto

``` css
/* 当手指从触摸屏上移开，会保持一段时间的滚动 */
-webkit-overflow-scrolling: touch;

/* 当手指从触摸屏上移开，滚动会立即停止 */
-webkit-overflow-scrolling: auto;
```

### 5-1.在滚动容器上增加滚动 touch 方法

将 -webkit-overflow-scrolling 值设置为 touch

``` css
.wrapper {
    -webkit-overflow-scrolling: touch;
}
// 设置滚动条隐藏
.container ::-webkit-scrollbar {
 display: none;
}
```

可能会导致使用position:fixed; 固定定位的元素，随着页面一起滚动

### 5-2.设置 overflow

设置外部 overflow 为 hidden,设置内容元素 overflow 为 auto。内部元素超出 body 即产生滚动，超出的部分 body 隐藏。

``` css
body {
    overflow-y: hidden;
}
.wrapper {
    overflow-y: auto;
}
```

## 6 iOS 上拉边界下拉出现白色空白

### 表现形式

手指按住屏幕下拉，屏幕顶部会多出一块白色区域。手指按住屏幕上拉，底部多出一块白色区域。

### 产生的原因

在 iOS 中，手指按住屏幕上下拖动，会触发 touchmove 事件。这个事件触发的对象是整个 webview 容器，容器自然会被拖动，剩下的部分会成空白。

### 解决方案

#### 6-1 监听事件禁止滑动

::: tip 移动端触摸事件

- touchstart: 手指放在一个DOM元素上
- touchmove: 手指拖曳一个DOM元素
- touchend: 手指从一个DOM元素上移开。
:::

需要控制 touchmove 事件, touchmove 事件的速度是可以实现定义的，取决于硬件性能和其他实现细节
preventDefault 方法，阻止同一触点上所有默认行为，比如滚动
通过监听 touchmove，让需要滑动的地方滑动，不需要滑动的地方禁止滑动,注意的是要过滤掉具有滚动容器的元素

``` js
document.body.addEventListener('touchmove', (e) => {
 if(e._isScroller) return
 e.preventDefault()
}, { passive: false })
```

## 7 ios 日期转换 NAN 的问题

将日期字符串的格式符号替换成'/'

``` js
'yyyy-MM-dd'.replace(/-/g, '/')
```

## 8 页面件放大或缩小不确定性行为

双击或者双指张开手指页面元素，页面会放大或缩小,HTML 本身会产生放大或缩小的行为，比如在 PC 浏览器上，可以自由控制页面的放大缩小。但是在移动端，我们是不需要这个行为的。所以，我们需要禁止该不确定性行为，来提升用户体验

``` html
<meta name=viewport content="width=device-width, initial-scale=1.0, minimum-scale=1.0 maximum-scale=1.0, user-scalable=no">
```

## 9 click 点击事件延时与穿透

- 监听元素 click 事件，点击元素触发时间延迟约 300ms
- 点击蒙层，蒙层消失后，下层元素点击触发

### 9-1 为什么会产生 click 延时？

iOS 中的 safari，为了实现双击缩放操作，在单击 300ms 之后，如果未进行第二次点击，则执行 click 单击操作。也就是说来判断用户行为是否为双击产生的。但是，在 App 中，无论是否需要双击缩放这种行为，click 单击都会产生 300ms 延迟

### 9-2 为什么会产生 click 点击穿透？

双层元素叠加时，在上层元素上绑定 touch 事件，下层元素绑定 click 事件。由于 click 发生在 touch 之后，点击上层元素，元素消失，下层元素会触发 click 事件，由此产生了点击穿透的效果。

### 9-3 使用 touchstart 替换 click

移动设备不仅支持点击，还支持几个触摸事件
那么我们现在基本思路就是用 touch 事件代替click 事件
将 click 替换成 touchstart 不仅解决了 click 事件都延时问题，还解决了穿透问题
穿透问题是在 touch 和 click 混用时产生

``` js
el.addEventListener("touchstart", () => {
 console.log("ok");
}, false);
```

### 9-2 使用 fastclick 库

``` js
yarn add fastclick -S
import FastClick from 'fastclick'
FastClick.attach(document.body, {})
```

### 9-4 移动端都适合 touchstart 事件吗？

::: warning 事件触发顺序
touchstart => touchmove => touchend => click
:::
比如 vant-ui 兼容 @click 和 @touchstart 事件，
在同时需要点击和滑动的场景下，如果将 click 替换成 touchstart ,
touchmove滑动时候，先触发 touchstart 的点击事件，是不是已经产生了冲突呢
在具有滚动的情况下，还是建议使用 click 处理

## 10 软键盘问题

### 10-1 ios 键盘弹起挡住原来的视图

可以通过监听移动端软键盘弹起 Element.scrollIntoViewIfNeeded（Boolean）
方法用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。
如果该元素已经在浏览器窗口的可见区域内，则不会发生滚动。
true，则元素将在其所在滚动区的可视区域中居中对齐。
false，则元素将与其所在滚动区的可视区域最近的边缘对齐。
根据可见区域最靠近元素的哪个边缘，元素的顶部将与可见区域的顶部边缘对准，
或者元素的底部边缘将与可见区域的底部边缘对准。

``` js
window.addEventListener('resize', function() {
  if (
    document.activeElement.tagName === 'INPUT' ||
    document.activeElement.tagName === 'TEXTAREA'
  ) {
    window.setTimeout(function() {
      if ('scrollIntoView' in document.activeElement) {
        document.activeElement.scrollIntoView(false)
      } else {
        document.activeElement.scrollIntoViewIfNeeded(false)
      }
    }, 0)
  }
})
```

### 10-2 onkeyUp 和 onKeydown 兼容性问题

IOS 中 input 键盘事件 keyup、keydown、等支持不是很好，
用 input 监听键盘 keyup 事件，在安卓手机浏览器中没有问题，
但是在 ios 手机浏览器中用输入法输入之后，并未立刻相应 keyup 事件

### 10-3 ios12 输入框难以点击获取焦点，弹不出软键盘

定位找到问题是 fastclick.js 对 IOS12 的兼容性，可在 fastclick.js 源码或者 main.js 做以下修改

``` js
FastClick.prototype.focus = function(targetElement) {
  var length
  if (
    deviceIsIOS &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month'
  ) {
    length = targetElement.value.length
    targetElement.setSelectionRange(length, length)
    targetElement.focus()
  } else {
    targetElement.focus()
  }
}
```

### 10-3 ios 键盘收起时页面没用回落，底部会留白

``` js
window.addEventListener('focusout', function() {
  window.scrollTo(0, 0)
})

//input输入框弹起软键盘的解决方案。
var bfscrolltop = document.body.scrollTop
$('input').focus(function() {
 document.body.scrollTop = document.body.scrollHeight
 //console.log(document.body.scrollTop);
}).blur(function() {
 document.body.scrollTop = bfscrolltop
 //console.log(document.body.scrollTop);
})
```

### 10-4 ios 下 fixed 失效的原因

软键盘唤起后，页面的 fixed 元素将失效，变成了 absolute，所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。不仅限于 type=text 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。

解决方法: 不让页面滚动，而是让主体部分自己滚动,主体部分高度设为 100%，overflow:scroll

``` html
<body>
  <div class='warper'>
    <div class='main'></div>
  <div>
  <div class="fix-bottom"></div>
</body>
```

``` css
.warper {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* 解决ios滑动不流畅问题 */
}
.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

## 11 软键盘弹出将页面顶起来

input获取焦点时，键盘弹出，将页面顶起来，导致页面样式错乱
input失去时焦点时，键盘收起，键盘区域空白，但是页面未复原

键盘弹出时，会将解压 absolute 和 fixed 定位的元素。导致可视区域变小，布局错乱
键盘不能回落问题出现在 iOS 12+ 和 wechat 6.7.4+ 中，而在微信 H5 开发中是比较常见的 Bug。

``` js
// 记录原有的视口高度
const originalHeight = document.body.clientHeight || document.documentElement.clientHeight;

window.onresize = function(){
  var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
  if(resizeHeight < originalHeight ){
    // 恢复内容区域高度
    // const container = document.getElementById("container")
    // 例如 container.style.height = originalHeight;
  }
}
```

``` html
<template>
  <input type="text" @focus="focus" @blur="blur">
</template>

<script>
export default {
 data() {
  return {
   scrollTop: 0
  }
 },
 methods: {
  focus() {
   this.scrollTop = document.scrollingElement.scrollTop;
  },
  blur() {
   document.scrollingElement.scrollTo(0, this.scrollTop);
  }
 }
}
</script>
```

### 微信端处理

``` js
const isWechat = window.navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
if (!isWechat) return;
const wechatVersion = wechatInfo[1];
const version = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
 
 // 如果设备类型为iOS 12+ 和wechat 6.7.4+，恢复成原来的视口
if (+wechatVersion.replace(/\./g, '') >= 674 && +version[1] >= 12) {
  window.scrollTo(0, Math.max(document.body.clientHeight, document.documentElement.clientHeight));
}
```

## 12 iPhone X 底部栏适配问题

头部刘海两侧区域或者底部区域，出现刘海遮挡文字，或者呈现黑底或白底空白区域
iPhone X 以及它以上的系列，都采用刘海屏设计和全面屏手势，头部、底部、侧边都需要做特殊处理
常见的 底部菜单的适配

### 12-1 设置 meta 的 viewport-fit

::: tip viewport-fit 属性说明

- viewport-fit=auto // 此值不影响初始布局视图窗口，并且整个web页面都是可查看的
- viewport-fit=contain // 视图窗口按比例缩放，以适合显示内嵌的最大矩形
- viewport-fit=cover // 视图窗口被缩放以填充设备显示
:::

``` html
<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover'/>
```

### 12-2 css iPhoneX的适配

``` css
/* 适配 iPhone X 顶部填充*/
@supports (top: env(safe-area-inset-top)) {
 body, header {
  padding-top: constant(safe-area-inset-top, 40px);
  padding-top: env(safe-area-inset-top, 40px);
  padding-top: var(safe-area-inset-top, 40px);
 }
}

/* 判断iPhoneX 将 footer 的 padding-bottom 填充到最底部 */
@supports (bottom: env(safe-area-inset-bottom)){
 body,.footer{
   padding-bottom: constant(safe-area-inset-bottom, 20px);
   padding-bottom: env(safe-area-inset-bottom, 20px);
   padding-top: var(safe-area-inset-bottom, 20px);
 }
}

```

``` html
env() 用法为 env( <custom-ident> , <declaration-value>? )，第一个参数为自定义的区域，第二个为备用值。
var() 用法为 var( <custom-property-name> , <declaration-value>? )，作用是在 env() 不生效的情况下，给出一个备用值。
constant（） 被 css 2017-2018 年为草稿阶段，是否已被标准化未知。而其他iOS 浏览器版本中是否有此函数未知，作为兼容处理而添加进去
```

## 13 禁止长按

通过 css， 禁止长按图片保存、长按选择文字、长按链接/手机号/邮箱时呼出菜单

``` css
// 禁止长按图片保存
img {
 -webkit-touch-callout: none;
 // 微信浏览器的禁止
 pointer-evnets: none;
}
// 禁止长按选择文字
div {
 -webkit-touch-callout: none;
 -webkit-user-select: none;
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}
// 禁止长按菜单呼出
div {
 -webkit-touch-callout: none;
}
```

## 14 设置字体禁止缩放

- 屏幕旋转为横屏时，字体大小会变
- 用户设置字号放大或者缩小导致页面布局错误

``` css
body {
 text-size-adjust: 100%;
 -webkit-text-size-adjust: 100%;
}
```

## 15 android系统中元素被点击时产生边框

部分android系统点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样

``` css
a, button, input, textarea {
 -webkit-tap-highlight-color: rgba(0,0,0,0)
 -webkit-user-modify: read-write-plaintext-only;
}
```

## 16 最简单的 rem 自适应

``` css
html {
 font-size: calc(100vw / 3.75);
}
body {
 font-size: 0.14rem;
}
```

## 17 纯数字键盘

``` html
<!-- 带有 +*# 键盘 -->
<input type='tel'/>
<!-- 纯数字 -->
<input pattern='\d*'>
```

## 18 网页调用系统原生功能

``` html
<!-- 拨号 -->
<a href="tel:10086">打电话给: 10086</a>
<!-- 发送短信 -->
<a href="sms:10086">发短信给: 10086</a>
<!-- 发送邮件 -->
<a href="mailto:839626987@qq.com">发邮件给：839626987@qq.com</a>
<!-- 选择照片或者拍摄照片 -->
<input type="file" accept="image/*">
<!-- 选择视频或者拍摄视频 -->
<input type="file" accept="video/*">
<!-- 多选 -->
<input type="file" multiple>
```

## 19 打开原生应用

``` html
<a href="weixin://">打开微信</a>
<a href="alipays://">打开支付宝</a>
<a href="alipays://platformapi/startapp?saId=10000007">打开支付宝的扫一扫功能</a>
<a href="alipays://platformapi/startapp?appId=60000002">打开支付宝的蚂蚁森林</a>
```

这种方式叫做 URL Scheme
是一种协议，一般用来访问APP或者APP中的某个功能/页面（如唤醒APP后打开指定页面或者使用某些功能），
一般是由APP开发者自己定义，比如规定一些参数或者路径让其他开发者来访问

::: tip URL Scheme的基本格式

- scheme://[path][?query]
- scheme 应用标识
- path 行为(应用的某个功能/页面)
- query 功能需要的参数
:::

唤醒APP的条件是你的手机已经安装了该APP
某些浏览器会禁用此协议，比如微信内部浏览器（除非开了白名单）

## 20 active 伪类失效

``` js
// body 注册一个空事件
<body ontouchstart>
 ...
</body>
```

## 21 滑动穿透

出现遮罩的时候，锁住用户的滚动行为，最简单的办法就是阻住默认行为

``` html
<div class="mask">
  <div class="content">我是弹框</div>
</div>
```

``` css
.mask {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #333, $alpha: .6);
  .content {
    padding: 20px;
    background-color: #fff;
    width: 300px;
  }
}
```

``` js
document.querySelector(".mask").addEventListener("touchmove", event => {
  event.preventDefault();
});
```

vue 中 写法

``` html
<div class="mask" @touchumove.prevent></div>
<div class="mask" @touchumove.self.prevent></div>
```

如果.content也有滚动条，那么只要阻止遮罩本身就行

``` js
document.querySelector(".mask").addEventListener("touchmove", event => {
  if (event.target.classList.contains("mask")) event.preventDefault();
});
```

## 22 忽略浏览器自动识别(电话号码/邮箱)

``` html
<!-- 忽略浏览器自动识别数字为电话号码 -->
<meta name='format-detection' content='telephone=no'/>
<meta name='format-detection' content='email=no'/>
```

## 23 html2canvas 生成清晰海报

``` js
const scaleSize = 2
const canvas2 = document.createElment('canvas')
const target = document.querySelector('#app')
const width = window.getComputedStyle(target).width
const height = window.getComputedStyle(target).height
canvas2.width = width * scaleSize
canvas2.height = widthh * scaleSize
canvas2.style.width = width + "px"
canvas2.style.height =height + "px"
const context = newCanvas.getContext("2d")
context.scale(scaleSize, scaleSize)
html2canvas(document.querySelector('#app'),
{ canvas: canvas2 }).then(function(canvas) {
  // 简单的通过超链接设置下载功能
  document.querySelector(".btn").setAttribute('href', canvas.toDataURL())
}
```

## 24 H5 调用 SDK 相关问题及解决方案

在 Hybrid App 中使用 H5 是最常见的不过了，刚接触的，肯定会很生疏模糊。不知道 H5 和 Hybrid 是怎么交互的。怎样同时支持 iOS 和 Android 呢？现在来谈谈 Hybrid 技术要点，原生与 H5 的通信

- 使用 DSBridge 同时支持 iOS 与 Android

### 注册和回调

``` js
// 注册方法 `bridge.register`
bridge.register('enterApp', function() {
 broadcast.emit('ENTER_APP')
})
```

``` js
export const  getSDKVersion = () => bridg.all('BLT.getSDKVersion')
```

### 事件监听与触发

``` js
const broadcast = {
  on: function(name, fn, pluralable) {
    this._on(name, fn, pluralable, false)
  },
  once: function(name, fn, pluralable) {
    this._on(name, fn, pluralable, true)
  },
  _on: function(name, fn, pluralable, once) {
    let eventData = broadcast.data
    let fnObj = { fn: fn, once: once }
    if (pluralable && Object.prototype.hasOwnProperty.call(eventData, 'name')) {
      eventData[name].push(fnObj)
    } else {
      eventData[name] = [fnObj]
    }
    return this
  },
  emit: function(name, data, thisArg) {
    let fn, fnList, i, len
    thisArg = thisArg || null
    fnList = broadcast.data[name] || []
    for (i = 0, len = fnList.length; i < len; i++) {
      fn = fnList[i].fn
      fn.apply(thisArg, [data, name])
      if (fnList[i].once) {
        fnList.splice(i, 1)
        i--
        len--
      }
    }
    return this
  },
  data: {}
}
export default broadcast
```

方法调用前，一定要判断 SDK 是否提供该方法 如果 Android 提供该方法，iOS 上调用就会出现一个方法调用失败等弹窗。 怎么解决呢？

- 提供一个判断是否 Android、iOS。根据设备进行判断
- 同一功能需要iOS，Android方法名相同，这样更好处理

``` js
export const hasNativeMethod = (name) =>
  return bridge.hasNativeMethod('BYJ.' + name)
}

export const getSDKVersion = function() {
  if (hasNativeMethod('getSDKVersion')) {
    bridge.call('BYJ.getSDKVersion')
  }
}
```

## 25 H5 调试相关方案与策略

- [H5 移动端调试秘籍](https://mp.weixin.qq.com/s/D43DKnT0W4abwGto2Pai6Q)

## 26 参考

- [移动端H5开发常用技巧总结](https://mp.weixin.qq.com/s/cHTCu3xF5wQSYiqsUZ7kBQ)

## 27 其他

- [H5 页面列表缓存方案](https://mp.weixin.qq.com/s/7QYH_etjCQAKTAtYUDKMbA)
