"use strict";(self.webpackChunksunsboyxu_docs=self.webpackChunksunsboyxu_docs||[]).push([[8683],{7648:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=r(3274),t=r(1377);const i={},a="nrm",c={id:"PackagesTool/nrm",title:"nrm",description:"- nrm\u5b89\u88c5\u548c\u914d\u7f6e",source:"@site/docs/PackagesTool/nrm.md",sourceDirName:"PackagesTool",slug:"/PackagesTool/nrm",permalink:"/yogeexu-docs/PackagesTool/nrm",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"npx",permalink:"/yogeexu-docs/PackagesTool/npx"},next:{title:"nvm",permalink:"/yogeexu-docs/PackagesTool/nvm"}},l={},o=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u76f8\u5173\u95ee\u9898",id:"\u76f8\u5173\u95ee\u9898",level:2},{value:"nrm current \u4e0d\u663e\u793a * \uff0c\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898",id:"nrm-current-\u4e0d\u663e\u793a--\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898",level:3}];function m(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"nrm",children:"nrm"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.jianshu.com/p/94d084ce6834",children:"nrm\u5b89\u88c5\u548c\u914d\u7f6e"})}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"nrm (npm registry manager) \u662f npm \u7684\u955c\u50cf\u6e90\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u5feb\u901f\u7684\u5207\u6362 npm \u955c\u50cf\u6e90"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install -g nrm\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u67e5\u770b\u5f53\u524d nrm \u7248\u672c\nnrm --version\n\n// \u67e5\u770b\u955c\u50cf\u5217\u8868\nnrm ls\n\n// \u4f7f\u7528 \u6dd8\u5b9d\u955c\u50cf\u6e90\nnrm use taobao\n\n// \u663e\u793a\u5f53\u524d \u955c\u50cf\u6e90 \u540d\u79f0\nnrm current\n\n// \u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u955c\u50cf\u6e90\u9996\u9875\nnrm home \u955c\u50cf\u6e90\u540d\u79f0\n\n// \u6dfb\u52a0\u4e00\u4e2a\u955c\u50cf\u6e90(\u5982\uff1a\u516c\u53f8\u79c1\u6709\u955c\u50cf\u6e90)\nnrm add \u955c\u50cf\u6e90\u540d\u79f0 \u955c\u50cf\u6e90\u5730\u5740\n\n// \u5220\u9664\u955c\u50cf\u6e90\nnrm del \u955c\u50cf\u6e90\u540d\u79f0 \n\n// \u6d4b\u8bd5\u6240\u6709 \u955c\u50cf\u6e90 \u901f\u5ea6\nnrm test\n\n// \u6d4b\u8bd5 taobao \u955c\u50cf\u6e90\u901f\u5ea6\nnrm test taobao\n\n// \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u955c\u50cf\u6e90\u7684\u6388\u6743\u4fe1\u606f\nnrm set-auth \u955c\u50cf\u6e90\u540d\u79f0 <value> [always]\n\n// \u7ed9\u81ea\u5b9a\u4e49\u955c\u50cf\u6e90\u8bbe\u7f6e\u8def\u5f84\nnrm set-email \u955c\u50cf\u6e90\u540d\u79f0 <value>\n\n// \u8bbe\u7f6e\u53d1\u5e03\u5230\u81ea\u5b9a\u4e49\u955c\u50cf\u6e90\u7684 npm \u6258\u7ba1\u4ed3\u50a8\nnrm set-hosted-repo \u955c\u50cf\u6e90\u540d\u79f0 <value>\n\n// \u53d1\u5e03\u5305\u5230\u81ea\u5b9a\u4e49\u6e90\uff0c\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u81ea\u5b9a\u4e49\u6e90\uff0c\u5219\u76f4\u63a5\u53d1\u5e03\u5230 npm\nnrm publish [options] [<tarball>|<folder>]\n\n// \u5378\u8f7d\u65f6\u6e05\u9664 NRM \u914d\u7f6e\nnpm uninstall nrm -g --clean\nnpm uninstall nrm -g -C\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u76f8\u5173\u95ee\u9898",children:"\u76f8\u5173\u95ee\u9898"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/Pana/nrm/issues/111",children:"nrm ls \u4f9d\u7136\u4e0d\u5e26\u661f\u6216nrm current \u4e0d\u663e\u793a\u5f53\u524d"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://www.cnblogs.com/xiaoxiaopao/p/16331277.html",children:"nrm current\u663e\u793a\u4e0d\u51fa\u4fe1\u606f\u548c nrm ls \u5f53\u524d\u4f7f\u7528\u6e90\u4e0d\u51fa\u73b0\u661f\u53f7\u7684\u95ee\u9898"})}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"nrm-current-\u4e0d\u663e\u793a--\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898",children:"nrm current \u4e0d\u663e\u793a * \uff0c\u5373\u4e0d\u663e\u793a\u5f53\u524d\u7684\u955c\u50cf\u6e90\u95ee\u9898"}),"\n",(0,s.jsx)(e.p,{children:"macOS \u7cfb\u7edf\u4e0b\uff0c\u5982\u679c\u662f\u901a\u8fc7 nvm \u5b89\u88c5 node \u7684"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"## \u627e\u5230\u5f53\u524d\u4f7f\u7528 node \u7248\u672c\u5b89\u88c5\u76ee\u5f55\n## nrm(cli.js)\u6587\u4ef6\n/Users/\u7528\u6237\u540d/.nvm/versions/node/v16.18.0/bin/nrm\n"})}),"\n",(0,s.jsx)(e.p,{children:"macOS \u4e0b\uff0c\u5982\u679c\u662f\u901a\u8fc7 nodejs \u5b98\u7f51\u4e0b\u8f7d\u5b89\u88c5\u7684"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"## nrm(cli.js)\u6587\u4ef6\n/usr/local/lib/node_modules/nrm\n"})}),"\n",(0,s.jsx)(e.p,{children:"macOS \u4e0b\u4e5f\u53ef\u4ee5\u901a\u8fc7 where nrm \u6765\u67e5\u770b\u5b89\u88c5\u76ee\u5f55"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"where nrm\n# /Users/\u7528\u6237\u540d/.nvm/versions/node/v16.18.0/bin/nrm\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7 vscode \u6216\u8005\u5176\u4ed6\u7f16\u8f91\u5668\u6253\u5f00 nrm(cli.js) \u6587\u4ef6\uff0c\u627e\u5230 \u7b2c211 \u884c\u4ee3\u7801\uff0c\u5c06\u8fd9\u91cc\u7684 && \u66ff\u6362\u6210 ||"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u5c06\u8fd9\u91cc\u7684 && \u66ff\u6362\u6210 ||\n// if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry))\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// nrm(cli.js) \u6587\u4ef6\u7684\u4ee3\u7801\nfunction onUse (name) {\n    var allRegistries = getAllRegistry();\n    if (hasOwnProperty(allRegistries, name)) {\n        getCurrentRegistry(function (cur) {\n            let currentRegistry, item;\n            for (let key of Object.keys(allRegistries)) {\n                item = allRegistries[key];\n                if (item[FIELD_IS_CURRENT] && equalsIgnoreCase(item.registry, cur)) {\n                    currentRegistry = item;\n                    break;\n                }\n            }\n            var registry = allRegistries[name];\n            let attrs = [].concat(REGISTRY_ATTRS).concat();\n            for (let attr in Object.assign({}, currentRegistry, registry)) {\n                if (!REGISTRY_ATTRS.includes(attr) && !IGNORED_ATTRS.includes(attr)) {\n                    attrs.push(attr);\n                }\n            }\n\n            config(attrs, registry).then(() => {\n                console.log('                        ');\n                const newR = npm.config.get(FIELD_REGISTRY);\n                var customRegistries = getCustomRegistry();\n                Object.keys(customRegistries).forEach(key => {\n                    delete customRegistries[key][FIELD_IS_CURRENT];\n                });\n              // \u5c06\u8fd9\u91cc\u7684 && \u66ff\u6362\u6210 ||\n              // if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry))\n                if (hasOwnProperty(customRegistries, name) || (name in registries || customRegistries[name].registry === registry.registry)) {\n                    registry[FIELD_IS_CURRENT] = true;\n                    customRegistries[name] = registry;\n                }\n                setCustomRegistry(customRegistries);\n                printMsg(['', '   Registry has been set to: ' + newR, '']);\n            }).catch(err => {\n                exit(err);\n            });\n        });\n    } else {\n        printMsg(['', '   Not find registry: ' + name, '']);\n    }\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u91cd\u65b0\u4f7f\u7528 nrm \u547d\u4ee4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"nrm use taobao\nnrm ls\nnrm current\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}},1377:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>c});var s=r(9474);const t={},i=s.createContext(t);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);