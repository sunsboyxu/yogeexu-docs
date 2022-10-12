# Hook
- [Hook介绍](https://zh-hans.reactjs.org/docs/hooks-intro.html)

## Hook 是什么?
Hook 是 React 16.8 的新增特性, React 16.8.0 是第一个支持 Hook 的版本，
它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性
Hook 是⼀个特殊的函数，它可以让你 “钩⼊” React 的特性，
升级时，请注意更新所有的 package，包括 React DOM, React Native 从 0.59 版本开始支持 Hook，
例如， useState 是允许你在 React 函数组件中添加 state 的 Hook

## 什么时候会⽤ Hook?
<<<<<<< HEAD
如果你在编写函数组件并意识到需要向其添加⼀些 state，以前的做法是必须
=======
如果你在编写函数组件并意识到需要向其添加⼀些 state，以前的做法是必须
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
将其它转化为 class。现在你可以在现有的函数组件中使⽤ Hook

## 使用 State Hook

在这里，useState 就是一个 Hook，通过在函数组件里调用它来给组件添加一些内部 state，
React 会在重复渲染时保留这个 state，useState 会返回一对值：当前状态 count 和一个让你更新它的函数 setCount，
你可以在事件处理函数中或其他一些地方调用这个函数，它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并
useState 唯一的参数就是初始 state，在上面例子中计数器是从零开始的，所以初始 state 就是 0，
值得注意的是，不同于 this.state，这里的 state 不一定要是一个对象，初始 state 参数只有在第一次渲染时会被用到
可以声明多个 state 变量，在一个组件中可以多次使用 State Hook

``` js
// State Hook
import React, { useState } from "react"
export default function HookPage(props) {
  // 声明⼀个叫 count 的 state 变量，初始 state：0
	// 更新函数 setCount
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3> HookPage </h3>
      <p>count值：{ count }</p>
      <button onClick={ () => setCount(count + 1)} >点击加入购物车</button>
    </div>
  );
}
```

等同于 Class 组件
``` js
import React, { Component } from 'react'
class ClassHookPage extends Component {
	constructor(props) {
		this.state = {
			count: 0
		}
	}
	setCount = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return (
			<div>
			  <h3> ClassHookPage </h3>
			  <p>count值：{ count }</p>
			  <button onClick={ setCount } >点击加入购物车</button>
			</div>
		)
	}
}
```

可以声明多个 state 变量，在一个组件中可以多次使用 State Hook

``` js
// 可以声明多个 state 变量，在一个组件中可以多次使用 State Hook
import React, { useState } from "react"
export default function HookPage(props) {
  const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(10)
	const [count3, setCount3] = useState(100)
  return (
    <div>
      <h3> HookPage </h3>
      <p>count1值：{ count1 }</p>
			<p>count2值：{ count2 }</p>
			<p>count3值：{ count3 }</p>
      <button onClick={ () => setCount(count1 + 1)} >点击加入购物车1</button>
			<button onClick={ () => setCount(count2 + 10)} >点击加入购物车2</button>
			<button onClick={ () => setCount(count3 + 100)} >点击加入购物车3</button>
    </div>
  );
}
```

## 使⽤ Effect Hook
- [使⽤ Effect Hook](https://zh-hans.reactjs.org/docs/hooks-effect.html)
<<<<<<< HEAD

Effect Hook 可以让你在函数组件中执⾏副作⽤操作，数据获取，设置订阅以及⼿动更改 React 组件中的 DOM 都属于副作⽤，
不管你知不知道这些操作，或是 “副作⽤” 这个名字，应该都在组件中使⽤过它们，在函数组件主体内（这⾥指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录⽇志以及执
⾏其他包含副作⽤的操作都是不被允许的，因为这可能会产⽣莫名其妙的 bug 并破坏 UI 的⼀致性，
使⽤ useEffect 完成副作⽤操作，赋值给 useEffect 的函数会在组件渲染到屏幕之后执⾏，你可以
把 effect 看作从 React 的纯函数式世界通往命令式世界的逃⽣通道，
可以把 useEffect Hook 看做 Class 组件生命周期 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
=======

Effect Hook 可以让你在函数组件中执⾏副作⽤操作，数据获取，设置订阅以及⼿动更改 React 组件中的 DOM 都属于副作⽤，
不管你知不知道这些操作，或是 “副作⽤” 这个名字，应该都在组件中使⽤过它们，在函数组件主体内（这⾥指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录⽇志以及执
⾏其他包含副作⽤的操作都是不被允许的，因为这可能会产⽣莫名其妙的 bug 并破坏 UI 的⼀致性，
使⽤ useEffect 完成副作⽤操作，赋值给 useEffect 的函数会在组件渲染到屏幕之后执⾏，你可以
把 effect 看作从 React 的纯函数式世界通往命令式世界的逃⽣通道，
可以把 useEffect Hook 看做 Class 组件生命周期 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19

``` js
import React, { useState, useEffect } from "react";
export default function HookPage(props) {
  // 声明⼀个叫 “count” 的 state 变量，初始化为0
  const [count, setCount] = useState(0);
  // 与 componentDidMount 和 componentDidUpdate相似
  useEffect(() => {
    // 更新 title
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}
```

<<<<<<< HEAD
### effect 的条件执⾏
默认情况下，effect 将在每轮渲染结束后执⾏，但你可以选择让它 在只有某些值改变的时候 才执⾏。
这样的话，⼀旦 effect 的依赖发⽣变化，它就会被重新创建。
然⽽，在某些场景下这么做可能会矫枉过正。⽐如，在上⼀章节的订阅示例中，我们不需要在每次组件
更新时都创建新的订阅，⽽是仅需要在 source props 改变时重新创建。
要实现这⼀点，可以给 useEffect 传递第⼆个参数，它是 effect 所依赖的值数组。更新后的示例如下：
=======
### effect 的条件执⾏
默认情况下，effect 将在每轮渲染结束后执⾏，但你可以选择让它 在只有某些值改变的时候 才执⾏。
这样的话，⼀旦 effect 的依赖发⽣变化，它就会被重新创建。
然⽽，在某些场景下这么做可能会矫枉过正。⽐如，在上⼀章节的订阅示例中，我们不需要在每次组件
更新时都创建新的订阅，⽽是仅需要在 source props 改变时重新创建。
要实现这⼀点，可以给 useEffect 传递第⼆个参数，它是 effect 所依赖的值数组。更新后的示例如下：
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19

``` js
import React, { useState, useEffect } from "react";
export default function HookPage(props) {
  // 声明⼀个叫 “count” 的 state 变量，初始化为0
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // 与 componentDidMount 和 componentDidUpdate相似
  useEffect(() => {
    // 更新 title
    document.title = `You clicked ${count} times`;
  }, [count]);
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
<<<<<<< HEAD
```
此时，只有当 useEffect第⼆个参数数组⾥的数值 改变后才会重新创建订阅。

在 React 组件中有两种常见副作用操作：需要清除的 和 不需要清除

### 清除 effect
=======
```
此时，只有当 useEffect第⼆个参数数组⾥的数值 改变后才会重新创建订阅。

在 React 组件中有两种常见副作用操作：需要清除的 和 不需要清除

### 清除 effect
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源，
要实现这⼀点 useEffect 函数需返回⼀个清除函数，以防⽌内存泄漏，清除函数会在组件卸载前执⾏

``` js
import React, { useState, useEffect } from "react";
export default function HookPage(props) {
  // 声明⼀个叫 “count” 的 state 变量，初始化为0
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  // 与 componentDidMount 和 componentDidUpdate相似
  useEffect(() => {
    // 更新 title
    document.title = `You clicked ${count} times`;
  }, [count]);
	
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
		return () => timer && clearInterval(timer)
  }, []);
  return (
    <div>
      <h3>HookPage</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}
```

### Effect 进行性能优化
在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题，
在 class 组件中，我们可以通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决

``` js
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `${this.state.count} 次加入购物车`
  }
}
```

在 useEffect 的 Hook API 中，如果某些特定值在两次重渲染之间没有发生变化，可以通知 React 跳过对 effect 的调用，
只要传递数组作为 useEffect 的第二个可选参数即可

``` js
useEffect( () => {
  document.title = `${ count } 次加入购物车`
}, [count]) // 仅在 count 更改时更新
```

传入 [count] 作为第二个参数。这个参数是什么作用呢？
如果 count 的值是 5，而且我们的组件重渲染的时候 count 还是等于 5，
React 将对前一次渲染的 [5] 和后一次渲染的 [5] 进行比较，
因为数组中的所有元素都是相等的(5 === 5)，React 会跳过这个 effect，这就实现了性能的优化
当渲染时，如果 count 的值更新成了 6，React 将会把前一次渲染时的数组 [5] 和这次渲染的数组 [6] 中的元素进行对比
这次因为 5 !== 6，React 就会再次调用 effect。如果数组中有多个元素，即使只有一个元素发生变化，React 也会执行 effect


如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量
如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。这并不属于特殊情况 —— 它依然遵循依赖数组的工作方式。
如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。
尽管传入 [] 作为第二个参数更接近大家更熟悉的 componentDidMount 和 componentWillUnmount 思维模式，
但我们有更好的方式来避免过于频繁的重复调用 effect。除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便

``` js
useEffect( () => {
  const timer = setInterval(() => {
		setTime(new Date())
	}, 1000)
	return () => timer && clearInterval(timer)
}, [])
```



## Hook 使用规则
- [Hook 使用规则](https://zh-hans.reactjs.org/docs/hooks-rules.html)

### 需要遵循两条规则
Hook 本质就是 javaScript 函数，但是在使用它时需要遵循两条规则：
- 只能在函数最外层调用 Hook，不要在 循环｜条件判断｜子函数 中调用
确保总是在你的 React 函数的最顶层以及任何 return 之前调用他们，
遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用，
这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确

- 只能在 React 的函数组件中调⽤ Hook，不要在其他 JavaScript 函数中调⽤
（还有⼀个地⽅可以调⽤ Hook —— 就是⾃定义的 Hook 中）


React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序
因为我们的示例中，Hook 的调用顺序在每次渲染中都是相同的，所以它能够正常工作

``` js
// ------------
// 首次渲染
// ------------
useState('Mary')           // 1. 使用 'Mary' 初始化变量名为 name 的 state
useEffect(persistForm)     // 2. 添加 effect 以保存 form 操作
useState('Poppins')        // 3. 使用 'Poppins' 初始化变量名为 surname 的 state
useEffect(updateTitle)     // 4. 添加 effect 以更新标题

