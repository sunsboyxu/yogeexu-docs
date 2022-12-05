# Prettier

- [prettier](https://prettier.io/)
- [prettier github](https://github.com/prettier)
- [prettier-vscode](https://github.com/prettier/prettier-vscode)
- [prettier-eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [vscode自动保存 + Prettier自动格式化代码](https://blog.csdn.net/chali1314/article/details/126361178)
- [vue项目中使用eslint+prettier规范与检查代码的方法](https://www.jb51.net/article/178614.htm)

``` json
// vscode settings.json 的设置
{
  "prettier.semi": false, // 句末是否加分号
  "prettier.singleQuote": true, // 用单引号
  "prettier.trailingComma": "none", // 最后一个对象元素加逗号
  "prettier.tabWidth": 2, // 设置工具每一个水平缩进的空格数
  "prettier.printWidth": 120, // 换行字符串阈值
  "prettier.useTabs": false, 
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.bracketSpacing": true, // 对象，数组加空格
  "prettier.jsxBracketSameLine": true, // jsx > 是否另起一行
  "prettier.arrowParens": "always", // (x) => {} 是否要有小括号
  "prettier.requirePragma": false, // 不需要写文件开头的 @prettier
  "prettier.insertPragma": false // 不需要自动在文件开头插入 @prettier
}
```

## vscode 设置

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
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 200,
  "prettier.semi": false,
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
