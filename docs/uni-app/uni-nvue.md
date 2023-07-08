# nvue

- [nvue介绍](https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html)

## nvue 全局配置

- [manifest.json 应用配置](https://uniapp.dcloud.net.cn/collocation/manifest.html)

manifest.json 文件是应用的配置文件，用于指定应用的名称、图标、权限等。
HBuilderX 创建的工程此文件在根目录，CLI 创建的工程此文件在 src 目录

nvue 可在 manifest.json 进行全局的统一配置

``` json
// manifest.json
{
  "appid": "__UNI__XXXXXX",
  "name": "应用名称，如uni-app",
  "description": "应用描述",
  "versionName": "1.0.0",
  "versionCode": "100",
  "app-plus": {
    "usingComponents": true,
    // nvue 编译模式，可选值，weex ：老编译模式，uni-app： 新编译模式，默认为 weex 。编译模式区别详情
    // https://ask.dcloud.net.cn/article/36074
    "nvueCompiler": "uni-app",
    //  nvue 样式编译模式，可选值，weex ：老编译模式，uni-app： 新编译模式，默认为 weex
    // https://ask.dcloud.net.cn/article/38751
    "nvueStyleCompiler": "uni-app",
    "nvue": { // nvue页面相关配置
      "flex-decoration": "row" // nvue页面的 flex-direction 默认值，可取值 row、row-reverse、column、column-reverse
    },
    // V3 版本编译器
    // https://ask.dcloud.net.cn/article/36599
    "compilerVersion" : 3,
    // nvue首页启动模式，compilerVersion:3 时生效，可取值 normal、fast
    // https://ask.dcloud.net.cn/article/36749
    "nvueLaunchMode": "fast",
    // 分包配置，是否开启分包优化
    // https://uniapp.dcloud.io/collocation/pages.html#subpackages
    "optimization": {         
        "subPackages": true
    },
    "safearea": {
      "background": "#f8f8f8",
      // 底部安全区域偏移，"none"表示不空出安全区域，"auto"自动计算空出安全区域，默认值为"none"
      "bottom": {  
        "offset": "none"
      }
    }
  }
}
```

- [nvueCompiler - nvue不同编译模式介绍](https://ask.dcloud.net.cn/article/36074)
- [nvueStyleCompiler - nvue 样式编译模式](https://ask.dcloud.net.cn/article/38751)
- [compilerVersion - V3版本编译器](https://ask.dcloud.net.cn/article/36599)
- [nvueLaunchMode - nvue 首页快速启动模式](https://ask.dcloud.net.cn/article/36749)

## nvue 样式

- [nvue样式](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)

元素默认的是 flex-decoration: column 样式
文字大小/文字样色 需要 使用 text 标签来控制

### 文字溢出省略号

``` html
<template>
  <view class="desc">
    <text class="desc-text">{{ item.desc }}</text>
  </view>
</template>

<style lang="scss">
  .desc {
    flex-direction: row;
    flex: 1;
    .desc-text {
     font-size: 26rpx;
     text-overflow: ellipsis;
     flex: 1;
     lines: 1;
    }
   }
</style>
```
