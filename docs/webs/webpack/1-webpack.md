# webpack

::: tip wenpack 文档
- [webpack学习](https://lvzhenbang.github.io/webpack-book/)
- [新版Webpack实战与应用](https://www.bilibili.com/video/BV1uy4y1n7Yf?p=1)
:::

## 全局安装
- webpack 4.x 以上的需要安装 webpack-cli
npm install webpack -g
npm install webpack-cli -g

## 原理和概念
树结构：在入口文件中引用所需资源，形成依赖关系树
模块：  webpack 中一切皆模块（js/img/css）ES6模块，CommonJs模块，AMD模块等
chunk： webpack 打包过程中被操作的模块称为 chunk
bundle：webpack 打包后的文件，一个或者多个 chunk的集合

## 基本核心
``` json
// webpack会先读取 webpack.config.js
// webpack.config.js
// webpack 基本解构，从这几个点深入
const path = require('path')
module.exports = {
  entry: {},
  output: {},
  module: {
    rules: []
  },
  plugins: {}
}
```
- 有那些优化
webpack5 mode:production, 会对代码进行分析，如果未使用的变量，打包会删除
如果定义了一个未使用的方法，打包时会自动去除，如果使用了第三方库，只使用了几个方法会自定去除(tree shaking)
tree shaking,基于 exports 文档流，无法自拔剔除对象下的方法

## mode(webpack4x支持)
mode:'production|development'
production(生产模式): 开启压缩代码，开启tree-shaking
development(开发模式): 开启source-map

## entry
打包入口文件

## output
output: {
	path: path.resolve(__dirname, './dist')
	filename: '[name].[hash].js'
}
- [hash]
// 优化资源缓存
// 浏览器第一次加载 js/css/image 后，会缓存这些文件
// webpack每次打包，hash会发生变化，访问打包后的文件不会出现缓存

# module
module: {
	// webpack 本身只识别js文件，其他类型文件，需要使用 loader 来处理
	// 处理其他文件类型（css/image/font等）
	// rules 配置规则
	// loader 的执行顺序是从后往前依次执行
	rules: []
}

[webpack4.x入门到进阶](https://edu.csdn.net/course/detail/7872)
[猫老板的豆webpack](https://blog.csdn.net/x550392236/category_7258485.html)
[qq593249106的博客 webpack](https://blog.csdn.net/qq593249106/category_8511113.html)
[webpack-处理css/scss文件](https://segmentfault.com/a/1190000020778740)
[webpack-dev-server完整demo](https://segmentfault.com/a/1190000010198627)
[看完这篇还搞不懂webpack，求你打我](https://juejin.im/post/5e01de37f265da33ab637daf)
[webpack-dev-server简单使用](https://blog.csdn.net/liangklfang/article/details/54944012)
[webpack 从零开始搭建 Vue 前端开发环境](https://www.jianshu.com/p/871aa7a78bb6)
[Webpack 4.X 从入门到放肆](https://www.jianshu.com/p/8da5ab3ac157)
[webpack4 从零搭建 vue 项目开发环境](https://juejin.cn/post/6989491439243624461)


# 搭建前端工程化
全局安装 webpack
npm install webpack -g
npm install webpack-cli -g

# 1 新建项目 mkdir webpack5-1 && cd webpack5-1

# 2 初始化一个工程 npm init -y

#3 安装项目 webpack 依赖
	npm install webpack -D
	npm install webpack-cli -D
	npm install webpack-dev-server -D

# 4 新建入口文件（src/main.js）和其他资源目录(src目录)
  src/
	 images/
		img1.jpg
		img2.png
		avatar.jpg
	 js/
		a1.js
		a2.js
	 style/
		reset.css
		app.scss
	 main.js
	 
# 5 webpack 本身只处理 js和 json 文件，先建 a1.js 和 a2.js
``` js
// src/js/a1.js
export function a1() {
    console.log('this is a1.js文件') 
}
```
``` js
// src/js/a2.js
export function a2() {
    console.log('this is a2.js文件') 
}
```
``` js
// src/main.js
// webpack 入口文件（entry）

const { a1 } = require('./js/a1')
const { a2 } = require('./js/a2')

a1()
a2()
```

#6 webpack 默认会读取 根目录 webpack.config.js 文件
``` js
// webpack.config.js
module.exports = {
	entry: './src/main.js',
	output: {
		filename: '[name].[chunlk]'
	}
}
```

# webpack优化
[一行可以让项目启动快 70% 以上的代码(实用)](https://mp.weixin.qq.com/s/TB7Oy5VmyhZboQF9Y8eiDg)



