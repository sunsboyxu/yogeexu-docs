# React 组件

- [组件 & Props](https://zh-hans.reactjs.org/docs/components-and-props.html)

组件，从概念上类似于 JavaScript 函数，它接受任意的⼊参（即 “props”），并返回⽤于描述⻚⾯展示内容的 React 元素
组件有两种形式：Class 组件 和 function组件

## Class 组件

Class 组件，通常拥有状态和⽣命周期，继承于 Component，实现 render ⽅法

``` js
import React, { Component } from 'react'

// class组件通常拥有 状态和⽣命周期，继承于 Component，实现 render ⽅法

// 继承于 Component
export default class ClassComp1 extends Component {
  constructor(props) {
    console.log(props, 'props')
    super(props)
    // 定义状态
    this.state = {
      showTime: new Date()
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timer = setInterval(() => {
      this.setState({
        showTime: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.timer && clearInterval(this.timer)
  }

  // 实现 render ⽅法
  render() {
    const { showTime } = this.state
    return (
      <div>
        <div>ClassComp1</div>
        <p>{ showTime.toLocaleString() }</p>
      </div>
    )
  }
}
```

## Function 组件

- 函数组件通常⽆状态，仅关注内容展示，返回渲染结果即可
- 从React16.8开始引⼊了 hooks，函数组件也能够拥有状态

``` js
import React, { useState, useEffect } from 'react'

const FunComp1 = function() {
  const [showTime, setShowTime] = useState(new Date())
  // useEffect Hook 看做 componentDidMount、componentDidUpdate、componentWillUnmount 这三个函数的组合
  useEffect(() => {
    // 数据更新的时候，会产生多个定时器，需要传入 [],执行一次即可
    const timer = setInterval(() => {
      setShowTime(new Date())
    }, 1000)
    console.log(timer, 'timer--')
    // 组件卸载清除定时器
    return () => timer && clearInterval(timer)
  }, [])
  return (
    <div>
      <div>function 组件</div>
      <p>{ showTime.toLocaleString() }</p>
    </div>
  )
}

export default FunComp1
```

## Fragments

- [Fragments](https://zh-hans.reactjs.org/docs/fragments.html)
常见模式是一个组件返回多个元素，Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点
可以使用一种新的，且更简短的语法来声明 Fragments，它看起来像空标签 &lt;，但不支持 key 或属性

``` js
import React, { Component } from 'react'
class App extends Component {
 render() {
  return (
   <Fragment>
    <h3>Fragment page</h3>
    <p>Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点</p>
    <ChildComp></ChildComp>
   </Fragment>
  )
 }
}
```

``` js
import React, { Component } from 'react'
class App extends Component {
 render() {
  return (
   <>
    <h3>Fragment page</h3>
    <p>Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点</p>
    <ChildComp></ChildComp>
   </>
  )
 }
}
```

``` js
import React, { Component } from 'react'
class App extends Component {
 constructor(props) {
  super(props)
  this.state = {}
 }
 render() {
  const { list } = this.props
  return (
   <dl>
    {list.map(item => (
     // key
     <React.Fragment key={item.id}>
      <dt>{item.title}</dt>
      <dd>{item.description}</dd>
     </React.Fragment>
    ))}
   </dl>
  )
 }
}
```

## 组件复合 - Composition

- [组合 vs 继承](https://zh-hans.reactjs.org/docs/composition-vs-inheritance.html)

复合组件给与你⾜够的敏捷去定义⾃定义组件的外观和⾏为，这种⽅式更明确和安全。如果组件间有公
⽤的⾮UI逻辑，将它们抽取为JS模块导⼊使⽤⽽不是继承它

``` bash
yarn create react-app react-app2
cd react-app2
// 兼容 react 降级
yarn add react@16.12.0 react-dom@16.12.0
yarn add sass -D
```

``` bash
// 目录结构
react-app2
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
│       ├── Home
│       │   └── index.js
│       └── User
│           └── index.js
└── yarn.lock
```

``` js
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'

import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

``` js
// src/App.js
import React from 'react'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
```

``` js
// src/components/TopBar.js
import React, { Component } from 'react'

class TopBar extends Component {
  render() {
    return (
      <div className='top-bar'>
        TopBar
      </div>
    )
  }
}

export default TopBar
```

``` js
// src/components/BottomBar.js
import React, { Component } from 'react'
import Logo from '../assets/logo.svg'

class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bottomBarList: [{
        path: '/home',
        icon: Logo,
        selectedIcon: Logo,
        title: '首页'
      }, {
        path: '/user',
        icon: Logo,
        selectedIcon: Logo,
        title: '我的'
      }]
    }
  }
  render() {
    return (
      <ul className='bottom-bar'>
        {
          this.state.bottomBarList.map(item =>
            <li className='bottom-bar-item' key={item.path}>
              <img src={item.icon} alt="" />
              <span>{item.title}</span>
            </li>)
        }
      </ul>
    )
  }
}

