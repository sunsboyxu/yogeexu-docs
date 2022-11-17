"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[6986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="lint-staged",i={unversionedId:"codes/vscode/lint-staged",id:"codes/vscode/lint-staged",title:"lint-staged",description:"lint-staged \u662f\u4e00\u4e2a\u5728 git \u6682\u5b58\u6587\u4ef6\u4e0a\u8fd0\u884c linters \u7684\u5de5\u5177",source:"@site/docs/codes/vscode/lint-staged.md",sourceDirName:"codes/vscode",slug:"/codes/vscode/lint-staged",permalink:"/yogeexu-docs/codes/vscode/lint-staged",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"husky",permalink:"/yogeexu-docs/codes/vscode/husky"},next:{title:"Prettier",permalink:"/yogeexu-docs/codes/vscode/prettier"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lint-staged"},"lint-staged"),(0,a.kt)("p",null,"lint-staged \u662f\u4e00\u4e2a\u5728 git \u6682\u5b58\u6587\u4ef6\u4e0a\u8fd0\u884c linters \u7684\u5de5\u5177"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/okonet/lint-staged"},"lint-staged")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/okonet/lint-staged#examples"},"lint-staged examples"))),(0,a.kt)("p",null,"\u5feb\u901f\u642d\u5efa\uff0c\u5f53\u60f3\u5c06\u5176\u4ed6\u4ee3\u7801\u8d28\u91cf\u5de5\u5177\u4e0e Prettier\uff08\u4f8b\u5982 ESLint\u3001Stylelint \u7b49\uff09\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u6216\u8005\u5982\u679c\u60a8\u9700\u8981\u652f\u6301\u90e8\u5206\u6682\u5b58\u6587\u4ef6 ( git add --patch) \u65f6\u5f88\u6709\u7528\uff0c\n\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd Prettier \u5df2\u5b89\u88c5\u5e76\u4e14\u5728\u7cfb\u7edf\u7684 devDependencies \u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx mrm@2 lint-staged\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u5c06\u5b89\u88c5 husky \u548c\u200b \u200blint-staged\uff0c\u7136\u540e\u5411\u9879\u76ee\u6dfb\u52a0\u4e00\u4e2a\u914d\u7f6e\uff0c\u8be5\u914d\u7f6e package.json \u5c06\u5728\u9884\u63d0\u4ea4\u6302\u94a9\u4e2d\u81ea\u52a8\u683c\u5f0f\u5316\u652f\u6301\u7684\u6587\u4ef6"),(0,a.kt)("p",null,"\u5982\u679c npx mrm@2 lint-staged \u6267\u884c\u7684\u592a\u6162\uff0c\u53ef\u4ee5\u73b0\u5c06 npm \u7684 \u955c\u50cf\u6e90\u5207\u6362\u5230\u56fd\u5185\u7684\uff0c\u5982\uff1ataobao"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install nrm -g\nnrm ls\nnrm use taobao\n")),(0,a.kt)("p",null,"\u7136\u540e\u518d\u6267\u884c npx mrm@2 lint-staged"))}u.isMDXComponent=!0}}]);