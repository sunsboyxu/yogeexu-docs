"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[9195],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),p=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return l.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),b=r,d=c["".concat(u,".").concat(b)]||c[b]||s[b]||a;return t?l.createElement(d,o(o({ref:n},m),{},{components:t})):l.createElement(d,o({ref:n},m))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(7462),r=(t(7294),t(3905));const a={},o="UI \u6846\u67b6",i={unversionedId:"webs/vue/vue2/vue2-ui",id:"webs/vue/vue2/vue2-ui",title:"UI \u6846\u67b6",description:"tdesign",source:"@site/docs/webs/vue/vue2/vue2-ui.md",sourceDirName:"webs/vue/vue2",slug:"/webs/vue/vue2/vue2-ui",permalink:"/yogeexu-docs/webs/vue/vue2/vue2-ui",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"vue-router",permalink:"/yogeexu-docs/webs/vue/vue2/vue2-router"},next:{title:"vuex",permalink:"/yogeexu-docs/webs/vue/vue2/vue2-vuex"}},u={},p=[{value:"tdesign",id:"tdesign",level:2},{value:"element-ui",id:"element-ui",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5b8c\u6574\u5f15\u5165",id:"\u5b8c\u6574\u5f15\u5165",level:3},{value:"\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6",id:"\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6",level:3},{value:"1 \u5b89\u88c5 babel-plugin-component",id:"1-\u5b89\u88c5-babel-plugin-component",level:4},{value:"2 \u914d\u7f6e babel plugins",id:"2-\u914d\u7f6e-babel-plugins",level:4},{value:"3 \u6309\u9700\u5bfc\u5165\u7ec4\u4ef6\uff0c\u5e76\u4e14\u6ce8\u518c",id:"3-\u6309\u9700\u5bfc\u5165\u7ec4\u4ef6\u5e76\u4e14\u6ce8\u518c",level:3},{value:"4 \u5728 main.js \u5f15\u7528 plugins \u4e0b\u7684 setupElement",id:"4-\u5728-mainjs-\u5f15\u7528-plugins-\u4e0b\u7684-setupelement",level:4},{value:"\u6309\u9700\u52a0\u8f7d\u95ee\u9898",id:"\u6309\u9700\u52a0\u8f7d\u95ee\u9898",level:2},{value:"el-dialog \u4e8c\u6b21\u5c01\u88c5",id:"el-dialog-\u4e8c\u6b21\u5c01\u88c5",level:2},{value:"\u4f7f\u7528\u9690\u85cf\u7684\u7ec4\u4ef6 el-scrollbar",id:"\u4f7f\u7528\u9690\u85cf\u7684\u7ec4\u4ef6-el-scrollbar",level:2},{value:"\u4f7f\u7528 el-tabs + component is \u591a\u6b21\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3",id:"\u4f7f\u7528-el-tabs--component-is-\u591a\u6b21\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3",level:2},{value:"Material Design \u98ce\u683c",id:"material-design-\u98ce\u683c",level:2}],m={toc:p};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ui-\u6846\u67b6"},"UI \u6846\u67b6"),(0,r.kt)("h2",{id:"tdesign"},"tdesign"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tdesign.tencent.com/"},"tdesign"))),(0,r.kt)("h2",{id:"element-ui"},"element-ui"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://element.eleme.cn/2.14/#/zh-CN"},"element-2.14.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://element.eleme.cn/2.15/#/zh-CN"},"element-2.15.7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_47988564/article/details/114984764"},"Elementui select \u8bbe\u7f6e\u70b9\u51fb\u4e8b\u4ef6\uff0c\u5728Change\u4e8b\u4ef6\u524d\u89e6\u53d1"))),(0,r.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add element-ui -S\n")),(0,r.kt)("h3",{id:"\u5b8c\u6574\u5f15\u5165"},"\u5b8c\u6574\u5f15\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"import Vue from 'vue'\nimport App from './App.vue'\nimport ElementUI from 'element-ui'\nimport 'element-ui/lib/theme-chalk/index.css'\nimport router from './router'\nimport store from './store'\n\nVue.use(ElementUI)\n\nVue.config.productionTip = false\n\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n")),(0,r.kt)("h3",{id:"\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6"},"\u6309\u9700\u52a0\u8f7d\u7ec4\u4ef6"),(0,r.kt)("p",null,"\u501f\u52a9 babel-plugin-component\uff0c\u6211\u4eec\u53ef\u4ee5\u53ea\u5f15\u5165\u9700\u8981\u7684\u7ec4\u4ef6\uff0c\u4ee5\u8fbe\u5230\u51cf\u5c0f\u9879\u76ee\u4f53\u79ef\u7684\u76ee\u7684"),(0,r.kt)("h4",{id:"1-\u5b89\u88c5-babel-plugin-component"},"1 \u5b89\u88c5 babel-plugin-component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add babel-plugin-component -D\n")),(0,r.kt)("h4",{id:"2-\u914d\u7f6e-babel-plugins"},"2 \u914d\u7f6e babel plugins"),(0,r.kt)("p",null,"\u9879\u76ee\u6839\u76ee\u5f55 babel.config.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// babel.config.js\nmodule.exports = {\n  presets: [\n    '@vue/cli-plugin-babel/preset'\n  ],\n  plugins: [\n    ['component',\n      {\n    // element-ui \u7684\u6309\u9700\u52a0\u8f7d\n        libraryName: 'element-ui', \n        styleLibraryName: 'theme-chalk'\n      }\n    ],\n    ['import', \n   { // vant \u7684\u6309\u9700\u52a0\u8f7d,\u5bf9\u5e94\u7684\u63d2\u4ef6\u662f babel-auto-import\n    libraryName: 'vant',\n    libraryDirectory: 'es',\n    style: true\n   }, 'vant']\n  ]\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u7528\u7684\u662f .babelrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "presets": [\n    ["es2015", { "modules": false }]\n  ],\n  "plugins": [["component", [\n    {\n      "libraryName": "element-ui",\n      "styleLibraryName": "theme-chalk"\n    }\n  ]]]\n}\n')),(0,r.kt)("h3",{id:"3-\u6309\u9700\u5bfc\u5165\u7ec4\u4ef6\u5e76\u4e14\u6ce8\u518c"},"3 \u6309\u9700\u5bfc\u5165\u7ec4\u4ef6\uff0c\u5e76\u4e14\u6ce8\u518c"),(0,r.kt)("p",null,"\u5728\u9879\u76ee src \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa plugins \u76ee\u5f55\uff0c\u5e76\u4e14\u65b0\u5efa setupElement.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// /src/plugins/setupElement.js\nimport { \n Icon,\n Button,\n Row,\n Col,\n Form,\n FormItem,\n Input,\n Select,\n Option,\n OptionGroup,\n Autocomplete,\n Loading,\n Dialog,\n Breadcrumb,\n BreadcrumbItem,\n Pagination,\n Dropdown,\n DropdownMenu,\n DropdownItem,\n Scrollbar,\n Upload,\n Progress\n} from 'element-ui'\n\nconst elementComps = [\n  Icon,\n Button,\n Row,\n Col,\n Form,\n FormItem,\n Input,\n Select,\n Option,\n OptionGroup,\n Autocomplete,\n Loading,\n Dialog,\n Breadcrumb,\n BreadcrumbItem,\n Pagination,\n Dropdown,\n DropdownMenu,\n DropdownItem,\n Scrollbar,\n Upload,\n Progress\n]\n\nexport default {\n  install: (Vue) => {\n  // \u7edf\u4e00\u8bbe\u7f6e \u5143\u7d20\u7684\u5927\u5c0f\u5c3a\u5bf8\n  // Vue.prototype.$ELEMENT = { size: 'small', zIndex: 10}\n    elementComps.forEach(comp => {\n   // \u65b9\u5f0f\u4e00\n      // Button.name\n      // Vue.component(comp.name, comp)\n   // \u65b9\u5f0f\u4e8c\n      Vue.use(comp)\n    })\n  }\n}\n")),(0,r.kt)("p",null,"::: tip Scrollbar \u7ec4\u4ef6\u5b98\u65b9\u6587\u6863\u672a\u5217\u51fa"),(0,r.kt)("p",null,":::"),(0,r.kt)("h4",{id:"4-\u5728-mainjs-\u5f15\u7528-plugins-\u4e0b\u7684-setupelement"},"4 \u5728 main.js \u5f15\u7528 plugins \u4e0b\u7684 setupElement"),(0,r.kt)("p",null,"// /src/main.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Vue from 'vue'\nimport App from './App.vue'\n// \u4e4b\u524d\u5b8c\u6574\u5f15\u7528\u7684\u65b9\u5f0f\n// import ElementUI from 'element-ui'\n// import 'element-ui/lib/theme-chalk/index.css'\n\nimport setupElement from './plugins/setupElement'\n\nimport router from './router'\nimport store from './store'\n\n// Vue.use(ElementUI)\nVue.use(setupElement)\n\nVue.config.productionTip = false\n\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n")),(0,r.kt)("h2",{id:"\u6309\u9700\u52a0\u8f7d\u95ee\u9898"},"\u6309\u9700\u52a0\u8f7d\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"element-ui \u6309\u9700\u52a0\u8f7d\uff0c\u6837\u5f0f\u5931\u6548\n\u9879\u76ee\u6839\u76ee\u5f55 babel.config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// babel.config.js\nmodule.exports = {\n  presets: [\n    '@vue/cli-plugin-babel/preset',\n  [\"@babel/preset-env\", { \"modules\": false }]\n  ],\n  plugins: [\n    ['component',\n      {\n    // element-ui \u7684\u6309\u9700\u52a0\u8f7d\n        libraryName: 'element-ui', \n        styleLibraryName: 'theme-chalk'\n      }\n    ],\n    ['import', \n   { // vant \u7684\u6309\u9700\u52a0\u8f7d,\u5bf9\u5e94\u7684\u63d2\u4ef6\u662f babel-auto-import\n    libraryName: 'vant',\n    libraryDirectory: 'es',\n    style: true\n   }, 'vant']\n  ]\n}\n\n## vue-i18n \u652f\u6301\n### vue-i18n@8.9.0 \u7248\u672c\u7684\n\n``` js\nimport Vue from 'vue'\nimport store from '@/store'\nimport VueI18n from 'vue-i18n'\nimport zhCn from './zh-Cn'\nimport enUs from './en-Us'\n\nimport enLocale from 'element-ui/lib/locale/lang/en'\nimport zhLocale from 'element-ui/lib/locale/lang/zh-CN'\nimport ElementLocale from 'element-ui/lib/locale'\n\nVue.use(VueI18n)\n\nconst i18n = new VueI18n({\n  locale: 'cn',\n  messages: {\n    cn: {\n      ...zhCn,\n      ...zhLocale\n    },\n    en: {\n      ...enUs,\n      ...enLocale\n    }\n  }\n})\n\nElementLocale.i18n((key, value) => i18n.t(key, value))\n\nexport default i18n\n")),(0,r.kt)("h2",{id:"el-dialog-\u4e8c\u6b21\u5c01\u88c5"},"el-dialog \u4e8c\u6b21\u5c01\u88c5"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://t.zoukankan.com/lwlblog-p-15711555.html"},"eldialog \u4e8c\u6b21\u5c01\u88c5\u6210\u7ec4\u4ef6")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u9690\u85cf\u7684\u7ec4\u4ef6-el-scrollbar"},"\u4f7f\u7528\u9690\u85cf\u7684\u7ec4\u4ef6 el-scrollbar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Scrollbar } form 'element-ui'\nVue.use(Scrollbar)\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-el-tabs--component-is-\u591a\u6b21\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3"},"\u4f7f\u7528 el-tabs + component is \u591a\u6b21\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <h3>Vue \u5168\u5c40 api</h3>\n    <el-tabs v-model=\"currentTab\" type=\"card\" @tab-click=\"handleTabClick\">\n      <el-tab-pane\n        v-for=\"item in tabs\"\n        :key=\"item.name\"\n        :label=\"item.label\"\n        :name=\"item.name\"\n      >\n    \x3c!-- \u5c06 component \u653e\u5728 el-tab-pane slot \u4e2d\uff0c\u591a\u6b21\u89e6\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3 --\x3e\n    \x3c!-- <keep-alive include=\"VueSet\">\n      <component :is=\"comps[currentTab]\"></component>\n    </keep-alive> --\x3e\n   </el-tab-pane>\n    </el-tabs>\n  \x3c!-- \u5c06\u5185\u5bb9\u63d0\u51fa --\x3e\n    <div class=\"tabs-content\">\n      <keep-alive include=\"VueSet\">\n        <component :is=\"comps[currentTab]\"></component>\n      </keep-alive>\n    </div>\n  </div>\n</template>\n\n<script>\n// \u81ea\u52a8\u5bfc\u5165 vueApiComp \u76ee\u5f55\u4e0b\u7684\u7ec4\u4ef6\uff0c\u751f\u6210\u7ec4\u4ef6\u6620\u5c04 comps\nconst comps = {}\nconst compsArr = require.context('./vueApiComp', false, /\\.vue$/)\ncompsArr.keys().forEach((comp) => {\n  const compItem = compsArr(comp)\n  const compName = compItem.default.name || compItem.name\n  comps[compName] = compItem.default || compItem\n})\n\nexport default {\n  name: 'VueApi',\n  data() {\n    return {\n      tabs: [\n        {\n          label: 'Vue.extend',\n     name: 'VueExtend'\n        },\n        {\n          label: 'Vue.component',\n          name: 'VueComponent'\n        },\n        {\n          label: 'Vue.nexttick',\n          name: 'VueNexttick'\n        },\n        {\n          label: 'Vue.set',\n          name: 'VueSet'\n        },\n        {\n          label: 'Vue.delete',\n          name: 'VueDelete'\n        },\n        {\n          label: 'Vue.directive',\n          name: 'VueDirective'\n        }\n      ],\n      currentTab: 'VueExtend',\n      comps\n    }\n  },\n  methods: {\n    handleTabClick(tab, event) {\n      this.currentTab = tab.name\n    }\n  }\n}\n<\/script>\n\n")),(0,r.kt)("h2",{id:"material-design-\u98ce\u683c"},"Material Design \u98ce\u683c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://vuetifyjs.com/zh-Hans/"},"Vuetify"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://www.quasarchs.com/vue-components/input/"},"Quasarchs"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://material-components.github.io/material-components-web-catalog/#/"},"material-components"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://material-components.github.io/material-components-web-catalog/#/component/text-field"},"text-field")))}s.isMDXComponent=!0}}]);