# vue3相关插件

## vueuse

- [vueuse](https://vueuse.org/)

## pinia

- [pinia](https://www.jianshu.com/p/c7e6386577ce)

## 1 vue-i18n 插件

Vue I18n v9（适用于 Vue 3）中提供的大多数 API 都努力保持兼容性，以减轻从 v8（适用于 Vue 2）迁移的痛苦，
Vue I18n 不再是一个类，而是一组函数。而不是写new VueI18n()，你现在必须调用 createI18n

- [vue-i18n(v9)](https://vue-i18n.intlify.dev/)
- [vue-i18n(v9)的变化](https://vue-i18n.intlify.dev/guide/migration/breaking.html)

### vue-i18n（v9） 安装

``` bash
npm install vue-i18n
yarn add vue-i18n
```

### vue-i18n 初始化

- /src 目录下，新建 src/i18n 目录，新建 index.js
- /src/i18n 目录下，新建两个语言包 zh-CN.js 和 en-US.js

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
  },
  lang: {
    currentTip: '当前语言: '
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
  },
  lang: {
    currentTip: 'Current lang: '
  }
}
```

``` js
// src/i18n/index.js
import zh from './zh-CN'
import en from './en-US'
// 不写 index 会有警告 ⚠️ 提示
// import { createI18n } from 'vue-i18n'
import { createI18n } from 'vue-i18n/index'

export function setupI18n(app) {
 const i18n = createI18n({
  // 默认语言
  locale: 'zh',
  // 语言包
  messages: { zh, en },
  // 定义方法，template 中可以直接使用 $t('xx.xx')
  $t(key) {
   return this.messages[this.locale.value][key]
  }
 })
 app.use(i18n)
}

// 或者
// export default {
//  install: app => {
//   ...
//  }
// }
```

### 引用 i18n

``` js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupI18n } from './i18n'

const app = createApp(App)

app.use(setupI18n)
app.use(router)
app.use(store)
  
app.mount('#app')
```

### 页面使用 i18n，切换语言

``` html
<template>
  <div>
    <el-button type="primary">{{$t('btn.submit')}}</el-button>
    <el-row>
      <el-switch
      v-model="lang"
      inline-prompt
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="Cn"
      active-value="zh"
      inactive-text="En"
      inactive-value="en"
    />
    </el-row>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
// 不写 index 会有警告 ⚠️ 提示
// import { useI18n } from 'vue-i18n'
import { useI18n } from 'vue-i18n/index'
import { ElMessage } from 'element-plus'

const lang = ref('zh')
const i18n = useI18n()
const { t } = i18n

watch(() => lang.value, (val) => {
  console.log('当前语言:' + val)
  ElMessage.success( t('lang.currentTip') + val)
  i18n.locale.value = val
})
</script>

<style lang="scss"></style>
```

## 2 swiper 插件

- [swiperjs](https://swiperjs.com/)

### 安装 swiper

```bash
// swiper@8.0.6
yarn add swiper -S
npm install swiper -S
```

### 使用 swiper

``` html
<template>
 <div>
  <swiper
   :modules="swiperModules"
   :pagination="paginationOptions"
   :autoplay="autoplayOptions"
   :loop="true"
   @swiper="onSwiper"
   @slideChange="onSliderChange"
  >
   <swiper-slide v-for="item in imageList" :key="item">
    <img :src="item" alt="" />
   </swiper-slide>
  </swiper>
 </div>
</template>

<script setup>
 import { reactive, toRefs } from 'vue'
 import { Swiper, SwiperSlide } from 'swiper/vue'
 import { Pagination, Autoplay } from 'swiper'
 
 import 'swiper/css'
 import 'swiper/css/pagination' 
 
 const state = reactive({
   imageList: [
     'https://xxx.img1.jpg',
     'https://xxx.img2.jpg',
   ],
   swiperModules: [Pagination, Autoplay],
   paginationOptions: {
     el: '.swiper-pagination',
     clickable: true
   },
   autoplayOptions: {
     delay: 3000
   }
  const onSwiper = (e) => {
    console.log(e)
  }
  const onSliderChange = (e) => {
    console.log(e)
  }
  const {
    imageList,
    swiperModules,
    paginationOptions,
    autoplayOptions
  } = toRefs(state)
</script>
```

## 富文本插件

### wangEditor

- [wangEditor](https://www.wangeditor.com/v5/)
- [在 Vue3 中使用 wangEditor v5](https://clinfc.github.io/wangeditor5-for-vue3)

``` html
<template>
 <div v-if="state.isEditorShow" class="isc-editor">
  <Toolbar
   editor-id="editor-top"
   mode="default"
   style="z-index: 9999; border-bottom: 1px solid #ccc"
  />
  <Editor
   :default-config="editorConfig"
   :default-html="state.content"
   editor-id="editor-top"
   mode="default"
   style="z-index: 9999; height: 500px"
  />
 </div>
</template>
```

``` js
<script setup>
import { Editor, Toolbar, getEditor } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
// import { i18nChangeLanguage, i18nGetResources } from '@wangeditor/editor'
const state = reactive({
    isEditorShow: false,
  content: ''
})

const editorConfig = {
 MENU_CONF: {
  uploadImage: {
   async customUpload(file, insertFn) {
    // file 即选中的文件
    // 自定义上传到服务器，并得到图片 url alt href
    // 最后插入图片 insertFn(url, alt, href)
    const formData = new FormData()
    formData.append('file', file)
    uploadApi(formData).then((res) => {
     console.log(res)
     if (res.code === 200) {
      insertFn(res.data.url, file.name, res.data.url)
     }
    })
   },
  },
 },
}

// 获取数据
 const getData = () => {
  state.content = '<p>test</p>'
  state.isEditorShow = true
 }

// 保存
  const handleSave = () => {
    state.content = getEditor('editor-top').getHtml()
  }

</script>
```

### tinymce

- [tiny](https://www.tiny.cloud/)
- [tinymce中文文档](http://tinymce.ax-z.cn/)
- [vue-cloud](https://www.tiny.cloud/docs/tinymce/6/vue-cloud/)
- [tinymce v5](https://www.tiny.cloud/docs/)
- [tinymce-vue](https://github.com/tinymce/tinymce-vue)
- [tinymce-vue](https://www.tiny.cloud/docs/integrations/vue/#tinymcevuejsintegrationquickstartguide)
- [tinymce语言包](https://www.tiny.cloud/get-tiny/language-packages/)
- [tinymce标准配置，和自定义每个按钮配置](https://blog.csdn.net/ljh101/article/details/112373030)
- [](https://blog.csdn.net/sumuyun/article/details/122169970)
- [vue3.x中使用tinymce富文本](https://www.jianshu.com/p/9be8f1ec2219)
- [vue使用tinymce5富文本编辑器](https://blog.csdn.net/qq_40323256/article/details/116075539)

### tinymce-vue 安装

``` bash
npm install @tinymce/tinymce-vue@4 -S
```

### tinymce-vue 使用

``` html
<template>
 <div>
  <editor ref="tinyEditor" v-model="state.editorContent" :api-key="tinyConf.apiKey" :init="tinyConf.init" style="width: 100%" />
 </div>
</template>
```

``` js
<script setup>
import Editor from '@tinymce/tinymce-vue'
const tinyEditor = ref(null)
const state = reactive({
 editorContent: ''
})
const tinyConf = reactive({
    apiKey: 'icmh1x4m4rvpi8ipy6z4zrlvcx2jvky2m8wb8bubi8ib1gcn',
    init: {
      language: language.value === 'zh' ? 'zh_CN' : 'en', //语言类型
      placeholder: '在这里输入文字',
      min_width: 320,
      min_height: 600,
      height: 500, // 引入autoresize插件时，此属性失效
      resize: 'both', // 编辑器宽高是否可变: false|true|'both' 'both'-宽高均可
      branding: false, // tiny 技术支持信息是否显示
      statusbar: false, // 最下方的元素路径和字数统计那一栏是否显示
      elementpath: false, // 元素路径是否显示
      font_formats: `微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;
      苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;
      宋体=simsun,serif;
      仿宋体=FangSong,serif;
      黑体=SimHei,sans-serif;
      Arial=arial,helvetica,sans-serif;
      Arial Black=arial black,avant garde;
      Book Antiqua=book antiqua,palatino;`, //字体样式
      // 插件配置 axupimgs indent2em
      plugins: `print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave emoticons`,
      // 工具栏配置，设为false则隐藏
      toolbar: [
        'fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist | blockquote subscript superscript removeformat ',
        'styleselect formatselect fontselect fontsizeselect |  table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter',
      ],
      // 菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置
      // 查看 http://tinymce.ax-z.cn/configure/editor-appearance.php 搜索:自定义菜单
      // menubar: "file edit my1",
      init_instance_callback: (editor) => {
        console.log(editor, 'editor---')
      },
    },
})

watch(
    () => language.value,
    (val) => {
      tinyEditor.value.rerender({
        language: val === 'zh' ? 'zh_CN' : 'en',
      })
    }
  )
</script>
```

## 图片预览插件

[](https://www.lightgalleryjs.com/)

## 图片裁剪

## Excele 表格插件

[Luckysheet](https://mengshukeji.gitee.io/LuckysheetDocs/zh/)

## Table 表格 插件

vue3.2+ 需要安装 xe-utils

### 安装

``` bash
npm install xe-utils vxe-table
```
