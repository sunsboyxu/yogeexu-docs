# sublime 3

[sublime3 快速创建html模板](https://www.cnblogs.com/liutoliu/p/9820953.html)

## 创建自定义 html 模板

1、工具（Tool）-> 插件开发（Developer）->新建代码片段...（New Sineppet...），会打开一个文件
2、替换改文件下的

``` html
<content><![CDATA[...html模板内容...]]></content>
 <snippet>
  <content><![CDATA[
 Hello, ${1:this} is a ${2:snippet}.
 ]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <!-- <tabTrigger>hello</tabTrigger> -->
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
 </snippet>
 注意：代码片靠最左边
3、 将注释 <!-- <tabTrigger>hello</tabTrigger> -->，打开（tab键触发命令）
 <tabTrigger>你的自定义指令（如：!html5）</tabTrigger>
4、ctrl+s 进行保存，后缀必须 .sublime-snippet，前缀命名可自定义（如：sunsboy-html5.sublime-snippet）
5、在项目中新建一个 test.html，输入 '你的自定义指令' ，Tab键，就会出现自定义的 html 模板
6、我的模板
<snippet>
 <content><![CDATA[
<!DOCTYPE html>
<html>
<head>
 <meta charset='utf-8'>
 <meta name='keywords' content='网站关键字'>
 <meta name='description' content='网站描述'>
 <meta name='renderer' content='webkit'>
 <title>标题</title>
 <meta http-equiv='X-UA-Compatible' content='ie=edge,chrome=1'>
 <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no, shrink-to-fit=no' viewport-fit=cover />
 <style>
  * {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   -webkit-tap-highlight-color: transparent;
   -webkit-appearance: none!important;
   outline: none;
  }
  body {
   font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
   font-smoothing: antialiased;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }
 </style>
</head>
<body>
 <div id='app'></div>
</body>
</html>
]]></content>
<!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
<tabTrigger>!html5</tabTrigger>
<!-- Optional: Set a scope to limit where the snippet will trigger -->
<!-- <scope>source.python</scope> -->
</snippet>
```


## 使用问题

[安装模板插件和制作vue模版](https://blog.csdn.net/Lxylovezlj/article/details/78109497)
[packagecontrol](https://packagecontrol.io/installation#st3)
[无法安装Package Control插件解决](https://www.cnblogs.com/yangzhuanzheng/p/8896380.html)