// -------------
// 二次渲染
// -------------
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
useEffect(persistForm)     // 2. 替换保存 form 的 effect
useState('Poppins')        // 3. 读取变量名为 surname 的 state（参数被忽略）
useEffect(updateTitle)     // 4. 替换更新标题的 effect

```
只要 Hook 的调用顺序在多次渲染之间保持一致，React 就能正确地将内部 state 和对应的 Hook 进行关联

将一个 Hook (例如 persistForm effect) 调用放到一个条件语句中会发生什么呢

``` js
// 在条件语句中使用 Hook 违反第一条规则
  if (name !== '') {
    useEffect(function persistForm() {
      localStorage.setItem('formData', name);
    });
  }
```
在第一次渲染中 name !== '' 这个条件值为 true，所以我们会执行这个 Hook。
但是下一次渲染时我们可能清空了表单，表达式值变为 false。此时的渲染会跳过该 Hook，Hook 的调用顺序发生了改变

``` js
useState('Mary')           // 1. 读取变量名为 name 的 state（参数被忽略）
// useEffect(persistForm)  // 此 Hook 被忽略！
useState('Poppins')        // 2 （之前为 3）。读取变量名为 surname 的 state 失败
useEffect(updateTitle)     // 3 （之前为 4）。替换更新标题的 effect 失败
```

React 不知道第二个 useState 的 Hook 应该返回什么。
React 会以为在该组件中第二个 Hook 的调用像上次的渲染一样，对应的是 persistForm 的 effect，但并非如此。从这里开始，后面的 Hook 调用都被提前执行，导致 bug 的产生

这就是为什么 Hook 需要在我们组件的最顶层调用。如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的内部

``` js
useEffect(function persistForm() {
	// 将条件判断放置在 effect 中
	if (name !== '') {
		localStorage.setItem('formData', name);
	}
});
```

如果使用了提供的 lint 插件，就无需担心此问题

### eslint 插件来强制执行这两条规则
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

eslint-plugin-react-hooks 插件配置

``` bash
yarn add eslint-plugin-react-hooks -D
```

``` js
// eslint 配置
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}
```


## 自定义 Hook
- [自定义 Hook](https://zh-hans.reactjs.org/docs/hooks-custom.html)

通过自定义 Hook，可以将组件逻辑提取到可重用的函数中，有时候我们会想要在组件之间重⽤⼀些状态逻辑，
在 React 中有两种流行的方式来共享组件之间的状态逻辑: render props 和 高阶组件
<<<<<<< HEAD
- 自定义 Hook 可以让你在不增加组件的情况下达到同样的
=======
- 自定义 Hook 可以让你在不增加组件的情况下达到同样的
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
- 自定义 Hook 是一个函数，其名称以 “use” 开头，函数内部可以调用其他的 Hook

与 React 组件不同的是，自定义 Hook 不需要具有特殊的标识，我们可以自由的决定它的参数是什么，以及它应该返回什么（如果需要的话），
换句话说，它就像一个正常的函数，但是它的名字应该始终以 use 开头，这样可以一眼看出其符合 Hook 的规则

- 自定义 Hook 必须以 “use” 开头吗？
必须如此，这个约定非常重要。不遵循的话，由于无法判断某个函数是否包含对其内部 Hook 的调用，React 将无法自动检查你的 Hook 是否违反了 Hook 的规则

- 在两个组件中使用相同的 Hook 会共享 state 吗？
不会，自定义 Hook 是一种重用状态逻辑的机制(例如设置为订阅并存储当前值)，所以每次使用自定义 Hook 时，其中的所有 state 和副作用都是完全隔离的

- 自定义 Hook 如何获取独立的 state？
每次调用 Hook，它都会获取独立的 state，当调用了 自定义 Hook，组件只是调用了 useState 和 useEffect，
因为可以在一个组件中多次调用 useState 和 useEffect，它们是完全独立的

- 建立一个 CustomHookPage 页面
``` js
// src/views/CustomHookPage.js
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import '@/style/index.scss'

