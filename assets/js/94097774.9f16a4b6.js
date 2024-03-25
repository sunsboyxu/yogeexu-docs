"use strict";(self.webpackChunksunsboyxu_docs=self.webpackChunksunsboyxu_docs||[]).push([[3582],{574:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=e(3274),c=e(1377);const r={},s="\u63d2\u4ef6\u5b89\u88c5",i={id:"webs/react/vscode-config",title:"\u63d2\u4ef6\u5b89\u88c5",description:"- Auto Import",source:"@site/docs/webs/react/9-vscode-config.md",sourceDirName:"webs/react",slug:"/webs/react/vscode-config",permalink:"/yogeexu-docs/webs/react/vscode-config",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vscode\u914d\u7f6e",permalink:"/yogeexu-docs/webs/react/React-project-config"},next:{title:"Hook",permalink:"/yogeexu-docs/webs/react/React-Hook"}},a={},d=[{value:"\u81ea\u5b9a\u4e49 React \u4ee3\u7801\u7247\u6bb5",id:"\u81ea\u5b9a\u4e49-react-\u4ee3\u7801\u7247\u6bb5",level:2},{value:"\u914d\u7f6e\u5feb\u901f\u521b\u5efa\u4ee3\u7801\u547d\u4ee4",id:"\u914d\u7f6e\u5feb\u901f\u521b\u5efa\u4ee3\u7801\u547d\u4ee4",level:2}];function u(n){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"\u63d2\u4ef6\u5b89\u88c5",children:"\u63d2\u4ef6\u5b89\u88c5"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Auto Import"}),"\n",(0,o.jsx)(t.li,{children:"JS JSX Snippets"}),"\n",(0,o.jsx)(t.li,{children:"React/Redux/react-router Snippets // \u67e5\u770b\u63d2\u4ef6 Usage \u4f1a\u6709 \u5feb\u901f\u5bfc\u5165 \u7b80\u5199"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u81ea\u5b9a\u4e49-react-\u4ee3\u7801\u7247\u6bb5",children:"\u81ea\u5b9a\u4e49 React \u4ee3\u7801\u7247\u6bb5"}),"\n",(0,o.jsx)(t.p,{children:"\u9996\u9009\u9879 -> \u7528\u6237\u7247\u6bb5 -> \u8f93\u5165 javascript.json / javascriptreact.json \u9009\u62e9"}),"\n",(0,o.jsx)(t.h2,{id:"\u914d\u7f6e\u5feb\u901f\u521b\u5efa\u4ee3\u7801\u547d\u4ee4",children:"\u914d\u7f6e\u5feb\u901f\u521b\u5efa\u4ee3\u7801\u547d\u4ee4"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  // \u65e5\u5fd7\u8f93\u51fa\n  "Print to console": {\n    "prefix": "log", // \u547d\u4ee4\n    "body": ["console.log($1)", "$2"],\n    "description": "\u65e5\u5fd7\u8f93\u51fa"\n  },\n  // \u521b\u5efa React Class \u7ec4\u4ef6\n  "Create React Class Component": {\n    "prefix": "rclass", // \u547d\u4ee4\n    "body": [\n      "import React, { Component } from \'react\'",\n      "",\n      "class ${1:${TM_FILENAME_BASE}} extends Component {",\n      "\\trender() {",\n      "\\t\\treturn (",\n      "\\t\\t\\t<div>",\n      "\\t\\t\\t\\t",\n      "\\t\\t\\t</div>",\n      "\\t\\t)",\n      "\\t}",\n      "}",\n   "",\n      "export default ${1:${TM_FILENAME_BASE}}"\n    ],\n    "description": "\u521b\u5efa React Class \u7ec4\u4ef6"\n  },\n  // \u521b\u5efa React Function \u7ec4\u4ef6\n  "Create React Function Component": {\n    "prefix": "rfunh", // \u547d\u4ee4\n    "body": [\n      "import React, { useState, useEffect } from \'react\'",\n      "",\n      "function ${1:${TM_FILENAME_BASE}}() {",\n      "const [$1] = useState()",\n      "\\t\\treturn (",\n      "\\t\\t\\t<div>",\n      "\\t\\t\\t\\t",\n      "\\t\\t\\t</div>",\n      "\\t\\t)",\n      "}",\n   "",\n      "export default ${1:${TM_FILENAME_BASE}}"\n    ],\n    "description": "\u521b\u5efa React Function \u7ec4\u4ef6"\n  },\n  // \u521b\u5efa React Function Hooks \u7ec4\u4ef6\n  "Create React Function Hooks Component": {\n    "prefix": "rfun",\n    "body": [\n      "import React from \'react\'",\n      "",\n      "function ${1:${TM_FILENAME_BASE}}() {",\n      "\\t\\treturn (",\n      "\\t\\t\\t<div>",\n      "\\t\\t\\t\\t",\n      "\\t\\t\\t</div>",\n      "\\t\\t)",\n      "}",\n   "",\n      "export default ${1:${TM_FILENAME_BASE}}"\n    ],\n    "description": "\u521b\u5efa React Function Hooks \u7ec4\u4ef6"\n  }\n}\n'})})]})}function l(n={}){const{wrapper:t}={...(0,c.R)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},1377:(n,t,e)=>{e.d(t,{R:()=>s,x:()=>i});var o=e(9474);const c={},r=o.createContext(c);function s(n){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function i(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),o.createElement(r.Provider,{value:t},n.children)}}}]);