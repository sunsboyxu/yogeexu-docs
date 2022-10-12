# HbuilderX 编辑器

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
}
```

## 编辑器主题
[HBuilderX自定义主题辅助工具](https://ext.dcloud.net.cn/plugin?id=2684)