import ListItem from '@/components/ListItem'
// import ListDetail from './ListDetail'

function CustomHookPage(props) {
  const [list, setList] = useState([])

  useEffect(() => {
		// 模拟后端返回列表数据
    setTimeout(() => {
      setList([{
        productName: '产品1',
        productDes: '产品描述1',
        collectStatus: 1
      }, {
        productName: '产品2',
        productDes: '产品描述2',
        collectStatus: -1
      }])
    }, 800)
  }, []) // [] useEffect 触发一次，不依赖 props 的变化

  return (
    <div>
      <ul className='list'>
      {
        list.map(item => <ListItem item={ item } key={item.productName}/>)
      }
    </ul>
    {/* <ListDetail></ListDetail> */}
    </div>
  )
}

=======
import React, { useState, useEffect } from 'react'
import '@/style/index.scss'

import ListItem from '@/components/ListItem'
// import ListDetail from './ListDetail'

function CustomHookPage(props) {
  const [list, setList] = useState([])

  useEffect(() => {
		// 模拟后端返回列表数据
    setTimeout(() => {
      setList([{
        productName: '产品1',
        productDes: '产品描述1',
        collectStatus: 1
      }, {
        productName: '产品2',
        productDes: '产品描述2',
        collectStatus: -1
      }])
    }, 800)
  }, []) // [] useEffect 触发一次，不依赖 props 的变化

  return (
    <div>
      <ul className='list'>
      {
        list.map(item => <ListItem item={ item } key={item.productName}/>)
      }
    </ul>
    {/* <ListDetail></ListDetail> */}
    </div>
  )
}