export default BottomBar
```

``` js
// src/components/Layout.js
import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

class Layout extends Component {
  componentDidMount() {
    const { title = 'Shop demo' } = this.props
    document.title = title
  }
  render() {
    console.log(this)
    const { children, showtopbar, showbottombar } = this.props
    return (
      <div className='layout'>
        {showtopbar ? <TopBar></TopBar> : ''}
        <div className='layout-content'>
          {children.content}
          {children.text}
          <button onClick={ children.btnClick }>测试点击</button>
        </div>
        {showbottombar ? <BottomBar></BottomBar> : ''}
      </div>
    )
  }
}

export default Layout
```

``` js
// src/views/Home.js
import React, { Component } from 'react'
import Layout from '../../components/Layout'

class Home extends Component {
  render() {
    return (
      <div>
        <Layout title='home page' showtopbar={true} showbottombar={true}>
          {/* <div>
            this is home page
          </div> */}
     {/* 类似 vue 的 slot */}
          {
      { content: (
              <div>
                this is home page
              </div> 
            ),
            text: '一个文本内容',
            btnClick: () => {
              console.log(this)
              console.log('btnClick')
            }}
     }
        </Layout>
      </div>
    )
  }
}

export default Home
```

``` js
// src/views/User.js
import React, { Component } from 'react'
import Layout from '../../components/Layout'

class User extends Component {
  render() {
    return (
      <div>
        <Layout title='User page' showtopbar={true} showbottombar={true}>
          <div>
            this is user page
          </div>
        </Layout>
      </div>
    )
  }
}

