# 微信小程序

- [小程序开发新能力解读](https://developers.weixin.qq.com/community/business/course/0004ca93454498f68aac5faa25b80d?source=indextopic)
- [小程序性能优化实践](https://developers.weixin.qq.com/community/business/course/000606628dc2e86dc0ddcbb115940d?source=indexad)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework)
- [小程序注册流程](https://developers.weixin.qq.com/miniprogram/introduction/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%B3%A8%E5%86%8C)
- [填写主体信息](https://developers.weixin.qq.com/miniprogram/introduction/#%E5%A1%AB%E5%86%99%E4%B8%BB%E4%BD%93%E4%BF%A1%E6%81%AF)
- [数据预加载](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/pre-fetch.html)
- [小程序支付](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7)
- [小程序微信支付 实例配置详解](https://blog.csdn.net/u011415782/article/details/80944832)
- [nodejs微信小程序支付](https://www.jianshu.com/p/a47090968a86)
- [小程序 Page 页面生命周期](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object)
- [小程序 web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
- [小程序webview中使用分享功能](https://blog.csdn.net/weixin_44051839/article/details/86689319)
- [微信小程序 - 富文本图片宽度自适应（正则）](https://blog.csdn.net/weixin_33901926/article/details/91386705)
- [保存图片到相册功能](https://www.jb51.net/article/151751.htm)
- [微信小程序 canvas绘制Base64数据图片](https://www.jianshu.com/p/844a8faea9c1)

## 开发框架
- [vuemini](https://vuemini.org/)
- [vue-mini github](https://github.com/vue-mini/vue-mini)

## 小程序项目 npm 支持
[npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 自定义组件
- [自定义组件说明](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
- [Component](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Component.html)
- [自定义组件 behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html)
- [自定义组件 behaviors 计算属性 computed 支持 ](https://github.com/wechat-miniprogram/computed)
- [组件生命周期](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/lifetimes.html)

## 订阅消息
[订阅消息](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
[订阅消息设置](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/SubscriptionsSetting.html)
[发送订阅消息](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html)

## 插件
[插件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/)

## 开发插件
[开发插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/development.html)

## 使用插件
[使用插件](https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/using.html)

### 如何添加第三方插件
::: tip 添加第三方插件
小程序后台 -> 设置 —> 第三方设置 -> 插件管理 -> 添加插件
:::

### wxParser（富文本插件）
- rich-text: 你的富文本字符串
- bind:tapImg: 监听图片点击事件，通过 e.detail.src 可拿到图片地址
- bind:tapLink: 监听链接点击事件

``` json
// app.json 添加插件
"plugins": {
  "wxparserPlugin": {
    "version": "0.1.0",
    "provider": "wx9d4d4ffa781ff3ac"
  }
}
```
``` json
// index.json 申明插件
{
  "usingComponents": {
    "wxparser": "plugin://wxparserPlugin/wxparser"
  }
}
```
``` html
// index.wxml 使用插件
<wxparser rich-text="{{richText}}" />
```

## 高德地图获取骑行距离
[微信小程序插件的快速入门指南](https://lbs.amap.com/api/wx/gettingstarted)
[路径规划](https://lbs.amap.com/api/javascript-api/reference/route-search)
[路线规划](https://lbs.amap.com/api/jsapi-v2/guide/services/navigation)
[错误信息列表](https://lbs.amap.com/api/wx/reference/errorcode)
[](https://www.jianshu.com/p/72f4e5401d40)

## 小程序相关博客
- [萌村村花杨小花](https://blog.csdn.net/ysq0317/category_7767463.html)

## 自定义支付键盘
[程序实现类似微信提现-自定义键盘](https://blog.csdn.net/clli_Chain/article/details/120065731)
[](https://blog.csdn.net/GG_com/article/details/103623541)