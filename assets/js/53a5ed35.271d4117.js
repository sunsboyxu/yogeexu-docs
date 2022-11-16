"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[7030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},i="\u817e\u8baf\u4e91\u5f00\u53d1",o={unversionedId:"weixin/wxcloud",id:"weixin/wxcloud",title:"\u817e\u8baf\u4e91\u5f00\u53d1",description:"- \u4e91\u5f00\u53d1CloudBase\u5feb\u901f\u6784\u5efa\u5c0f\u7a0b\u5e8f\u3001Web\u548c\u79fb\u52a8\u5e94\u7528",source:"@site/docs/weixin/wxcloud.md",sourceDirName:"weixin",slug:"/weixin/wxcloud",permalink:"/yogeexu-docs/weixin/wxcloud",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",permalink:"/yogeexu-docs/weixin/wxapp"},next:{title:"\u5fae\u4fe1\u652f\u4ed8",permalink:"/yogeexu-docs/weixin/wxpay"}},p={},c=[{value:"\u73af\u5883\u5b89\u88c5",id:"\u73af\u5883\u5b89\u88c5",level:2},{value:"\u5fae\u4fe1\u4e91\u5f00\u53d1",id:"\u5fae\u4fe1\u4e91\u5f00\u53d1",level:2},{value:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1",id:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1",level:2},{value:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u5b9e\u6218",id:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u5b9e\u6218",level:3},{value:"\u4ece\u96f6\u642d\u5efa\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u73af\u5883",id:"\u4ece\u96f6\u642d\u5efa\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u73af\u5883",level:2},{value:"Tip",id:"tip",level:2},{value:"1 \u5c0f\u7a0b\u5e8f 2.2.3 \u6216\u4ee5\u4e0a\u7684\u57fa\u7840\u5e93\u53ef\u4ee5\u4f7f\u7528\u4e91\u80fd\u529b",id:"1-\u5c0f\u7a0b\u5e8f-223-\u6216\u4ee5\u4e0a\u7684\u57fa\u7840\u5e93\u53ef\u4ee5\u4f7f\u7528\u4e91\u80fd\u529b",level:2},{value:"\u4f7f\u7528 vue-admin-template \u642d\u5efa \u5c0f\u7a0b\u5e8f\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",id:"\u4f7f\u7528-vue-admin-template-\u642d\u5efa-\u5c0f\u7a0b\u5e8f\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf",level:3},{value:"\u4f7f\u7528 node+koa \u642d\u5efa \u540e\u53f0 api \u63a5\u53e3",id:"\u4f7f\u7528-nodekoa-\u642d\u5efa-\u540e\u53f0-api-\u63a5\u53e3",level:2},{value:"\u901a\u8fc7 http \u8c03\u7528\u5c0f\u7a0b\u5e8f \u4e91\u5f00\u53d1",id:"\u901a\u8fc7-http-\u8c03\u7528\u5c0f\u7a0b\u5e8f-\u4e91\u5f00\u53d1",level:3},{value:"\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1 access_token(\u7f13\u5b58\u548c\u66f4\u65b0)",id:"\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1-access_token\u7f13\u5b58\u548c\u66f4\u65b0",level:2},{value:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u5168\u5c40\u552f\u4e00\u540e\u53f0\u63a5\u53e3\u8c03\u7528\u51ed\u636e\uff08access_token\uff09\u3002\u8c03\u8c03\u7528\u7edd\u5927\u591a\u6570\u540e\u53f0\u63a5\u53e3\u65f6\u90fd\u9700\u4f7f\u7528 access_token\uff0c\u5f00\u53d1\u8005\u9700\u8981\u8fdb\u884c\u59a5\u5584\u4fdd\u5b58",id:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u5168\u5c40\u552f\u4e00\u540e\u53f0\u63a5\u53e3\u8c03\u7528\u51ed\u636eaccess_token\u8c03\u8c03\u7528\u7edd\u5927\u591a\u6570\u540e\u53f0\u63a5\u53e3\u65f6\u90fd\u9700\u4f7f\u7528-access_token\u5f00\u53d1\u8005\u9700\u8981\u8fdb\u884c\u59a5\u5584\u4fdd\u5b58",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u817e\u8baf\u4e91\u5f00\u53d1"},"\u817e\u8baf\u4e91\u5f00\u53d1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.cloudbase.net/"},"\u4e91\u5f00\u53d1CloudBase\u5feb\u901f\u6784\u5efa\u5c0f\u7a0b\u5e8f\u3001Web\u548c\u79fb\u52a8\u5e94\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/user/4744530"},"\u4e91\u793e\u533a - \u817e\u8baf\u4e91\u5f00\u53d1TCB")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/developer/devdocs"},"\u5f00\u53d1\u8005\u624b\u518c"))),(0,r.kt)("p",null,"::: tip \u5f00\u901a\u73af\u5883\u7684\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5f00\u901a\u73af\u5883\u7684\u65b9\u5f0f\u67093\u79cd\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5728\u817e\u8baf\u4e91\u5b98\u7f51\u63a7\u5236\u53f0\u5f00\u901a"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e91\u5f00\u53d1\u5f00\u53d1\u8005\u5de5\u5177\uff1aCLI(\u5373\u547d\u4ee4\u884c\u5de5\u5177)\u5f00\u901a"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f IDE \u91cc\u5f00\u901a\n:::")))),(0,r.kt)("h2",{id:"\u73af\u5883\u5b89\u88c5"},"\u73af\u5883\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm install @cloudbase/cli -g\n// \u68c0\u6d4b cloudbase \u547d\u4ee4\u53ef\u4ee5\u7b80\u5199\u6210 tcb(Tencent Cloud Base)\ncloudbase -v \ntcb -v\n")),(0,r.kt)("h2",{id:"\u5fae\u4fe1\u4e91\u5f00\u53d1"},"\u5fae\u4fe1\u4e91\u5f00\u53d1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.weixin.qq.com/cloudbase"},"\u5fae\u4fe1\u4e91\u5f00\u53d1-\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"},"\u5fae\u4fe1\u4e91\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/web.html"},"\u5728\u516c\u4f17\u53f7\u4e2d\u4f7f\u7528\u4e91\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/community/business/course/00022011ec0a287dd32b4ddce5180d"},"\u4e91\u5f00\u53d1\u5165\u95e8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/billing/postpayment.html"},"\u4ed8\u8d39\u8bf4\u660e"))),(0,r.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1"},"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cloudbase.net/"},"\u4e91\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cloudbase.net/api-reference/webv2/initialization.html"},"\u4e91\u5f00\u53d1 Web SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/web/sdk.html"},"Web SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/web.html"},"\u5728\u516c\u4f17\u53f7\u4e2d\u4f7f\u7528\u4e91\u5f00\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"},"\u4e91\u5f00\u53d1\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference/errcode.html"},"\u4e91\u5f00\u53d1\u9519\u8bef\u7801")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/TencentCloudBase/tcb-router"},"\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1 \u4e91\u51fd\u6570\u7c7b koa \u8def\u7531\u5de5\u5177")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/da301f4cce52"},"tcb-router")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/solution/la"},"\u5c0f\u7a0b\u5e8f\xb7\u4e91\u5f00\u53d1\u89e3\u51b3\u65b9\u6848"))),(0,r.kt)("h3",{id:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u5b9e\u6218"},"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u5b9e\u6218"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/havendream/article/details/103022183"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u5b9e\u6218\u575a\u679c\u5546\u57ce-\u5f00\u7bc7")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wangxiaoting.blog.csdn.net/article/details/86626041"},"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u5168\u5957\u5b9e\u6218\u6559\u7a0b\uff08\u6700\u5168\uff09"))),(0,r.kt)("h2",{id:"\u4ece\u96f6\u642d\u5efa\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u73af\u5883"},"\u4ece\u96f6\u642d\u5efa\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u73af\u5883"),(0,r.kt)("p",null,"1\u3001\u65b0\u5efa\u4e00\u4e2a\u4e91\u53d1\u5f00\u7684\u5b9e\u4f8b\u9879\u76ee\uff0c\u586b\u5199\u4f60\u81ea\u5df1\u7684\u5c0f\u7a0b\u5e8f\u7684appid\uff0c\u6253\u5f00\u9879\u76ee\u540e\uff0c\u70b9\u51fb\u9876\u90e8\u83dc\u5355\u7684\u4e91\u5f00\u53d1\uff0c\n\u7b2c\u4e00\u6b21 \u8bf7\u70b9\u51fb \u5f00\u901a \uff0c\u8f93\u5165\u4f60\u81ea\u5df1\u8868\u793a\u7684 \u73af\u5883\u540d\u79f0 \u73af\u5883id \u53ef\u4ee5\u9ed8\u8ba4\n2\u3001\u53ef\u4ee5\u5c06 cloudfunctions \u76ee\u5f55 \u4e0b\u7684\u4e91\u51fd\u6570 \u8fdb\u884c \u521b\u5efa\u5e76\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u81ea\u5df1 \u70b9\u51fb \u65b0\u5efa Node.js\u4e91\u51fd\u6570\n3\u3001\u6bcf \u521b\u5efa\u7684\u4e91\u51fd\u6570 \u90fd\u7c7b\u578b\u4e00\u4e2a\u7b80\u5355\u7684 node \u6a21\u5757\u5427\uff0c\u53ef\u4ee5\u6dfb\u52a0\u5176\u4ed6\u6a21\u5757 \u5982\uff1arequest request-promise"),(0,r.kt)("h2",{id:"tip"},"Tip"),(0,r.kt)("h2",{id:"1-\u5c0f\u7a0b\u5e8f-223-\u6216\u4ee5\u4e0a\u7684\u57fa\u7840\u5e93\u53ef\u4ee5\u4f7f\u7528\u4e91\u80fd\u529b"},"1 \u5c0f\u7a0b\u5e8f 2.2.3 \u6216\u4ee5\u4e0a\u7684\u57fa\u7840\u5e93\u53ef\u4ee5\u4f7f\u7528\u4e91\u80fd\u529b"),(0,r.kt)("h3",{id:"\u4f7f\u7528-vue-admin-template-\u642d\u5efa-\u5c0f\u7a0b\u5e8f\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"},"\u4f7f\u7528 vue-admin-template \u642d\u5efa \u5c0f\u7a0b\u5e8f\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/PanJiaChen/vue-admin-template"},"vue-admin-template\u4e0b\u8f7d\u5730\u5740")),(0,r.kt)("h2",{id:"\u4f7f\u7528-nodekoa-\u642d\u5efa-\u540e\u53f0-api-\u63a5\u53e3"},"\u4f7f\u7528 node+koa \u642d\u5efa \u540e\u53f0 api \u63a5\u53e3"),(0,r.kt)("p",null,"\u521b\u5efa music-api \u9879\u76ee\ncd music-api\nnpm init -y\nmkdir app.js\nnpm install koa request request-promise --save"),(0,r.kt)("h3",{id:"\u901a\u8fc7-http-\u8c03\u7528\u5c0f\u7a0b\u5e8f-\u4e91\u5f00\u53d1"},"\u901a\u8fc7 http \u8c03\u7528\u5c0f\u7a0b\u5e8f \u4e91\u5f00\u53d1"),(0,r.kt)("h2",{id:"\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1-access_token\u7f13\u5b58\u548c\u66f4\u65b0"},"\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1 access_token(\u7f13\u5b58\u548c\u66f4\u65b0)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/"},"\u5c0f\u7a0b\u5e8f\u670d\u52a1\u7aef\u6587\u6863"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html"},"\u63a5\u53e3\u8c03\u7528\u51ed\u8bc1")),(0,r.kt)("h3",{id:"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u5168\u5c40\u552f\u4e00\u540e\u53f0\u63a5\u53e3\u8c03\u7528\u51ed\u636eaccess_token\u8c03\u8c03\u7528\u7edd\u5927\u591a\u6570\u540e\u53f0\u63a5\u53e3\u65f6\u90fd\u9700\u4f7f\u7528-access_token\u5f00\u53d1\u8005\u9700\u8981\u8fdb\u884c\u59a5\u5584\u4fdd\u5b58"},"\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u5168\u5c40\u552f\u4e00\u540e\u53f0\u63a5\u53e3\u8c03\u7528\u51ed\u636e\uff08access_token\uff09\u3002\u8c03\u8c03\u7528\u7edd\u5927\u591a\u6570\u540e\u53f0\u63a5\u53e3\u65f6\u90fd\u9700\u4f7f\u7528 access_token\uff0c\u5f00\u53d1\u8005\u9700\u8981\u8fdb\u884c\u59a5\u5584\u4fdd\u5b58"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=APPID&secret=APPSECRET"},"\u8bf7\u6c42\u5730\u5740 GET")),(0,r.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\uff1a\n\u5c5e\u6027         \u7c7b\u578b \u9ed8\u8ba4\u503c \u5fc5\u586b   \u8bf4\u660e\ngrant_type string  \u662f   \u586b\u5199 client_credential\nappid     string  \u662f   \u5c0f\u7a0b\u5e8f\u552f\u4e00\u51ed\u8bc1\uff0c\u5373 AppID\uff0c\u53ef\u5728\u300c\u5fae\u4fe1\u516c\u4f17\u5e73\u53f0 - \u8bbe\u7f6e - \u5f00\u53d1\u8bbe\u7f6e\u300d\u9875\u4e2d\u83b7\u5f97\u3002\uff08\u9700\u8981\u5df2\u7ecf\u6210\u4e3a\u5f00\u53d1\u8005\uff0c\u4e14\u5e10\u53f7\u6ca1\u6709\u5f02\u5e38\u72b6\u6001\uff09\nsecret     string  \u662f   \u5c0f\u7a0b\u5e8f\u552f\u4e00\u51ed\u8bc1\u5bc6\u94a5\uff0c\u5373 AppSecret\uff0c\u83b7\u53d6\u65b9\u5f0f\u540c appid"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u8fd4\u56de\u503c(Object\uff0cJSON \u6570\u636e\u5305):\n\u5c5e\u6027             \u7c7b\u578b     \u8bf4\u660e\naccess_token string         \u83b7\u53d6\u5230\u7684\u51ed\u8bc1\nexpires_in     number         \u51ed\u8bc1\u6709\u6548\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002\u76ee\u524d\u662f7200\u79d2\u4e4b\u5185\u7684\u503c\u3002\nerrcode         number         \u9519\u8bef\u7801\nerrmsg         string         \u9519\u8bef\u4fe1\u606f"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\naccess_token \u7684\u5b58\u50a8\u4e0e\u66f4\u65b0\naccess_token \u7684\u5b58\u50a8\u81f3\u5c11\u8981\u4fdd\u7559 512 \u4e2a\u5b57\u7b26\u7a7a\u95f4\uff1b\naccess_token \u7684\u6709\u6548\u671f\u76ee\u524d\u4e3a 2 \u4e2a\u5c0f\u65f6\uff0c\u9700\u5b9a\u65f6\u5237\u65b0\uff0c\u91cd\u590d\u83b7\u53d6\u5c06\u5bfc\u81f4\u4e0a\u6b21\u83b7\u53d6\u7684 access_token \u5931\u6548\uff1b\n\u5efa\u8bae\u5f00\u53d1\u8005\u4f7f\u7528\u4e2d\u63a7\u670d\u52a1\u5668\u7edf\u4e00\u83b7\u53d6\u548c\u5237\u65b0 access_token\uff0c\u5176\u4ed6\u4e1a\u52a1\u903b\u8f91\u670d\u52a1\u5668\u6240\u4f7f\u7528\u7684 access_token \u5747\u6765\u81ea\u4e8e\u8be5\u4e2d\u63a7\u670d\u52a1\u5668\uff0c\u4e0d\u5e94\u8be5\u5404\u81ea\u53bb\u5237\u65b0\uff0c\u5426\u5219\u5bb9\u6613\u9020\u6210\u51b2\u7a81\uff0c\u5bfc\u81f4 access_token \u8986\u76d6\u800c\u5f71\u54cd\u4e1a\u52a1\uff1b\naccess_token \u7684\u6709\u6548\u671f\u901a\u8fc7\u8fd4\u56de\u7684 expire_in \u6765\u4f20\u8fbe\uff0c\u76ee\u524d\u662f7200\u79d2\u4e4b\u5185\u7684\u503c\uff0c\u4e2d\u63a7\u670d\u52a1\u5668\u9700\u8981\u6839\u636e\u8fd9\u4e2a\u6709\u6548\u65f6\u95f4\u63d0\u524d\u53bb\u5237\u65b0\u3002\u5728\u5237\u65b0\u8fc7\u7a0b\u4e2d\uff0c\u4e2d\u63a7\u670d\u52a1\u5668\u53ef\u5bf9\u5916\u7ee7\u7eed\u8f93\u51fa\u7684\u8001 access_token\uff0c\u6b64\u65f6\u516c\u4f17\u5e73\u53f0\u540e\u53f0\u4f1a\u4fdd\u8bc1\u57285\u5206\u949f\u5185\uff0c\u65b0\u8001 access_token \u90fd\u53ef\u7528\uff0c\u8fd9\u4fdd\u8bc1\u4e86\u7b2c\u4e09\u65b9\u4e1a\u52a1\u7684\u5e73\u6ed1\u8fc7\u6e21\uff1b\naccess_token \u7684\u6709\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u6709\u8c03\u6574\uff0c\u6240\u4ee5\u4e2d\u63a7\u670d\u52a1\u5668\u4e0d\u4ec5\u9700\u8981\u5185\u90e8\u5b9a\u65f6\u4e3b\u52a8\u5237\u65b0\uff0c\u8fd8\u9700\u8981\u63d0\u4f9b\u88ab\u52a8\u5237\u65b0 access_token \u7684\u63a5\u53e3\uff0c\u8fd9\u6837\u4fbf\u4e8e\u4e1a\u52a1\u670d\u52a1\u5668\u5728API\u8c03\u7528\u83b7\u77e5 access_token \u5df2\u8d85\u65f6\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u89e6\u53d1 access_token \u7684\u5237\u65b0\u6d41\u7a0b\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u4fdd\u5b58 access_token:\n1 \u4fdd\u5b58\u5728 redis \u4e2d\n2 \u4fdd\u5b58\u5728 \u6570\u636e\u5e93\u4e2d\n3 \u4fdd\u5b58\u5728\u9879\u76ee\u7684 .json \u6587\u4ef6\u4e2d \uff08node fs \u6a21\u5757\uff09"))}u.isMDXComponent=!0}}]);