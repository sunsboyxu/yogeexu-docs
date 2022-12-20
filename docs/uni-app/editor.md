# HbuilderX 编辑器

## 编辑器插件使用

- [](https://ext.dcloud.net.cn/plugin?id=3561)

## jsbeautify.js

``` js
module.exports = {
 parsers: {
  ".js": "js",
  ".json": "js",
  ".njs": "js",
  ".sjs": "js",
  ".wxs": "js",
  ".css": "css",
  ".nss": "css",
  ".wxss": "css",
  ".acss": "css",
  ".ttss": "css",
  ".qss": "css",
  ".html": "html",
  ".ux": "html",
  ".wxml": "html",
  ".nml": "html",
  ".vue": "html",
  ".nvue": "html",
  ".axml": "html",
  ".swan": "html",
  ".ttml": "html",
  ".qml": "html"
 },
 options: {
  "indent_size": "2",
  "indent_char": "\t",
  "indent_with_tabs": true, //使用tab缩进
  "eol": "\r\n", //行结束符
  "end_with_newline": false, //使用换行结束输出
  "indent_level": 0, //起始代码缩进数
  "preserve_newlines": true, //保留空行
  "max_preserve_newlines": null, //最大连续保留换行符个数。比如设为2，则会将2行以上的空行删除为只保留1行
  "space_in_paren": false, //括弧添加空格 示例 f( a, b )
  "space_in_empty_paren": false, //函数的括弧内没有参数时插入空格 示例 f( )
  "jslint_happy": false, //启用jslint-strict模式
  "space_after_anon_function": false, //匿名函数的括号前加空格
  //代码样式，可选值 [collapse|expand|end-expand|none][,preserve-inline] [collapse,preserve-inline]
  "brace_style": "preserve-inline,collapse", 
  "unindent_chained_methods": false, //不缩进链式方法调用
  "break_chained_methods": false, //在随后的行中断开链式方法调用
  "keep_array_indentation": false, //保持数组缩进
  "unescape_strings": false, //使用xNN符号编码解码可显示的字符
  "wrap_line_length": 80,
  "e4x": true, //支持jsx
  "comma_first": false, //把逗号放在新行开头，而不是结尾
  "operator_position": "before-newline",
  "unformatted": ["wbr"],
  "html": {
   "indent_handlebars": true,
   "indent_inner_html": true,
   "indent-scripts": "normal", //[keep|separate|normal]
   "extra_liners": [] //配置标签列表，需要在这些标签前面额外加一空白行
  }
 }
}
```

## prettier

[prettier选项说明](https://prettier.io/docs/en/options.html)

## 代码格式化

- [prettier](https://ext.dcloud.net.cn/plugin?id=2025)
- [自动格式化代码](https://blog.csdn.net/weixin_43343144/article/details/90043961)

## import 代码不换行

::: tip 配置流程
工具 -> 插件安装 -> prettier【配置】-> 插件配置 -> 【打开文件 jsbeautifyrc.js进行配置】
:::

``` js
// jsbeautifyrc.js
{
 options: {
  可选值 [collapse|expand|end-expand|none|preserve-inline]
  "options": "preserve-inline"
 }
}
```

## prettier.config.js 配置

``` js
printWidth: 100, // 控制单行最大长度
semi: true, // 控制每条语句是否加上分号
tabWidth: 2, // 控制一个tab对应的空格数
useTabs: false, // 控制缩进用tab还是space
singleQuote: true, // 控制字符串是用单引号还是双引号
trailingComma: "none", // 是否去掉末尾的逗号
bracketSpacing: true, // 控制json对象括号前后是否加上空格
htmlWhitespaceSensitivity: "ignore",
parsers: {
  ".jsx": "flow",
  ".scss": "scss",
  ".ts": "typescript",
  ".less": "css",
  ".vue": "vue",
  ".nvue": "vue",
  ".ux": "vue",
  ".yml": "yaml",
}
```

## 编辑器主题

[HBuilderX自定义主题辅助工具](https://ext.dcloud.net.cn/plugin?id=2684)
