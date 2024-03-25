# 腾讯云开发

- [云开发CloudBase快速构建小程序、Web和移动应用](http://docs.cloudbase.net/)
- [云社区 - 腾讯云开发TCB](https://cloud.tencent.com/developer/user/4744530)
- [开发者手册](https://cloud.tencent.com/developer/devdocs)

::: tip 开通环境的方式

- 开通环境的方式有3种：
  - 在腾讯云官网控制台开通
  - 使用云开发开发者工具：CLI(即命令行工具)开通
  - 在微信小程序 IDE 里开通
:::

## 环境安装

``` js
npm install @cloudbase/cli -g
// 检测 cloudbase 命令可以简写成 tcb(Tencent Cloud Base)
cloudbase -v 
tcb -v
```

## 微信云开发

- [微信云开发-文档](https://cloud.weixin.qq.com/cloudbase)
- [微信云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [在公众号中使用云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/web.html)
- [云开发入门](https://developers.weixin.qq.com/community/business/course/00022011ec0a287dd32b4ddce5180d)
- [付费说明](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/billing/postpayment.html)

## 小程序云开发

- [云开发](https://www.cloudbase.net/)
- [云开发 Web SDK](https://docs.cloudbase.net/api-reference/webv2/initialization.html)
- [Web SDK](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/web/sdk.html)
- [在公众号中使用云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/web.html)
- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [云开发错误码](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference/errcode.html)
- [小程序·云开发 云函数类 koa 路由工具](https://github.com/TencentCloudBase/tcb-router)
- [tcb-router](https://www.jianshu.com/p/da301f4cce52)
- [小程序·云开发解决方案](https://cloud.tencent.com/solution/la)

### 小程序云开发实战

- [微信小程序云开发实战坚果商城-开篇](https://blog.csdn.net/havendream/article/details/103022183)
- [小程序云开发全套实战教程（最全）](https://wangxiaoting.blog.csdn.net/article/details/86626041)

## 从零搭建小程序云开发环境

1、新建一个云发开的实例项目，填写你自己的小程序的appid，打开项目后，点击顶部菜单的云开发，
第一次 请点击 开通 ，输入你自己表示的 环境名称 环境id 可以默认
2、可以将 cloudfunctions 目录 下的云函数 进行 创建并部署，也可以自己 点击 新建 Node.js云函数
3、每 创建的云函数 都类型一个简单的 node 模块吧，可以添加其他模块 如：request request-promise

## Tip

## 1 小程序 2.2.3 或以上的基础库可以使用云能力

### 使用 vue-admin-template 搭建 小程序后台管理系统

[vue-admin-template下载地址](https://github.com/PanJiaChen/vue-admin-template)

## 使用 node+koa 搭建 后台 api 接口

创建 music-api 项目
cd music-api
npm init -y
mkdir app.js
npm install koa request request-promise --save

### 通过 http 调用小程序 云开发

## 接口调用凭证 access_token(缓存和更新)

[小程序服务端文档](https://developers.weixin.qq.com/miniprogram/dev/api-backend/)
[接口调用凭证](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html)

### 获取小程序全局唯一后台接口调用凭据（access_token）。调调用绝大多数后台接口时都需使用 access_token，开发者需要进行妥善保存

[请求地址 GET](https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET)

请求参数：
 属性         类型 默认值 必填   说明
 grant_type string  是   填写 client_credential
 appid     string  是   小程序唯一凭证，即 AppID，可在「微信公众平台 - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）
 secret     string  是   小程序唯一凭证密钥，即 AppSecret，获取方式同 appid

-------------------------------------------------------------------------------------------------------------------------------------------

返回值(Object，JSON 数据包):
 属性             类型     说明
 access_token string         获取到的凭证
 expires_in     number         凭证有效时间，单位：秒。目前是7200秒之内的值。
 errcode         number         错误码
 errmsg         string         错误信息

注意：
 access_token 的存储与更新
 access_token 的存储至少要保留 512 个字符空间；
 access_token 的有效期目前为 2 个小时，需定时刷新，重复获取将导致上次获取的 access_token 失效；
 建议开发者使用中控服务器统一获取和刷新 access_token，其他业务逻辑服务器所使用的 access_token 均来自于该中控服务器，不应该各自去刷新，否则容易造成冲突，导致 access_token 覆盖而影响业务；
 access_token 的有效期通过返回的 expire_in 来传达，目前是7200秒之内的值，中控服务器需要根据这个有效时间提前去刷新。在刷新过程中，中控服务器可对外继续输出的老 access_token，此时公众平台后台会保证在5分钟内，新老 access_token 都可用，这保证了第三方业务的平滑过渡；
 access_token 的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新 access_token 的接口，这样便于业务服务器在API调用获知 access_token 已超时的情况下，可以触发 access_token 的刷新流程。

常见保存 access_token:
 1 保存在 redis 中
 2 保存在 数据库中
 3 保存在项目的 .json 文件中 （node fs 模块）