export default User
```

``` css
/* src/styles/index.scss */
* {
  padding: 0;
  margin: 0;
}
body {
  margin: 0;
  font-family: -apple-system,'Helvetica Neue',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul,li {
  list-style: none;
}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  .top-bar, .bottom-bar {
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .layout-content {
    flex: 1;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
  }
  .top-bar {
    background: #f5f5f5;
  }
  .bottom-bar {
    background: #f5f5f5;
    justify-content: space-around;
    .bottom-bar-item {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
}
```

## PureComponent

- [PureComponent](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent)

React.PureComponent 与 React.Component 很相似,
两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，
而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数

React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。
如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。
仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。
你也可以考虑使用 immutable 对象加速嵌套数据的比较。
此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件

PureComponentPage 有一个名为 shouldComponentUpdate() 的方法。
扩展 React.PureComponent 时不应使用 shouldComponentUpdate。
如果使用 shouldComponentUpdate，请扩展 React.Component

## Context

- [Context](https://zh-hans.reactjs.org/docs/context.html)
- [Context/Provider/Consumer传参使用](https://blog.csdn.net/deng1456694385/article/details/98601308)

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法

在 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，
但此种用法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的，
Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

### 何时使用 Context

Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言，
举个例子，在下面的代码中，我们通过一个 “theme” 属性手动调整一个按钮组件的样式

``` js
import React, { Component } from 'react'
const ThemeContext = React.createContext()

class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      themeColor: 'orange'
    }
  }
  changeTheme = () => {
    this.setState({
      themeColor: 'red'
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={ this.state.themeColor }>
        <ParentComp></ParentComp>
        <div>
          <button onClick={ this.changeTheme }>修改 Provider value值</button>
        </div>
      </ThemeContext.Provider>
    )
  }
}

function ParentComp() {
  console.log('ParentComp--')
  return (
    <div>
      <h3>parent componet</h3>
      <ChildComp></ChildComp>
    </div>
  )
}

class ChildComp extends Component {
  static contextType = ThemeContext
  componentDidMount() {
    console.log('ChildComp', this)
  }
  render() {
    console.log('render: ChildComp--')
    return (
      <div>
        <h3 style={{color: this.context}}>child component</h3>
      </div>
    )
  }
}

export default ContextPage
```

### 使用 Context 之前的考虑

Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据，请谨慎使用，因为这会使得组件的复用性变差

### Context Api

### React.createContext

``` js
const MyContext = React.createContext(defaultValue);
```

创建一个 Context 对象，
当 React 渲染一个订阅了这个 Context 对象的组件，这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值，
只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效，
此默认值有助于在不使用 Provider 包装组件的情况下对组件进行测试，
注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效

### Context.Provider

``` js
<MyContext.Provider value={ '某个值' }>
 <ParentComp></ParentComp>
</MyContext.Provider>
```

每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化，
Provider 接收一个 value 属性，传递给消费组件，
一个 Provider 可以和多个消费组件有对应关系
多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据，

当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染，
从 Provider 到其内部 consumer 组件（包括 .contextType 和 useContext）的传播不受制于 shouldComponentUpdate 函数，
因此当 consumer 组件在其祖先组件跳过更新的情况下也能更新

### Class.contextType

挂载在 Class 上的 contextType 属性可以赋值为由 React.createContext() 创建的 Context 对象，
此属性可以让你使用 this.context 来获取最近 Context 上的值，
可以在任何生命周期中访问到它，包括 render 函数中
可以使用 static 这个类属性来初始化你的 contextType

在任何生命周期中访问到它，包括 render 函数中

``` js
class ContextPage extends React.Component {
 // 在任何生命周期中访问到它，包括 render 函数中
 componentDidMount() {
  console.log('componentDidMount - context:', this.context)
 }
 componentDidUpdate() {
  console.log('componentDidUpdate - context:', this.context)
 }
 componentWillUnmount() {
  console.log('componentWillUnmount - context:', this.context)
 }
 render() {
  console.log('render - context:', this.context)
  return (
   <div>{ this.context }</div>
  )
 } 
}
ContextPage.context = MyContext 
```

使用 static 这个类属性来初始化你的 contextType

``` js
class ContextPage extends React.Component {
 // 使用 static 这个类属性来初始化你的 contextType
 static contextType = MyContext
 componentDidMount() {
  console.log('componentDidMount - context:', this.context)
 }
 componentDidUpdate() {
  console.log('componentDidUpdate - context:', this.context)
 }
 componentWillUnmount() {
  console.log('componentWillUnmount - context:', this.context)
 }
 render() {
  console.log('render - context:', this.context)
  return (
   <div>{ this.context }</div>
  )
 } 
} 
```

### Context.Consumer

``` js
// 语法
<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>
```

一个 React 组件可以订阅 context 的变更，此组件可以在函数式组件中订阅 context
该方法需要一个函数作为子元素（function as a child），
这个函数接收当前的 context 值，并返回一个 React 节点，
传递给函数的 value 值等价于组件树上方离这个 context 最近的 Provider 提供的 value 值，
如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue

``` js
class IscButton extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { theme => <button style={{
          background: theme,
          border: `1px solid ${theme}`,
          color: '#fff',
          padding: '6px',
          borderRadius: '4px'
        }}>ThemeContext Consumer</button> }
      </ThemeContext.Consumer>
    )
  }  
}
```

### Context.displayName

context 对象接受一个名为 displayName 的 property，类型为字符串,
React DevTools 使用该字符串来确定 context 要显示的内容

``` js
import React, { Component } from 'react'
const ThemeContext = React.createContext()

// Context.displayName
ThemeContext.displayName = 'themeContextDisplayName'
...
```

### 动态 Context

在 项目目录/src/context 下，新建 ThemeContext.js

``` js
// src/context/ThemeContext.js
import React from 'react'
export const themes = {
 light: {
  color: '#fff',
  background: 'orange'
 },
 dark: {
  color: '#fff',
  background: '#000'
 }
}
export const ThemeContext = React.createContext(themes.light)
```

新建 ContextDynamicPage.js 页面

``` js
import React, { Component } from 'react'
import { ThemeContext, themes } from '../context/ThemeContext'

