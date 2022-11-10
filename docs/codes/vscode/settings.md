# vscode 开发设置

## 恢复出厂设置

文件 -> 首选项 -> 设置 -> 工作台 -> 外观 -> settings.json 改成 {}

## tab 键 自动补全 html 代码

文件 -> 首选项 -> 设置 -> 工作台 -> 外观 -> settings.json 添加

```json
{
  "emmet.triggerExpansionOnTab": true
}
```

## 资源管理靠右显示

文件 -> 首选项 -> 设置 -> 输入: workbench.sideBar.location 选择 left 或者 right

``` json
// settings.json
{
  "workbench.sideBar.location": "right"
}
```

## 保存代码格式化

windows 下 文件 -> 首选项 -> 设置 -> 输入：editor.codeActionsOnSave -> 点击 在 settings.json 中编辑

```json
"editor.codeActionsOnSave": {
  "source.fixAll.markdownlint": true, // 源码修复 markdown类型的
  "source.fixAll.eslint": true // // 源码 进行 eslint 修复
},
```

```json
"[markdown]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
```

## Markdown

- [vscode 中写 markdown 格式笔记的配置过程和相关语法](https://blog.csdn.net/qq_35588369/article/details/126024061)
- [vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint)
- [markdownlint](https://github.com/DavidAnson/markdownlint)

## Prettier 设置

```json
// settings.json
{
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 200,
  "prettier.semi": false
}
```

``` json
{
  "workbench.editor.enablePreview": false, //打开文件不覆盖
  "search.followSymlinks": false, //关闭rg.exe进程
  "editor.minimap.enabled": false, //关闭快速预览
  "liveServer.settings.donotShowInfoMsg": true, //关闭liveserver提示
  "files.autoSave": "afterDelay", //打开自动保存
  "editor.fontSize": 16, //设置文字大小
  "editor.lineHeight": 24, //设置文字行高
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "workbench.colorTheme": "Darcula Theme from IntelliJ", //指定工作台中使用的颜色主题
  "window.zoomLevel": 0, // 调整窗口的缩放级别
  "editor.tabSize": 2, //制表符符号eslint
  "editor.formatOnSave": true, //每次保存自动格式化
  "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
  "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.singleQuote": true, //使用带引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned" //属性强制折行对齐
    }
  },
  "eslint.validate": [
    //开启对.vue文件中错误的检查
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
}
```
