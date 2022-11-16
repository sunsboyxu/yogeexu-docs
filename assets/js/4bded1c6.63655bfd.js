"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[9711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={},a="vscode \u4f18\u5316\u5904\u7406",s={unversionedId:"codes/vscode/skills",id:"codes/vscode/skills",title:"vscode \u4f18\u5316\u5904\u7406",description:"vue\u9879\u76ee tempalte \u663e\u793a \u6ce2\u6d6a\u7ebf",source:"@site/docs/codes/vscode/skills.md",sourceDirName:"codes/vscode",slug:"/codes/vscode/skills",permalink:"/yogeexu-docs/codes/vscode/skills",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"vscode \u5f00\u53d1\u8bbe\u7f6e",permalink:"/yogeexu-docs/codes/vscode/settings"},next:{title:"stylelint",permalink:"/yogeexu-docs/codes/vscode/stylelint"}},i={},c=[{value:"vue\u9879\u76ee tempalte \u663e\u793a \u6ce2\u6d6a\u7ebf",id:"vue\u9879\u76ee-tempalte-\u663e\u793a-\u6ce2\u6d6a\u7ebf",level:2},{value:"\u65e0\u6cd5\u4f7f\u7528 JSX\uff0c\u9664\u975e\u63d0\u4f9b\u4e86 &quot;--jsx&quot;",id:"\u65e0\u6cd5\u4f7f\u7528-jsx\u9664\u975e\u63d0\u4f9b\u4e86---jsx",level:2},{value:"vscode \u663e\u793a .git \u9690\u85cf\u6587\u4ef6\u5939",id:"vscode-\u663e\u793a-git-\u9690\u85cf\u6587\u4ef6\u5939",level:2},{value:"\u5176\u4ed6\u95ee\u9898",id:"\u5176\u4ed6\u95ee\u9898",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vscode-\u4f18\u5316\u5904\u7406"},"vscode \u4f18\u5316\u5904\u7406"),(0,l.kt)("h2",{id:"vue\u9879\u76ee-tempalte-\u663e\u793a-\u6ce2\u6d6a\u7ebf"},"vue\u9879\u76ee tempalte \u663e\u793a \u6ce2\u6d6a\u7ebf"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_30570101/article/details/101775614"},"\u53bb\u9664\u7ea2\u8272\u6ce2\u6d6a\u7ebf"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// \u9519\u8bef\u63d0\u793a\nTypeScript intellisense is disabled on template. To enable, \nconfigure `"jsx": "preserve"` in the `"compilerOptions"` property of tsconfig or jsconfig. \nTo disable this prompt instead, configure `"experimentalDisableTemplateSupport": true` in `"vueCompilerOptions"` property.volar\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// \u5904\u7406\u65b9\u6cd5 jsconfig.json\n// "jsx":"preserve"\n{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "esnext",\n    "baseUrl": "./",\n    "moduleResolution": "node",\n    "jsx":"preserve" ,\n    "paths": {\n      "@/*": [\n        "src/*"\n      ]\n    },\n    "lib": [\n      "esnext",\n      "dom",\n      "dom.iterable",\n      "scripthost"\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"\u65e0\u6cd5\u4f7f\u7528-jsx\u9664\u975e\u63d0\u4f9b\u4e86---jsx"},'\u65e0\u6cd5\u4f7f\u7528 JSX\uff0c\u9664\u975e\u63d0\u4f9b\u4e86 "--jsx"'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_42164539/article/details/124075375"},'\u65e0\u6cd5\u4f7f\u7528 JSX\uff0c\u9664\u975e\u63d0\u4f9b\u4e86 "--jsx"'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6587\u4ef6->\u9996\u9009\u9879->\u8bbe\u7f6e-> '\u641c\u7d22\u8bbe\u7f6e\uff1avetur' -> \u627e\u5230")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vetur \u203a Validation: Script \u53d6\u6d88\u52fe\u9009 \u221a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vetur \u203a Validation: Style \u53d6\u6d88\u52fe\u9009 \u221a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Vetur \u203a Validation: Template \u53d6\u6d88\u52fe\u9009 \u221a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6587\u4ef6->\u9996\u9009\u9879->\u8bbe\u7f6e-> '\u641c\u7d22\u8bbe\u7f6e\uff1aeslint' -> \u627e\u5230 Eslint: Enable"))),(0,l.kt)("h2",{id:"vscode-\u663e\u793a-git-\u9690\u85cf\u6587\u4ef6\u5939"},"vscode \u663e\u793a .git \u9690\u85cf\u6587\u4ef6\u5939"),(0,l.kt)("p",null,"\u6587\u4ef6->\u9996\u9009\u9879->\u8bbe\u7f6e-> '\u641c\u7d22\u8bbe\u7f6e: \u8f93\u5165 files' -> \u627e\u5230 Files.Assocications, \u5c06 .git \u7684\u914d\u7f6e\u5220\u9664"),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684 settings.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "files.associations": {\n    "*.cjson": "jsonc",\n    "*.wxss": "css",\n    "*.wxs": "javascript"\n  },\n  "files.exclude": {\n    "**/.git": false\n  }\n}\n')),(0,l.kt)("h2",{id:"\u5176\u4ed6\u95ee\u9898"},"\u5176\u4ed6\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_21271511/article/details/108219791"},"Comments are not permitted in JSON"))))}u.isMDXComponent=!0}}]);