"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[7987],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>g});var t=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,s=function(e,n){if(null==e)return{};var r,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(r),g=s,y=p["".concat(l,".").concat(g)]||p[g]||u[g]||a;return r?t.createElement(y,i(i({ref:n},m),{},{components:r})):t.createElement(y,i({ref:n},m))}));function g(e,n){var r=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},724:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(7462),s=(r(7294),r(3905));const a={},i="nrm",o={unversionedId:"PackagesTool/nrm",id:"PackagesTool/nrm",title:"nrm",description:"- nrm\u5b89\u88c5\u548c\u914d\u7f6e",source:"@site/docs/PackagesTool/nrm.md",sourceDirName:"PackagesTool",slug:"/PackagesTool/nrm",permalink:"/yogeexu-docs/PackagesTool/nrm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"npx",permalink:"/yogeexu-docs/PackagesTool/npx"},next:{title:"nvm",permalink:"/yogeexu-docs/PackagesTool/nvm"}},l={},c=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",level:2},{value:"nrm current \u4e0d\u663e\u793a * \uff0c\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898",id:"nrm-current-\u4e0d\u663e\u793a--\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898",level:3}],m={toc:c};function u(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nrm"},"nrm"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/94d084ce6834"},"nrm\u5b89\u88c5\u548c\u914d\u7f6e"))),(0,s.kt)("p",null,"nrm (npm registry manager) \u662f npm \u7684\u955c\u50cf\u6e90\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u5207\u6362 npm \u955c\u50cf\u6e90"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g nrm\n")),(0,s.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u67e5\u770b\u7248\u672c\nnrm --version\n\n// \u67e5\u770b\u955c\u50cf\u5217\u8868\nnrm ls\n\n// \u4f7f\u7528 \u6dd8\u5b9d\u955c\u50cf\nnrm use taobao\n\n// \u6d4b\u8bd5\u901f\u5ea6\nnrm test npm\n\n// \u5378\u8f7d\u65f6\u6e05\u9664 NRM \u914d\u7f6e\nnpm uninstall nrm -g --clean\nnpm uninstall nrm -g -C\n")),(0,s.kt)("h2",{id:"\u76f8\u5173\u95ee\u9898"},"\u76f8\u5173\u95ee\u9898"),(0,s.kt)("h3",{id:"nrm-current-\u4e0d\u663e\u793a--\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898"},"nrm current \u4e0d\u663e\u793a * \uff0c\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898"),(0,s.kt)("p",null,"macOS \u7cfb\u7edf\u4e0b\uff0c\u5982\u679c\u662f\u901a\u8fc7 nvm \u5b89\u88c5 node \u7684"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"## \u627e\u5230\u5f53\u524d\u4f7f\u7528 node \u7248\u672c\u5b89\u88c5\u76ee\u5f55\n## nrm(cli.js)\u6587\u4ef6\n/Users/\u7528\u6237\u540d/.nvm/versions/node/v16.18.0/bin/nrm\n")),(0,s.kt)("p",null,"macOS \u4e0b\uff0c\u5982\u679c\u662f\u901a\u8fc7 nodejs \u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u7684"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"## nrm(cli.js)\u6587\u4ef6\n/usr/local/lib/node_modules/nrm\n")),(0,s.kt)("p",null,"macOS \u4e0b\u4e5f\u53ef\u4ee5\u901a\u8fc7 where nrm \u6765\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"where nrm\n# /Users/\u7528\u6237\u540d/.nvm/versions/node/v16.18.0/bin/nrm\n")),(0,s.kt)("p",null,"\u901a\u8fc7 vscode \u6216\u8005\u5176\u4ed6\u7f16\u8f91\u5668\u6253\u5f00 nrm(cli.js) \u6587\u4ef6\uff0c\u627e\u5230 \u7b2c211 \u884c\u4ee3\u7801\uff0c\u5c06\u8fd9\u91cc\u7684 && \u66ff\u6362\u6210 ||"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \u5c06\u8fd9\u91cc\u7684 && \u66ff\u6362\u6210 ||\n// if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry))\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// nrm(cli.js) \u6587\u4ef6\u7684\u4ee3\u7801\nfunction onUse (name) {\n    var allRegistries = getAllRegistry();\n    if (hasOwnProperty(allRegistries, name)) {\n        getCurrentRegistry(function (cur) {\n            let currentRegistry, item;\n            for (let key of Object.keys(allRegistries)) {\n                item = allRegistries[key];\n                if (item[FIELD_IS_CURRENT] && equalsIgnoreCase(item.registry, cur)) {\n                    currentRegistry = item;\n                    break;\n                }\n            }\n            var registry = allRegistries[name];\n            let attrs = [].concat(REGISTRY_ATTRS).concat();\n            for (let attr in Object.assign({}, currentRegistry, registry)) {\n                if (!REGISTRY_ATTRS.includes(attr) && !IGNORED_ATTRS.includes(attr)) {\n                    attrs.push(attr);\n                }\n            }\n\n            config(attrs, registry).then(() => {\n                console.log('                        ');\n                const newR = npm.config.get(FIELD_REGISTRY);\n                var customRegistries = getCustomRegistry();\n                Object.keys(customRegistries).forEach(key => {\n                    delete customRegistries[key][FIELD_IS_CURRENT];\n                });\n              // \u5c06\u8fd9\u91cc\u7684 && \u66ff\u6362\u6210 ||\n              // if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry))\n                if (hasOwnProperty(customRegistries, name) || (name in registries || customRegistries[name].registry === registry.registry)) {\n                    registry[FIELD_IS_CURRENT] = true;\n                    customRegistries[name] = registry;\n                }\n                setCustomRegistry(customRegistries);\n                printMsg(['', '   Registry has been set to: ' + newR, '']);\n            }).catch(err => {\n                exit(err);\n            });\n        });\n    } else {\n        printMsg(['', '   Not find registry: ' + name, '']);\n    }\n}\n")),(0,s.kt)("p",null,"\u91cd\u65b0\u4f7f\u7528 nrm \u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"nrm use taobao\nnrm ls\nnrm current\n")))}u.isMDXComponent=!0}}]);