---
sidebar_position: 6
---

# 微信相关开发

[微信官方文档](https://developers.weixin.qq.com/doc/)
[微信开放社区](https://developers.weixin.qq.com/community/homepage)
[服务号、订阅号、企业微信、小程序说明](https://kf.qq.com/faq/120911VrYVrA130805byM32u.html)

## 有关 canvas

[文本绘制自动换行、字体加粗简单实现](https://www.jianshu.com/p/8cadcd731c9f)
[小程序canvas绘制自适应海报并生成图片](https://blog.csdn.net/qq_42129925/article/details/93889382)
[小程序海报组件-生成朋友圈分享海报并生成图片](https://github.com/jasondu/wxa-plugin-canvas)
[小程序之canvas图片及文本适配](https://www.jianshu.com/p/75fa54f6caa8?utm_source=oschina-app)

url地址
encodeURIComponent(url)
onLoad
decodeURIComponent(url)
[微信小程序 webview 页面刷新](https://blog.csdn.net/yang450712123/article/details/86486849)

## 小程序 - 转盘抽奖

[微信小程序 — 转盘抽奖](https://blog.csdn.net/zhanjinfeng/article/details/84891412)
[微信小程序 — 转盘抽奖-github](https://github.com/zhanjinfeng/award)
[微信小程序 - 转盘demo](https://www.jianshu.com/p/98a8e7f25f26)
[微信小程序，转盘抽奖](https://www.cnblogs.com/yewook/p/9717130.html)
[微信小程序，抽奖转盘](https://github.com/yewook/Lottery-turntable)
[微信小程序 Utils丨抽奖转盘](https://cloud.tencent.com/developer/article/1517781)

## 社区博客

[小程序社区](http://www.wxapp-union.com/)
[同城小程序代码](http://www.wxapp-union.com/thread-59764-1-1.html)

## URL Scheme

[获取 URL Scheme](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)

- 针对国内非个人主体小程序开放
- URL Scheme 可在 服务端接口或在小程序管理后台「工具菜单」 生成
- 通过 URL Scheme 打开小程序的场景值为 1065
- 适用于从短信、邮件、微信外网页等场景打开小程序
- 生成的 URL Scheme 如下格式:
  weixin://dl/business/?t= *TICKET*

## 注意

- iOS：系统支持识别 URL Scheme，可在短信等应用场景中直接通过Scheme跳转小程序
- Android：系统不支持直接识别 URL Scheme，用户无法通过 Scheme 正常打开小程序，开发者需要使用 H5 页面中转，再跳转到 Scheme 实现打开小程序
- 跳转代码示例：
- location.href = 'weixin://dl/business/?t= *TICKET*'
- 该跳转方法可以在用户打开 H5 时立即调用，也可以在用户触发事件后调用
- 微信内的网页如需打开小程序请使用微信开放标签-小程序跳转按钮，无公众号也可以直接使用小程序身份开发网页并免鉴权跳转小程序，见云开发静态网站跳转小程序。
- 符合开放范围的小程序可以下发支持打开小程序的短信
- 该功能基本覆盖当前用户正在使用的微信版本，开发者无需进行低版本兼容
- 只能生成已发布的小程序的 URL Scheme
- 通过 URL Scheme 跳转到微信时，可能会触发系统弹框询问，若用户选择不跳转，则无法打开小程序。请开发者妥善处理用户选择不跳转的场景
- 部分浏览器会限制打开网页直接跳转，可参考示例网页设置跳转按钮

### 云函数生成 URL Scheme 实现

1、新建 urlscheme 云函数

2、配置 API 权限

``` json
{
 "permissions": {
  "openapi": [
   "urlscheme.generate"
  ]
 }
}
```

[URL Scheme，可从短信跳转小程序](https://developers.weixin.qq.com/community/develop/article/doc/000c4af4d70330ce498b5149a53413)
[微信 schema 跳转之非官方文档](https://developers.weixin.qq.com/community/develop/article/doc/0002066b418608900f8b185685b413)

[如何实现短信跳转小程序](https://blog.csdn.net/qq_31102733/article/details/112637351)
[云开发实战：实现短信跳小程序](http://www.zyiz.net/tech/detail-150793.html)

## 短信发送

[短信跳小程序](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/staticstorage/msg-miniprogram.html)
限制条件：境内非个人主体的认证的小程序，开通云开发 静态网站

### 需要了解

- 短信规则
- 短信格式
- 短信内容长度计算规则
- 短信内容规范

- 短信资源包：前往“开发者工具-云开发-设置-环境设置-资源包”中购买。
- 通知类短信内测中，需要发送申请邮件到 miniprogram@tencent.com，提交短信模板与预计每月发送条数。

- 参数说明
[服务端API - cloudbase.sendSms](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/cloudbase/cloudbase.sendSms.html)

- 云函数发送短信实现  
1、如果使用 云开发 发送短信 建立 发送短信的云函数（sendsms）
- 1-1 新建 sendsms 云函数

``` js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
})
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.cloudbase.sendSms({
        "env": '云环境ID',
        "content": '短信内容',
        "path": '静态网站路径',
        "phoneNumberList": [+86的手机号码],
        "smsType": 'Marketing',
        "useShortName": true
      })
    return result
  } catch (err) {
    return err
  }
}
```

- 1-2 在 config.json 配置权限

``` json
{
  "permissions": {
    "openapi": [
      "cloudbase.sendSms"
    ]
  }
}
```

## 注：腾讯短信发发送限制比较多，可以使用公司的短信模板自己发送，将 H5 跳小程序的地址发送给后台

### 相关

[云开发短信跳小程序（自定义开发版）教程](https://developers.weixin.qq.com/community/develop/doc/000ae2a7a7c9402a4d8bca2875b409)
[云开发短信跳小程序（无代码版）教程](https://developers.weixin.qq.com/community/develop/doc/0006ec98c84e10cfba8b20fbc56009)

## 云开发 静态网站 H5 跳小程序

[静态网站 H5 跳小程序](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/staticstorage/jump-miniprogram.html)
限制条件：非个人主体并且已认证的(微信认证)小程序，使用云开发静态网站托管的网页，可以免鉴权跳转任意合法合规的小程序。
         即可以在微信内部浏览器的 H5 跳转小程序，也可以在微信外部浏览器或其他部分 App （如企业微信、QQ 等）跳转微信小程序

## 订阅消息

[订阅消息介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/subscribe-message.html)
[发送订阅消息方式](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html)
[小程序模板消息能力调整通知](https://developers.weixin.qq.com/community/develop/doc/00008a8a7d8310b6bf4975b635a401)
[实战分享: 小程序云开发玩转订阅消息](https://blog.csdn.net/weixin_42541867/article/details/102690403)
[搭建小程序订阅消息系统](https://segmentfault.com/a/1190000021052547)
[微信小程序云开发实现订阅消息](https://blog.csdn.net/weixin_41595277/article/details/102865252)
[理解误区的微信小程序订阅消息模块](https://developers.weixin.qq.com/community/develop/article/doc/0006ac060e4e80183bc9654b856013)
[微信小程序订阅消息参考](https://baijiahao.baidu.com/s?id=1655285701438273703&wfr=spider&for=pc)
[小程序·云开发实战：搭建小程序订阅消息系统](https://cloud.tencent.com/edu/learning/live-1640)
[获取订阅消息授权](https://blog.csdn.net/weixin_42554191/article/details/105833962)

[定时触发器](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/triggers.html)

[客服消息推送](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-cloud)

[订阅消息，参数说明，参数的限制](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html)

### 如何实现订阅消息

[wx.requestSubscribeMessage](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
为小程序模板消息能力的使用体验，对模板消息的下发条件进行了调整
原模板消息接口于 2020 年 1 月 10 日下线，
将无法使用旧的小程序模板消息接口发送模板消息，取而代之的是一次性订阅消息和长期订阅消息
小程序云开发具有天然安全的鉴权，如何借助小程序云开发轻松实现订阅消息

## 小程序登录

- [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)
[](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)

## 小程序获取手机号码

- [获取 accessToken-接口](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)
- [getPhoneNumber-接口](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html)

### 问题

[](https://developers.weixin.qq.com/community/develop/doc/0004e6249ecc4881983d32eec55c00)

## 云开发获取用户手机号码

- 1、[获取手机号 - 说明文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)
- 2、不能通过 API 来触发，需要通过 button 用户手动来触发

``` html
<view class='section'>
   <button wx:if="{{!phoneNumber}}" type='primary' open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumer">获取手机</button>
   <text wx:if="{{phoneNumber}}">{{phoneNumber}}</text>
</view>
```

- 3、云函数，新建一个 getPhoneNumber ,新建后上传后即可

``` js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
exports.main = async (event, context) => {
  if(event.weRunData && event.weRunData.data && event.weRunData.data.phoneNumber) {
    return {
      mobile: event.weRunData.data.phoneNumber
    }
  } else {
    return {
      mobile: ''
    }
  }
}
```

- 4、小程序页面，使用

``` js
const app = getApp()
Page({
  data: {
    phoneNumber: app.globalData.phoneNumber
  },
  getPhoneNumber(e) {
    if(e.detail.cloudID) {
      wx.cloud.callFunction({
        name: 'getPhoneNumber',
        data: {
          weRunData: wx.cloud.CloudID(e.detail.cloudID)
        }
      }).then(res => {
        if(res.result.event.weRunData.data.phoneNumber) {
          var phoneNumber = res.result.event.weRunData.data.phoneNumber
          wx.setStorageSync('phoneNumber', phoneNumber)
          app.globalData.phoneNumber = phoneNumber
          this.setData({
            phoneNumber
          })
        }
      }).catch(err=> {
        console.log(err)
      })
    }
  }
})
```

## 小程序自定义顶部

``` js
 wx.getSystemInfo({
   success: e => {
  this.globalData.StatusBar = e.statusBarHeight;
  let capsule = wx.getMenuButtonBoundingClientRect();
  if (capsule && capsule.height > 0) {
   this.globalData.Custom = capsule;
   this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
  } else {
   this.globalData.CustomBar = e.statusBarHeight + 50;
  }
   }
 })
```

## 小程序私密消息

[小程序私密消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share/private-message.html)
[createActivityId](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/updatable-message/updatableMessage.createActivityId.html#%E6%8E%A5%E5%8F%A3%E6%96%B9%E6%B3%95)
[小程序如何只允许固定用户人群进入使用？](https://developers.weixin.qq.com/community/develop/doc/000a4cd77f84e0dfac5b6146855400)

#### 小程序客服消息

[小程序云函数实现客服消息回复](https://cloud.tencent.com/developer/article/1533125)
[利用小程序云开发实现客服自动回复消息功能](https://zhuanlan.zhihu.com/p/109384472)
[消息推送](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-cloud)
[客服消息使用指南](https://developers.weixin.qq.com/miniprogram/introduction/custom.html#%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D)
[客服消息](https://developers.weixin.qq.com/doc/offiaccount/Message_Management/Service_Center_messages.html)
[发送客服消息](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/send.html)
[customerServiceMessage.send](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/customer-message/customerServiceMessage.send.html)
1、在小程序后台->客服->添加客服人员

2、页面上通过 button 触发 <button open-type='contact'>客服</button>

[云函数接收消息推送](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/message-push.html#option-cloud)

[微信支付](https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F)

## 微信公众号开发

[微信公众号文档](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)
[微信公众平台接口测试帐号申请](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
[微信公众平台接口调试工具](https://mp.weixin.qq.com/debug/)
[微信 JS 接口签名校验工具](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign)
[access_token](https://developers.weixin.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html)
[微信网页开发-h5](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)
[微信JSSDK demo](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#67)
[JS-SDK文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html)
[jsapi_ticket说明文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#62)
[后端示例代码](http://demo.open.weixin.qq.com/jssdk/sample.zip)
[企业号开发文档](https://qydev.weixin.qq.com/wiki/index.php?title=%E9%A6%96%E9%A1%B5)

[vue+koa2使用微信ssdk实现分享功能](https://blog.csdn.net/qq_14993375/article/details/90734168)
[VueJs单页应用实现微信网页授权及微信分享功能示例](https://blog.csdn.net/caseywei/article/details/83053796)
[vue-cli项目使用微信分享](https://blog.csdn.net/web_xyk/article/details/80453068)
[koa2实现微信授权登录](https://blog.csdn.net/qq_14993375/article/details/89547142)
[nodejs微信开发---接入指南](https://segmentfault.com/a/1190000005856154)
[shorthand微信公众号开源，基于Node.js和Vue](https://github.com/xiadd/shorthand)

### 前端跳转

``` js
https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx909d0671d391a5b5&redirect_uri=https%3A%2F%2Fbj3.infosalons.com.cn%2Freg%2FStandardRegister%2FH5%2Faska%2F%23%2Flogin%3Flinkguid%3DMWVSZS7F&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
```

## 微信开放平台

## 微信对话开放平台

[微信对话开放平台](https://openai.weixin.qq.com/)
[微信对话开放平台-社区](https://support.qq.com/products/61913)
[微信对话开放平台-教学视频](https://support.qq.com/products/61913/faqs/54118)

## 云开发

[云开发-一站式后端云服务](https://tencentcloudbase.github.io/)
[什么是云开发](https://tencentcloudbase.github.io/2019-10-10-what-is-tcb/)
[腾讯云-云开发](https://cloud.tencent.com/document/product/876)
[云开发后台](https://console.cloud.tencent.com/tcb)
[Web 端云开发文档](https://cloud.tencent.com/document/product/876/34606)
