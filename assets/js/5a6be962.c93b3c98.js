"use strict";(self.webpackChunksunsboyxu_docs=self.webpackChunksunsboyxu_docs||[]).push([[875],{6965:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var s=t(3274),o=t(1377);const r={},c="\u6b63\u5219",u={id:"webs/web/RegExp",title:"\u6b63\u5219",description:"\u63d0\u53d6\u6587\u4ef6\u540d",source:"@site/docs/webs/web/RegExp.md",sourceDirName:"webs/web",slug:"/webs/web/RegExp",permalink:"/yogeexu-docs/webs/web/RegExp",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"qiankun",permalink:"/yogeexu-docs/webs/web/"},next:{title:"canvas",permalink:"/yogeexu-docs/webs/web/canvas"}},i={},a=[{value:"\u63d0\u53d6\u6587\u4ef6\u540d",id:"\u63d0\u53d6\u6587\u4ef6\u540d",level:2},{value:"\u5e38\u7528\u6b63\u5219",id:"\u5e38\u7528\u6b63\u5219",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6b63\u5219",children:"\u6b63\u5219"}),"\n",(0,s.jsx)(n.h2,{id:"\u63d0\u53d6\u6587\u4ef6\u540d",children:"\u63d0\u53d6\u6587\u4ef6\u540d"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7 require.context() \u81ea\u52a8\u6ce8\u518c\u7ec4\u4ef6\uff0c\u901a\u8fc7\u6b63\u5219\u6765\u83b7\u53d6\u7ec4\u4ef6\u7684\u540d\u79f0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const requireComponents = require.context('@/components/global', false, /\\.vue$/)\nexport default {\n install: function(Vue) {\n  requireComponents.keys().forEach(key => {\n   const compName = key.replace(/\\.|\\/|.vue/g, '')\n   Vue.component(compName, requireComponents(key).default || requireComponents(key))\n  })\n }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5e38\u7528\u6b63\u5219",children:"\u5e38\u7528\u6b63\u5219"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u662f\u5426\u662f\u4e2d\u6587\n/^[\\u4e00-\\u9fa5]+$/\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1377:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>u});var s=t(9474);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);