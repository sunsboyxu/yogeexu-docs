# 微信开发技巧

## 微信小程序

### ios 禁止滚动回弹效果

``` json
// index.json
{
 "disableScroll": true,
 "enablePullDownRefresh": true
}
```

### swiper圆角处理

``` css
swiper {
 border-radius: 20rpx;
 overflow: hidden;
 /* 兼容IOS，否则在swiper组件内的布局都不受border-radius和overflow的约束 */
 transform: translateY(0);
}
```

### opendata type='userAvatar' 用户头像修改为圆形

``` html
<open-data type='userAvatar' class='user-avatar'></open-data>

.user-avatar {
 width: 188rpx;
 height: 188rpx;
 margin-bottom: 20upx;
 // 需要同时设置
 border-radius: 50%;
 overflow: hidden;
}
```

### 海报生成粗体

``` js
// fillText之前设置font属性
ctx.font = 'normal bold 18px sans-serif'

// 执行2次绘制文字
fillText('文字', x, y)
fillText('文字', x-0.5, y)
fillText('文字', x, y-0.5)
```

### 聊天或留言处理手机自带表情包

[聊天或留言处理手机自带表情包](https://blog.csdn.net/weixin_34417814/article/details/88657008)

``` js
// 将输入的内容 转成 8 进制
export function emojiToUtf8(str) { 
 var reg = /[\ud800-\udbff][\udc00-\udfff]/g
 return str.replace(reg, function (char) {
   var H, L, code
   if (char.length === 2) {
     H = char.charCodeAt(0); // 取出高位  
     L = char.charCodeAt(1); // 取出低位  
     code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法  
     return "&#" + code + ";"
   } else {
     return char
   }
 })
}
```

``` js
// 后台回去内容，将含 表情的内容转化成 16 进制
export function emojiToUtf16(str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        let H = Math.floor((dec - 0x10000) / 0x400) + 0xD800;
        let L = Math.floor(dec - 0x10000) % 0x400 + 0xDC00;
        return String.fromCharCode(H, L);
    });
}
```

## 微信浏览器

### 微信端提前绑定点击事件失效

::: tip 微信端提前绑定点击事件失效

- 1、给点击元素加 css样式

``` css
.div {
 cursor:pointer
}
```

- 2、在执行 js 代码前添加

``` js
$('body>*').bind('click', function() {})
document.getElementsByTageName('body')[0].onclick = function() {}
```

:::

### 移动端 button等元素 :active 失效问题

``` js
document.body.addEventListener('tuchstart', function() { }, false)
```

### 微信浏览器取消缓存的方法

``` html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```

### 判断是否微信浏览器

``` js
export function isWeixin() {
 let ua = window.navigator.userAgent.toLwerCase();
 if(ua.match(/MicroMessenger/i) === 'micromessenger') {
  return true
 } else {
  return false
 }
}
```
