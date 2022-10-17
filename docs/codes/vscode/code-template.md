# vscode 配置代码模板

## 配置 .vue 文件 快速模板

文件->首选项->用户代码片段-> '输入 vue' -> 点击 vue.json 进行配置

``` json
// vue.json
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

## 配置 .html 文件 快速模板

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