// react devtool
ThemeContext.displayName = 'ThemeContext-ContextDynamicPage'

// 动态 Context 页面
class ContextDynamicPage extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light
    }
  }
 
 // 切换主题
  toggleTheme = () => {
    // setState 使用函数，接受上一次的 state,进行比较
    this.setState(state =>({
      theme: state.theme === themes.dark? themes.light : themes.dark
    }))
  }

  render() {
    console.log('ContextDynamicPage-render')
    return (
      <ThemeContext.Provider value={ this.state.theme }>
        <h3>ContextDynamicPage</h3>
        <div>
          <button style={ this.state.theme } onClick={ this.toggleTheme }>修改主题</button>
        </div>
        <ParentComp></ParentComp>
      </ThemeContext.Provider>
    )
  }
}

// 中间组件
function ParentComp () {
  console.log('ParentComp-render')
  return (
    <div>
      <h4>ParentComp</h4>
      <ChildComp></ChildComp>
    </div>
  )
}

// 子组件
class ChildComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: `
      一个 React 组件可以订阅 context 的变更，此组件可以让你在函数式组件中可以订阅 context,
      这种方法需要一个函数作为子元素（function as a child,
      这个函数接收当前的 context 值，并返回一个 React 节点,
      传递给函数的 value 值等价于组件树上方离这个 context 最近的 Provider 提供的 value 值,
      如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue
      `
    }
  }
  render() {
    console.log('ChildComp-render')
    const { message } = this.state
    return (
      <ThemeContext.Consumer>
        { theme => (
          <Fragment>
            <h5 style={{ color: theme.background }}>ParentComp</h5>
            <p style={ theme }>{ message }</p>
          </Fragment>
        ) }
      </ThemeContext.Consumer>
    )
  }
}

export default ContextDynamicPage
```

### 在嵌套组件中更新 Context

``` js
// src/context/ThemeContext2.js
import React from "react"

export const themes = {
  light: {
    color: '#fff',
    background: 'orange'
  },
  dark: {
    color: '#fff',
    background: '#000'
  }
}

export const ThemeContext2 = React.createContext({
  theme: themes.dark,
  changeTheme: () => {}
})
```

``` js
// src/views/ContextConsumerUpdatePage.js
import React, { Component, Fragment } from 'react'
import { ThemeContext2, themes } from '../context/themeContext2'
ThemeContext2.displayName = 'ThemeContext2-ContextDynamicPage'

// 在嵌套组件中更新 Context
class ContextConsumerUpdatePage extends Component {
  static contextType = ThemeContext2

  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
      changeTheme: this.changeTheme
    }
  }

  changeTheme = () => {
    // setState 使用函数，接受上一次的 state,进行比较
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render() {
    console.log('ContextDynamicPage-render')
    return (
      // 将整个的 state 传递给 Provider 的 value
      <ThemeContext2.Provider value={this.state}>
        <h3>ContextConsumerUpdatePage - 在嵌套组件中更新 Context</h3>
        <div>
          <button style={this.state.theme} onClick={this.changeTheme}>修改主题</button>
        </div>
        <ParentComp></ParentComp>
      </ThemeContext2.Provider>
    )
  }
}

// 中间组件
function ParentComp() {
  console.log('ParentComp-render')
  return (
    <div>
      <h4>ParentComp</h4>
      <ChildComp></ChildComp>
    </div>
  )
}

// 子组件
class ChildComp extends Component {
  static contextType = ThemeContext2
  constructor(props) {
    super(props)
    this.state = {
      message: `
      一个 React 组件可以订阅 context 的变更，此组件可以让你在函数式组件中可以订阅 context,
      这种方法需要一个函数作为子元素（function as a child,
      这个函数接收当前的 context 值，并返回一个 React 节点,
      传递给函数的 value 值等价于组件树上方离这个 context 最近的 Provider 提供的 value 值,
      如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue
      `
    }
  }
  render() {
    console.log('ChildComp-render')
    console.log(this.context, 'context--')
    const { message } = this.state
    return (
      <Fragment>
        <h5>ChildComp-子组件</h5>
        <p style={this.context.theme}>{message}</p>
        <IscButton>
          嵌套组件中修改 Context
        </IscButton>
      </Fragment>
    )
  }
}

