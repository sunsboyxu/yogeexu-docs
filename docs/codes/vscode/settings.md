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
