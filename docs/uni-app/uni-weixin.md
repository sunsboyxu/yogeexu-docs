# uni-app 微信小程序

- [小程序运行机制](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)

## 微信小程序 全局配置

- [微信小程序 全局配置](https://uniapp.dcloud.net.cn/collocation/manifest.html#mp-weixin)

``` json
{
  "mp-weixin": {
  "appid": "wxxxxxxxxxxxx",
  // 编译到微信小程序平台下的项目设置
  "setting": {
   "urlCheck": false, // 是否检查安全域名和 TLS 版本
   "es6": true, //是否  ES6 转 ES5，使用微信小程序手势组件会强制开启 ES6 转 ES5
   "postcss": true, // 上传代码时样式是否自动补全
   "minified": true, // 上传代码时是否自动压缩
   "bigPackageSizeSupport": true // 预览及真机调试时包体积上限是否调整为4M，默认为true（HBuilderX 3.5.5+）
  },
  "usingComponents": true,
  "permission": {
   "scope.userLocation": {
    "desc": "需要定位xxxxxxxx"
   }
  },
  // 微信小程序需要在后台使用的能力
  "requiredPrivateInfos": ["getLocation"],
  "uniStatistics": {
   "enable": false
  },
  "plugins": {},
  // // 配置云开发目录
  // 配置目录之后，需要在项目根目录新建 vue.config.js 配置对应的文件编译规则
  "cloudfunctionRoot": "cloudfunctionRoot"
 },
}
```

``` js
// vue.config.js
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const isPro = process.env.NODE_ENV === 'production'
{
  plugins: [
    // 云开发，配置对应的文件编译规则
    new CopyWebpackPlugin([{
      from: resolve('../cloudfunctions'),
      to: path.join(__dirname, 'unpackage', 'dist', isPro ? 'build' : 'dev', process.env.UNI_PLATFORM, 'cloudfunctions')
    }])
  ]
}
```