// 按钮组件
class IscButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log('IscButton - render')
    console.log(this.props)
    return (
      <ThemeContext2.Consumer>
        {({ theme, changeTheme }) => (
          <button style={theme} onClick={changeTheme}>
            {this.props.children}
          </button>
        )}
      </ThemeContext2.Consumer>
    )
  }
}

export default ContextConsumerUpdatePage
```

### 多个 Context

如果两个或者更多的 context 值经常被一起使用，那你可能要考虑一下另外创建你自己的渲染组件，以提供这些值

``` js
import React, { Component } from 'react'
import { ThemeContext, themes } from '../context/themeContext'
import { UserContext } from '../context/userContext'

class ContextMultiplePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.dark,
      userinfo: {
        username: 'sunsboyxu',
        country: 'China'
      }
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={ this.state.theme }>
        <UserContext.Provider value={ this.state.userinfo }>
          <ParentComp></ParentComp>
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

function ParentComp() {
  return (
    <div className='parent-comp'>
      <ChildComp></ChildComp>  
    </div>
  )
}

class ChildComp extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { theme => (
          <UserContext.Consumer>
            { userinfo => (
              <UserInfo theme={theme} userinfo={ userinfo }></UserInfo>
            ) }
          </UserContext.Consumer>
        ) }
      </ThemeContext.Consumer>
    )
  }
}

class UserInfo extends Component {
  render() {
    const { theme, userinfo } = this.props
    return (
      <div style={theme}>
        <h3>{ userinfo.username }</h3>
        <p>{ userinfo.country }</p>
      </div>
    )
  }
}

export default ContextMultiplePage
```

### Context 注意事项

因为 context 会根据引用标识来决定何时进行渲染（本质上是 value 属性值的浅比较），
所以这里可能存在一些陷阱，当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染

举个例子，当每一次 Provider 重渲染时，由于 value 属性总是被赋值为新的对象，以下的代码会重新渲染下面所有的 consumers 组件

``` js
class App extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{username: 'sunsboyxu'}}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

为了防止这种情况，将 value 状态提升到父节点的 state 里

``` js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {username: 'sunsboyxu'},
    };
  }

  render() {
    return (
      <MyContext.Provider value={this.state.userinfo}>
        <Toolbar />
      </MyContext.Provider>
    );
  }
}
```

## createPortal

``` js
// 语法
createPortal(child, container)
```

弹窗类组件实现，添加如 body 后，依赖 react-dom 库

``` js
import React, { Component } from 'react';
import { createPortal } from 'react-dom'

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }

  componentWillUnmount() {
    // 清除上一次生成的
    if(this.node) {
      document.body.removeChild(this.node)
    }
  }

  render() {
    return createPortal(
      <div className='dialog' style={{ width: '100px', height: '100px', 'background': 'orange' }}>
        this is dialog
      </div>,
      this.node
    )
  }
}

export default Dialog;
```

## 高阶组件-HOC

