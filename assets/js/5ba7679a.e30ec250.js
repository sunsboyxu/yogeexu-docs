"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[111],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=l(t),f=a,b=y["".concat(s,".").concat(f)]||y[f]||u[f]||o;return t?n.createElement(b,c(c({ref:r},p),{},{components:t})):n.createElement(b,c({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={},c="\u6570\u7ec4",i={unversionedId:"webs/web/javascript/array",id:"webs/web/javascript/array",title:"\u6570\u7ec4",description:"\u5224\u65ad\u6570\u7ec4",source:"@site/docs/webs/web/javascript/array.md",sourceDirName:"webs/web/javascript",slug:"/webs/web/javascript/array",permalink:"/yogeexu-docs/webs/web/javascript/array",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Generator \u751f\u6210\u5668\u51fd\u6570",permalink:"/yogeexu-docs/webs/web/javascript/Generator"},next:{title:"Async \u51fd\u6570",permalink:"/yogeexu-docs/webs/web/javascript/async"}},s={},l=[{value:"\u5224\u65ad\u6570\u7ec4",id:"\u5224\u65ad\u6570\u7ec4",level:2},{value:"\u6570\u7ec4\u53bb\u91cd",id:"\u6570\u7ec4\u53bb\u91cd",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,a.kt)("h2",{id:"\u5224\u65ad\u6570\u7ec4"},"\u5224\u65ad\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u5b9a\u4e49\nexport const isArray = (arr) => {\n  if (Array.isArray) {\n    return Array.isArray(arr)\n  } else {\n    return Object.prototype.toString.call(arr) === '[object Array]'\n  }\n}\n\n// \u4f7f\u7528\nimport { isArray } from '\u5b9a\u4e49\u8be5\u65b9\u6cd5\u7684\u5730\u65b9'\nconst arr = [1,2,3]\nconsole.log(isArray(arr))\n")),(0,a.kt)("h2",{id:"\u6570\u7ec4\u53bb\u91cd"},"\u6570\u7ec4\u53bb\u91cd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Set \u7ed3\u5408 Array.from \u8fdb\u884c\u53bb\u91cd\nconst arr = ['a', 'b', 'c', 'd', 'a', 'b']\nconst newArr = Array.from(new Set(arr))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// filter \u8fdb\u884c\u53bb\u91cd\u590d\nconst arr = ['a', 'b', 'c', 'd', 'a', 'b']\nconst newArr = arr.filter((item, index, selfArr) => selfArr.indexOf(item) === index)\n")))}u.isMDXComponent=!0}}]);