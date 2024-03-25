# vue 插件使用

## 1 vue-i18n

Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中

- [vue-i18n](https://kazupon.github.io/vue-i18n/zh/)

### vue-i18n 安装

``` bash
npm install vue-i18n@8.9.0
yarn add vue-i18n@8.9.0
```

### vue-i18n 初始化

- 在项目 src 目录下，新建 src/i18n 目录，新建 index.js
- src/i18n 目录下，新建 zh-CN.js 和 en-US.js

``` js
// // src/i18n/zh-CN.js
export default {
 btn: {
  submit: '提交'
 },
 form: {
  username: '用户名'
 },
 placeholder: {
  username: '请输入用户名'
 }
}
```

``` js
// // src/i18n/en-US.js
export default {
 btn: {
  submit: 'Submit'
 },
 form: {
  username: 'Username'
 },
 placeholder: {
  username: 'Username is required'
 }
}
```

``` js
// src/i18n/index.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './zh-CN'
import en from './en-US'

Vue.use(VueI18n)

const i18n = new VueI18n({
 locale: 'zh',
 messages: { zh, en }
}) 

export default i18n
```

### 引用 i18n

``` js
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
```

### 页面使用 i18n

``` html
<template>
<div>
 <el-form>
  <el-form-item :label="$t('form.username')">
   <el-input :placeholder="$t('placeholder.username')"/>
  </el-form-item>
 </el-form>
 <el-button type="primary">{{$t('btn.submit')}}</el-button>
</div>
</template>
```

## 2 富文本插件

### 2-1 vue 使用 UEditor

UEditor 并不支持通过 npm 的方式来安装，vue-ueditor-wrap 也只是一个 Vue 组件，
组件本身并不是 UEditor 的 Vue 版。了解 UEditor 基本使用，请参考 UEditor 官网
在vue中使用 UEditor 需要前后端配合

- [vue-ueditor-wrap vue3版本](https://hc199421.gitee.io/vue-ueditor-wrap/#/home)
- [vue-ueditor-wrap 组件属性-参数-事件说明](https://hc199421.gitee.io/vue-ueditor-wrap/#/api)
- [vue-ueditor-wrap vue2版本](https://github.com/HaoChuan9421/vue-ueditor-wrap/tree/2.x)
- [常见问题](https://hc199421.gitee.io/vue-ueditor-wrap/#/faq)
- [UEditor官网](http://fex.baidu.com/ueditor/#start-start)
- [UEditor 服务端代码 Node.js 版本](https://github.com/HaoChuan9421/ueditor-koa-server)

### 安装 vue-ueditor-wrap

``` bash
yarn add vue-ueditor-wrap@2.x 
```

### 下载 UEditor 资源包

[vue-ueditor-wrap 下载 UEditor 资源包](https://hc199421.gitee.io/vue-ueditor-wrap/#/home)，选择对应的服务器版本
说明：不同语言的 UEditor，前端部分，并无区别，只是包含了对应语言的 服务端 示例代码。UEditor 官方并没有提供 Node.js 版的示例代码，有需求的同学可以参考
[ueditor-koa-server](https://github.com/HaoChuan9421/ueditor-koa-server)
将 UEditor 资源包 放到项目 public目录
[静态资源](https://cli.vuejs.org/zh/guide/html-and-static-assets.html#public-%E6%96%87%E4%BB%B6%E5%A4%B9) 目录下，
或者服务器静态资源目录，或者 阿里oss等

``` md
项目目录
public
 UEditor
  ... UEditor 资源包文件
 favicon.ico
 index.html 
src
 article.vue
 ...
 main.js
```

### 页面使用

``` html
<template>
 <div class="form-wrap">
  <h3>发表文章</h3>
  <el-form
   ref="refForm"
   :model="formModel"
   :rules="formRules"
   label-width="100px"
   label-position="left"
  >
   <el-form-item class="isc-form-item-border" prop="title" label="栏目标题">
    <el-input class="isc-input-border" v-model="formModel.title" placeholder="请输入栏目标题" />
   </el-form-item>
   <vue-ueditor-wrap class="isc-ueditor" v-model="formModel.content"
     editor-id="isc-ueditor-article"
     :config="editorConfig"/>
   <el-form-item>
    <el-row type="flex" justify="center">
     <el-button class="isc-btn" @click="handlePublish">立即发布</el-button>
    </el-row>
   </el-form-item>
  </el-form>
 </div>
</template>

<script>
 export default {
  data() {
   return {
    formModel: {
     title: '',
     content: '',
    },
    formRules: {
     title: [{ required: true, message: '请输入栏目标题', trigger: 'blur' }],
     content: [{ required: true, message: '请填写文章内容', trigger: 'change' }],
    },
    editorConfig: {
     // UEditor 静态资源路径（本地调试路径）
     // UEDITOR_HOME_URL: '/UEditor/',
     // UEditor 静态资源路径（阿里oss路径），服务器静态资源路径类似
     UEDITOR_HOME_URL: 'https://ali.os.com/resource/UEditor/'
     // 服务端接口
     serverUrl: 'http://xxx.com/api/upload'
    }
   }
  }
 }
</script>

```

### 使用 图片上传等功能说明

```html
如果需要使用 图片上传的功能，页面加载时，会自动向 服务端接口地址：，发送一个 get 请求，
请求参数有为：/api/upload?action=config&callback=bd__editor__aay9ux, 后端根据请求参数 action=upload,配置一段 json 文件，
或者 读取一个 .json文件，stringify 下，放入 传给后端的 callback，然后一起返回给 前端
接口返回 bd__editor__aay9ux({ ... })
```

::: danger callback 说明
callback 函数是自动生成的
:::

post请求用于上传图片，图片名称的字段在 imageFieldName：'后端自已上传文件的字段名称' 中声明的，
该请求会把：如 上传图片 action=uploadimage 上传视频 action=uploadvideo
放在请求 url 中，数据放在 请求 body 中

``` js
// 接口返回 string 类型 bd__editor__aay9ux({ ... }) 即可
bd__editor__aay9ux({
  "imageActionName": "uploadimage",
  "imageFieldName": "upfile",
  "imageMaxSize": 2048000,
  "imageAllowFiles": [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp"
  ],
  "imageCompressEnable": true,
  "imageCompressBorder": 1600,
  "imageInsertAlign": "none",
  "imageUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "imagePathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
  "scrawlActionName": "uploadscrawl",
  "scrawlFieldName": "upfile",
  "scrawlPathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
  "scrawlMaxSize": 2048000,
  "scrawlUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "scrawlInsertAlign": "none",
  "snapscreenActionName": "uploadimage",
  "snapscreenPathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
  "snapscreenUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "snapscreenInsertAlign": "none",
  "catcherLocalDomain": [
    "127.0.0.1",
    "localhost",
    "img.baidu.com"
  ],
  "catcherActionName": "catchimage",
  "catcherFieldName": "source",
  "catcherPathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}",
  "catcherUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "catcherMaxSize": 2048000,
  "catcherAllowFiles": [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp"
  ],
  "videoActionName": "uploadvideo",
  "videoFieldName": "upfile",
  "videoPathFormat": "/ueditor/php/upload/video/{yyyy}{mm}{dd}/{time}{rand:6}",
  "videoUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "videoMaxSize": 102400000,
  "videoAllowFiles": [
    ".flv",
    ".swf",
    ".mkv",
    ".avi",
    ".rm",
    ".rmvb",
    ".mpeg",
    ".mpg",
    ".ogg",
    ".ogv",
    ".mov",
    ".wmv",
    ".mp4",
    ".webm",
    ".mp3",
    ".wav",
    ".mid"
  ],
  "fileActionName": "uploadfile",
  "fileFieldName": "upfile",
  "filePathFormat": "/ueditor/php/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}",
  "fileUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "fileMaxSize": 51200000,
  "fileAllowFiles": [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp",
    ".flv",
    ".swf",
    ".mkv",
    ".avi",
    ".rm",
    ".rmvb",
    ".mpeg",
    ".mpg",
    ".ogg",
    ".ogv",
    ".mov",
    ".wmv",
    ".mp4",
    ".webm",
    ".mp3",
    ".wav",
    ".mid",
    ".rar",
    ".zip",
    ".tar",
    ".gz",
    ".7z",
    ".bz2",
    ".cab",
    ".iso",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".pdf",
    ".txt",
    ".md",
    ".xml"
  ],
  "imageManagerActionName": "listimage",
  "imageManagerListPath": "/ueditor/php/upload/image/",
  "imageManagerListSize": 20,
  "imageManagerUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "imageManagerInsertAlign": "none",
  "imageManagerAllowFiles": [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp"
  ],
  "fileManagerActionName": "listfile",
  "fileManagerListPath": "/ueditor/php/upload/file/",
  "fileManagerUrlPrefix": "http://suzhoubak.ahxingdian.com",
  "fileManagerListSize": 20,
  "fileManagerAllowFiles": [
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".bmp",
    ".flv",
    ".swf",
    ".mkv",
    ".avi",
    ".rm",
    ".rmvb",
    ".mpeg",
    ".mpg",
    ".ogg",
    ".ogv",
    ".mov",
    ".wmv",
    ".mp4",
    ".webm",
    ".mp3",
    ".wav",
    ".mid",
    ".rar",
    ".zip",
    ".tar",
    ".gz",
    ".7z",
    ".bz2",
    ".cab",
    ".iso",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".pdf",
    ".txt",
    ".md",
    ".xml"
  ]
})
```

### 后端 config.json 说明

``` json
/* 前后端通信相关的配置,注释只允许使用多行方式 */
{
    /* 上传图片配置项 */
    "imageActionName": "uploadimage", /* 执行上传图片的action名称 */
    "imageFieldName": "upfile", /* 提交的图片表单名称 */
    "imageMaxSize": 2048000, /* 上传大小限制，单位B */
    "imageAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 上传图片格式显示 */
    "imageCompressEnable": true, /* 是否压缩图片,默认是true */
    "imageCompressBorder": 1600, /* 图片压缩最长边限制 */
    "imageInsertAlign": "none", /* 插入的图片浮动方式 */
    "imageUrlPrefix": "", /* 图片访问路径前缀 */
    "imagePathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
           /* {filename} 会替换成原文件名,配置这项需要注意中文乱码问题 */
           /* {rand:6} 会替换成随机数,后面的数字是随机数的位数 */
           /* {time} 会替换成时间戳 */
           /* {yyyy} 会替换成四位年份 */
           /* {yy} 会替换成两位年份 */
           /* {mm} 会替换成两位月份 */
           /* {dd} 会替换成两位日期 */
           /* {hh} 会替换成两位小时 */
           /* {ii} 会替换成两位分钟 */
           /* {ss} 会替换成两位秒 */
           /* 非法字符 \ : * ? " < > | */
           /* 具请体看线上文档: fex.baidu.com/ueditor/#use-format_upload_filename */
         
    /* 涂鸦图片上传配置项 */
    "scrawlActionName": "uploadscrawl", /* 执行上传涂鸦的action名称 */
    "scrawlFieldName": "upfile", /* 提交的图片表单名称 */
    "scrawlPathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
    "scrawlMaxSize": 2048000, /* 上传大小限制，单位B */
    "scrawlUrlPrefix": "", /* 图片访问路径前缀 */
    "scrawlInsertAlign": "none",

    /* 截图工具上传 */
    "snapscreenActionName": "uploadimage", /* 执行上传截图的action名称 */
    "snapscreenPathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
    "snapscreenUrlPrefix": "", /* 图片访问路径前缀 */
    "snapscreenInsertAlign": "none", /* 插入的图片浮动方式 */

    /* 抓取远程图片配置 */
    "catcherLocalDomain": ["127.0.0.1", "localhost", "img.baidu.com"],
    "catcherActionName": "catchimage", /* 执行抓取远程图片的action名称 */
    "catcherFieldName": "source", /* 提交的图片列表表单名称 */
    "catcherPathFormat": "/ueditor/php/upload/image/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
    "catcherUrlPrefix": "", /* 图片访问路径前缀 */
    "catcherMaxSize": 2048000, /* 上传大小限制，单位B */
    "catcherAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 抓取图片格式显示 */

    /* 上传视频配置 */
    "videoActionName": "uploadvideo", /* 执行上传视频的action名称 */
    "videoFieldName": "upfile", /* 提交的视频表单名称 */
    "videoPathFormat": "/ueditor/php/upload/video/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
    "videoUrlPrefix": "", /* 视频访问路径前缀 */
    "videoMaxSize": 102400000, /* 上传大小限制，单位B，默认100MB */
    "videoAllowFiles": [
        ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
        ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid"], /* 上传视频格式显示 */

    /* 上传文件配置 */
    "fileActionName": "uploadfile", /* controller里,执行上传视频的action名称 */
    "fileFieldName": "upfile", /* 提交的文件表单名称 */
    "filePathFormat": "/ueditor/php/upload/file/{yyyy}{mm}{dd}/{time}{rand:6}", /* 上传保存路径,可以自定义保存路径和文件名格式 */
    "fileUrlPrefix": "", /* 文件访问路径前缀 */
    "fileMaxSize": 51200000, /* 上传大小限制，单位B，默认50MB */
    "fileAllowFiles": [
        ".png", ".jpg", ".jpeg", ".gif", ".bmp",
        ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
        ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
        ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
        ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
    ], /* 上传文件格式显示 */

    /* 列出指定目录下的图片 */
    "imageManagerActionName": "listimage", /* 执行图片管理的action名称 */
    "imageManagerListPath": "/ueditor/php/upload/image/", /* 指定要列出图片的目录 */
    "imageManagerListSize": 20, /* 每次列出文件数量 */
    "imageManagerUrlPrefix": "", /* 图片访问路径前缀 */
    "imageManagerInsertAlign": "none", /* 插入的图片浮动方式 */
    "imageManagerAllowFiles": [".png", ".jpg", ".jpeg", ".gif", ".bmp"], /* 列出的文件类型 */

    /* 列出指定目录下的文件 */
    "fileManagerActionName": "listfile", /* 执行文件管理的action名称 */
    "fileManagerListPath": "/ueditor/php/upload/file/", /* 指定要列出文件的目录 */
    "fileManagerUrlPrefix": "", /* 文件访问路径前缀 */
    "fileManagerListSize": 20, /* 每次列出文件数量 */
    "fileManagerAllowFiles": [
        ".png", ".jpg", ".jpeg", ".gif", ".bmp",
        ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
        ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
        ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
        ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"
    ] /* 列出的文件类型 */

}
```

## 3 轮播插件

vue-awesome-swiper项目将被弃用，取而代之的是[Swiper Vue 组件](https://swiperjs.com/vue)，
这是一个 TypeScript 友好的项目，它是 [Swiper](https://swiperjs.com/) 提供的最新官方版本。
为了更好的稳定性，请尽快迁移。
vue-awesome-swiper发布了最新版本v5.0.0用于（桥）过渡。
值得注意的是，这个版本的 API 与之前的版本完全不兼容，只是重新导出 swiper/vue，只支持 Vue3，
也就是说只有 的函数swiper/vue可用。例如，以下代码在vue-awesome-swiper@5.0.0. 如果您想查看 Swiper API 的更新目录，请参阅 Swiper 更新日志

-[vue-awesome-swiper vue3版本](https://github.com/surmon-china/vue-awesome-swiper)

以下是 vue2 使用 swiper + vue-awesome-swiper 的使用说明

### 3-1 swiper 轮播插件

::: tip swiper 配置 vue-awesome-swiper 的版本说明

- Swiper 5-6 配合 [vue-awesome-swiper@4.1.1](https://github.com/surmon-china/vue-awesome-swiper/tree/v4.1.1)
- Swiper 4.x 配置 [vue-awesome-swiper@3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3)
- Swiper 3.x 配合 [vue-awesome-swiper@2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7)
:::

### swiper@5.4.5 + vue-awesome-swiper@4.1.1

安装 swiper 和 vue-awesome-swiper

``` bash
yarn add swiper@5.4.5 vue-awesome-swiper@4.1.1 -S
```

页面使用

``` html
<template>
 <div class="swiper-wrap" style="height: 393px">
  <swiper
   ref="refSwiper"
   v-if="swiperList.length"
   :options="swiperOptions"
   :auto-update="true"
   :auto-destroy="true"
   :delete-instance-on-destroy="true"
   :cleanup-styles-on-destroy="true"
   @slideChangeTransitionEnd="swiperChange('refSwiper', 'activeIndex')">
   <swiper-slide v-for="item in swiperList" :key="item.id">
    <div class="isc-swiper-item">
     <template v-if="item.url">
      <a :href="item.url" target="_blank">
       <img :src="item.coverImage | formatUploadImage" alt="" />
      </a>
     </template>
     <template v-else>
      <img :src="item.coverImage | formatUploadImage" alt="" @click="goDetail(item.id)"/>
     </template>
    </div>
   </swiper-slide>
   <div class="swiper-button-prev" slot="button-prev"></div>
   <div class="swiper-button-next" slot="button-next"></div>
   <!-- <div class="swiper-pagination" slot='pagination'></div> -->
  </swiper>
  <div class="swiper-title-1" v-if="swiperList[activeIndex].title">
   <div class="txt-one-line">
    {{ swiperList[activeIndex].title }}
   </div>
  </div>
  <div class="swiper-pagination isc-swiper-pagination-1"></div>
 </div>
</template>

<script>
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
 import 'swiper/css/swiper.min.css'
 export default {
  components: {
   swiper,
   swiperSlide
  },
  data() {
   return {
    activeIndex: 0,
    swiperList: [],
    swiperOptions: Object.freeze({
     autoplay: {
      delay: 3000
     },
     loop: true,
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
     },
     pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
     }
    }),
   }
  },
  methods: {
   swiperChange(refName, dataName) {
    // 开启 loop: true，就获取 realIndex
    this[dataName] = this.$refs[refName].swiper.realIndex
   },
  }
 }
</script>
```

相关样式可以根据项目需求自行调整

``` css
.swiper-wrap {
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
  position: relative;
 &.swiper-wrap-no-hidden {
  overflow: visible;
 }
  .swiper-container {
    height: 100%;
    overflow: hidden;
    .isc-swiper-item {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #fff;
    }
  }
 .swiper-title-1 {
    position: absolute;
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    left: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    padding-left: 12px;
    .txt-one-line {
      width: 68%;
    }
  }
 .swiper-title-2 {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  justify-content: center;
  }
 .swiper-pagination {
  &.isc-swiper-pagination-1 {
   z-index: 10;
   text-align: right;
   width: 100%;
   height: 40px;
   bottom: 0;
   right: 0;
   padding-right: 20px;
   line-height: 40px;
  }
  &.isc-swiper-pagination-2 {
   position: relative;
  }
  .swiper-pagination-bullet {
      background: #fff;
      opacity: 1;
      & + .swiper-pagination-bullet {
        margin-left: 10px;
      }
    }
    .swiper-pagination-bullet-active {
      background: #48a8f0;
    }
 } 
}
```

### swiper@3.4.2

## 图片裁剪

- [vue图片裁剪](https://www.jianshu.com/p/81eac24fcc38)
- [vue-cropper](https://github.com/xyxiao001/vue-cropper)
- [图片裁剪组件 vue-cropper + element-ui上传](https://blog.csdn.net/xjf106/article/details/100155373)
- [基于vue的图片裁剪vue-cropper使用](https://blog.csdn.net/qq_41107231/article/details/109725839)
- [基于cropper.js封装vue在线图片裁剪组件](https://www.jianshu.com/p/ffe2388605ac)
- [基于cropperjs实现Vue图片裁剪压缩上传功能](https://www.jianshu.com/p/4c5b3faf919d)
- [Vue图片裁剪上传组件](https://www.jianshu.com/p/a2c7cdf8f541)

## 表格插件

- [Vue+LuckSheet 前端应用在线报表](https://www.jianshu.com/p/bda785731c76)

## 抽奖插件

- [lucky-canvas抽奖插件](https://100px.net/)

## 公告、无缝滚动

- [vue-seamless-scroll](https://github.com/chenxuan0000/vue-seamless-scroll)
- [vue-seamless-scroll文档](https://chenxuan0000.github.io/vue-seamless-scroll/zh/)

## 表单

- [表单校验器](https://github.com/yiminghe/async-validator)
