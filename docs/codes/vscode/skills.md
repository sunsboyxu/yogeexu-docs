# vscode 优化处理

## vue项目 tempalte 显示 波浪线

- [去除红色波浪线](https://blog.csdn.net/weixin_30570101/article/details/101775614)

``` js
// 错误提示
TypeScript intellisense is disabled on template. To enable, 
configure `"jsx": "preserve"` in the `"compilerOptions"` property of tsconfig or jsconfig. 
To disable this prompt instead, configure `"experimentalDisableTemplateSupport": true` in `"vueCompilerOptions"` property.volar
```

``` json
// 处理方法 jsconfig.json
// "jsx":"preserve"
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "jsx":"preserve" ,
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}
```

## 无法使用 JSX，除非提供了 "--jsx"

- [无法使用 JSX，除非提供了 "--jsx"](https://blog.csdn.net/weixin_42164539/article/details/124075375)

- 文件->首选项->设置-> '搜索设置：vetur' -> 找到
- Vetur › Validation: Script 取消勾选 √
- Vetur › Validation: Style 取消勾选 √
- Vetur › Validation: Template 取消勾选 √
- 文件->首选项->设置-> '搜索设置：eslint' -> 找到 Eslint: Enable

## vscode 显示 .git 隐藏文件夹

文件->首选项->设置-> '搜索设置: 输入 files' -> 找到 Files.Assocications, 将 .git 的配置删除

对应的 settings.json

``` json
{
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "files.exclude": {
    "**/.git": false
  }
}
```

### tab 键自动补全代码

- [vscode里div等html标签代码补全](https://cloud.tencent.com/developer/article/1649420)

文件 -> 首选项 -> 设置 -> 搜索设置: 输入 emmet.triggerExpansionOnTab，☑️ 勾选中

文件 -> 首选项 -> 设置 -> 搜索设置: 输入 files.associations'，配置语言的文件关联 (如: "*.vue": "html")

```json
//settings.json
{
  "emmet.triggerExpansionOnTab": true,
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.scss": "css",
    "*.js": "html",
    "*.vue": "html"
  }, 
}
```

## 其他问题

- [Comments are not permitted in JSON](https://blog.csdn.net/qq_21271511/article/details/108219791)
