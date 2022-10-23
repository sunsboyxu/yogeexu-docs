# React-router

- [react-router](https://v5.reactrouter.com/web/guides/quick-start)
- [react-router中文](https://react-guide.github.io/react-router-cn/index.html)

## 学习参考

- [最新 React Router 全面整理](https://zhuanlan.zhihu.com/p/101129994)
- [](https://juejin.cn/post/6844904093694033927)
- [](https://juejin.cn/post/6854573220470013966)

## 知识参考

react-router 包含 3个库：

- react-router
- react-router-dom
- react-router-native

react-router 提供最基本的路由功能，在实际开发过程中不会直接安装 react-router
可以根据应用的运行环境选择安装

- react-router-dom    在 浏览器中使用，
- react-router-native 在 react-native（App开发）中使用

react-router-dom 和 react-router-native 都依赖 react-router
在安装某一个 包的时候会自动安装 react-router

react-router 奉承一切皆组件

``` html
- <Route />  // 路由
- <Router /> // 路由器
- <Link />   // 链接
- <Switch /> // 独占
- <Redirect> // 重定向
```

都以组件形式存在

### Route 渲染内容的三种⽅式

Route渲染优先级：children > component > render ，这三种⽅式互斥，你只能⽤⼀种

- children：function
有时候，不管location是否匹配，你都需要渲染⼀些内容，这时候你可以⽤children
除了不管location是否匹配都会被渲染之外，其它⼯作⽅法与render完全⼀样

- render：function
但是当你⽤render的时候，你调⽤的只是个函数
只在当location匹配的时候渲染

- component: Component
只在当location匹配的时候渲染

### 404 页面添加

添加 Switch 表示仅匹配⼀个， 设定⼀个没有 path 的路由(Route) 在路由列表最后⾯，表示⼀定匹配

## 当前是基本 react-routr-dom@5

``` bash
yarn create react-app react-router1
cd react-router1
yarn add react@16.12.0 react-dom@16.12.0 react-router-dom@5.1.2
yarn add sass
```

删除一些初始化，暂时用不到的文件

``` md
react-router1
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.js
│   ├── assets
│   │   └── logo.svg
│   ├── components
│   │   ├── BottomBar.js
│   │   ├── Layout.js
│   │   └── TopBar.js
│   ├── index.js
│   ├── styles
│   │   └── index.scss
│   └── views
│       ├── Cart
│       │   └── index.js
│       ├── Home
│       │   └── index.js
│       ├── Page404
│       │   └── index.js
│       ├── RouterPage
│       │   └── index.js
│       └── User
│           └── index.js
└── yarn.lock
```

``` js

```

``` js
// src/views/RouterPage.js
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class RouterPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/user'>User</Link>
            <Link to='/other'>NotFound</Link>
          </div>
          {/* 添加Switch表示仅匹配⼀个*/}
          <Switch>
            {/*  根路由要添加 exact，实现精确匹配 */}
            <Route exact path='/'
              component={Home}
              // render={() => <div>home page by render</div>}
            // children={() => <div>home page by children</div>}
            ></Route>
            <Route path='/user' component={User}></Route>
            <Route component={ Page404 }></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <div>
        this is home page
      </div>
    )
  }
}

class User extends Component {
  render() {
    return (
      <div>
        this is user page
      </div>
    )
  }
}

class Page404 extends Component {
  render() {
    return (
      <div>
        page not found!!!
      </div>
    )
  }
}

export default RouterPage
```

## react-router-dom@6 变化

- BrowserRouter 保持不变
- Switch 替换成了 Routes
- Route 中统一使用 element 属性，去掉原来的 component 和 render
- 子路由可以省略上级路由了，比如/page1/page1-1以往需要写完整的Path，而目前可以继承上级页面的路由了，甚至斜线都可以省略
- useNavigate 取代 useHistory，并且api也有相应的变化
- 新增了 Outlet，作用相当于 { this.props.children }

## web应用安装

``` js
npm install react-router-dom
```
