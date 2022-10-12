# 插件安装
- Auto Import
- JS JSX Snippets
- React/Redux/react-router Snippets // 查看插件 Usage 会有 快速导入 简写

# 自定义 React 代码片段
首选项 -> 用户片段 -> 输入 javascript.json / javascriptreact.json 选择
## 配置快速创建代码命令
``` json
{
  // 日志输出
  "Print to console": {
    "prefix": "log", // 命令
    "body": ["console.log($1)", "$2"],
    "description": "日志输出"
  },
  // 创建 React Class 组件
  "Create React Class Component": {
    "prefix": "rclass", // 命令
    "body": [
      "import React, { Component } from 'react'",
      "",
      "class ${1:${TM_FILENAME_BASE}} extends Component {",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t",
      "\t\t\t</div>",
      "\t\t)",
      "\t}",
      "}",
			"",
      "export default ${1:${TM_FILENAME_BASE}}"
    ],
    "description": "创建 React Class 组件"
  },
  // 创建 React Function 组件
  "Create React Function Component": {
    "prefix": "rfunh", // 命令
    "body": [
      "import React, { useState, useEffect } from 'react'",
      "",
      "function ${1:${TM_FILENAME_BASE}}() {",
      "const [$1] = useState()",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t",
      "\t\t\t</div>",
      "\t\t)",
      "}",
			"",
      "export default ${1:${TM_FILENAME_BASE}}"
    ],
    "description": "创建 React Function 组件"
  },
  // 创建 React Function Hooks 组件
  "Create React Function Hooks Component": {
    "prefix": "rfun",
    "body": [
      "import React from 'react'",
      "",
      "function ${1:${TM_FILENAME_BASE}}() {",
      "\t\treturn (",
      "\t\t\t<div>",
      "\t\t\t\t",
      "\t\t\t</div>",
      "\t\t)",
      "}",
			"",
      "export default ${1:${TM_FILENAME_BASE}}"
    ],
    "description": "创建 React Function Hooks 组件"
  }
}
```