>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
export default CustomHookPage
```

列表产品组件
``` js
// src/components/ListItem.js
import React from 'react'
<<<<<<< HEAD
// 引用自定义 hook
import useCollectState from '@/hooks/useCollectState'

function ListItem(props) {
  const item = props.item
	// 使用自定义 hook - useCollectState
  const collectText = useCollectState(item.collectStatus)
  return (
    <li className='list-item' key={item.productName}>
      <h3>{item.productName}</h3>
      <div>{item.productDes}</div>
      <div className={[item.collectStatus>0?'orange':'', 'item-collect'].join(' ')}>{ collectText }</div>
    </li>
  )
}
=======
// 引用自定义 hook
import useCollectState from '@/hooks/useCollectState'

function ListItem(props) {
  const item = props.item
	// 使用自定义 hook - useCollectState
  const collectText = useCollectState(item.collectStatus)
  return (
    <li className='list-item' key={item.productName}>
      <h3>{item.productName}</h3>
      <div>{item.productDes}</div>
      <div className={[item.collectStatus>0?'orange':'', 'item-collect'].join(' ')}>{ collectText }</div>
    </li>
  )
}
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
export default ListItem
```

自定义 hook ，useCollectState
``` js
// src/hooks/useCollectState.js
<<<<<<< HEAD
import { useState, useEffect } from 'react'
// 自定义 hook - useCollectState
function useCollectState(collectStatus) {
  const [isCollect, setCollect] = useState(false)
	// useEffect 根据 collectStatus 的变化重新执行
  useEffect(() => {
    collectStatus > 0?setCollect(true):setCollect(false)
  }, [collectStatus])
	// 返回收藏的显示文字
  return isCollect?'已收藏':'收藏'
}

