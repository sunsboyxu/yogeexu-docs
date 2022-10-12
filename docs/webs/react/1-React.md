# React
- [react官网](https://reactjs.org/)
- [react中文网](https://zh-hans.reactjs.org/)
- [react](https://juejin.im/post/5ededbf6e51d45786716a0ac)
- [react新手必须懂得es6的基础知识](https://www.jianshu.com/p/5345130d025c)
- [React 入门教程](http://uprogrammer.cn/react-tutorial-cn/index.html)

## react 学习文档
[从零搭建webpack4+react+typescript+eslint脚手架(一)](https://www.jianshu.com/p/3867422f9b3d)
[ts-react-boilerplate](https://github.com/mecoepcoo/ts-react-boilerplate)

## 环境搭建
- [create-react-app中文](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- [create-react-app](https://github.com/facebook/create-react-app)

## create-react-app
- [create-react-app](https://create-react-app.dev/)

## npm 创建项目
``` bash
// 不推荐全局安装 create-react-app
npm install create-react-app -g
create-react-app react-app1
```
## npx 创建项目
``` bash
npx create-react-app react-app1 // 项目名称
```

## yarn 创建项目
``` bash
yarn create react-app react-app1 // 项目名称
cd react-app1
yarn run dev
yarn run inject // 暴露配置相
```

## 基于当前 create-react-app 降级到 react16
``` bash
cd react-app1
yarn add react@16.12.0 react-dom@16.12.0
或者
npm install react@16.12.0 react-dom@16.12.0 -S
```

## 更改目录结构
```
react-app1
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js
│   ├── assets
│   │   └── logo.svg
│   ├── index.js // 项目入口文件
│   ├── style
│   │   └── index.css
│   └── views
└── yarn.lock
```

``` js
// src/index.js
/**
 * React负责逻辑控制，数据 -> VDOM
 * ReactDom渲染实际DOM，VDOM -> DOM
 * React使⽤JSX来描述UI
 * babel-loader把JSX 编译成相应的 JS 对象，React.createElement再把这个JS对象构造成React需要的虚拟dom。
*/
import React from 'react'
import ReactDOM from 'react-dom'

import './style/index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

## JSX 语法
- [深入 JSX](https://zh-hans.reactjs.org/docs/jsx-in-depth.html)

- JSX是⼀种JavaScript的语法扩展，其格式⽐较像模版语⾔，但事实上完全是在JavaScript内部实现的
- JSX 语法需要 React 支持，调用 React.createElement，需要引入 React
- 变量渲染，花括号 { }、函数、对象、条件、数组、属性、css模块化
- [css modules教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖

### JSX 基本语法
``` js
// src/views/JSXPage.js
import React, { Component } from 'react'
import logo from '../assets/logo.svg'
import style from '../style/jsx.module.css'

// 变量
const msg = 'hello jsx'

// 函数
const userinfo = {
  fisrtname: 'sunsboy',
  lastname: 'xu'
}
const fullname = function() {
  return userinfo.fisrtname + '-' + userinfo.lastname
}

// 对象
const obj1 = <div>obj1</div>
const obj2 = <div>{ fullname() }</div>

// 条件语句
const show = true
const ifdiv = <div>{ show ? '您已经登录': '请登录' }</div>

// 数组
const arr = ['apple', 'orange', 'pear', 'banana']

// 属性的使用
const imgStr = <img src={ logo } alt='' className='avatar' style={ { width: '100px', height: '100px', borderRadius: '50%' } }/>

// css 模块化
const imgStr2 = <img src={ logo } alt='' className={ style.avatar2 }/>

class JSXPage extends Component {
  render() {
    return (
      <div>
        <div>{ msg }</div>
        <div>{ fullname() }</div>
        <hr />
        <div>{ obj1 }</div>
        <div>{ obj2 }</div>
        { show && ifdiv }
        {/* 数组 */}
        <ul>
          {/* diff时候，⾸先⽐较type，然后是key，所以同级同类型元素，key值必须得 唯⼀ */}
          { arr.map(item => <li key={ item }>{ item }</li>) }
        </ul>
        {/* 属性：静态值⽤双引号，动态值⽤花括号；class、for等要特殊处理 */}
        <div className='user-avatar'>
          {/* <img src={ logo } alt="" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/> */}
          { imgStr }
        </div>
        <hr />
        {/* css模块化， */}
        <div className={ style['user-avatar2'] }>
          { imgStr2 }
        </div>
      </div>
    )
  }
}

export default JSXPage
```

### JSX 深入

### JSX 的编译
``` js
<MyButton color='orange' width='150px'>
	测试按钮
</MyButton>
```

上面代码会编译成

``` js
// React.createElement(component, props, ...children)
React.createElement(
	MyButton,
	{color: 'orange', width: '150px'},
	'测试按钮'
)
```

如果没有子节点，可以使用自闭合的标签形式

``` js
<div className="list" />
```
上面代码会编译成
``` js
React.createElement(
	'div',
	{className: 'list'}
)
```

``` js
function helloJSX() {
	return <div>hello JSX</div>
}
```
上面代码会编译成
``` js
function helloJSX() {
	return React.createElement('div', null, 'hello JSX')
}
```

### 指定 React 元素类型
JSX 标签的第一部分指定了 React 元素的类型，大写字母开头的 JSX 标签意味着它们是 React 组件。
这些标签会被编译为对命名变量的直接引用，所以，当你使用 JSX 如：<MyButton /> 表达式时，MyButton 必须包含在作用域内

``` js
// src/comoponents/MyButton.js
import React, { Component } from 'react'

class MyButton extends Component {
  render() {
    const { color, width } = this.props
    return (
      <button style={{
        background: color,
        color: '#fff',
        border: 'none',
        padding: '4px 6px',
        width
      }
      }>{this.props.children}</button>
    )
  }
}

export default MyButton
```

### React 必须在作用域内
由于 JSX 会编译为 React.createElement 调用形式，所以 React 库也必须包含在 JSX 代码作用域内

``` js
// src/views/JSXPage2.js
// 虽然 React 和 MyButton 并没有被直接使用，但还是需要导入
import React, { Component } from 'react'
import MyButton from '../components/MyButton'

class JSXPage2 extends Component {
  render() {
    return (
      <div>
        <h3>JSX 深入</h3>
        <div>
          <MyButton color='orange' width='150px'>测试按钮</MyButton>
        </div>
        <hr></hr>
        {/* 编译为 */}
        <div>
          { React.createElement(
            MyButton,
            {color: 'pink', width: '100px'},
            '测试按钮2'
          ) }
        </div>
      </div>
    )
  }
}

export default JSXPage2
```

### JSX 类型中使用点语法
在 JSX 中，可以使用点语法来引用一个 React 组件，当在一个模块中导出许多 React 组件时，这会非常方便


### React.createElement

### React.createRef
- [](https://zh-hans.reactjs.org/docs/accessibility.html#mouse-and-pointer-events)
- [Refs 转发](https://zh-hans.reactjs.org/docs/forwarding-refs.html)
- [Refs and the DOM](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html)

Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的，但其对某些组件，尤其是可重用的组件库是很有用的

### React.forwardRef

### React.createContext
- [Context](https://zh-hans.reactjs.org/docs/context.html)

### React.lazy
- [React.lazy](https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy)
React.lazy 函数能让你像渲染常规组件一样处理动态引入（的组件），
将会在组件首次渲染时，自动导入包含 Lazy1 组件的包

React.lazy 接受一个函数，这个函数需要动态调用 import()，
它必须返回一个 Promise，该 Promise 需要 resolve 一个 default export 的 React 组件，
并且应在 Suspense 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）

``` js
import React, { Component, Suspense } from 'react'
const Lazy1 = React.lazy(() => import('../components/Lazy1.js'))

class ReactLazyPage extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Lazy1></Lazy1>
        </Suspense>
      </div>
    )
  }
}

export default ReactLazyPage
```

### fallback 属性
接受任何在组件加载过程中你想展示的 React 元素，
可以将 Suspense 组件置于懒加载组件之上的任何位置，
可以用一个 Suspense 组件包裹多个懒加载组件

React.lazy 目前只支持默认导出（default exports），
如果你想被引入的模块使用命名导出（named exports），你可以创建一个中间模块，来重新导出为默认模块，
这能保证 tree shaking 不会出错，并且不必引入不需要的组件


### 配置基于路由的代码分割
``` js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  </Router>
);
```


## 相关实战项目
- [](https://juejin.cn/post/7115209048605065246)
- [](https://github.com/Youngzx88/starbucks)
- [react新手demo——TodoList](https://www.jianshu.com/p/211ecf8ed34e)
- [React全家桶高仿「饿了么」APP](https://www.jianshu.com/p/83ec164bb2f8)
- [React全家桶高仿「饿了么」APP - 文档](https://hanxueqing.github.io/React-Eleme/#/)
- [web前端项目案例实战](https://www.cnblogs.com/xiaoyan2017/p/11106246.html)
- [React 项目中使用 antd 组件库开发移动端项目 自定义 webpack 配置](https://blog.csdn.net/Charissa2017/article/details/105718181)