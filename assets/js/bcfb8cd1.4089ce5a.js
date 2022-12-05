"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[1877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(a),v=r,d=m["".concat(p,".").concat(v)]||m[v]||c[v]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),i=a(6010),l=a(2389),s=a(7392),p=a(7094),o=a(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:v,groupId:d,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=v??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,s.l)(b,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[w,j]=(0,r.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&b.some((t=>t.value===e))&&j(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==w&&(T(t),j(n),null!=d&&N(d,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},f)},b.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function v(e){const t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},9358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),l=a(5162);const s={position:1},p="vite",o={unversionedId:"webs/vite/vite",id:"webs/vite/vite",title:"vite",description:"- vitejs",source:"@site/docs/webs/vite/vite.mdx",sourceDirName:"webs/vite",slug:"/webs/vite/",permalink:"/yogeexu-docs/webs/vite/",draft:!1,tags:[],version:"current",frontMatter:{position:1},sidebar:"myAutogeneratedSidebar",previous:{title:"threejs",permalink:"/yogeexu-docs/webs/threejs/"},next:{title:"vite\u63d2\u4ef6",permalink:"/yogeexu-docs/webs/vite/vite-plugins"}},u={},c=[{value:"vite2 \u6587\u6863",id:"vite2-\u6587\u6863",level:2},{value:"vite \u521d\u59cb\u5316\u9879\u76ee",id:"vite-\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"vite \u63d2\u4ef6\u4f7f\u7528",id:"vite-\u63d2\u4ef6\u4f7f\u7528",level:2},{value:"\u6309\u9700\u52a0\u8f7d",id:"\u6309\u9700\u52a0\u8f7d",level:3},{value:"\u5b9e\u6218\u6559\u7a0b",id:"\u5b9e\u6218\u6559\u7a0b",level:2}],m={toc:c};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vite"},"vite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cn.vitejs.dev/"},"vitejs"))),(0,r.kt)("h2",{id:"vite2-\u6587\u6863"},"vite2 \u6587\u6863"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cn.vitejs.dev/"},"vite\u4e2d\u6587\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitejs.dev/config/#config-file"},"vite config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://vitepress.vuejs.org/"},"vitepress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/hbiao68/article/details/108972775"},"Vue3 \u914d\u7f6e\u6587\u4ef6vite.config.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_43880397/article/details/121848881"},"vite.config.js \u76f8\u5173\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6949138186886971429"},"vite \u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/tfvE75639PibrYISXtY9hQ"},"Vue 2 \u9879\u76ee\u5982\u4f55\u5feb\u901f\u63a5\u5165 Vite \u4f5c\u4e3a\u5f00\u53d1\u5de5\u5177")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md"},"script setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/6a3695d8f7fe"},"vite.config.ts\u6587\u4ef6\u5e38\u7528\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/staven630/vite-config"},"Vite\u7684\u5e38\u7528\u914d\u7f6evite.config.js"))),(0,r.kt)("h2",{id:"vite-\u521d\u59cb\u5316\u9879\u76ee"},"vite \u521d\u59cb\u5316\u9879\u76ee"),(0,r.kt)("admonition",{title:"vite-app \u8fd9\u4e2a\u5305\u6709\u95ee\u9898",type:"danger"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#\u8fd9\u4e2a\u7684\u5305\u6709\u95ee\u9898\nyarn create vite-app \u9879\u76ee\u540d\u79f0\n"))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{label:"npm",value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @vitejs/app \u9879\u76ee\u540d\u79f0\nnpm init @vitejs/app \u9879\u76ee\u540d\u79f0 --template vue\nnpm init @vitejs/app \u9879\u76ee\u540d\u79f0 --template vue-ts\n\n"))),(0,r.kt)(l.Z,{label:"yarn",value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn create vite-app \u9879\u76ee\u540d\u79f0\nyarn create @vitejs/app \u9879\u76ee\u540d\u79f0\nyarn create @vitejs/app \u9879\u76ee\u540d\u79f0 --template vue\nyarn create @vitejs/app \u9879\u76ee\u540d\u79f0 --template vue-ts\n")),(0,r.kt)("p",null,"\u4f1a\u8ba9\u4f60\u9009\u62e9 vue \u6216\u8005 vue-ts react\u7b49"))),(0,r.kt)("p",null,"\u5982\u679c\u4e0d\u8f93\u5165\u9879\u76ee\u540d\u79f0\uff0c\u5982\uff1ayarn create @vitejs/app \uff0c\u4f1a\u8ba9\u4f60\u586b\u5199 \u9879\u76ee\u540d\u79f0 \u548c \u9009\u62e9\u9879\u76ee\u8981\u4f7f\u7528\u7684\u6846\u67b6"),(0,r.kt)("h2",{id:"vite-\u63d2\u4ef6\u4f7f\u7528"},"vite \u63d2\u4ef6\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/375971479"},"vite\u5e38\u7528\u63d2\u4ef6"))),(0,r.kt)("h3",{id:"\u6309\u9700\u52a0\u8f7d"},"\u6309\u9700\u52a0\u8f7d"),(0,r.kt)("p",null,"npm install vite-plugin-babel-import --save-dev"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vite-config.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { defineConfig } from 'vite'\nimport vitePluginBabelImport from 'vite-plugin-babel-import'\nexport default defineConfig({\n plugins:[\n  vitePluginBabelImport([{\n   libraryName: 'element-plus',\n   librayDirectory: 'es',\n   style(name) {\n    return `element-plus/lib/theme-chalk/${name}.css`;\n   }\n  }])\n ] \n})\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"vite-plugin-babel-import"),(0,r.kt)("li",{parentName:"ul"},"[\u6253\u5305\u4e0a\u6b21oss]"," vite-plugin-assets-uploader")),(0,r.kt)("h2",{id:"\u5b9e\u6218\u6559\u7a0b"},"\u5b9e\u6218\u6559\u7a0b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/WeiziPlus/muteki-vite"},"muteki-vant-vite")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/wSfgGmTRNZITegWzT3v_mw"},"Vite2 \u9879\u76ee\u5de5\u7a0b\u5316\u548c\u539f\u7406\uff0c\u4e00\u6b21\u641e\u5b9a\uff01")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/j2g69KtJHEVIyg_8O32WsQ"},"\u5b9e\u6218 | Vite2.0\u642d\u5efaVue3\u79fb\u52a8\u7aef\u9879\u76ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_34256872/article/details/108990797"},"\u4e00\u4e2a\u57fa\u4e8evue3+vite+ts\u7684\u5b8c\u6574\u9879\u76ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/351888882"},"vite2.0\u642d\u5efavue3\u79fb\u52a8\u7aef\u9879\u76ee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/anncwb/vue-vben-admin"},"vue-vben-admin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_43931876/article/details/114605284"},"\u521b\u5efa\u5b8c\u6574\u7684Vite + Vue3 + TypeScript + ESLint + prettierrc + Sass\u9879\u76ee\u6a21\u7248")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/uiGqqTlkqxlItFnwMmYDUQ"},"Vue3 + Vite2 + TypeScript \u5f00\u53d1\u590d\u76d8\u603b\u7ed3"))))}v.isMDXComponent=!0}}]);