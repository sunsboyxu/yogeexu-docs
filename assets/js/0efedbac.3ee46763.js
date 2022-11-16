"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[8803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},l="\u4ee3\u7801\u89c4\u8303 eslint + prettier + stylelint",s={unversionedId:"codes/vscode/eslint-prettier",id:"codes/vscode/eslint-prettier",title:"\u4ee3\u7801\u89c4\u8303 eslint + prettier + stylelint",description:"- \u524d\u7aef\u57fa\u4e8e husky \u901a\u8fc7 eslint \u68c0\u6d4b\u63d0\u4ea4\u4ee3\u7801",source:"@site/docs/codes/vscode/eslint-prettier.md",sourceDirName:"codes/vscode",slug:"/codes/vscode/eslint-prettier",permalink:"/yogeexu-docs/codes/vscode/eslint-prettier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"editorconfig",permalink:"/yogeexu-docs/codes/vscode/editorconfig"},next:{title:"eslint",permalink:"/yogeexu-docs/codes/vscode/eslint"}},o={},p=[{value:"\u7f16\u8f91\u5668\u8bbe\u7f6e",id:"\u7f16\u8f91\u5668\u8bbe\u7f6e",level:2},{value:"vscode \u8bbe\u7f6e",id:"vscode-\u8bbe\u7f6e",level:3},{value:"\u81ea\u52a8\u4fdd\u5b58\u4ee3\u7801\u3001\u4ee3\u7801\u7c7b\u578b\u7c7b\u578b\u64cd\u4f5c\u3001\u4fdd\u5b58\u65f6\u683c\u5f0f\u5316",id:"\u81ea\u52a8\u4fdd\u5b58\u4ee3\u7801\u4ee3\u7801\u7c7b\u578b\u7c7b\u578b\u64cd\u4f5c\u4fdd\u5b58\u65f6\u683c\u5f0f\u5316",level:3},{value:"\u76f8\u5173\u8bbe\u7f6e\u8bf4\u660e",id:"\u76f8\u5173\u8bbe\u7f6e\u8bf4\u660e",level:3},{value:"\u6211\u7684\u5b8c\u6574\u914d\u7f6e",id:"\u6211\u7684\u5b8c\u6574\u914d\u7f6e",level:3},{value:"vue-cli \u9879\u76ee\u4f7f\u7528 eslint + prettier + stylelint + husky",id:"vue-cli-\u9879\u76ee\u4f7f\u7528-eslint--prettier--stylelint--husky",level:2},{value:"\u65b0\u5efa\u9879\u76ee\u65f6\u7684\u9009\u62e9",id:"\u65b0\u5efa\u9879\u76ee\u65f6\u7684\u9009\u62e9",level:3},{value:"\u76f8\u5173\u4f9d\u8d56\u8bf4\u660e",id:"\u76f8\u5173\u4f9d\u8d56\u8bf4\u660e",level:3},{value:"\u5bf9\u4e8e\u672a\u4f7f\u7528 Linter / Formatter \u9009\u9879\u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u5b89\u88c5\u4e0b\u9762\u76f8\u5173\u4f9d\u8d56",id:"\u5bf9\u4e8e\u672a\u4f7f\u7528-linter--formatter-\u9009\u9879\u521d\u59cb\u5316\u7684\u9879\u76ee\u5b89\u88c5\u4e0b\u9762\u76f8\u5173\u4f9d\u8d56",level:3},{value:"vscode \u4f7f\u7528 volar \u6269\u5c55\u7684\u8bbe\u7f6e",id:"vscode-\u4f7f\u7528-volar-\u6269\u5c55\u7684\u8bbe\u7f6e",level:3},{value:"\u914d\u7f6e husky + lint-staged",id:"\u914d\u7f6e-husky--lint-staged",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ee3\u7801\u89c4\u8303-eslint--prettier--stylelint"},"\u4ee3\u7801\u89c4\u8303 eslint + prettier + stylelint"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/2G4dr4hdLn1JZSR0fXs_kw"},"\u524d\u7aef\u57fa\u4e8e husky \u901a\u8fc7 eslint \u68c0\u6d4b\u63d0\u4ea4\u4ee3\u7801"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.jb51.net/article/178614.htm"},"vue\u9879\u76ee\u4e2d\u4f7f\u7528eslint+prettier\u89c4\u8303\u4e0e\u68c0\u67e5\u4ee3\u7801\u7684\u65b9\u6cd5"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.yisu.com/zixun/175905.html"},"\u600e\u4e48\u5728Vue\u9879\u76ee\u4e2d\u4f7f\u7528eslint + prettier\u89c4\u8303\u4ee3\u7801\u98ce\u683c"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/prettier/eslint-plugin-prettier"},"eslint-plugin-prettier"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/337536349"},"Vue \u9879\u76ee\u4e2d\u4f7f\u7528 ESLint \u548c Prettier"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.51cto.com/u_15127564/4301384"},"\u5728Vue\u9879\u76ee\u4e2d\u4f7f\u7528Eslint+Prettier+Stylelint"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.51cto.com/u_15067223/4526947"},"\u4f7f\u7528 ESlint+stylelint+prettier \u5bf9\u524d\u7aef\u9879\u76ee\u4ee3\u7801\u8fdb\u884c\u89c4\u8303"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/u013344993/article/details/122089458"},"vite2 + vue3 + ts + volar \u4ee3\u7801\u68c0\u6d4b"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/063188d494ed"},"Vue3 + TypeScript + Pinia \u642d\u5efa\u4e00\u5957\u4f01\u4e1a\u7ea7\u7684\u5f00\u53d1\u811a\u624b\u67b6"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/adb0983830f6"},"\u57fa\u4e8eVue3+TypeScript+ Vue-Cli4.0\u6784\u5efa\u624b\u673a\u7aef\u6a21\u677f\u811a\u624b\u67b6"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/B8C6PLELiUOsqyM56MHczA"},"\u4f7f\u7528ESLint+Prettier\u6765\u7edf\u4e00\u524d\u7aef\u4ee3\u7801\u98ce\u683c"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/6xsfxH70VjPtbwJWZ7mmbg"},"vite+Vue3+ts\u642d\u5efa\u901a\u7528\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/MrLiuSixsix/article/details/125189022"},"\u7b80\u5355\u5b9e\u7528\u7684ESLint + Prettier\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_42349568/article/details/120937200"},"vue\u9879\u76ee\u4e2d\u914d\u7f6eeslint\u548cprettier"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/MrLiuSixsix/article/details/125189022"},"vue3\u9879\u76ee\u4e2d\u7b80\u5355\u5b9e\u7528\u7684ESLint + Prettier\u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://blog.csdn.net/dreamingbaobei3/article/details/124643312"},"Vue2\u9879\u76ee\u4e2d\u914d\u7f6eESLint\u548cPrettier"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/savokiss/p/14797080.html"},"vue \u9879\u76ee eslint + prettier \u914d\u7f6e"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000042424701"},"Vue3\u9879\u76ee\u6dfb\u52a0ESLint\u548cPrettier"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/6623d892ad73"},"Vue3\u9879\u76ee\u5de5\u7a0b\u5316\u914d\u7f6e\uff1aEslint + Prettier + husky + commitlint"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/sethidden/vue3-eslint-stylelint-demo"},"vue3-eslint-stylelint-demo")))),(0,i.kt)("h2",{id:"\u7f16\u8f91\u5668\u8bbe\u7f6e"},"\u7f16\u8f91\u5668\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u524d\u7aef\u9879\u76ee\u57fa\u672c\u90fd\u662f\u4f7f\u7528 vscode \u8fdb\u884c\u5f00\u53d1"),(0,i.kt)("h3",{id:"vscode-\u8bbe\u7f6e"},"vscode \u8bbe\u7f6e"),(0,i.kt)("p",null,"\u5b89\u88c5\u76f8\u5173\u7684\u6269\u5c55\u548c\u4e00\u4e9b\u914d\u7f6e\uff0c\u5982\u679c\u5b89\u88c5 Vetur \u6269\u5c55\u7684\u53ef\u4ee5\u5148\u5378\u8f7d\u4e86"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESLint \u6269\u5c55"),(0,i.kt)("li",{parentName:"ul"},"Prettier \u6269\u5c55"),(0,i.kt)("li",{parentName:"ul"},"Stylelint \u6269\u5c55"),(0,i.kt)("li",{parentName:"ul"},"Prettier ESLint \u6269\u5c55\uff0c\u8fd9\u4e2a\u6269\u5c55\u770b\u4e2a\u4eba\u9700\u6c42\u5b89\u88c5"),(0,i.kt)("li",{parentName:"ul"},"Volar \u6269\u5c55\uff0c\u9ed8\u8ba4\u652f\u6301 vue3\uff0c\u5bf9 vue2 \u9879\u76ee\u9700\u8981\u505a\u4e2a\u517c\u5bb9\u5904\u7406")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint"},"Prettier ESLint \u6269\u5c55")),(0,i.kt)("p",null,"vscode \u8fdb\u884c\u8bbe\u7f6e"),(0,i.kt)("h3",{id:"\u81ea\u52a8\u4fdd\u5b58\u4ee3\u7801\u4ee3\u7801\u7c7b\u578b\u7c7b\u578b\u64cd\u4f5c\u4fdd\u5b58\u65f6\u683c\u5f0f\u5316"},"\u81ea\u52a8\u4fdd\u5b58\u4ee3\u7801\u3001\u4ee3\u7801\u7c7b\u578b\u7c7b\u578b\u64cd\u4f5c\u3001\u4fdd\u5b58\u65f6\u683c\u5f0f\u5316"),(0,i.kt)("p",null,"\u9996\u9009\u9879 -> \u8bbe\u7f6e -> \u5728\u641c\u7d22\u8bbe\u7f6e\u4e2d\u8f93\u5165 files.autoSave\u3001editor.formatOnSave\u3001editor.codeActionsOnSave"),(0,i.kt)("p",null,"\u6216\u8005\u5728 \u8bbe\u7f6e \u754c\u9762\uff0c\u70b9\u51fb \u53f3\u4e0a\u89d2\u7684 \u6587\u4ef6\u56fe\u6807\uff08\u6253\u5f00\u8bbe\u7f6ejson\uff09\u7684\u56fe\u6807\uff0c\u6253\u5f00 settigns.json \u6587\u4ef6\uff0c\u8fdb\u884c\u8bbe\u7f6e"),(0,i.kt)("h3",{id:"\u76f8\u5173\u8bbe\u7f6e\u8bf4\u660e"},"\u76f8\u5173\u8bbe\u7f6e\u8bf4\u660e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// settgins.json\n{\n  "files.autoSave": "onFocusChange", // \u63a7\u5236\u5177\u6709\u672a\u4fdd\u5b58\u66f4\u6539\u7684\u7f16\u8f91\u5668\u7684 \u81ea\u52a8\u4fdd\u5b58\n  "files.associations": { // \u914d\u7f6e\u8bed\u8a00\u7684\u6587\u4ef6\u5173\u8054\n    "*.cjson": "jsonc",\n    "*.wxss": "css",\n    "*.wxs": "javascript",\n    "*.scss": "css",\n    "*.js": "javascript"\n  },\n  "files.exclude": { // \u914d\u7f6e glob \u6a21\u5f0f\u4ee5\u6392\u9664\u6587\u4ef6\u548c\u6587\u4ef6\u5939\u3002\u4f8b\u5982\uff0c\u6587\u4ef6\u8d44\u6e90\u7ba1\u7406\u5668\u6839\u636e\u6b64\u8bbe\u7f6e\u51b3\u5b9a\u8981\u663e\u793a\u6216\u9690\u85cf\u7684\u6587\u4ef6\u548c\u6587\u4ef6\u5939\n    "**/.git": false // \u663e\u793a .git \u6587\u4ef6\u5939\n  },\n  "editor.tabSize": 2, // \u4e00\u4e2a\u5236\u8868\u7b26\u7b49\u4e8e\u7684\u7a7a\u683c\u6570\n  "editor.fontSize": 14, // \u63a7\u5236\u5b57\u4f53\u5927\u5c0f\n  "editor.formatOnSave": true,       // \u5728\u4fdd\u5b58\u65f6\u683c\u5f0f\u5316\u6587\u4ef6\uff0c\u683c\u5f0f\u5316\u7a0b\u5e8f\u5fc5\u987b\u53ef\u7528\uff0c\u5ef6\u8fdf\u540e\u6587\u4ef6\u4e0d\u80fd\u4fdd\u5b58\uff0c\u5e76\u4e14\u7f16\u8f91\u5668\u4e0d\u80fd\u5173\u95ed\n\n  // \u63a7\u5236\u5728\u4fdd\u5b58\u65f6\u8bbe\u7f6e\u683c\u5f0f\u662f\u8bbe\u7f6e\u6574\u4e2a\u6587\u4ef6\u683c\u5f0f\u8fd8\u662f\u4ec5\u8bbe\u7f6e\u4fee\u6539\u5185\u5bb9\u7684\u683c\u5f0f\u3002editor.formatOnSave \u5904\u4e8e\u542f\u7528\u72b6\u6001\u65f6\u9002\u7528\n  "editor.formatOnSaveMode": "file",\n\n  "editor.tabCompletion": "on", // \u542f\u7528 Tab \u8865\u5168\n  "editor.fontLigatures": false, // \u914d\u7f6e\u5b57\u4f53\u8fde\u5b57\u6216\u5b57\u4f53\u7279\u6027\u3002\u53ef\u4ee5\u662f\u7528\u4e8e\u542f\u7528/\u7981\u7528\u8fde\u5b57\u7684\u5e03\u5c14\u503c\n  "editor.fontFamily": "Consolas,JetBrainsMono Nerd Font", // \u63a7\u5236\u5b57\u4f53\u7cfb\u5217\n\n  // \u5b9a\u4e49\u4e00\u4e2a\u9ed8\u8ba4\u683c\u5f0f\u5316\u7a0b\u5e8f, \u8be5\u683c\u5f0f\u5316\u7a0b\u5e8f\u4f18\u5148\u4e8e\u6240\u6709\u5176\u4ed6\u683c\u5f0f\u5316\u7a0b\u5e8f\u8bbe\u7f6e\u3002\u5fc5\u987b\u662f\u63d0\u4f9b\u683c\u5f0f\u5316\u7a0b\u5e8f\u7684\u6269\u5c55\u7684\u6807\u8bc6\u7b26\n  // \u8fd9\u4e2a\u6807\u8bc6\u662f\uff1aPrettier ESLint \u6269\u5c55\n  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",\n  "editor.codeActionsOnSave": { // \u5728\u4fdd\u5b58\u65f6\u8fd0\u884c\u7684\u4ee3\u7801\u64cd\u4f5c\u7c7b\u578b\n    "source.fixAll": true, // \u63a7\u5236\u662f\u5426\u5e94\u5728\u6587\u4ef6\u4fdd\u5b58\u65f6\u8fd0\u884c\u81ea\u52a8\u4fee\u590d\u64cd\u4f5c\n    "source.fixAll.markdownlint": true,\n    "source.fixAll.stylelint": true,\n    "source.fixAll.eslint": true\n  },\n  "editor.unicodeHighlight.allowedCharacters": { // \u5b9a\u4e49\u672a\u7a81\u51fa\u663e\u793a\u7684\u5141\u8bb8\u5b57\u7b26\n    "\uff0c": true,\n    "\uff1a": true,\n    "\uff08": true,\n    "\u2019": true\n  },\n  "eslint.alwaysShowStatus": true, // \u5e95\u90e8\u662f\u5426\u59cb\u7ec8\u663e\u793a ESLint \u6807\u8bc6\n  "prettier.semi": false,\n  "prettier.singleQuote": true,\n  "prettier.jsxSingleQuote": true,\n  "prettier.printWidth": 200,\n  "prettier.singleAttributePerLine": true,\n  "[markdown]": { // \u9488\u5bf9\u67d0\u79cd\u8bed\u8a00\uff0c\u914d\u7f6e\u66ff\u4ee3\u7f16\u8f91\u5668\u8bbe\u7f6e\n    "editor.formatOnSave": true,\n    "editor.formatOnPaste": true,\n    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"\n  },\n  "[vue]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[javascript]": {\n    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"\n  },\n}\n')),(0,i.kt)("h3",{id:"\u6211\u7684\u5b8c\u6574\u914d\u7f6e"},"\u6211\u7684\u5b8c\u6574\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "workbench.sideBar.location": "right",\n  "workbench.colorTheme": "Atom One Dark",\n  "workbench.iconTheme": "material-icon-theme",\n  "window.zoomLevel": 1,\n  "volar.completion.preferredTagNameCase": "kebab",\n  "volar.completion.preferredAttrNameCase": "kebab",\n  "files.autoSave": "onFocusChange",\n  "files.associations": {\n    "*.cjson": "jsonc",\n    "*.wxss": "css",\n    "*.wxs": "javascript",\n    "*.scss": "css",\n    "*.js": "javascript"\n  },\n  "files.exclude": {\n    "**/.git": false\n  },\n  "editor.tabSize": 2,\n  "editor.fontSize": 14,\n  "editor.tabCompletion": "on",\n  "editor.fontLigatures": false,\n  "editor.fontFamily": "Consolas,JetBrainsMono Nerd Font",\n  "editor.formatOnSave": true,\n  "editor.formatOnSaveMode": "file",\n  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",\n  "editor.codeActionsOnSave": {\n    "source.fixAll": true,\n    "source.fixAll.markdownlint": true,\n    "source.fixAll.stylelint": true,\n    "source.fixAll.eslint": true,\n    "source.organizeImports": true\n  },\n  "editor.unicodeHighlight.allowedCharacters": {\n    "\uff0c": true,\n    "\uff1a": true,\n    "\uff08": true,\n    "\u2019": true\n  },\n  "eslint.alwaysShowStatus": true,\n  "prettier.semi": false,\n  "prettier.jsxSingleQuote": true,\n  "prettier.printWidth": 200,\n  "prettier.singleQuote": true,\n  "prettier.singleAttributePerLine": true,\n  "prettier.trailingComma": "none",\n  "prettier.bracketSameLine": true,\n  "prettier.vueIndentScriptAndStyle": true,\n  "prettier.bracketSpacing": true,\n  "html.format.extraLiners": "",\n  "html.format.contentUnformatted": "",\n  "explorer.confirmDelete": false,\n  "emmet.includeLanguages": {\n    "wxml": "html",\n    "vue-html": "html",\n    "vue": "html"\n  },\n  "explorer.confirmDragAndDrop": false,\n  "git.autofetch": true,\n  "git.confirmSync": false,\n  "[markdown]": {\n    "editor.formatOnSave": true,\n    "editor.formatOnPaste": true,\n    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"\n  },\n  "[dart]": {\n    "editor.formatOnSave": true,\n    "editor.formatOnType": true,\n    "editor.rulers": [80],\n    "editor.selectionHighlight": false,\n    "editor.suggest.snippetsPreventQuickSuggestions": false,\n    "editor.suggestSelection": "first",\n    "editor.tabCompletion": "onlySnippets",\n    "editor.wordBasedSuggestions": false\n  },\n  "[vue]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[javascript]": {\n    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"\n  },\n  "[typescript]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[typescriptreact]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[json]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[less]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[css]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[scss]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[jsonc]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "[html]": {\n    "editor.defaultFormatter": "esbenp.prettier-vscode"\n  },\n  "javascript.validate.enable": false,\n  "typescript.validate.enable": false,\n  "js/ts.implicitProjectConfig.experimentalDecorators": true,\n  "terminal.integrated.defaultProfile.windows": "Windows PowerShell",\n  "security.workspace.trust.untrustedFiles": "open",\n  "terminal.integrated.profiles.windows": {\n    "PowerShell": {\n      "source": "PowerShell",\n      "icon": "terminal-powershell"\n    },\n    "Command Prompt": {\n      "path": ["${env:windir}\\\\Sysnative\\\\cmd.exe", "${env:windir}\\\\System32\\\\cmd.exe"],\n      "args": [],\n      "icon": "terminal-cmd"\n    },\n    "Git Bash": {\n      "source": "Git Bash"\n    },\n    "Windows PowerShell": {\n      "path": "C:\\\\Windows\\\\System32\\\\WindowsPowerShell\\\\v1.0\\\\powershell.exe"\n    }\n  },\n  "terminal.integrated.profiles.osx": {\n    "bash": {\n      "path": "bash",\n      "args": ["-l"],\n      "icon": "terminal-bash"\n    },\n    "zsh": {\n      "path": "zsh",\n      "args": ["-l"]\n    },\n    "fish": {\n      "path": "fish",\n      "args": ["-l"]\n    },\n    "tmux": {\n      "path": "tmux",\n      "icon": "terminal-tmux"\n    },\n    "pwsh": {\n      "path": "pwsh",\n      "icon": "terminal-powershell"\n    },\n    "tcsh": {\n      "path": "/bin/tcsh"\n    },\n    "dash": {\n      "path": "/bin/dash"\n    }\n  },\n  "terminal.integrated.defaultProfile.osx": "zsh",\n  "javascript.updateImportsOnFileMove.enabled": "always",\n  "markdownlint.config": {\n    "no-reversed-links": false,\n    "no-bare-urls": true\n  },\n  "emmet.triggerExpansionOnTab": true\n}\n')),(0,i.kt)("h2",{id:"vue-cli-\u9879\u76ee\u4f7f\u7528-eslint--prettier--stylelint--husky"},"vue-cli \u9879\u76ee\u4f7f\u7528 eslint + prettier + stylelint + husky"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vue create eslint-prettier-demo\n")),(0,i.kt)("h3",{id:"\u65b0\u5efa\u9879\u76ee\u65f6\u7684\u9009\u62e9"},"\u65b0\u5efa\u9879\u76ee\u65f6\u7684\u9009\u62e9"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9009\u62e9 Manually select features(\u81ea\u5b9a\u4e49\u914d\u7f6e)"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 \u4e0a\u4e0b\u952e\u5b9a\u4f4d\u5230 Linter / Formatter\uff0c\u4f7f\u7528 \u7a7a\u683c\u952e \u2611\ufe0f \u9009\u4e2d\uff0c\u5176\u4ed6\u7684\u914d\u7f6e\u6839\u636e\u9879\u76ee\u9700\u8981\u52fe\u9009 \u2611\ufe0f"),(0,i.kt)("li",{parentName:"ul"},"\u63d0\u793a Pick a linter / formatter config \u65f6\uff0c\u4e0a\u4e0b\u952e \u5b9a\u4f4d\u5230 ESLint + Prettier\uff0c\u5e76\u56de\u8f66")),(0,i.kt)("h3",{id:"\u76f8\u5173\u4f9d\u8d56\u8bf4\u660e"},"\u76f8\u5173\u4f9d\u8d56\u8bf4\u660e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eslint                  \u914d\u7f6e\u4ee3\u7801\u98ce\u683c\u3001\u8d28\u91cf\u7684\u6821\u9a8c"),(0,i.kt)("li",{parentName:"ul"},"prettier                \u7528\u4e8e\u4ee3\u7801\u683c\u5f0f\u7684\u6821\u9a8c"),(0,i.kt)("li",{parentName:"ul"},"eslint-config-prettier  \u4f7f\u7528 prettier \u9ed8\u8ba4\u63a8\u8350\u914d\u7f6e\uff0c\u5173\u95ed eslint \u81ea\u8eab\u7684\u683c\u5f0f\u5316\u529f\u80fd\uff0c\u9632\u6b62 prettier \u548c eslint \u7684\u81ea\u52a8\u683c\u5f0f\u5316\u51b2\u7a81"),(0,i.kt)("li",{parentName:"ul"},"eslint-plugin-prettier  eslint \u63d2\u4ef6\uff0c \u7531 Prettier \u751f\u6001\u63d0\u4f9b\uff0c\u7528\u4e8e\u62a5\u544a\u9519\u8bef\u7ed9 ESLint  "),(0,i.kt)("li",{parentName:"ul"},"eslint-plugin-vue       vue \u4e13\u95e8\u7684 eslint \u89c4\u5219\u63d2\u4ef6\uff0c\u7528\u4e8e\u68c0\u67e5 .vue \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"@babel/eslint-parser    eslint \u7684 babel \u89e3\u6790\u5668\u4ee3\u66ff babel-eslint"),(0,i.kt)("li",{parentName:"ul"},"@vue/cli-plugin-eslint")),(0,i.kt)("h3",{id:"\u5bf9\u4e8e\u672a\u4f7f\u7528-linter--formatter-\u9009\u9879\u521d\u59cb\u5316\u7684\u9879\u76ee\u5b89\u88c5\u4e0b\u9762\u76f8\u5173\u4f9d\u8d56"},"\u5bf9\u4e8e\u672a\u4f7f\u7528 Linter / Formatter \u9009\u9879\u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u5b89\u88c5\u4e0b\u9762\u76f8\u5173\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue -D\nyarn add @babel/core @babel/eslint-parser @vue/cli-plugin-eslint -D\n")),(0,i.kt)("h3",{id:"vscode-\u4f7f\u7528-volar-\u6269\u5c55\u7684\u8bbe\u7f6e"},"vscode \u4f7f\u7528 volar \u6269\u5c55\u7684\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u4fee\u6539 jsconfig.json \u6216\u8005 typescript.config.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "esnext",\n    "baseUrl": "./",\n    "moduleResolution": "node",\n    "paths": {\n      "@/*": [\n        "src/*"\n      ]\n    },\n    "lib": [\n      "esnext",\n      "dom",\n      "dom.iterable",\n      "scripthost"\n    ]\n  },\n  "vueCompilerOptions": {\n    "target": 2.7,\n    // "target": 2 // vue <= 2.6\n    "extensions": [\n      ".vue"\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"\u65b0\u5efa .eslintrc.js \u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  root: true,\n  env: {\n    node: true\n  },\n  extends: [\n    'plugin:vue/essential',\n    'eslint:recommended',\n    'plugin:prettier/recommended'\n  ],\n  parserOptions: {\n    parser: '@babel/eslint-parser'\n  },\n  rules: {\n    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',\n    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',\n    'vue/multi-word-component-names': 'off',\n    'prettier/prettier': [\n      'error',\n      {\n        semi: false,\n        singleQuote: true,\n        trailingComma: 'none'\n      }\n    ]\n  }\n}\n")),(0,i.kt)("p",null,"\u65b0\u5efa .prettierrc \u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "semi": false,\n  "singleQuote": true,\n  "trailingComma": "none"\n}\n')),(0,i.kt)("h2",{id:"\u914d\u7f6e-husky--lint-staged"},"\u914d\u7f6e husky + lint-staged"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prettier.io/docs/en/precommit.html"},"Prettier\u5b98\u65b9\u63d0\u4f9b\u7684 pre-commit \u65b9\u5f0f"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx mrm@2 lint-staged\n")))}c.isMDXComponent=!0}}]);