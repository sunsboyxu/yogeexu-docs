# webpack plugins

[plugins](https://webpack.docschina.org/plugins/)

# html-webpack-plugin

[](https://github.com/jantimon/html-webpack-plugin)

- npm install html-webpack-plugin -D

``` js
const HtmlWebpackPlugin = require('html-webpack-plugin')
plugins: [
 new HtmlWebpackPlugin({
  // 输出的文件
  filename: 'index.html',
  // 模版路径
  template: './index.template.html',
  // js/css 插入到 header
  inject: 'head',
  // 标题
  title: 'Html-Webpack-Plugin',
  // 是否压缩 html 代码
  minify: false,
  // 自定参数
  // 模版中使用
  // <div> <%= htmlWebpackPlugin.options.date %> </div>
  date: new Date().toLocaleString(),
  hash: false,
  compile: true,
  favicon: false,
  cache: true,
  showErrors: true,
  chunks: 'all',
  excludeChunks: [],
  title: 'Webpack App',
  xhtml: false
 })
]
```

## css

css-minimizer-webpack-plugin
