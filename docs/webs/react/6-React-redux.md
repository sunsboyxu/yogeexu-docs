# React-redux

- [react-redux](https://www.redux.org.cn/docs/react-redux/)

## React-redux 提供了2个 api

- Provider 为后代组件提供store
- connect 为组件提供数据和变更⽅法

## 安装

``` bash
yarn add react-redux
```

目录结构

``` md
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
 │   ├── store
 │   │   └── index.js
 │   ├── styles
 │   │   └── index.scss
 │   └── views
 │       ├── Cart
 │       │   └── index.js
 │       ├── Home
 │       │   └── index.js
 │       └── User
 │           └── index.js
 └── yarn.lock
```

## mapStateToProps 将 state 映射到 props

在 src/views/Cart.js 页面使用 react-redux connect

``` js
import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'

// 写法一
export default connect(
  // mapStateToProps 将 state 映射到 props 上
  state => ({ count: state })
)(
  class Cart extends Component {

    add1 = () => {
      this.props.dispatch({type: 'ADD'})
    }

    add2 = (dispatch) => {
      console.log(this)
      dispatch({ type: 'ADD' })
    }

    render() {
      console.log('props:', this.props)
      const { count, dispatch } = this.props
      return (
        <Layout>
          <h3>Cart page</h3>
          <p>购物车数量：{count}</p>
          <div>
            {/* <button onClick={ this.add(dispatch)  }>加入购物车</button> 这样写会报错*/}
            <button onClick={ this.add1 }>加入购物车1</button>
            <button onClick={() => this.add2(dispatch)}>加入购物车2</button>
            <button onClick={() => dispatch({ type: 'MINUS' })}>移除购物车</button>
          </div>
        </Layout>
      )
    }
  }
)
```

## 多个 dispatch 方法，自定义 映射方法

在 src/views/User.js 页面使用 react-redux connect

``` js
import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'

export default connect(
  // mapStateToProps
  state => ({count: state}),
  // 多个 dispatch 方法，自定义 映射方法
  {
    add: () => ({ type: 'ADD' }),
    minus: () => ({ type: 'MINUS' }) 
  })(
  class User extends Component {
    render() {
      const { count, add, minus} = this.props
      return (
        <Layout title='User Page' showtopbar={true} showbottombar={true}>
          <h3>User page</h3>
          <p>购物车数量：{ count }</p>
          <div>
            <button onClick={ add }>加入购物车</button>
            <button onClick={ minus }>移除购物车</button>
          </div>
        </Layout>
      )
    }
  }
)
```

``` js
import React, { Component } from 'react'
import Layout from '../../components/Layout'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    console.log('props', this.props)
    const { count, add, minus } = this.props
    return (
      <Layout title='User Page' showtopbar={true} showbottombar={true}>
        <h3>User page</h3>
        <p>购物车数量：{count}</p>
        <div>
          <button onClick={add}>加入购物车</button>
          <button onClick={minus}>移除购物车</button>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return { count: state }
}

const mapDispatchToProps = {
  add: () => {
    return { type: 'ADD' }
  },
  minus: () => {
    return { type: 'MINUS' }
  }
}

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(User)
```
