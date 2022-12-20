# UI 框架

## tdesign

- [tdesign](https://tdesign.tencent.com/)

## element-ui

- [element-2.14.1](https://element.eleme.cn/2.14/#/zh-CN)
- [element-2.15.7](https://element.eleme.cn/2.15/#/zh-CN)
- [Elementui select 设置点击事件，在Change事件前触发](https://blog.csdn.net/weixin_47988564/article/details/114984764)

### 安装

``` bash
yarn add element-ui -S
```

### 完整引入

``` bash
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

### 按需加载组件

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的

#### 1 安装 babel-plugin-component

``` bash
yarn add babel-plugin-component -D
```

#### 2 配置 babel plugins

项目根目录 babel.config.js

``` js
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['component',
      {
    // element-ui 的按需加载
        libraryName: 'element-ui', 
        styleLibraryName: 'theme-chalk'
      }
    ],
    ['import', 
   { // vant 的按需加载,对应的插件是 babel-auto-import
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
   }, 'vant']
  ]
}
```

如果用的是 .babelrc

``` js
{
  "presets": [
    ["es2015", { "modules": false }]
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ]]]
}
```

### 3 按需导入组件，并且注册

在项目 src 目录下，新建 plugins 目录，并且新建 setupElement.js

``` js
// /src/plugins/setupElement.js
import { 
 Icon,
 Button,
 Row,
 Col,
 Form,
 FormItem,
 Input,
 Select,
 Option,
 OptionGroup,
 Autocomplete,
 Loading,
 Dialog,
 Breadcrumb,
 BreadcrumbItem,
 Pagination,
 Dropdown,
 DropdownMenu,
 DropdownItem,
 Scrollbar,
 Upload,
 Progress
} from 'element-ui'

const elementComps = [
  Icon,
 Button,
 Row,
 Col,
 Form,
 FormItem,
 Input,
 Select,
 Option,
 OptionGroup,
 Autocomplete,
 Loading,
 Dialog,
 Breadcrumb,
 BreadcrumbItem,
 Pagination,
 Dropdown,
 DropdownMenu,
 DropdownItem,
 Scrollbar,
 Upload,
 Progress
]

export default {
  install: (Vue) => {
  // 统一设置 元素的大小尺寸
  // Vue.prototype.$ELEMENT = { size: 'small', zIndex: 10}
    elementComps.forEach(comp => {
   // 方式一
      // Button.name
      // Vue.component(comp.name, comp)
   // 方式二
      Vue.use(comp)
    })
  }
}
```

::: tip Scrollbar 组件官方文档未列出

:::

#### 4 在 main.js 引用 plugins 下的 setupElement

// /src/main.js

``` js
import Vue from 'vue'
import App from './App.vue'
// 之前完整引用的方式
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import setupElement from './plugins/setupElement'

import router from './router'
import store from './store'

// Vue.use(ElementUI)
Vue.use(setupElement)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```

## 按需加载问题

- element-ui 按需加载，样式失效
项目根目录 babel.config.js

``` js
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    ['component',
      {
    // element-ui 的按需加载
        libraryName: 'element-ui', 
        styleLibraryName: 'theme-chalk'
      }
    ],
    ['import', 
   { // vant 的按需加载,对应的插件是 babel-auto-import
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
   }, 'vant']
  ]
}

## vue-i18n 支持
### vue-i18n@8.9.0 版本的

``` js
import Vue from 'vue'
import store from '@/store'
import VueI18n from 'vue-i18n'
import zhCn from './zh-Cn'
import enUs from './en-Us'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'cn',
  messages: {
    cn: {
      ...zhCn,
      ...zhLocale
    },
    en: {
      ...enUs,
      ...enLocale
    }
  }
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
```

## el-dialog 二次封装

[eldialog 二次封装成组件](http://t.zoukankan.com/lwlblog-p-15711555.html)

## 使用隐藏的组件 el-scrollbar

``` js
import { Scrollbar } form 'element-ui'
Vue.use(Scrollbar)
```

## 使用 el-tabs + component is 多次触发组件重新渲染

``` html
<template>
  <div>
    <h3>Vue 全局 api</h3>
    <el-tabs v-model="currentTab" type="card" @tab-click="handleTabClick">
      <el-tab-pane
        v-for="item in tabs"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
    <!-- 将 component 放在 el-tab-pane slot 中，多次触发组件重新渲染 -->
    <!-- <keep-alive include="VueSet">
      <component :is="comps[currentTab]"></component>
    </keep-alive> -->
   </el-tab-pane>
    </el-tabs>
  <!-- 将内容提出 -->
    <div class="tabs-content">
      <keep-alive include="VueSet">
        <component :is="comps[currentTab]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
// 自动导入 vueApiComp 目录下的组件，生成组件映射 comps
const comps = {}
const compsArr = require.context('./vueApiComp', false, /\.vue$/)
compsArr.keys().forEach((comp) => {
  const compItem = compsArr(comp)
  const compName = compItem.default.name || compItem.name
  comps[compName] = compItem.default || compItem
})

export default {
  name: 'VueApi',
  data() {
    return {
      tabs: [
        {
          label: 'Vue.extend',
     name: 'VueExtend'
        },
        {
          label: 'Vue.component',
          name: 'VueComponent'
        },
        {
          label: 'Vue.nexttick',
          name: 'VueNexttick'
        },
        {
          label: 'Vue.set',
          name: 'VueSet'
        },
        {
          label: 'Vue.delete',
          name: 'VueDelete'
        },
        {
          label: 'Vue.directive',
          name: 'VueDirective'
        }
      ],
      currentTab: 'VueExtend',
      comps
    }
  },
  methods: {
    handleTabClick(tab, event) {
      this.currentTab = tab.name
    }
  }
}
</script>

```

## Material Design 风格

[Vuetify](https://vuetifyjs.com/zh-Hans/)
[Quasarchs](http://www.quasarchs.com/vue-components/input/)
[material-components](https://material-components.github.io/material-components-web-catalog/#/)
[text-field](https://material-components.github.io/material-components-web-catalog/#/component/text-field)
