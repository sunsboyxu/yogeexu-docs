# vscode 开发设置

## 保存代码格式化

windows下 文件 -> 首选项 -> 设置 -> 输入：editor.codeActionsOnSave -> 点击 在 settings.json 中编辑

``` json
"editor.codeActionsOnSave": {
  "source.fixAll.markdownlint": true, // 源码修复 markdown类型的
  "source.fixAll.eslint": true // // 源码 进行 eslint 修复
},
```

``` json
"[markdown]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
  },
```

## Markdown

- [vscode中写markdown格式笔记的配置过程和相关语法](https://blog.csdn.net/qq_35588369/article/details/126024061)
- [vscode-markdownlint](https://github.com/DavidAnson/vscode-markdownlint)
- [markdownlint](https://github.com/DavidAnson/markdownlint)

## Prettier 设置

``` json
// settings.json
{
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 200,
  "prettier.semi": false,
}
```