- [高阶组件-HOC](https://zh-hans.reactjs.org/docs/higher-order-components.html)

为了提高组件复用率，可测试性，就要保证组件功能单一性，但是若要满足复杂需求就要扩展功能单一的组件，
高阶组件 HOC（Higher-Order Component），是 React 中用于复用组件逻辑的一种高级技巧，
HOC，自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式，

HOC 是参数为 组件，返回值为 新组件的函数，

HOC 不会修改传入的组件，也不会使用继承来复制其行为，
相反，HOC 通过将组件包装在容器组件中来组成新组件，HOC 是纯函数，没有副作用

组件是将 props 转换为 UI，而 高阶组件 HOC 是将组件转换为另一个组件，HOC 在 React 的第三方库中很常见，
例如：Redux 的 connect 和 Relay 的 createFragmentContainer

``` js
import React, { Component } from 'react'

// HOC 组件
const foot = (Comp) => props => {
  return (
    <div className='border'>
      <Comp {...props}></Comp>
    </div>
  )
} 

// 可复用 子组件
function ChildComp(props) {
  return (
    <div>Child comp</div>
  )
}

const Foot = foot(ChildComp)
const Foot2 = foot(foot(ChildComp))

// 页面
class HocCompPage1 extends Component {
  render() {
    return (
      <div>
        <h3>高阶组件-Hoc</h3>
        <Foot></Foot>
        <Foot2></Foot2>
      </div>
    )
  }
}

export default HocCompPage1
```

未使用 高阶组件 HOC 处理的页面

``` js
import React, { Component } from 'react'

// 高阶组件页面
class HocCompPage2 extends Component {
  render() {
    return (
      <div>
        <CommentList></CommentList>
        <BlogList></BlogList>
      </div>
    )
  }
}

// 评论列表
class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  getList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          title: '标题1',
          content: '评论内容1'
        }, {
          title: '标题2',
          content: '评论内容2'
        }])
      }, 1500)
    })
  }

  componentDidMount() {
    this.getList().then(res => {
      this.setState({
        list: res
      })
    })
  }

  render() {
    return (
      <div>
        {
          this.state.list.map(item => <CommentItem item={item} key={item.title}></CommentItem>)
        }
      </div>
    )
  }
}

function CommentItem(props) {
  const { item } = props
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  )
}

// 博客列表
class BlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  getList = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          title: '博客1',
          content: '博客内容1'
        }, {
          title: '博客2',
          content: '博客内容2'
        }])
      }, 1500)
    })
  }

  componentDidMount() {
    this.getList().then(res => {
      this.setState({
        list: res
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map(item => <BlogItem item={item} key={item.title}></BlogItem>)
        }
      </div>
    )
  }
}

function BlogItem(props) {
  const { item } = props
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  )
}

export default HocCompPage2
```

使用 高阶组件 HOC 处理的页面

``` js
import React, { Component } from 'react'

// 评论列表 - CommentList
function CommentList(props) {
  const list = props.list
  return (
    // Fragment 简写
    <>
      <h3>评论列表</h3>
      {
        list.length === 0 ? <LoadingComp /> :
          <div style={{ border: '1px solid red', padding: '10px' }}>
            {list.map(item => <CommentItem item={item} key={item.title} />)}
          </div>
      }
    </>
  )
}

// 显示数据加载
function LoadingComp(props) {
  return <div style={{
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    color: '#666',
    fontSize: '12px',
    justifyContent: 'center'
  }}>
    { props.children || '正在加载数据...' }
  </div>
}

// 评论 item - CommentItem
function CommentItem(props) {
  const { item } = props
  return (
    <div className='list-item'>
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </div>
  )
}

// 博客列表 - BlogList
function BlogList(props) {
  const list = props.list
  return (
    // Fragment 简写
    <>
      <h3>博客列表</h3>
      {
        list.length === 0 ? <LoadingComp>正在加载博客数据...</LoadingComp> :
          <div style={{ border: '1px solid orange', padding: '10px' }}>
            {list.map(item => <BlogItem item={item} key={item.title} />)}
          </div>
      }
    </>
  )
}

// 博客 item - BlogItem
function BlogItem(props) {
  const item = props.item
  return (
    <div className='list-item'>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  )
}

// 高阶组件 Hoc - hocList
function hocList(WrapComp, getList) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        list: []
      }
    }
    componentDidMount() {
      getList().then(res => {
        this.setState({
          list: res
        })
      })
    }
    render() {
      console.log('render--')
      return <WrapComp {...this.props} list={this.state.list} />
    }
  }
}


const CommentListHoc = hocList(CommentList, () => {
  return new Promise((resolve, reject) => {
    // 模拟后端返回数据
    setTimeout(() => {
      resolve([{
        title: '标题1',
        content: '评论内容1'
      }, {
        title: '标题2',
        content: '评论内容2'
      }])
    }, 1500)
  })
})

const BlogListHoc = hocList(BlogList, () => {
  return new Promise((resolve, reject) => {
    // 模拟后端返回数据
    setTimeout(() => {
      resolve([{
        title: '博客1',
        content: '博客内容1'
      }, {
        title: '博客2',
        content: '博客内容2'
      }])
    }, 3000)
  })
})

// HocCompPage3 页面
class HocCompPage3 extends Component {
  render() {
    return (
      <div style={{ padding: '12px' }}>
        <CommentListHoc />
        <BlogListHoc />
      </div>
    )
  }
}

export default HocCompPage3
```
