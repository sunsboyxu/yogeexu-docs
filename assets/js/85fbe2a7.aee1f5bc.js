"use strict";(self.webpackChunksunsboyxu_docs=self.webpackChunksunsboyxu_docs||[]).push([[7503],{5762:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(3274),s=t(1377);const r={},a="vuex",i={id:"webs/vue/vue2/vue2-vuex",title:"vuex",description:"-vuex",source:"@site/docs/webs/vue/vue2/vue2-vuex.md",sourceDirName:"webs/vue/vue2",slug:"/webs/vue/vue2/vue2-vuex",permalink:"/yogeexu-docs/webs/vue/vue2/vue2-vuex",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI \u6846\u67b6",permalink:"/yogeexu-docs/webs/vue/vue2/vue2-ui"},next:{title:"Vue3",permalink:"/yogeexu-docs/webs/vue/vue3/"}},u={},l=[{value:"\u5b89\u88c5 vuex",id:"\u5b89\u88c5-vuex",level:2},{value:"\u521d\u59cb\u5316 vuex",id:"\u521d\u59cb\u5316-vuex",level:2},{value:"vuex \u4e0b\u7684 module",id:"vuex-\u4e0b\u7684-module",level:2},{value:"\u5f15\u7528 vuex",id:"\u5f15\u7528-vuex",level:2},{value:"\u9875\u9762\u4f7f\u7528 vuex",id:"\u9875\u9762\u4f7f\u7528-vuex",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"vuex",children:"vuex"}),"\n",(0,o.jsxs)(n.p,{children:["-",(0,o.jsx)(n.a,{href:"https://v3.vuex.vuejs.org/zh/",children:"vuex"})]}),"\n",(0,o.jsx)(n.h2,{id:"\u5b89\u88c5-vuex",children:"\u5b89\u88c5 vuex"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"yarn add vuex -S\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u521d\u59cb\u5316-vuex",children:"\u521d\u59cb\u5316 vuex"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u9879\u76ee\u6839\u76ee\u5f55\u65b0\u5efa store\u76ee\u5f55 \u548c index.js\n// \u5982\u679c \u6709 module\uff0c\u5728 store\u76ee\u5f55 \u65b0\u5efa module \u76ee\u5f55\n\n// /src/store/index.js\nimport Vue from 'vue'\nimport Vuex from 'vuex'\n\nimport config from './module/config'\n\nVue.use(Vuex)\n\nconst store = new Vuex.Store({\n  state: {\n  msg: 'hello vuex'\n  },\n  mutations: {\n  \n  },\n  actions: {\n  \n  },\n  modules: {\n    config\n  }\n})\n\nexport default store\n"})}),"\n",(0,o.jsx)(n.h2,{id:"vuex-\u4e0b\u7684-module",children:"vuex \u4e0b\u7684 module"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// /src/store/module/config.js\nimport { getConfigApi } from '@/api/config'\nimport Vue from 'vue'\nimport router from '@/router'\n\nexport default {\n  namespaced: true,\n  state: {\n    lang: 'zh-CN',\n    configData: ''\n  },\n  getters: {\n    topHtml: state => state.configData.TopHtml,\n    bottomHtml: state => state.configData.BotHtml,\n    btnStyles: (state) => {\n      const MainColor = state.configData.MainColor\n      if (MainColor) {\n        return (MainColor.length > 1)\n          ? `background: linear-gradient(139deg, ${MainColor[0]} 0%, ${MainColor[1]} 100%);color: #fff`\n          : `background: ${MainColor[0]};color: #fff`\n      } else {\n        return ''\n      }\n    }\n  },\n  mutations: {\n    setConfigData(state, data) {\n      state.configData = data\n  },\n  actions: {\n    // \u83b7\u53d6\u914d\u7f6e\u6570\u636e\n    getConfigData({ commit, state }, options) {\n      return new Promise((resolve, reject) => {\n        if (state.configData) {\n          resolve(state.configData)\n        } else {\n          getConfigApi({\n            linkguid\n          }).then(res => {\n            if (res.code === 200) {\n              commit('setConfigData', res.data)\n              resolve(res.data)\n            } else {\n              reject(res)\n            }\n          }).catch(err => {\n            console.log(err)\n            reject(err)\n          })\n        }\n      })\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5f15\u7528-vuex",children:"\u5f15\u7528 vuex"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// /src/main.js\nimport Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport store from './store'\n\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u9875\u9762\u4f7f\u7528-vuex",children:"\u9875\u9762\u4f7f\u7528 vuex"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'// /src/views/home.vue\n<template>\n  <div>\n    <isc-html v-if="topHtml" :html-str="topHtml" />\n    <div class="btn-wrap" style="margin-top: 30px">\n      <el-button class="isc-btn btn-login" :style="btnStyles" @click="change">\u4fee\u6539\u6570\u636e</el-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { mapGetters } from \'vuex\'\nexport default {\n  name: \'Home\',\n  data() {\n    return {}\n  },\n  computed: {\n    ...mapGetters({\n      topHtml: \'config/topHtml\',\n      btnStyles: \'config/btnStyles\',\n    }),\n    lang() {\n      return this.$store.state.config.lang\n    },\n  themeColor() {\n   return this.$store.state.config.configData\n  },\n  topHtml2() {\n   return this.$store.getters[\'config/topHtml\']\n  }\n  },\n  async created() {\n    const info = this.$store.dispatch(\'cofig/getConfigData\')\n  console.log(info)\n  },\n  methods: {\n  change() {\n   this.$sotre.commit(\'config/setConfigData\',{})\n  }\n  }\n}\n<\/script>\n\n<style lang="less" scoped>\n\n</style>\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1377:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(9474);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);