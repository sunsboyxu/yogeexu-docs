- [idea破解码](https://www.yht7.com/cate/123)
- [JetBrains全系列软件激活教程激活码以及JetBrains系列软件汉化包](https://www.macwk.com/article/jetbrains-crack)

# vscode 使用
[开发工具>VSCode](https://www.php.cn/tool/vscode/)

## vue项目 tempalte 显示 波浪线

错误提示
``` js
TypeScript intellisense is disabled on template. To enable, 
configure `"jsx": "preserve"` in the `"compilerOptions"` property of tsconfig or jsconfig. 
To disable this prompt instead, configure `"experimentalDisableTemplateSupport": true` in `"vueCompilerOptions"` property.volar
```

解决
``` json
// jsconfig.json
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


## vscode 去除 vue下 红色波浪线
[去除红色波浪线](https://blog.csdn.net/weixin_30570101/article/details/101775614)

## 无法使用 JSX，除非提供了 “--jsx“
[无法使用 JSX，除非提供了 “--jsx“](https://blog.csdn.net/weixin_42164539/article/details/124075375)


```
文件->首选项->设置-> '搜索设置：vetur' -> 找到
Vetur › Validation: Script 取消勾选 √
Vetur › Validation: Style 取消勾选 √
Vetur › Validation: Template 取消勾选 √
文件->首选项->设置-> '搜索设置：eslint' -> 找到 Eslint: Enable
```
		

## vscode 配置 .vue 文件 快速模板
文件->首选项->用户代码片段-> '输入 vue' -> 点击 vue.json 进行配置
!多个模板可以自定义名字
// vue.json
``` json
{
    "vue template": {
        "prefix": "!vue", // 快捷键命令
        "body": [ // 模板内容
            "<template>",
            "\t<div></div>",
            "</template>\n",
            "<script>",
            "export default {",
            "\tname: 'routername',",
            "\tdata () {",
            "\t\treturn {\n",
            "\t\t}",
            "\t}",
            "}",
            "</script>\n",
            "<style lang='scss' scoped>\n",
            "</style>"
        ],
        "description": "vue 快速生成模板！" // 显示的提示！
    },
	"vue3 template": {
	        "prefix": "!vue3",
	        "body": [
	            "<template>",
	            "\t<div></div>",
	            "</template>\n",
	            "<script>",
	            "import { defineComponent } from 'vue'",
	            "export default defineComponent({",
	            "\tname: 'xx'",
	            "})",
	            "</script>\n",
	            "<style lang='scss' scoped>\n",
	            "</style>\n"
	        ],
	        "description": "vue3 快速生成模板！"
	    }
}
```

## 其他 文件的 模板，配置差不多 如：html
``` html
{
    "html5 template": {
        "prefix": "!html5",
        "body": [
            "<!DOCTYPE html>",
            "<html>",
            "<head>",
            "\t<meta charset='utf-8'>",
            "\t<meta name='referrer' content='always'>",
            "\t<meta name='keywords' content='网站关键字'>",
            "\t<meta name='description' content='网站描述'>",
            "\t<meta name='renderer' content='webkit'>",
            "\t<meta http-equiv='X-UA-Compatible' content='ie=edge,chrome=1'>",
            "\t<meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no, shrink-to-fit=no' viewport-fit=cover />",
            "\t<title>网站标题$1</title>", // 光标首次会在$1 的地方，按tab 会跳到 $2
            "\t<style>",
            "\t\t *{",
            "\t\t\tmargin:0;",
            "\t\t\tpadding:0;",
            "\t\t\tbox-sizing:border-box;",
            "\t\t\t-webkit-tap-highlight-color:transparent;",
            "\t\t}",
            "\t</style>",
            "</head>",
            "<body>",
            "<div id='app'>",
            "\t$2",
            "</div>",
            "</body>",
            "</html>"
        ],
        "description": "html5 快速模板！！！"
    }
}
```

# tab键 自动补全 html 代码
文件 => 首选项 => 设置=> 工作台=> 外观 => settings.json 添加：
``` json
{
    "emmet.triggerExpansionOnTab": true
}
```

# 快捷键使用
## 全局搜索（ctrl + shift + F）

# vscode 插件使用
Vetur - vue 插件
Prettier - Code formatter

# 问题处理
[Comments are not permitted in JSON](https://blog.csdn.net/qq_21271511/article/details/108219791)