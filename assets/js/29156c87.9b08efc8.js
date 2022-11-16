"use strict";(self.webpackChunkyogeexu_docs=self.webpackChunkyogeexu_docs||[]).push([[597],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,c(c({ref:t},i),{},{components:a})):n.createElement(h,c({ref:t},i))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},c="React",o={unversionedId:"webs/react/React",id:"webs/react/React",title:"React",description:"- react\u5b98\u7f51",source:"@site/docs/webs/react/1-React.md",sourceDirName:"webs/react",slug:"/webs/react/React",permalink:"/yogeexu-docs/webs/react/React",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"vueSSR",permalink:"/yogeexu-docs/webs/vue/vuessr/vue2-ssr"},next:{title:"React \u7ec4\u4ef6",permalink:"/yogeexu-docs/webs/react/React-component"}},p={},s=[{value:"react \u5b66\u4e60\u6587\u6863",id:"react-\u5b66\u4e60\u6587\u6863",level:2},{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",level:2},{value:"create-react-app",id:"create-react-app",level:2},{value:"npm \u521b\u5efa\u9879\u76ee",id:"npm-\u521b\u5efa\u9879\u76ee",level:2},{value:"npx \u521b\u5efa\u9879\u76ee",id:"npx-\u521b\u5efa\u9879\u76ee",level:2},{value:"yarn \u521b\u5efa\u9879\u76ee",id:"yarn-\u521b\u5efa\u9879\u76ee",level:2},{value:"\u57fa\u4e8e\u5f53\u524d create-react-app \u964d\u7ea7\u5230 react16",id:"\u57fa\u4e8e\u5f53\u524d-create-react-app-\u964d\u7ea7\u5230-react16",level:2},{value:"\u66f4\u6539\u76ee\u5f55\u7ed3\u6784",id:"\u66f4\u6539\u76ee\u5f55\u7ed3\u6784",level:2},{value:"JSX \u8bed\u6cd5",id:"jsx-\u8bed\u6cd5",level:2},{value:"JSX \u57fa\u672c\u8bed\u6cd5",id:"jsx-\u57fa\u672c\u8bed\u6cd5",level:3},{value:"JSX \u6df1\u5165",id:"jsx-\u6df1\u5165",level:3},{value:"JSX \u7684\u7f16\u8bd1",id:"jsx-\u7684\u7f16\u8bd1",level:3},{value:"\u6307\u5b9a React \u5143\u7d20\u7c7b\u578b",id:"\u6307\u5b9a-react-\u5143\u7d20\u7c7b\u578b",level:3},{value:"React \u5fc5\u987b\u5728\u4f5c\u7528\u57df\u5185",id:"react-\u5fc5\u987b\u5728\u4f5c\u7528\u57df\u5185",level:3},{value:"JSX \u7c7b\u578b\u4e2d\u4f7f\u7528\u70b9\u8bed\u6cd5",id:"jsx-\u7c7b\u578b\u4e2d\u4f7f\u7528\u70b9\u8bed\u6cd5",level:3},{value:"React.createElement",id:"reactcreateelement",level:3},{value:"React.createRef",id:"reactcreateref",level:3},{value:"React.forwardRef",id:"reactforwardref",level:3},{value:"React.createContext",id:"reactcreatecontext",level:3},{value:"React.lazy",id:"reactlazy",level:3},{value:"fallback \u5c5e\u6027",id:"fallback-\u5c5e\u6027",level:3},{value:"\u914d\u7f6e\u57fa\u4e8e\u8def\u7531\u7684\u4ee3\u7801\u5206\u5272",id:"\u914d\u7f6e\u57fa\u4e8e\u8def\u7531\u7684\u4ee3\u7801\u5206\u5272",level:3},{value:"\u76f8\u5173\u5b9e\u6218\u9879\u76ee",id:"\u76f8\u5173\u5b9e\u6218\u9879\u76ee",level:2}],i={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react"},"React"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"react\u5b98\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/"},"react\u4e2d\u6587\u7f51")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.im/post/5ededbf6e51d45786716a0ac"},"react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/5345130d025c"},"react\u65b0\u624b\u5fc5\u987b\u61c2\u5f97es6\u7684\u57fa\u7840\u77e5\u8bc6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://uprogrammer.cn/react-tutorial-cn/index.html"},"React \u5165\u95e8\u6559\u7a0b"))),(0,r.kt)("h2",{id:"react-\u5b66\u4e60\u6587\u6863"},"react \u5b66\u4e60\u6587\u6863"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/3867422f9b3d"},"\u4ece\u96f6\u642d\u5efawebpack4+react+typescript+eslint\u811a\u624b\u67b6(\u4e00)"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mecoepcoo/ts-react-boilerplate"},"ts-react-boilerplate")),(0,r.kt)("h2",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app"},"create-react-app\u4e2d\u6587")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/create-react-app"},"create-react-app"))),(0,r.kt)("h2",{id:"create-react-app"},"create-react-app"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://create-react-app.dev/"},"create-react-app"))),(0,r.kt)("h2",{id:"npm-\u521b\u5efa\u9879\u76ee"},"npm \u521b\u5efa\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// \u4e0d\u63a8\u8350\u5168\u5c40\u5b89\u88c5 create-react-app\nnpm install create-react-app -g\ncreate-react-app react-app1\n")),(0,r.kt)("h2",{id:"npx-\u521b\u5efa\u9879\u76ee"},"npx \u521b\u5efa\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app react-app1 // \u9879\u76ee\u540d\u79f0\n")),(0,r.kt)("h2",{id:"yarn-\u521b\u5efa\u9879\u76ee"},"yarn \u521b\u5efa\u9879\u76ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create react-app react-app1 // \u9879\u76ee\u540d\u79f0\ncd react-app1\nyarn run dev\nyarn run inject // \u66b4\u9732\u914d\u7f6e\u76f8\n")),(0,r.kt)("h2",{id:"\u57fa\u4e8e\u5f53\u524d-create-react-app-\u964d\u7ea7\u5230-react16"},"\u57fa\u4e8e\u5f53\u524d create-react-app \u964d\u7ea7\u5230 react16"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-app1\nyarn add react@16.12.0 react-dom@16.12.0\n\u6216\u8005\nnpm install react@16.12.0 react-dom@16.12.0 -S\n")),(0,r.kt)("h2",{id:"\u66f4\u6539\u76ee\u5f55\u7ed3\u6784"},"\u66f4\u6539\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"react-app1\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502   \u251c\u2500\u2500 favicon.ico\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 logo192.png\n\u2502   \u251c\u2500\u2500 logo512.png\n\u2502   \u251c\u2500\u2500 manifest.json\n\u2502   \u2514\u2500\u2500 robots.txt\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 App.js\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u2502   \u2514\u2500\u2500 logo.svg\n\u2502   \u251c\u2500\u2500 index.js // \u9879\u76ee\u5165\u53e3\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 style\n\u2502   \u2502   \u2514\u2500\u2500 index.css\n\u2502   \u2514\u2500\u2500 views\n\u2514\u2500\u2500 yarn.lock\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/index.js\n/**\n * React\u8d1f\u8d23\u903b\u8f91\u63a7\u5236\uff0c\u6570\u636e -> VDOM\n * ReactDom\u6e32\u67d3\u5b9e\u9645DOM\uff0cVDOM -> DOM\n * React\u4f7f\u2f64JSX\u6765\u63cf\u8ff0UI\n * babel-loader\u628aJSX \u7f16\u8bd1\u6210\u76f8\u5e94\u7684 JS \u5bf9\u8c61\uff0cReact.createElement\u518d\u628a\u8fd9\u4e2aJS\u5bf9\u8c61\u6784\u9020\u6210React\u9700\u8981\u7684\u865a\u62dfdom\u3002\n*/\nimport React from 'react'\nimport ReactDOM from 'react-dom'\n\nimport './style/index.css'\nimport App from './App'\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),(0,r.kt)("h2",{id:"jsx-\u8bed\u6cd5"},"JSX \u8bed\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/jsx-in-depth.html"},"\u6df1\u5165 JSX"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSX\u662f\u2f00\u79cdJavaScript\u7684\u8bed\u6cd5\u6269\u5c55\uff0c\u5176\u683c\u5f0f\u2f50\u8f83\u50cf\u6a21\u7248\u8bed\u2f94\uff0c\u4f46\u4e8b\u5b9e\u4e0a\u5b8c\u5168\u662f\u5728JavaScript\u5185\u90e8\u5b9e\u73b0\u7684")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"JSX \u8bed\u6cd5\u9700\u8981 React \u652f\u6301\uff0c\u8c03\u7528 React.createElement\uff0c\u9700\u8981\u5f15\u5165 React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53d8\u91cf\u6e32\u67d3\uff0c\u82b1\u62ec\u53f7 { }\u3001\u51fd\u6570\u3001\u5bf9\u8c61\u3001\u6761\u4ef6\u3001\u6570\u7ec4\u3001\u5c5e\u6027\u3001css\u6a21\u5757\u5316")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://www.ruanyifeng.com/blog/2016/06/css_modules.html"},"css modules\u6559\u7a0b")))),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cJSX \u4ec5\u4ec5\u53ea\u662f React.createElement(component, props, ...children) \u51fd\u6570\u7684\u8bed\u6cd5\u7cd6"),(0,r.kt)("h3",{id:"jsx-\u57fa\u672c\u8bed\u6cd5"},"JSX \u57fa\u672c\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/views/JSXPage.js\nimport React, { Component } from 'react'\nimport logo from '../assets/logo.svg'\nimport style from '../style/jsx.module.css'\n\n// \u53d8\u91cf\nconst msg = 'hello jsx'\n\n// \u51fd\u6570\nconst userinfo = {\n  fisrtname: 'sunsboy',\n  lastname: 'xu'\n}\nconst fullname = function() {\n  return userinfo.fisrtname + '-' + userinfo.lastname\n}\n\n// \u5bf9\u8c61\nconst obj1 = <div>obj1</div>\nconst obj2 = <div>{ fullname() }</div>\n\n// \u6761\u4ef6\u8bed\u53e5\nconst show = true\nconst ifdiv = <div>{ show ? '\u60a8\u5df2\u7ecf\u767b\u5f55': '\u8bf7\u767b\u5f55' }</div>\n\n// \u6570\u7ec4\nconst arr = ['apple', 'orange', 'pear', 'banana']\n\n// \u5c5e\u6027\u7684\u4f7f\u7528\nconst imgStr = <img src={ logo } alt='' className='avatar' style={ { width: '100px', height: '100px', borderRadius: '50%' } }/>\n\n// css \u6a21\u5757\u5316\nconst imgStr2 = <img src={ logo } alt='' className={ style.avatar2 }/>\n\nclass JSXPage extends Component {\n  render() {\n    return (\n      <div>\n        <div>{ msg }</div>\n        <div>{ fullname() }</div>\n        <hr />\n        <div>{ obj1 }</div>\n        <div>{ obj2 }</div>\n        { show && ifdiv }\n        {/* \u6570\u7ec4 */}\n        <ul>\n          {/* diff\u65f6\u5019\uff0c\u2fb8\u5148\u2f50\u8f83type\uff0c\u7136\u540e\u662fkey\uff0c\u6240\u4ee5\u540c\u7ea7\u540c\u7c7b\u578b\u5143\u7d20\uff0ckey\u503c\u5fc5\u987b\u5f97 \u552f\u2f00 */}\n          { arr.map(item => <li key={ item }>{ item }</li>) }\n        </ul>\n        {/* \u5c5e\u6027\uff1a\u9759\u6001\u503c\u2f64\u53cc\u5f15\u53f7\uff0c\u52a8\u6001\u503c\u2f64\u82b1\u62ec\u53f7\uff1bclass\u3001for\u7b49\u8981\u7279\u6b8a\u5904\u7406 */}\n        <div className='user-avatar'>\n          {/* <img src={ logo } alt=\"\" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/> */}\n          { imgStr }\n        </div>\n        <hr />\n        {/* css\u6a21\u5757\u5316\uff0c */}\n        <div className={ style['user-avatar2'] }>\n          { imgStr2 }\n        </div>\n      </div>\n    )\n  }\n}\n\nexport default JSXPage\n")),(0,r.kt)("h3",{id:"jsx-\u6df1\u5165"},"JSX \u6df1\u5165"),(0,r.kt)("h3",{id:"jsx-\u7684\u7f16\u8bd1"},"JSX \u7684\u7f16\u8bd1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<MyButton color='orange' width='150px'>\n \u6d4b\u8bd5\u6309\u94ae\n</MyButton>\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f1a\u7f16\u8bd1\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// React.createElement(component, props, ...children)\nReact.createElement(\n MyButton,\n {color: 'orange', width: '150px'},\n '\u6d4b\u8bd5\u6309\u94ae'\n)\n")),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u5b50\u8282\u70b9\uff0c\u53ef\u4ee5\u4f7f\u7528\u81ea\u95ed\u5408\u7684\u6807\u7b7e\u5f62\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<div className="list" />\n')),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f1a\u7f16\u8bd1\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"React.createElement(\n 'div',\n {className: 'list'}\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function helloJSX() {\n return <div>hello JSX</div>\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4f1a\u7f16\u8bd1\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function helloJSX() {\n return React.createElement('div', null, 'hello JSX')\n}\n")),(0,r.kt)("h3",{id:"\u6307\u5b9a-react-\u5143\u7d20\u7c7b\u578b"},"\u6307\u5b9a React \u5143\u7d20\u7c7b\u578b"),(0,r.kt)("p",null,"JSX \u6807\u7b7e\u7684\u7b2c\u4e00\u90e8\u5206\u6307\u5b9a\u4e86 React \u5143\u7d20\u7684\u7c7b\u578b\uff0c\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u7684 JSX \u6807\u7b7e\u610f\u5473\u7740\u5b83\u4eec\u662f React \u7ec4\u4ef6\u3002\n\u8fd9\u4e9b\u6807\u7b7e\u4f1a\u88ab\u7f16\u8bd1\u4e3a\u5bf9\u547d\u540d\u53d8\u91cf\u7684\u76f4\u63a5\u5f15\u7528\uff0c\u6240\u4ee5\uff0c\u5f53\u4f60\u4f7f\u7528 JSX \u5982\uff1a","<","MyButton /",">"," \u8868\u8fbe\u5f0f\u65f6\uff0cMyButton \u5fc5\u987b\u5305\u542b\u5728\u4f5c\u7528\u57df\u5185"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/comoponents/MyButton.js\nimport React, { Component } from 'react'\n\nclass MyButton extends Component {\n  render() {\n    const { color, width } = this.props\n    return (\n      <button style={{\n        background: color,\n        color: '#fff',\n        border: 'none',\n        padding: '4px 6px',\n        width\n      }\n      }>{this.props.children}</button>\n    )\n  }\n}\n\nexport default MyButton\n")),(0,r.kt)("h3",{id:"react-\u5fc5\u987b\u5728\u4f5c\u7528\u57df\u5185"},"React \u5fc5\u987b\u5728\u4f5c\u7528\u57df\u5185"),(0,r.kt)("p",null,"\u7531\u4e8e JSX \u4f1a\u7f16\u8bd1\u4e3a React.createElement \u8c03\u7528\u5f62\u5f0f\uff0c\u6240\u4ee5 React \u5e93\u4e5f\u5fc5\u987b\u5305\u542b\u5728 JSX \u4ee3\u7801\u4f5c\u7528\u57df\u5185"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// src/views/JSXPage2.js\n// \u867d\u7136 React \u548c MyButton \u5e76\u6ca1\u6709\u88ab\u76f4\u63a5\u4f7f\u7528\uff0c\u4f46\u8fd8\u662f\u9700\u8981\u5bfc\u5165\nimport React, { Component } from 'react'\nimport MyButton from '../components/MyButton'\n\nclass JSXPage2 extends Component {\n  render() {\n    return (\n      <div>\n        <h3>JSX \u6df1\u5165</h3>\n        <div>\n          <MyButton color='orange' width='150px'>\u6d4b\u8bd5\u6309\u94ae</MyButton>\n        </div>\n        <hr></hr>\n        {/* \u7f16\u8bd1\u4e3a */}\n        <div>\n          { React.createElement(\n            MyButton,\n            {color: 'pink', width: '100px'},\n            '\u6d4b\u8bd5\u6309\u94ae2'\n          ) }\n        </div>\n      </div>\n    )\n  }\n}\n\nexport default JSXPage2\n")),(0,r.kt)("h3",{id:"jsx-\u7c7b\u578b\u4e2d\u4f7f\u7528\u70b9\u8bed\u6cd5"},"JSX \u7c7b\u578b\u4e2d\u4f7f\u7528\u70b9\u8bed\u6cd5"),(0,r.kt)("p",null,"\u5728 JSX \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u70b9\u8bed\u6cd5\u6765\u5f15\u7528\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u5f53\u5728\u4e00\u4e2a\u6a21\u5757\u4e2d\u5bfc\u51fa\u8bb8\u591a React \u7ec4\u4ef6\u65f6\uff0c\u8fd9\u4f1a\u975e\u5e38\u65b9\u4fbf"),(0,r.kt)("h3",{id:"reactcreateelement"},"React.createElement"),(0,r.kt)("h3",{id:"reactcreateref"},"React.createRef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/accessibility.html#mouse-and-pointer-events"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/forwarding-refs.html"},"Refs \u8f6c\u53d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html"},"Refs and the DOM"))),(0,r.kt)("p",null,"Ref \u8f6c\u53d1\u662f\u4e00\u9879\u5c06 ref \u81ea\u52a8\u5730\u901a\u8fc7\u7ec4\u4ef6\u4f20\u9012\u5230\u5176\u4e00\u5b50\u7ec4\u4ef6\u7684\u6280\u5de7\u3002\u5bf9\u4e8e\u5927\u591a\u6570\u5e94\u7528\u4e2d\u7684\u7ec4\u4ef6\u6765\u8bf4\uff0c\u8fd9\u901a\u5e38\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4f46\u5176\u5bf9\u67d0\u4e9b\u7ec4\u4ef6\uff0c\u5c24\u5176\u662f\u53ef\u91cd\u7528\u7684\u7ec4\u4ef6\u5e93\u662f\u5f88\u6709\u7528\u7684"),(0,r.kt)("h3",{id:"reactforwardref"},"React.forwardRef"),(0,r.kt)("h3",{id:"reactcreatecontext"},"React.createContext"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/context.html"},"Context"))),(0,r.kt)("h3",{id:"reactlazy"},"React.lazy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy"},"React.lazy"),"\nReact.lazy \u51fd\u6570\u80fd\u8ba9\u4f60\u50cf\u6e32\u67d3\u5e38\u89c4\u7ec4\u4ef6\u4e00\u6837\u5904\u7406\u52a8\u6001\u5f15\u5165\uff08\u7684\u7ec4\u4ef6\uff09\uff0c\n\u5c06\u4f1a\u5728\u7ec4\u4ef6\u9996\u6b21\u6e32\u67d3\u65f6\uff0c\u81ea\u52a8\u5bfc\u5165\u5305\u542b Lazy1 \u7ec4\u4ef6\u7684\u5305")),(0,r.kt)("p",null,"React.lazy \u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u9700\u8981\u52a8\u6001\u8c03\u7528 import()\uff0c\n\u5b83\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u8be5 Promise \u9700\u8981 resolve \u4e00\u4e2a default export \u7684 React \u7ec4\u4ef6\uff0c\n\u5e76\u4e14\u5e94\u5728 Suspense \u7ec4\u4ef6\u4e2d\u6e32\u67d3 lazy \u7ec4\u4ef6\uff0c\u5982\u6b64\u4f7f\u5f97\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5728\u7b49\u5f85\u52a0\u8f7d lazy \u7ec4\u4ef6\u65f6\u505a\u4f18\u96c5\u964d\u7ea7\uff08\u5982 loading \u6307\u793a\u5668\u7b49\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component, Suspense } from 'react'\nconst Lazy1 = React.lazy(() => import('../components/Lazy1.js'))\n\nclass ReactLazyPage extends Component {\n  render() {\n    return (\n      <div>\n        <Suspense fallback={<div>Loading...</div>}>\n          <Lazy1></Lazy1>\n        </Suspense>\n      </div>\n    )\n  }\n}\n\nexport default ReactLazyPage\n")),(0,r.kt)("h3",{id:"fallback-\u5c5e\u6027"},"fallback \u5c5e\u6027"),(0,r.kt)("p",null,"\u63a5\u53d7\u4efb\u4f55\u5728\u7ec4\u4ef6\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u4f60\u60f3\u5c55\u793a\u7684 React \u5143\u7d20\uff0c\n\u53ef\u4ee5\u5c06 Suspense \u7ec4\u4ef6\u7f6e\u4e8e\u61d2\u52a0\u8f7d\u7ec4\u4ef6\u4e4b\u4e0a\u7684\u4efb\u4f55\u4f4d\u7f6e\uff0c\n\u53ef\u4ee5\u7528\u4e00\u4e2a Suspense \u7ec4\u4ef6\u5305\u88f9\u591a\u4e2a\u61d2\u52a0\u8f7d\u7ec4\u4ef6"),(0,r.kt)("p",null,"React.lazy \u76ee\u524d\u53ea\u652f\u6301\u9ed8\u8ba4\u5bfc\u51fa\uff08default exports\uff09\uff0c\n\u5982\u679c\u4f60\u60f3\u88ab\u5f15\u5165\u7684\u6a21\u5757\u4f7f\u7528\u547d\u540d\u5bfc\u51fa\uff08named exports\uff09\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u4e2d\u95f4\u6a21\u5757\uff0c\u6765\u91cd\u65b0\u5bfc\u51fa\u4e3a\u9ed8\u8ba4\u6a21\u5757\uff0c\n\u8fd9\u80fd\u4fdd\u8bc1 tree shaking \u4e0d\u4f1a\u51fa\u9519\uff0c\u5e76\u4e14\u4e0d\u5fc5\u5f15\u5165\u4e0d\u9700\u8981\u7684\u7ec4\u4ef6"),(0,r.kt)("h3",{id:"\u914d\u7f6e\u57fa\u4e8e\u8def\u7531\u7684\u4ee3\u7801\u5206\u5272"},"\u914d\u7f6e\u57fa\u4e8e\u8def\u7531\u7684\u4ee3\u7801\u5206\u5272"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Suspense, lazy } from 'react';\nimport { BrowserRouter as Router, Routes, Route } from 'react-router-dom';\n\nconst Home = lazy(() => import('./routes/Home'));\nconst About = lazy(() => import('./routes/About'));\n\nconst App = () => (\n  <Router>\n    <Suspense fallback={<div>Loading...</div>}>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/about\" element={<About />} />\n      </Routes>\n    </Suspense>\n  </Router>\n);\n")),(0,r.kt)("h2",{id:"\u76f8\u5173\u5b9e\u6218\u9879\u76ee"},"\u76f8\u5173\u5b9e\u6218\u9879\u76ee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7115209048605065246"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Youngzx88/starbucks"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/211ecf8ed34e"},"react\u65b0\u624bdemo\u2014\u2014TodoList")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/83ec164bb2f8"},"React\u5168\u5bb6\u6876\u9ad8\u4eff\u300c\u997f\u4e86\u4e48\u300dAPP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hanxueqing.github.io/React-Eleme/#/"},"React\u5168\u5bb6\u6876\u9ad8\u4eff\u300c\u997f\u4e86\u4e48\u300dAPP - \u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/xiaoyan2017/p/11106246.html"},"web\u524d\u7aef\u9879\u76ee\u6848\u4f8b\u5b9e\u6218")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/Charissa2017/article/details/105718181"},"React \u9879\u76ee\u4e2d\u4f7f\u7528 antd \u7ec4\u4ef6\u5e93\u5f00\u53d1\u79fb\u52a8\u7aef\u9879\u76ee \u81ea\u5b9a\u4e49 webpack \u914d\u7f6e"))))}u.isMDXComponent=!0}}]);