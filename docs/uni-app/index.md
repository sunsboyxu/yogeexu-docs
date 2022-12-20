---
sidebar_position: 3
---

# uni-app

- [uni-app教程](https://uniapp.dcloud.net.cn/tutorial/)

- [DCloud开放平台](https://open.dcloud.net.cn/)
- [DCloud社区](https://ask.dcloud.net.cn/explore/)
- [uni-app 开发规范](https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e8%a7%84%e8%8c%83)
- [5+ App开发入门指南](https://ask.dcloud.net.cn/article/89)
- [5+ App开发 Native.js 入门指南](https://ask.dcloud.net.cn/article/88)
- [Native.js示例汇总](https://ask.dcloud.net.cn/article/114)
- [plus 下的 navigator](http://www.html5plus.org/doc/zh_cn/navigator.html)
- [manifest.json文档说明](https://ask.dcloud.net.cn/article/94)
- [新冠病毒，IT系统总汇](https://www.dcloud.io/ncp.html)
- [uni小程序SDK，是一个用于原生App中集成的SDK](https://nativesupport.dcloud.net.cn/)
- [uni-app V3版本上线，App端性能、功能大幅提升](https://ask.dcloud.net.cn/article/36599)

## uni-app vue3.0 支持

- [项目支持 vue 3.0 介绍，及升级指南](https://ask.dcloud.net.cn/article/37834)
- [uni-app 项目小程序端、H5 端支持 vue3 介绍](https://ask.dcloud.net.cn/article/37834)

## uni-app SSR 支持

[uni-app提供开箱即用的SSR支持](https://ask.dcloud.net.cn/article/39355)

## uni-app 导航栏

- [uni-app导航栏开发指南](https://ask.dcloud.net.cn/article/34921)
- [uni-app在App端动态修改原生导航栏](https://ask.dcloud.net.cn/article/35374)
- [动态设置当前页面的标题](https://uniapp.dcloud.io/api/ui/navigationbar)

## webView

- [plus-webView](http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.WebviewStyles)

## subNVue

- [subNvue，是 vue 页面的原生子窗体](https://uniapp.dcloud.io/api/window/subNVues?id=subnvuesetstyle)
- [uni-app subNVue 原生子窗体开发指南](https://ask.dcloud.net.cn/article/35948)
- [在uniApp中App模式下使用【subNVue 原生子窗体】解决抽屉侧边栏](https://www.cnblogs.com/fyhlz/p/11793986.html)
-

## App 权限判断

- [App权限判断和提示](https://ext.dcloud.net.cn/plugin?id=594)

## H5页面唤Native户端的介绍

- [H5页面唤Native户端的介绍](https://github.com/AlanZhang001/H5CallUpNative)

## 真机运行和调试

- [自定义调试基座及使用说明](https://ask.dcloud.net.cn/article/35115)
- [Safari调试iOS应用](https://ask.dcloud.net.cn/article/143)
- [真机联调常见问题](https://ask.dcloud.net.cn/article/97#checkAdb)
- [iTunes64位 下载](https://mydown.yesky.com/pcsoft/33491427/versions/)
- [Windows版 iTunes64 下载](https://support.apple.com/zh-cn/HT210384)
- [红米手机打开USB调试](https://jingyan.baidu.com/article/a3761b2be3d9971577f9aa79.html)
- [PP助手](https://www.25pp.com/)
- [安卓手机apk下载地址](https://pro.25pp.com/pp_android)
- [苹果市场](https://www.25pp.com/ios/)
- [安卓市场](https://www.25pp.com/android/)

## iphoneX适配

- [uni-app 全面屏、刘海屏适配（iphoneX适配）及安全区设置](https://ask.dcloud.net.cn/article/35564)
- [iPhone 设备屏幕大小和方向](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/)
- [iPhone 设备 pixel-ratio](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/)
- [iPhone 尺寸详细表](https://blog.csdn.net/a18339063397/article/details/81482073)
- [h5-iPhoneX适配](https://www.jianshu.com/p/088847a3fab3)
- [h5-iphoneX、iphoneXS、iphoneXSMax、iphoneXR适配](https://www.jianshu.com/p/f8633052265c)
- [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [H5适配iphoneX底部 只需2步](https://blog.csdn.net/weixin_34403976/article/details/92088397)
- [H5页面WebView在iPhoneX的适配](https://blog.csdn.net/yujianxiang666/article/details/80180317)
- [H5页面适配 iPhoneX，就是这么简单](https://blog.csdn.net/dx18520548758/article/details/80010358)
- [mui框架适配iphone](https://blog.csdn.net/weixin_42345079/article/details/94746847)

### iPhone 设备宽高

Device | w x h |  pixel-ratio  
-|-|-
iPhone Xs Max   |  414 x 896  | 3
iPhone Xs Max   |  414 x 896  | 3
iPhone XR      |  412 x 896  | 2
iPhone Xs       |  375 x 812  | 3
iPhone X        |  414 x 812  | 3
iPhone 8  Plus  |  414 x 736  | 3
iPhone 7  Plus  |  414 x 736  | 3
iPhone 6s Plus  |  414 x 736  | 3
iPhone 8        |  375 x 667  | 2
iPhone 7        |  375 x 667  | 2
iPhone 6s       |  375 x 667  | 2
iPhone SE       |  320 x 568  | 2

### meta 配置

``` html
<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
```

``` html
- width=device-width
- initial-scale=1.0
- minimum-scale=1.0
- maximum-scale=1.0
- user-scalable=no
- viewport-fit=contain
- viewport-fit="contain" // 展示区域在安全区中，不包括齐刘海和底部手势区域
- viewport-fit="cover"   // 展示区域整个屏幕中，包括齐刘海和底部手势区域
```

### css3 适配 iPhone

``` css
/* iPhone XS Max */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-pixel-ratio: 3) {
 .tabbar {
  ...
 }
}
/* iPhone XR */
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-pixel-ratio: 2) {
 .tabbar {
  ...
 }
}
/* iPhone Xs 和 iPhone X */
@media only screen and (device-width: 414px) and (device-height: 812px) and (-webkit-pixel-ratio: 3) {
 .tabbar {
  ...
 }
}
```

### js 适配 iPhone

``` js
if(window.navigator) {
 let userAgent = window.navigator.userAgent
 let devicePixelRatio = window.devicePixelRatio
 let screenW = window.screen.width
 let screenH = window.screen.height
 let iPhoneReg = /iphone/g
 let isiPhoneXsMax = (iPhoneReg.test(userAgent) && devicePixelRatio && devicePixelRatio === 3 && screenW === 414 && screenH === 896)
 let isiPhoneXR = (iPhoneReg.test(userAgent) && devicePixelRatio && devicePixelRatio === 2 && screenW === 414 && screenH === 896)
 let isiPhoneX = (iPhoneReg.test(userAgent) && devicePixelRatio && devicePixelRatio === 3 && screenW === 414 && screenH === 812 )
}
```

## App 打包相关

- [DCloud开发者中心](https://dev.dcloud.net.cn/)
- [什么是自定义调试基座及使用说明](https://ask.dcloud.net.cn/article/35115)
- [uniapp云打包配置讲解](https://www.cnblogs.com/nanyang520/p/11930864.html)
- [DCloud appid 用途/作用/使用说明](https://ask.dcloud.net.cn/article/35907)
- [应用内展示的广告组件，可用于banner或信息流](https://uniapp.dcloud.io/component/ad)
- [uni-AD广告联盟使用指南及收益相关问题（uniad）](https://ask.dcloud.net.cn/article/36769)
- [iOS平台配置应用使用广告标识（IDFA）](https://ask.dcloud.net.cn/article/36107)

### 离线打包

- [App离线打包](https://nativesupport.dcloud.net.cn/AppDocs/README)
- [HTML 5+ SDK 更新日志](https://ask.dcloud.net.cn/article/103)
- [使用新版本5+SDK创建最简Android原生工程（Android studio）](https://ask.dcloud.net.cn/article/13232)
- [Android平台以WebView方式集成HTML5+SDK方法（不适合uni-app）](https://ask.dcloud.net.cn/article/80)
- [Android平台以Widget方式集成HTML5+SDK方法](https://ask.dcloud.net.cn/article/81)
- [uni-app离线打包Android平台注意事项](https://ask.dcloud.net.cn/article/35139)
- [uni-app 安卓离线打包详细教程](https://www.cnblogs.com/guiltyWay/p/10850503.html)
- [Android平台本地（离线）打包指南 - Android Studio](https://ask.dcloud.net.cn/article/508)

## 证书

### ios 证书

- [OS证书(.p12)和描述文件(.mobileprovision)申请](https://ask.dcloud.net.cn/article/152)

### Andorid 证书

Android证书，可以选择使用DCloud生成的公用证书或自己生成的证书，
两者不影响安装包的发布，唯一的差别就是证书中开发者和企业信息不同

- [Android平台签名证书(.keystore)生成指南](https://ask.dcloud.net.cn/article/35777#keyinfo)
- [Android平台云端打包 - DCloud公用证书（老版）](https://ask.dcloud.net.cn/article/68)
- [Android平台云端打包 - 公共测试证书](https://ask.dcloud.net.cn/article/36522)
- [公测证书下载地址](http://download.dcloud.net.cn/Test.keystore)
- [Java keyTool使用教程](https://blog.csdn.net/catcher92/article/details/120550222)
- [数字证书中keytool命令使用说明](https://blog.csdn.net/qq_36348637/article/details/80018294)
- [Keytool命令详解](https://blog.csdn.net/zlfing/article/details/77648430)

### 证书指纹说明

::: danger 证书指纹信息（Certificate fingerprints）

- MD5 ：证书的MD5指纹信息（安全码MD5）
- SHA1：证书的SHA1指纹信息（安全码SHA1）
- SHA256：证书的SHA256指纹信息（安全码SHA245）
:::

HBuilderX应用云端打包Android平台默认使用的DCloud公用证书，其信息如下：

### DCloud公用证书信息1

::: tip DCloud公用证书信息1

- 公用测试证书密码：123456
- 公用测试证书别名：test
- 公用测试证书信息：
- Keystore type: PKCS12  
- Keystore provider: SUN  
- Your keystore contains 1 entry  
- Alias name: test  
- Creation date: 2019-10-28  
- Entry type: PrivateKeyEntry  
- Certificate chain length: 1  
- Certificate[1]:  
- Owner: CN=Tester, OU=Test, O=Test, L=HD, ST=BJ, C=CN  
- Issuer: CN=Tester, OU=Test, O=Test, L=HD, ST=BJ, C=CN  
- Serial number: 7dd12840  
- Valid from: Fri Jul 26 20:52:56 CST 2019 until: Sun Jul 02 20:52:56 CST 2119  
- Certificate fingerprints:  

``` js
MD5: F9:F6:C8:1F:DB:AB:50:14:7D:6F:2C:4F:CE:E6:0A:A5  
SHA1: BB:AC:E2:2F:97:3B:18:02:E7:D6:69:A3:7A:28:EF:D2:3F:A3:68:E7  
SHA256: 24:11:7D:E7:36:12:BC:FE:AF:2A:6A:24:BD:04:4F:2E:33:E5:2D:41:96:5F:50:4D:74:17:7F:4F:E2:55:EB:26
```  

- Signature algorithm name: SHA256withRSA  
- Subject Public Key Algorithm: 2048-bit RSA key  
- Version: 3
:::

-----------------------------------------------------------

### DCloud公用证书2（将过期）

::: tip DCloud公用证书2

- 应用签名: 59201cf6589202cb2cdab26752472112
- 别名: hbuilder  
- 创建日期: 2014-9-29  
- 条目类型: PrivateKeyEntry  
- 证书链长度: 1  
- 证书[1]:  
- 所有者: CN=DH, OU=数字天堂（北京）网络技术有限公司, O=数字天堂（北京）网络技术有限公司, L=海淀, ST=北京, C=86  
- 发布者: CN=DH, OU=数字天堂（北京）网络技术有限公司, O=数字天堂（北京）网络技术有限公司, L=海淀, ST=北京, C=86  
- 序列号: 5174dc8b  
- 有效期为 Mon Apr 22 14:45:31 CST 2013 至 Sun Aug 23 14:45:31 CST 3012  
- 证书指纹:

``` js
MD5: 59:20:1C:F6:58:92:02:CB:2C:DA:B2:67:52:47:21:12  
SHA1: BA:AD:09:3A:82:82:9F:B4:32:A7:B2:8C:B4:CC:F0:E9:F3:7D:AE:58  
SHA256: D7:5C:1F:A2:B9:AE:86:7C:E6:88:A8:AD:C6:DE:AC:7C:D6:BA:96:F4:3A:75:1F:D1:0A:20:0F:A5:97:4A:C6:36
```

- 签名算法名称: SHA1withRSA  
- 主体公共密钥算法: 1024 位 RSA 密钥  
- 版本: 3
:::

## 开源项目

- [仿奈雪の茶前端模板](https://ext.dcloud.net.cn/plugin?id=1807)
- [基于uni-app多平台管理系统模板uniapp-admin](https://juejin.im/post/5db45f155188257e43558cb0)
- [uni-app聊天室|vue+uniapp仿微信聊天实例|uniapp仿微信App界面](https://www.cnblogs.com/xiaoyan2017/p/11645467.html)
- [vue+UniApp 仿抖音 App 小视频|uniapp 直播界面](https://www.v2ex.com/t/618985)
- [uniapp+nvue仿抖音/陌陌直播|uni-app小视频](https://juejin.im/post/5dc97bfef265da4d026271b5#heading-4)

## 常见问题

- [Configuration 'compile' is obsolete and has been replaced with 'implementation' and 'api'](https://blog.csdn.net/Song_74110/article/details/80387307)
- [解决uni-app使用vuex刷新后数据失效](https://segmentfault.com/a/1190000020880434?utm_source=tag-newest)
- [Android平台设置UrlSchemes，实现被第三方应用调用](https://ask.dcloud.net.cn/article/409)
- [兼容 PC 端的 touch 事件 - touchemulator](https://github.com/dcloudio/touchemulator)
- [微信小程序-StatusCodeError: 400 - "{\"code\":400002,\"error\":\"请检查 project.config.json 是否存在及是否有效\"}"](https://blog.csdn.net/Lemon_xueyf/article/details/100185588)
- [uni-app运行环境版本和编译器版本不一致的问题](https://ask.dcloud.net.cn/article/35627)
- [uni-app 常见问题](https://uniapp.dcloud.io/faq)