=======
import { useState, useEffect } from 'react'
// 自定义 hook - useCollectState
function useCollectState(collectStatus) {
  const [isCollect, setCollect] = useState(false)
	// useEffect 根据 collectStatus 的变化重新执行
  useEffect(() => {
    collectStatus > 0?setCollect(true):setCollect(false)
  }, [collectStatus])
	// 返回收藏的显示文字
  return isCollect?'已收藏':'收藏'
}

>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
export default useCollectState
```

列表产品的详情页面也会有 是否收藏的显示 - 页面 ListDetail.js
``` js
// src/views/ListDetail.js
import React, { useState, useEffect } from 'react'
import useCollectState from '@/hooks/useCollectState'
function ListDetail(props) {
  const [info, setDetailInfo] = useState({})
	// 使用自定义 hook - useCollectState
  const collectText = useCollectState(1)
  useEffect(() => {
		// 模拟后端返回列表数据
    setTimeout(() => {
			setDetailInfo({
			  productName: '产品1',
			  productDes: '产品描述1',
			  collectStatus: 1
			})
		}, 500)
  }, []) // [] useEffect 触发一次，不依赖 props 的变化

  return (
    <div className='list-detail-wrap'>
      <h3 className='list-title'>{ info.productName }</h3>
      <div>{ collectText }</div>
      <p>{ info.productDes }</p>
    </div>
  )
}

export default ListDetail
```


## Hooks API
[Hook API 索引](https://zh-hans.reactjs.org/docs/hooks-reference.html)

### useState

``` js
// 基本语法
const [state, setState] = useState(initialState)
// const [count, setCount] = useState(0)
```
返回一个 state，以及更新 state 的函数，initialState 为 state 的初始值，
setState 函数用于更新 state，它接收一个新的 state 值并将组件的一次重新渲染加入队列，
在后续的重新渲染中，useState 返回的第一个值将始终是更新后最新的 state

React 会确保 setState 函数的标识是稳定的，并且不会在组件重新渲染时发生变化
这就是为什么可以安全地从 useEffect 或 useCallback 的依赖列表中省略 setState


#### 函数式更新
如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState，
该函数将接收先前的 state，并返回一个更新后的值，
如果更新函数返回值与当前 state 完全相同，则随后的重渲染会被完全跳过

``` js
import React, { useState } from 'react'

function HookApiPage(props) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Hook Api</h3>
      <div>count:{ count }</div>
      <div>
        <button onClick={ () => setCount(0) }>重置</button>
				{ /* 函数式更新 prevCount: 上一次的 count */ }
        <button onClick={ () => setCount(prevCount => prevCount + 1) }>点击加入购物车</button>
				{ /* 函数式更新 prevCount: 上一次的 count */ }
        <button onClick={ () => setCount(prevCount => prevCount - 1) }>点击移除购物车</button>
      </div>
    </div>
  )
}

export default HookApiPage
```

#### 自动合并更新对象
useState 与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象
可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果，useReducer 是另一种可选方案，它更适合用于管理包含多个子值的 state 对象

``` js
import React, { useState } from 'react'

function HookApiPage(props) {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([{
    name: 'Apple',
    price: '10元'
  }])

  const contactUpdate = () => {
    const newArr = [{
      name: 'Orange',
      price: '99元'
    }, {
      name: 'Pear',
      price: '20元'
    }]
    setList((prevList) => {
      console.log(prevList, 'prevList')
      return [...prevList, ...newArr]
    })
  }

  return (
    <div>
      <h3>Hook Api</h3>
      <div>count:{count}</div>
      <div>
        {
          list.map((item, index) => <li key={index}>
            {index + '-' + item.name + '-' + item.price}
          </li>)
        }
      </div>
      <div>
        <button onClick={() => setCount(0)}>重置</button>
        { /* 函数式更新 prevCount: 上一次的 count */}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>点击加入购物车</button>
        { /* 函数式更新 prevCount: 上一次的 count */}
        <button onClick={() => setCount(prevCount => prevCount - 1)}>点击移除购物车</button>
        <button onClick={ contactUpdate }>合并更新</button>
      </div>
    </div>
  )
}

