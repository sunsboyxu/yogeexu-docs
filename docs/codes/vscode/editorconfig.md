# editorconfig

EditorConfig 可以帮助开发者在不同的编辑器之间定义和维护一致的代码风格，
包含一个用于定义代码格式的文件和一批编辑器插件，这些插件可以让编辑器读取配置文件并依此格式化代码

- [editorconfig](https://editorconfig.org/)
- [editorconfig github](https://github.com/editorconfig)
- [EditorConfig 介绍](http://www.alloyteam.com/2014/12/editor-config/)

## .editorconfig

.editorconfig 的一些配置和说明

``` js
root = true // 最顶级的配置,相当于根 editorconfig 直到查找到 root=true 才会停止查找不然会一直向上查找

[*] // 通配符匹配 任意字符串的文件
charset = utf-8 // 编码格式
indent_style = space
indent_size = 2
end_of_line = lf // 定义换行符: lf | cr | crlf
insert_final_newline = true // 设为 true 表明使文件以一个空白行结尾, false 反之
trim_trailing_whitespace = true // 设为 true 表示会除去换行行首的任意空白字符，false 反之
max_line_length = 80

[*.md] // 通配符匹配 .md 的文件
trim_trailing_whitespace = false
max_line_length = 0
```

通配符匹配 .js 和 .py 的文件

``` js
root = true

// 通配符匹配 .js 和 .py 的文件
[*.{js,py}]
charset = utf-8
```
