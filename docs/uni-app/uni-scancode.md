# 扫码

## 扫码 功能模块配置

首先 扫码功能 属于 App模块配置 的一部分，点击项目根目录：
manifest.json -> App 模块配置 -> 打包模块配置 -> ☑ Barcode(扫码)

或者 手动添加 在manifest.json 源码视图中手动添加

- [App 功能模块 配置](https://uniapp.dcloud.net.cn/tutorial/app-modules.html#%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97)

``` json
// manifest.json
{
  "app-plus": {
    "modules": {
      "Barcode": {
        "desciption": "扫码功能"
      }
    }
  }
}
```

## 使用 uni.scanCode

- [uni.scanCode](https://uniapp.dcloud.net.cn/api/system/barcode.html#scancode)

## 获取 APP 授权设置

- [uni.getAppAuthorizeSetting 获取 APP 授权设置](https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html)
- [App权限判断和提示](https://ext.dcloud.net.cn/plugin?id=594)
- [uni.getAppAuthorizeSetting](https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html)
- [uni.authorize](https://uniapp.dcloud.net.cn/api/other/authorize.html#authorize)
- [权限 scope 列表](https://uniapp.dcloud.net.cn/api/other/authorize.html#scope-%E5%88%97%E8%A1%A8)
- [uni.getSetting](https://uniapp.dcloud.net.cn/api/other/setting.html#getsetting)
- [uni.openSetting](https://uniapp.dcloud.net.cn/api/other/setting.html#opensetting)

## 使用 nvue 的 barcode 组件

- [Barcode - app端nvue专用的扫码组件](https://uniapp.dcloud.net.cn/component/barcode.html)
- [uni-app 学集（第二章）nvue、组件](https://www.cnblogs.com/lzhCreate/p/13765622.html)
- [app 场景下 uni-app 扫码记录](https://www.jb51.net/article/256252.htm)

## 使用 5+ plus barcode

- [使用5+的原生界面控件（map、video、livepusher、barcode、nview](https://ask.dcloud.net.cn/article/35036)
- [barcode](https://www.html5plus.org/doc/zh_cn/barcode.html)

## 支付宝扫码插件

- [支付宝原生扫码插件](https://ext.dcloud.net.cn/plugin?id=2636)
- [移动开发平台 mPaaS](https://mpaas.console.aliyun.com/)
- [扫一扫简介](https://help.aliyun.com/document_detail/52296.html?spm=a2c4g.49761.0.0.5aee57f7VvjFEo)
- [uni-app 引入支付宝原生扫码插件步骤详解](https://www.jb51.net/article/256258.htm)