export default HookApiPage
```

#### 惰性初始 state
initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略，
如果初始 state 需要通过复杂计算获得，则可以传入一个函数，
在函数中计算并返回初始的 state，此函数只在初始渲染时被调用


#### 跳过 state 更新
如果更新 State Hook 后的 state 与当前的 state 相同时，React 将跳过子组件的渲染并且不会触发 effect 的执行
需要注意的是，React 可能仍需要在跳过渲染前渲染该组件，不过由于 React 不会对组件树的“深层”节点进行不必要的渲染，所以大可不必担心，
如果你在渲染期间执行了高开销的计算，则可以使用 useMemo 来进行优化

相关问题
- [在usestate 里面用一个异步函数如何给初始值](https://segmentfault.com/q/1010000041838872)

### useEffect
- [useEffect](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)

该 Hook 接收一个包含命令式、且可能有副作用代码的函数，
在函数组件主体内（指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，
因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性

使用 useEffect 完成副作用操作，赋值给 useEffect 的函数会在组件渲染到屏幕之后执行
可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道

默认情况下，effect 将在每轮渲染结束后执行，但可以选择让它 在只有某些值改变的时候 才执行


#### 清除 effect
通常，组件卸载时需要清除 effect 创建的诸如订阅或计时器 ID 等资源。要实现这一点，useEffect 函数需返回一个清除函数，
为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则在执行下一个 effect 之前，上一个 effect 就已被清除。
在上述示例中，意味着组件的每一次更新都会创建新的订阅

``` js
useEffect(() => {
	const subscription = props.source.subscribe();
	  return () => {
	    // 清除订阅
	    subscription.unsubscribe();
	  };
})
```
#### effect 的执行时机
与 componentDidMount、componentDidUpdate 不同的是，传给 useEffect 的函数会在浏览器完成布局与绘制之后，在一个延迟事件中被调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因为绝大多数操作不应阻塞浏览器对屏幕的更新。
然而，并非所有 effect 都可以被延迟执行。例如，一个对用户可见的 DOM 变更就必须在浏览器执行下一次绘制前被同步执行，这样用户才不会感觉到视觉上的不一致。（概念上类似于被动监听事件和主动监听事件的区别。）React 为此提供了一个额外的 useLayoutEffect Hook 来处理这类 effect。它和 useEffect 的结构相同，区别只是调用时机不同。
此外，从 React 18 开始，当它是离散的用户输入（如点击）的结果时，或者当它是由 flushSync 包装的更新结果时，传递给 useEffect 的函数将在屏幕布局和绘制之前同步执行。这种行为便于事件系统或 flushSync 的调用者观察该效果的结果

这只影响传递给 useEffect 的函数被调用时 — 在这些 effect 中执行的更新仍会被推迟。这与 useLayoutEffect 不同，后者会立即启动该函数并处理其中的更新
即使在 useEffect 被推迟到浏览器绘制之后的情况下，它也能保证在任何新的渲染前启动。React 在开始新的更新前，总会先刷新之前的渲染的 effect

#### effect 的条件执行
默认情况下，effect 会在每轮组件渲染完成后执行。这样的话，一旦 effect 的依赖发生变化，它就会被重新创建
然而，在某些场景下这么做可能会矫枉过正。比如，在上一章节的订阅示例中，我们不需要在每次组件更新时都创建新的订阅，而是仅需要在 source prop 改变时重新创建
要实现这一点，可以给 useEffect 传递第二个参数，它是 effect 所依赖的值数组

``` js
useEffect(
  () => {
    const subscription = props.source.subscribe();
    return () => {
      subscription.unsubscribe();
    };
  },
  [props.source],
);
```

此时，只有当 props.source 改变后才会重新创建订阅

如果你要使用此优化方式，请确保数组中包含了所有外部作用域中会发生变化且在 effect 中使用的变量，否则你的代码会引用到先前渲染中的旧变量

#### 只运行一次的 effect
如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行
这并不属于特殊情况 —— 它依然遵循输入数组的工作方式

如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直持有其初始值
尽管传入 [] 作为第二个参数有点类似于 componentDidMount 和 componentWillUnmount 的思维模式，但我们有 更好的 方式 来避免过于频繁的重复调用 effect
除此之外，请记得 React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得处理额外操作很方便

推荐启用 eslint-plugin-react-hooks 中的 exhaustive-deps 规则
此规则会在添加错误依赖时发出警告并给出修复建议

### useContext
- [useContext](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext)

### useReducer
- [useReducer](https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer)

``` js
// 语法
const [state, dispatch] = useReducer(reducer, initialArg, init)
```


### useMemo
把“创建”函数和依赖项数组作为参数传⼊ useMemo ，它仅会在某个依赖项改变时才重新计算 memoized 值。
这种优化有助于避免在每次渲染时都进⾏⾼开销的计算。

``` js
import React, { useState, useMemo } from 'react'

