"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[2852],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,v=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294),i=t(6010);const l="tabItem_Ymn6";function a(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,a),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),i=t(7294),l=t(6010),a=t(2389),s=t(7392),o=t(7094),p=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var n;const{lazy:t,block:a,defaultValue:m,values:d,groupId:v,className:f}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,s.l)(h,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.U)(),[j,x]=(0,i.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=v){const e=y[v];null!=e&&e!==j&&h.some((n=>n.value===e))&&x(e)}const D=e=>{const n=e.currentTarget,t=w.indexOf(n),r=h[t].value;r!==j&&(_(n),x(r),null!=v&&N(v,String(r)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},f)},h.map((e=>{let{value:n,label:t,attributes:a}=e;return i.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>w.push(e),onKeyDown:O,onFocus:D,onClick:D},a,{className:(0,l.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":j===n})}),t??n)}))),t?(0,i.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function d(e){const n=(0,a.Z)();return i.createElement(m,(0,r.Z)({key:String(n)},e))}},2017:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=t(7462),i=(t(7294),t(3905)),l=t(5488),a=t(5162);const s={position:2,title:"vite3"},o=void 0,p={unversionedId:"webs/vite/vite3",id:"webs/vite/vite3",title:"vite3",description:"\u524d\u8a00",source:"@site/docs/webs/vite/vite3.mdx",sourceDirName:"webs/vite",slug:"/webs/vite/vite3",permalink:"/yogeexu-docs/webs/vite/vite3",draft:!1,tags:[],version:"current",frontMatter:{position:2,title:"vite3"},sidebar:"myAutogeneratedSidebar",previous:{title:"vite2",permalink:"/yogeexu-docs/webs/vite/vite2"},next:{title:"Vuepress",permalink:"/yogeexu-docs/webs/vuepress/"}},u={},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u9884\u8bbe\u7684\u6a21\u7248",id:"\u9884\u8bbe\u7684\u6a21\u7248",level:3},{value:"\u521b\u5efa\u4e00\u4e2a vite3-app \u7684\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a-vite3-app-\u7684\u9879\u76ee",level:3},{value:"\u521d\u59cb\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",id:"\u521d\u59cb\u9879\u76ee\u76ee\u5f55\u7ed3\u6784",level:3},{value:"npx vite --help \u6253\u5370\u7684\u65e5\u5fd7",id:"npx-vite---help-\u6253\u5370\u7684\u65e5\u5fd7",level:3},{value:"vite \u914d\u7f6e",id:"vite-\u914d\u7f6e",level:3},{value:"\u751f\u6210 jsconfig.json",id:"\u751f\u6210-jsconfigjson",level:3},{value:"\u4ee3\u7801\u89c4\u8303",id:"\u4ee3\u7801\u89c4\u8303",level:2},{value:"\u914d\u7f6e editorconfig",id:"\u914d\u7f6e-editorconfig",level:3},{value:"\u914d\u7f6e eslint \u548c prettier",id:"\u914d\u7f6e-eslint-\u548c-prettier",level:3},{value:"\u914d\u7f6e\u4ee3\u7801 pre-commit",id:"\u914d\u7f6e\u4ee3\u7801-pre-commit",level:3},{value:"\u6dfb\u52a0 vue-router",id:"\u6dfb\u52a0-vue-router",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"Vite \u4e0d\u518d\u652f\u6301 Node 12/13/15\uff0c\u56e0\u4e3a\u4e0a\u8ff0\u7248\u672c\u5df2\u7ecf\u8fdb\u5165\u4e86 EOL \u9636\u6bb5\uff0c\u987b\u4f7f\u7528 Node 14.18+/16+ \u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cn.vitejs.dev/"},"vite3")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7156957907890733063"},"\u4ece 0 \u642d\u5efa Vite3 + Vue3 \u524d\u7aef\u5de5\u7a0b\u5316\u9879\u76ee"))),(0,i.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,i.kt)("h3",{id:"\u9884\u8bbe\u7684\u6a21\u7248"},"\u9884\u8bbe\u7684\u6a21\u7248"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cn.vitejs.dev/guide/#community-templates"},"\u793e\u533a\u6a21\u677f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vitejs/awesome-vite#templates"},"Awesome Vite \u4ed3\u5e93\u7684 \u793e\u533a\u7ef4\u62a4\u6a21\u677f"))),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{label:"yarn",value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create vite \u9879\u76ee\u540d\u79f0\nyarn create vite \u9879\u76ee\u540d\u79f0 --template vue\nyarn create vite \u9879\u76ee\u540d\u79f0 --template vue-ts\n"))),(0,i.kt)(a.Z,{label:"npm",value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest \u9879\u76ee\u540d\u79f0\nnpm create vite@latest \u9879\u76ee\u540d\u79f0 --template vue\nnpm create vite@latest \u9879\u76ee\u540d\u79f0 --template vue-ts\n")))),"```",(0,i.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-vite3-app-\u7684\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a vite3-app \u7684\u9879\u76ee"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create vite vite3-app --template vue\ncd vite3-app\nyarn\n\n# \u67e5\u770b vite \u6709\u54ea\u4e9b\u547d\u4ee4\nnpx vite --help\n")),(0,i.kt)("h3",{id:"\u521d\u59cb\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"},"\u521d\u59cb\u9879\u76ee\u76ee\u5f55\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vite3-app1\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n|  \u2514\u2500\u2500 vite.svg\n\u251c\u2500\u2500 src\n|  \u251c\u2500\u2500 App.vue\n|  \u251c\u2500\u2500 assets\n|  |  \u2514\u2500\u2500 vue.svg\n|  \u251c\u2500\u2500 components\n|  |  \u2514\u2500\u2500 HelloWorld.vue\n|  \u251c\u2500\u2500 main.js\n|  \u2514\u2500\u2500 style.css\n\u251c\u2500\u2500 vite.config.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,i.kt)("h3",{id:"npx-vite---help-\u6253\u5370\u7684\u65e5\u5fd7"},"npx vite --help \u6253\u5370\u7684\u65e5\u5fd7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npx vite --help",npx:!0,vite:!0,"--help":!0},"vite/3.2.4\n\nUsage:\n  $ vite [root]\n\nCommands:\n  [root]           start dev server\n  build [root]     build for production\n  optimize [root]  pre-bundle dependencies\n  preview [root]   locally preview production build\n\nFor more info, run any command with the `--help` flag:\n  $ vite --help\n  $ vite build --help\n  $ vite optimize --help\n  $ vite preview --help\n\nOptions:\n  --host [host]           [string] specify hostname \n  --port <port>           [number] specify port \n  --https                 [boolean] use TLS + HTTP/2 \n  --open [path]           [boolean | string] open browser on startup \n  --cors                  [boolean] enable CORS \n  --strictPort            [boolean] exit if specified port is already in use \n  --force                 [boolean] force the optimizer to ignore the cache and re-bundle \n  -c, --config <file>     [string] use specified config file \n  --base <path>           [string] public base path (default: /) \n  -l, --logLevel <level>  [string] info | warn | error | silent \n  --clearScreen           [boolean] allow/disable clear screen when logging \n  -d, --debug [feat]      [string | boolean] show debug logs \n  -f, --filter <filter>   [string] filter debug logs \n  -m, --mode <mode>       [string] set env mode \n  -h, --help              Display this message \n  -v, --version           Display version number\n")),(0,i.kt)("h3",{id:"vite-\u914d\u7f6e"},"vite \u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/config/"},"vite\u914d\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cn.vitejs.dev/config/"},"vite\u914d\u7f6e \u4e2d\u6587"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=vite \u914d\u7f6e",title:"vite","\u914d\u7f6e":!0},"import vuePlugin from '@vitejs/plugin-vue'\nimport { defineConfig } from 'vite'\n\n// \u8fd9\u79cd\u5199\u6cd5\u4e0d\u652f\u6301 **Dynamic require of \"path\" is not supported**\n// \u4e0d\u652f\u6301\u6301 commonJS\n// const path = require('path')\n// const resolveDir = dir => path.resolve(__dirname, dir)\n\n// import path from 'path'\n// const resolveDir = dir => path.resolve(__dirname, dir)\n\nimport { resolve } from 'path'\nconst resolveDir = dir => resolve(__dirname, dir)\n\n// \u5199\u6cd5\u4e00\nexport default defineConfig({\n  base: '/',\n  publicDir: 'public',\n  resolve: {},\n  plugins: [vuePlugin()]\n  ...\n})\n\n// \u5199\u6cd5\u4e8c\nexport default defineConfig((config) => {\n  // config: { mode: 'development', command: 'serve', ssrBuild: false }\n  const { mode } = config\n  return {\n    base: mode === 'development' ? '/' : './',\n    publicDir: 'public',\n    resolve: {},\n    server: {},\n    css: {},\n    build: {},\n    plugins: [vuePlugin()]\n  }\n})\n\n// \u5199\u6cd5\u4e09\nexport default defineConfig({ mode, command, ssrBuild } => {\n  return {\n    base: mode === 'development' ? '/' : './',\n    publicDir: 'public',\n    resolve: {},\n    server: {},\n    css: {},\n    build: {},\n    plugins: [vuePlugin()]\n  }\n})\n")),(0,i.kt)("p",null,"\u4e0b\u9762\u8fdb\u884c\u7b80\u5355\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=vite.config.js",title:"vite.config.js"},"import VuePlugin from '@vitejs/plugin-vue'\nimport { resolve } from 'path'\nimport { defineConfig } from 'vite'\nconst resolveDir = dir => resolve(__dirname, dir)\n\nexport default defineConfig(({ mode }) => {\n  /**\n   * config \u53c2\u6570\n   * { mode: 'development', command: 'serve', ssrBuild: false }\n  */\n  return {\n    // \u57fa\u7840\u8def\u5f84\uff0c\u7ebf\u4e0a\u73af\u5883\u53ef\u80fd\u662f\uff0c\u5982\uff1a/test/h5/\uff0c\u5982\u679c\u5c06 .js .css\u7b49\u8d44\u6e90\u6587\u4ef6\u5b58\u653e oss \u914d\u7f6e\u4e3a oss \u7684\u8def\u5f84\n    base: mode === 'development' ? '/' : './',\n    // \u9759\u6001\u76ee\u5f55\n    publicDir: 'public',\n    // \u8d44\u6e90\u76ee\u5f55\n    assetsDir: 'assets',\n    resolve: {\n      // \u914d\u7f6e\u522b\u540d\uff0c\u5199\u6cd5\u4e00\n      alias: {\n        '@': resolve('./src'),\n        '@components': resolve('./src/components'),\n        '@styles': resolve('./src/styles')\n      },\n      // \u914d\u7f6e\u522b\u540d\uff0c\u5199\u6cd5\u4e8c\n      alias: [{\n        find: '@',\n        replacement: resolveDir('./src')\n      }, {\n        find: '@components',\n        replacement: resolveDir('./src/components')\n      }, {\n        find: '@styles',\n        replacement: resolveDir('./src/styles')\n      }]\n    },\n    // css \u914d\u7f6e\u9879\n    css: {\n      preprocessorOptions: {\n        scss: {\n          additionalData: `@import '@/styles/variable.scss';`\n        }\n      }\n    },\n    // \u670d\u52a1\u914d\u7f6e\n    server: {\n      // \u5982\u679c\u6307\u5b9a\u7aef\u53e3\u5df2\u88ab\u4f7f\u7528\uff0cvite \u5c06\u9000\u51fa\n      strictPort: true,\n      // \u662f\u5426\u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\n      open: true,\n      // \u5982\u679c\u9700\u8981\u5c40\u57df\u7f51\u8bbf\u95ee\uff0c\u914d\u7f6e\u6210 '0.0.0.0' yarn dev \u65f6\u4f1a\u663e\u793a \u5c40\u57df\u7f51\u7684\u8bbf\u95ee\u5730\u5740\n      host: '0.0.0.0',\n      // \u7aef\u53e3\n      port: 9000,\n      // \u662f\u5426\u5f00\u542f https\n      https: false,\n      // \u662f\u5426\u5141\u8bb8\u8de8\u57df\n      cors: true,\n      headers: {\n        'api': '2.0'\n      },\n      // \u4ee3\u7406\n      proxy: {\n        '/news': 'http://xxx.com/reg/api/news',\n        '/api': {\n          target: 'http://xxx.com',\n          changeOrigin: true,\n          rewrite: path => path.replace(/^\\/api/, '/reg/api')\n        }\n      }\n    },\n    build: {\n      target: 'es2015',\n      outDir: 'dist',\n      assetsDir: 'assets',\n      cssCodeSplit: true,\n      minify: 'terser',\n      sourcemap: false\n    },\n    // \u63d2\u4ef6\n    plugins: [VuePlugin()]\n  }\n})\n")),(0,i.kt)("p",null,"\u5254\u9664\u6ce8\u91ca\u540e\u7684\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import VuePlugin from '@vitejs/plugin-vue'\nimport { resolve } from 'path'\nimport { defineConfig } from 'vite'\nconst resolveDir = dir => resolve(__dirname, dir)\n\nexport default defineConfig(({ mode }) => {\n  return {\n    base: mode === 'development' ? '/' : './',\n    publicDir: 'public',\n    assetsDir: 'assets',\n    resolve: {\n      alias: {\n        '@': resolve('./src'),\n        '@components': resolve('./src/components'),\n        '@styles': resolve('./src/styles')\n      }\n    },\n    css: {\n      preprocessorOptions: {\n        scss: {\n          additionalData: `@import '@/styles/variable.scss';`\n        }\n      }\n    },\n    server: {\n      strictPort: true,\n      open: true,\n      host: '0.0.0.0',\n      port: 9000,\n      https: false,\n      cors: true,\n      headers: {\n        'api': '2.0'\n      },\n      proxy: {\n        '/news': 'http://xxx.com/reg/api/news',\n        '/api': {\n          target: 'http://xxx.com',\n          changeOrigin: true,\n          rewrite: path => path.replace(/^\\/api/, '/reg/api')\n        }\n      }\n    },\n    build: {\n      target: 'es2015',\n      outDir: 'dist',\n      assetsDir: 'assets',\n      cssCodeSplit: true,\n      minify: 'terser',\n      sourcemap: false\n    },\n    // \u63d2\u4ef6\n    plugins: [VuePlugin()]\n  }\n})\n")),(0,i.kt)("h3",{id:"\u751f\u6210-jsconfigjson"},"\u751f\u6210 jsconfig.json"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jsimck/jsconfig.json"},"jsconfig.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_44067347/article/details/125632655"},"vue\u9879\u76ee\u4e2d jsconfig.json\u662f\u4ec0\u4e48")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/huochai770880/article/details/125819132"},"vue\u9879\u76ee\u6784\u5efa\u4e4bjsconfig.json\u4f5c\u7528"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\nnpx jsconfig.json -t 'vuejs'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "checkJs": false,\n    "resolveJsonModule": true,\n    "moduleResolution": "node",\n    "target": "es2020",\n    "module": "es2015",\n    "baseUrl": ".",\n    "paths": {\n      "@/*": [\n        "src/*"\n      ]\n    }\n  },\n  "exclude": [\n    "dist",\n    "node_modules",\n    "build",\n    ".vscode",\n    ".nuxt",\n    "coverage",\n    ".npm",\n    ".yarn"\n  ],\n  "typeAcquisition": {\n    "enable": true\n  }\n}\n')),(0,i.kt)("p",null,"\u5bf9\u6bd4 @vue/cli \u521b\u5efa\u9879\u76ee\u751f\u6210\u7684 jsconfig.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// @vue/cli \u521b\u5efa\u9879\u76ee\u751f\u6210\u7684 \n{\n  "compilerOptions": {\n    "target": "es5",\n    "module": "esnext",\n    "baseUrl": "./",\n    "moduleResolution": "node",\n    "paths": {\n      "@/*": [\n        "src/*"\n      ]\n    },\n    "lib": [\n      "esnext",\n      "dom",\n      "dom.iterable",\n      "scripthost"\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"\u4ee3\u7801\u89c4\u8303"},"\u4ee3\u7801\u89c4\u8303"),(0,i.kt)("p",null,"\u4ee3\u7801\u89c4\u8303\uff0c\u91c7\u7528 editorconfig + eslint + prttier + husky + lintstag"),(0,i.kt)("h3",{id:"\u914d\u7f6e-editorconfig"},"\u914d\u7f6e editorconfig"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u65b0\u5efa .editorconfig"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root = true // \u6700\u9876\u7ea7\u7684\u914d\u7f6e,\u76f8\u5f53\u4e8e\u6839 editorconfig \u76f4\u5230\u67e5\u627e\u5230 root=true \u624d\u4f1a\u505c\u6b62\u67e5\u627e\u4e0d\u7136\u4f1a\u4e00\u76f4\u5411\u4e0a\u67e5\u627e\n\n[*] // \u901a\u914d\u7b26\u5339\u914d \u4efb\u610f\u5b57\u7b26\u4e32\u7684\u6587\u4ef6\ncharset = utf-8 // \u7f16\u7801\u683c\u5f0f\nindent_style = space\nindent_size = 2\nend_of_line = lf // \u5b9a\u4e49\u6362\u884c\u7b26: lf | cr | crlf\ninsert_final_newline = true // \u8bbe\u4e3a true \u8868\u660e\u4f7f\u6587\u4ef6\u4ee5\u4e00\u4e2a\u7a7a\u767d\u884c\u7ed3\u5c3e, false \u53cd\u4e4b\ntrim_trailing_whitespace = true // \u8bbe\u4e3a true \u8868\u793a\u4f1a\u9664\u53bb\u6362\u884c\u884c\u9996\u7684\u4efb\u610f\u7a7a\u767d\u5b57\u7b26\uff0cfalse \u53cd\u4e4b\nmax_line_length = 80\n\n[*.md] // \u901a\u914d\u7b26\u5339\u914d .md \u7684\u6587\u4ef6\ntrim_trailing_whitespace = false\nmax_line_length = 0\n")),(0,i.kt)("p",null,"\u5254\u9664\u6ce8\u91ca\u540e\u7684\u914d\u7f6e"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"root = true\n\n[*]\ncharset = utf-8\nindent_style = space\nindent_size = 2\nend_of_line = lf\ninsert_final_newline = true\ntrim_trailing_whitespace = true\nmax_line_length = 80\n\n[*.md]\ntrim_trailing_whitespace = false\nmax_line_length = 0\n")),(0,i.kt)("h3",{id:"\u914d\u7f6e-eslint-\u548c-prettier"},"\u914d\u7f6e eslint \u548c prettier"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eslint                  \u914d\u7f6e\u4ee3\u7801\u98ce\u683c\u3001\u8d28\u91cf\u7684\u6821\u9a8c"),(0,i.kt)("li",{parentName:"ul"},"prettier                \u7528\u4e8e\u4ee3\u7801\u683c\u5f0f\u7684\u6821\u9a8c"),(0,i.kt)("li",{parentName:"ul"},"eslint-config-prettier  \u4f7f\u7528 prettier \u9ed8\u8ba4\u63a8\u8350\u914d\u7f6e\uff0c\u5173\u95ed eslint \u81ea\u8eab\u7684\u683c\u5f0f\u5316\u529f\u80fd\uff0c\u9632\u6b62 prettier \u548c eslint \u7684\u81ea\u52a8\u683c\u5f0f\u5316\u51b2\u7a81"),(0,i.kt)("li",{parentName:"ul"},"eslint-plugin-prettier  eslint \u63d2\u4ef6\uff0c \u7531 Prettier \u751f\u6001\u63d0\u4f9b\uff0c\u7528\u4e8e\u62a5\u544a\u9519\u8bef\u7ed9 ESLint  "),(0,i.kt)("li",{parentName:"ul"},"eslint-plugin-vue       vue \u4e13\u95e8\u7684 eslint \u89c4\u5219\u63d2\u4ef6\uff0c\u7528\u4e8e\u68c0\u67e5 .vue \u6587\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"@babel/core"),(0,i.kt)("li",{parentName:"ul"},"@babel/eslint-parser    eslint \u7684 babel \u89e3\u6790\u5668\u4ee3\u66ff babel-eslint")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue prettier @babel/core @babel/eslint-parser -D\n")),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u65b0\u5efa .eslintrc.js"),(0,i.kt)("h3",{id:"\u914d\u7f6e\u4ee3\u7801-pre-commit"},"\u914d\u7f6e\u4ee3\u7801 pre-commit"),(0,i.kt)("p",null,"\u4f7f\u7528 husky + lintstag "),(0,i.kt)("h2",{id:"\u6dfb\u52a0-vue-router"},"\u6dfb\u52a0 vue-router"),(0,i.kt)("p",null,"\u9879\u76ee\u6dfb\u52a0 vue-router4 \u63d2\u4ef6\uff0csrc \u4e0b\u65b0\u5efa router \u76ee\u5f55\u548c index.js \uff0csrc \u4e0b \u65b0\u5efa views \u76ee\u5f55\uff0c\u5e76\u65b0\u5efa Home.vue \u548c About.vue\uff08\u5185\u5bb9\u5199\u70b9\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add vue-router@latest -S\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=vue-router",title:"vue-router"},"import { createRouter, createWebHashHistory } from 'vue-router'\n\nconst router = createRouter({\n  history: createWebHashHistory(),\n  scrollBehavior() {\n    return {\n      el: '#app',\n      top: 0,\n      behavior: 'smooth'\n    }\n  },\n  routes: [{\n    path: '/',\n    name: 'home',\n    component: () => import('@/views/Home.vue')\n  }, {\n    path: '/about',\n    name: 'about',\n    component: () => import('@/views/About.vue')\n  }]\n})\n\nexport default router\n")),(0,i.kt)("p",null,"\u5c06\u539f\u5148 App.vue \u7684\u5185\u5bb9\u79fb\u52a8 Home.vue \u4e2d\uff0c"))}d.isMDXComponent=!0}}]);