function UseMemoPage() {
  const [counter, setAdd] = useState(0)
  const [val, setVal] = useState('')

  /**
   * 如果不使用 useMemo 的时候，当 counter 和 val 发生变化的时候
   * 都会重新执行 showChange()，会造成额外的开销
   * 
  */
  // const showChange = () => {
  //   console.log('computed--')
  //   let total = 0
  //   for( let i=0;i<counter;i++ ) {
  //     total+=i
  //   }
  //   return total
  // }

  /**
   * 使用 useMemo 进行优化，当 counter 发生变化的时候，重新计算 sum
  */
  const showChange = useMemo(() => {
    console.log('computed--')
    let total = 0
    for (let i = 0; i < counter; i++) {
      total += i
    }
    return total
  }, [counter])

  return (
    <div>
      <h2>当前组件：UseMemoPage</h2>
      <p>counter的值：{counter}</p>
      <p>重新计算：{showChange}</p>
      <div>
        <button onClick={() => setAdd(counter + 1)}>加入购物车</button>
      </div>
      <div>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
      </div>
    </div>
  )
}

export default UseMemoPage
```


### useCallback
<<<<<<< HEAD
把内联回调函数及依赖项数组作为参数传⼊ useCallback ，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新。
当你把回调函数传递给经过优化的并使⽤引⽤相等性去避
=======
把内联回调函数及依赖项数组作为参数传⼊ useCallback ，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新。
当你把回调函数传递给经过优化的并使⽤引⽤相等性去避
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
免⾮必要渲染（例如 shouldComponentUpdate ）的⼦组件时，它将⾮常有⽤。

``` js
import React, { useState, useCallback, PureComponent } from 'react'

function UseCallbackPage() {
  const [counter, setAdd] = useState(0)
  const [val, setVal] = useState('')

  /**
   * 当 counter 和 val 发生变化的时候，Child 组件都会 重新 render
   * 造成额外的开销
  */
  // const addClick = () => {
  //   let total = 0
  //   for(let i=0;i<counter;i++) {
  //     total+=i
  //   }
  //   console.log('total:', total)
  //   return total
  // }

  /**
   * 通过 useCallback 进行优化，只有当 counter 发生变化的时候，Child 可 重新 render
  */
  const addClick = useCallback(() => {
    let total = 0
    for (let i = 0; i < counter; i++) {
      total += i
    }
    console.log('total:', total)
    return total
  }, [counter])

  return (
    <div>
      <h2>当前组件：UseCallbackPage</h2>
      <p>counter 值： {counter}</p>
      <p style={{ marginTop: '10px' }}>
        <button onClick={() => setAdd(counter + 1)}>加入购物车</button>
      </p>
      <p>
        <input type="text" val={val} onChange={(e) => setVal(e.target.value)} />
      </p>
      <hr></hr>
      <Child addClick={addClick}></Child>
    </div>
  )
}


class Child extends PureComponent {
  render() {
    console.log('child render---')
    const { addClick } = this.props
    return (
      <div>
        <button onClick={() => console.log(addClick())}>子按钮添加</button>
      </div>
    )
  }
}


export default UseCallbackPage
```

- useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
<<<<<<< HEAD
依赖项数组不会作为参数传给“创建”函数。虽然从概念上来说它表现为：所有“创建”函数中引⽤的
=======
依赖项数组不会作为参数传给“创建”函数。虽然从概念上来说它表现为：所有“创建”函数中引⽤的
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
值都应该出现在依赖项数组中。未来编译器会更加智能，届时⾃动创建数组将成为可能

