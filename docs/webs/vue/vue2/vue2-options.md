# 选项 options

## 数据相关 - data

选项 | 参数类型 | 说明 
-|-|-
data | Object &#124; Fucntion | Vue实例的数据对象
props | Array&lt;string&gt; &#124; Object | 可以是数组或对象，用于接收来自父组件的数据
propsData | Object | 创建实例时传递 props，主要作用是方便测试
computed | { [key: string]: Function &#124; { get: Function, set: Function } } | 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例
methods | { [key: string]: Function } | methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 this 自动绑定为 Vue 实例
watch | { [key: string]: string &#124; Function &#124; Object &#124; Array } | 一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象


### data
- [深入响应式原理](https://v2.cn.vuejs.org/v2/guide/reactivity.html)

参数类型：Object | Function
- 限制：组件的定义只接受 function

``` js
const vm = new Vue({
	data: {
		showTitle: 'vue options data'
	}
})
console.log(vm, 'vm-')
console.log(vm.$data.showTitle)

```

``` js
export default {
	data() {
		return {
			msg: 'message'
		}
	}
}
```

Vue 实例的数据对象。Vue 会递归地把 data 的 property 转换为 getter/setter，从而让 data 的 property 能够响应数据变化。
对象必须是纯粹的对象 (含有零个或多个的 key/value 对)：浏览器 API 创建的原生对象，原型上的 property 会被忽略。
大概来说，data 应该只能是数据 - 不推荐观察拥有状态行为的对象

一旦观察过，你就无法在根数据对象上添加响应式 property。因此推荐在创建实例之前，就声明所有的根级响应式 property

实例创建之后，可以通过 vm.$data 访问原始数据对象。
Vue 实例也代理了 data 对象上所有的 property，因此访问 vm.a 等价于访问 vm.$data.a

#### data命名要求
以 _ 或 $ 开头的 property 不会被 Vue 实例代理，因为它们可能和 Vue 内置的 property、API 方法冲突。
你可以使用例如 vm.$data._property 的方式访问这些 property

#### 组件内的 data 为什么需要使用 函数式的
当一个组件被定义，data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。
如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！
通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象


### props
- [props详细说明](https://v2.cn.vuejs.org/v2/guide/components-props.html)

props 可以是数组或对象，用于接收来自父组件的数据，可以是简单的数组，或者使用 对象 作为替代，对象 允许配置高级选项，如类型检测、自定义验证和设置默认值

#### 基于对象的语法使用以下选项

``` html
<template>
  <div>
    <h3>{{ pageTitle }}</h3>
    <props-comp1 title="data1" content="page-comp1" :count='totalCount'/>
  </div>
</template>

<script>
export default {
  name: 'VueOptions',
  components: {
		// 组件 props-comp1
    'props-comp1': {
      render: function(h) {
        return h('div', {}, [
          h('h3', this.title),
          h('p', this.content),
          h('div', '浏览数量：' + this.count)
        ])
      },
			// 选项 props
      props: {
        title: String,
        content: String,
        count: {
          type: Number,
          required: true,
          default: 0,
          validator: function(val) {
            return val >= 0
          }
        }
      }
    }
  },
  data () {
    return {
      pageTitle: 'vue 选项 options',
      totalCount: 100
    }
  }
}
</script>
```

#### <code>type</code>
- [prop类型](https://v2.cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%B1%BB%E5%9E%8B)

可以是下列 <code>原生构造函数</code> 中的一种 
<code>String</code>、
<code>Number</code>、
<code>Boolean</code>、
<code>Object</code>、
<code>Array</code>、
<code>Date</code>、
<code>Function</code>、
<code>Symbol</code>、
任意的构造函数，或上述内容组成的 数组。 
type 会检查一个 prop 是否是给定的类型，否则抛出警告。

#### <code>default: any</code>

- 为该 prop 指定一个默认值。如果该 prop 没有被传入，则换做用这个值。
- prop 的 type类型 为 对象或数组的 默认值必须从一个工厂函数返回

#### <code>required: Boolean</code>
定义该 prop 是否是必填项。在非生产环境中，如果这个值为 truthy 且该 prop 没有被传入的，则一个控制台警告将会被抛出

#### <code>validate: Function</code>
- [prop验证](https://v2.cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81)
自定义验证函数会将该 prop 的值作为唯一的参数代入。在非生产环境下，如果该函数返回一个 falsy 的值 (也就是验证失败)，一个控制台警告将会被抛出


### propsData

参数类型：Object { [key: string]: any }

只用于 new 创建的实例中，创建实例时传递 props。主要作用是方便测试

``` js
var Comp = Vue.extend({
  props: ['msg'],
  template: '<div>{{ msg }}</div>'
})

var vm = new Comp({
  propsData: {
    msg: 'hello'
  }
})
```

### computed

- [计算属性](https://v2.cn.vuejs.org/v2/guide/computed.html)

参数：<code>{ [key]: string: Function | { get: Function, set: Function } }</code>

- 计算属性将被混入到 Vue 实例中，所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
- 计算属性的结果会被缓存，除非 <code>依赖的响应式 property</code> 变化才会重新计算。
- 注意：如果某个依赖 (比如：<code>非响应式 property</code>) 在该实例范畴之外，则计算属性是不会被更新的。
- 使用 Function 时，this 指向当前组件的<code>实例 vm</code>
- 注意：如果为一个计算属性使用了 <code>箭头函数</code> ，则 this 不会指向这个组件的实例，不过仍然可以将其<code>实例 vm </code> 作为函数的第一个参数来访问 property
- 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter

vuex 插件中 getters 的实现，巧妙的借鉴了 computed 来实现

``` js
export default {
	data() {
		return {
			count: 10
		}
	},
	computed: {
		doubleCount() {
			return this.count * 2
		},
		doubleCount2() {
			return this.count * 2
		},
		doubleCount3: vm => vm.count * 2
	}
}
```


#### <code>什么时候使用计算属性</code>
模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
在模板中放入太多的逻辑会让模板过重且难以维护，对于任何复杂逻辑，都应当使用 <code>computed - 计算属性</code>

#### 字符串反转例子

在这个地方，模板不再是简单的声明式逻辑。
你必须看一段时间才能意识到，这里是想要显示变量 message 的翻转字符串。
当你想要在模板中的多处包含此翻转字符串时，就会更加难以处理

``` html
<template>
  <div>
    <h4>计算属性</h4>
		<hr />
		<div>
			当前字符串：{{ message }}
			<el-button size="small" @click="message = '正在学习vue计算属性'">修改 当前字符串</el-button>
			<el-button size="small" @click="message = '我们都是中国人'">再次修改 当前字符串</el-button>
		</div>
		<div>反转的字符串：</div>
		<!-- 假设很多地方要使用 反转的字符串 -->
		<!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
		<!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
		<!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
		<div>{{ reversedMessage }}</div>
		<div>{{ reversedMessage }}</div>
		<div>{{ reversedMessage }}</div>
		<div>{{ reversedMessage2 }}</div>
  </div>
</template>

<script>
export default {
  name: 'VueOptions',
  data () {
    return {
      message: '计算属性反转'
    }
  },
  computed: {
		reversedMessage() {
			console.log('计算属性反转字符串，执行---')
			return this.message.split('').reverse().join('')
		},
		// 使用箭头函数
		reversedMessage2: vm => vm.message.split('').reverse().join('')
	}
}
</script>
```

Vue 知道 vm.reversedMessage 依赖于 vm.message，因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解


#### 计算属性缓存 vs 方法

可以通过在表达式中调用方法来达到同样的效果，可以将同一函数定义为一个方法而不是一个计算属性。
两种方式的最终结果确实是完全相同的。然而，不同的是<code>计算属性是基于它们的响应式依赖进行缓存的</code>。
只在相关响应式依赖发生改变时它们才会重新求值。
这就意味着只要 message 还没有发生改变，多次 访问 <code>reversedMessage</code> 计算属性会立即返回之前的计算结果，而不必再次执行函数
从 reversedMessage 的打印发现，多个地方使用 reversedMessageFn()，该方法执行了多次

``` html
<template>
  <div>
    <h3>{{ pageTitle }}</h3>
		<h4>计算属性</h4>
		<hr />
		<div>
			当前字符串：{{ message }}
			<el-button size="small" @click="message = '正在学习vue计算属性'">修改 当前字符串</el-button>
			<el-button size="small" @click="message = '我们都是中国人'">再次修改 当前字符串</el-button>
		</div>
		<div>反转的字符串：</div>
		<!-- 假设很多地方要使用 反转的字符串 -->
		<!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
		<!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
		<!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
		<div>{{ reversedMessage }}</div>
		<div>{{ reversedMessage }}</div>
		<div>{{ reversedMessage }}</div>
		<div>{{ reversedMessage2 }}</div>
		<hr />
		<h4>计算属性 vs 方法</h4>
		<div>反转的字符串：{{ reversedMessageFn() }}</div>
		<div>反转的字符串：{{ reversedMessageFn() }}</div>
		<div>反转的字符串：{{ reversedMessageFn() }}</div>
		<div>反转的字符串：{{ reversedMessageFn() }}</div>
		<hr />
  </div>
</template>

<script>
export default {
  name: 'VueOptions',
  data () {
    return {
			pageTitle: 'vue 选项 options',
      message: '计算属性反转'
    }
  },
  computed: {
		reversedMessage() {
			console.log('计算属性反转字符串，执行---')
			return this.message.split('').reverse().join('')
		},
		// 使用箭头函数
		reversedMessage2: vm => vm.message.split('').reverse().join('')
	},
	methods: {
		reversedMessageFn() {
			console.log('反转字符串方法，执行---')
			return this.message.split('').reverse().join('')
		}
	}
}
</script>
```

#### 计算属性 vs 侦听属性

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
当有一些数据需要随着其它数据变动而变动时，很容易滥用 watch，然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调

滥用 watch 的方式处理，该代码是命令式且重复的
``` html
<div>{{ username }}</div>
```

``` js
export default {
	data() {
		return {
			firstName: 'sunsboy',
			lastName: 'xu',
			username: ''
		}
	},
	watch: {
		firstName: {
			handler: function(val) {
				this.username = val + ' '+ this.lastName	
			},
			immedidate: true
		},
		lastName: {
			handler: function(val) {
				this.username = this.firstName + ' ' + val	
			},
			immedidate: true
		}
	}
}
```

使用计算属性进行优化处理，代码显的很简洁

``` js
export default {
	data() {
		return {
			firstName: 'sunsboy',
			lastName: 'xu',
		}
	},
	computed: {
		username() {
			return this.firstName + ' '+ this.lastName
		}
	}
}
```

#### 非响应式依赖

下面的 计算属性 showTime 将不再更新
``` js
export default {
	computed: {
		showTime() {
			return Date.now()
		}
	}
}
```

每当触发重新渲染时，调用方法将总会再次执行函数

#### 为什么需要缓存

假设有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。
其他的计算属性可能依赖于 A。如果没有缓存，我们将不可避免的多次执行 A 的 getter。
如果不希望有缓存，请用方法来替代

#### computed 的几种写法，箭头函数以及 get 和 set 的使用

函数的简写 和 function 的写法，this 指向当前组件的<code>实例 vm</code>，
使用箭头函数时，无法获取上下文，打印 this 为 undefined，在 需要修改 computed的属性时，
需要通过 get 和 set 的方式，get 可以使用 箭头函数，set 中不能使用箭头函数

``` html
<template>
	<div>
		<h4>计算属性</h4>
		<div>count值：{{ count }}</div>
		<div>doubleCount值：{{ doubleCount }}</div>
		<div>doubleCount值2：{{ doubleCount2 }}</div>
		<div>doubleCount值3：{{ doubleCount3 }}</div>
		<div>doubleCount值4：{{ doubleCount4 }}</div>
		<div>doubleCount值5：{{ doubleCount5 }}</div>
		<div>doubleCount值6：{{ doubleCount6 }}</div>
		<div>
			<el-button @click="changeCount" type="primary">修改 count 值 </el-button>
			<el-button @click="changeDoubleCount(4, 40)" type="primary">修改 doubleCount4 值</el-button>
			<el-button @click="changeDoubleCount(5, 50)" type="primary">修改 doubleCount5 值</el-button>
			<el-button @click="changeDoubleCount(6, 60)" type="primary">修改 doubleCount6 值</el-button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'VueOptions',
  components: {
    'props-comp1': {
      render: function(h) {
        return h('div', {}, [
          h('h3', this.title),
          h('p', this.content),
          h('div', '浏览数量：' + this.count)
        ])
      },
      props: {
        title: String,
        content: String,
        count: {
          type: Number,
          required: true,
          default: 0,
          validator: function(val) {
            return val >= 0
          }
        }
      }
    }
  },
  data () {
    return {
      pageTitle: 'vue 选项 options',
      count: 10
    }
  },
  computed: {
    doubleCount() {
      // this 指向 当前组件实例
      return this.count * 2
    },
    doubleCount2: function() {
      // this 指向 当前组件实例
      return this.count * 2
    },
    doubleCount3: vm => {
      console.log('this', this) // undefined
      console.log('计算属性-vm:', vm)
      return vm.count * 2
    },
    doubleCount4: {
      get: function() {
        return this.count * 2
      },
      set: function(val) {
        console.log('doubleCount4 set~', val)
        this.count = val
      }
    },
    doubleCount5: {
      get() {
        return this.count * 2
      },
      set(val) {
        console.log('doubleCount5 set~', val)
        this.count = val
      }
    },
    doubleCount6: {
			// get 这里可以使用 箭头函数
      get: vm => vm.count * 2,
      // !!! 这里 set 不能使用箭头函数，无法获取到上下文，否则无法修改 组件实例的 data
      set(val) {
        this.count = val
      }
    }
  },
  methods: {
    changeCount() {
      this.count++
    },
    changeDoubleCount(type, count) {
      this['doubleCount' + type] = count
    }
  }
}
</script>
```

#### 通过计算属性-computed，自动计算 购物车数量和总价

``` html
<template>
  <div>
    <h3>{{ pageTitle }}</h3>
    <props-comp1 title="data1" content="page-comp1" :count="count" />
    <h4>计算属性</h4>
    <hr />
    <div>
      当前字符串：{{ message }}
      <el-button size="small" @click="message = '正在学习vue计算属性'"
        >修改 当前字符串</el-button
      >
      <el-button size="small" @click="message = '我们都是中国人'"
        >再次修改 当前字符串</el-button
      >
    </div>
    <div>反转的字符串：</div>
    <!-- 假设很多地方要使用 反转的字符串 -->
    <!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
    <!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
    <!-- <div>{{ message.split(' ').reverse().join(' ') }}</div> -->
    <div>{{ reversedMessage }}</div>
    <div>{{ reversedMessage }}</div>
    <div>{{ reversedMessage }}</div>
    <div>{{ reversedMessage2 }}</div>
    <hr />
    <h4>计算属性 vs 方法</h4>
    <div>反转的字符串：{{ reversedMessageFn() }}</div>
    <div>反转的字符串：{{ reversedMessageFn() }}</div>
    <div>反转的字符串：{{ reversedMessageFn() }}</div>
    <div>反转的字符串：{{ reversedMessageFn() }}</div>
    <hr />
    <div>count值：{{ count }}</div>
    <div>doubleCount值：{{ doubleCount }}</div>
    <div>doubleCount值2：{{ doubleCount2 }}</div>
    <div>doubleCount值3：{{ doubleCount3 }}</div>
    <div>doubleCount值4：{{ doubleCount4 }}</div>
    <div>doubleCount值5：{{ doubleCount5 }}</div>
    <div>doubleCount值6：{{ doubleCount6 }}</div>
    <div>
      <el-button @click="changeCount" type="primary">修改 count 值 </el-button>
      <el-button @click="changeDoubleCount(4, 40)" type="primary"
        >修改 doubleCount4 值</el-button
      >
      <el-button @click="changeDoubleCount(5, 50)" type="primary"
        >修改 doubleCount5 值</el-button
      >
      <el-button @click="changeDoubleCount(6, 60)" type="primary"
        >修改 doubleCount6 值</el-button
      >
    </div>
    <hr />
    <h3>
      当前购物车：<el-button type="warning" @click="addMyCart"
        >点击商品到购物车</el-button
      >
    </h3>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <p>商品名：{{ item.goodsName }}</p>
        <p>购买数量：{{ item.num }}</p>
        <p>商品价格：{{ item.price }}</p>
        <el-button size="small" @click="addCart(item)" type="primary"
          >该商品加 +1</el-button
        >
      </li>
    </ul>
    <div :style="{ display: 'flex', justifyContent: 'flex-end' }">
      购物车数量：{{ cartTotalNum }} 件， 共计价格：{{ cartTotalPrice }} 元
    </div>
  </div>
</template>

<script>
// 购物车原始数据
const originCart = [
  {
    price: 10,
    goodsName: '商品1',
    id: 1,
    num: 5
  },
  {
    price: 50,
    goodsName: '商品2',
    id: 2,
    num: 2
  },
  {
    price: 100,
    goodsName: '商品3',
    id: 3,
    num: 10
  }
]

export default {
  name: 'VueOptions',
  components: {
    'props-comp1': {
      render: function (h) {
        return h('div', {}, [
          h('h3', this.title),
          h('p', this.content),
          h('div', '浏览数量：' + this.count)
        ])
      },
      props: {
        title: String,
        content: String,
        count: {
          type: Number,
          required: true,
          default: 0,
          validator: function (val) {
            console.log(val)
            console.log(val >= 0)
            // return val >= 0
            return false
          }
        }
      }
    }
  },
  data() {
    return {
      pageTitle: 'vue 选项 options',
      count: 10,
      message: '计算属性反转',
      cart: []
    }
  },
  computed: {
    doubleCount() {
      // this 指向 当前组件实例
      return this.count * 2
    },
    doubleCount2: function () {
      // this 指向 当前组件实例
      return this.count * 2
    },
    doubleCount3: (vm) => {
      console.log('this', this) // undefined
      console.log('计算属性-vm:', vm)
      return vm.count * 2
    },
    doubleCount4: {
      get: function () {
        return this.count * 2
      },
      set: function (val) {
        console.log('doubleCount2 set~', val)
        this.count = val
      }
    },
    doubleCount5: {
      get() {
        return this.count * 2
      },
      set(val) {
        console.log('doubleCount2 set~', val)
        this.count = val
      }
    },
    doubleCount6: {
      get: (vm) => vm.count * 2,
      // !!! 这里 set 不能使用箭头函数，无法获取到上下文，否则无法修改 组件实例的 data
      set(val) {
        this.count = val
      }
    },
    reversedMessage() {
      console.log('计算属性反转字符串，执行---')
      return this.message.split('').reverse().join('')
    },
    // 使用箭头函数，第一个参数为实例
    reversedMessage2: (vm) => vm.message.split('').reverse().join(''),
    // 购物车计算总价和总数
    cartTotalNum: (vm) => vm.cart.reduce((pre, cur) => pre + cur.num, 0),
    cartTotalPrice() {
      return this.cart.reduce((pre, cur) => pre + cur.price * cur.num, 0)
    }
  },
  methods: {
    reversedMessageFn() {
      console.log('反转字符串方法，执行---')
      return this.message.split('').reverse().join('')
    },
    changeCount() {
      this.count++
    },
    changeDoubleCount(type, count) {
      this['doubleCount' + type] = count
    },
    addMyCart() {
      this.cart = JSON.parse(JSON.stringify(originCart))
    },
    addCart(item) {
      item.num++
    }
  }
}
</script>
```

### methods

相关参考
- [事件处理](https://v2.cn.vuejs.org/v2/guide/events.html)

参数：<code>{ [key: string]: Function }</code>

methods 将被混入到 <code>Vue 实例</code> 中。
可以直接通过 <code>vm 实例</code> 访问这些方法，或者在 <code>v-on 指令表达式</code> 中使用。
方法中的 this 自动绑定为 <code>Vue 实例</code>


- 注意：

不应该使用<code>箭头函数</code>来定义 method 函数 (例如 <code>add: () => this.count++</code>)。
理由是 <code>箭头函数</code> 绑定了 <code>父级作用域的上下文</code>，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined


``` js
const vm = new Vue({
	data() {
		return {
			count: 0
		}
	},
	methods: {
		add() {
			// this 自动绑定为 Vue 实例
			this.count++
		}
	}
})

vm.add()
vm.count
```

### watch

相关知识点
- [实例方法-$watch](https://v2.cn.vuejs.org/v2/api/?#vm-watch)

参数：<code>{ [key: string]: string | Function | Object | Array }</code>

一个对象，键是需要观察变化的表达式，值是 <code>对应回调函数</code>，值也可以是 <code>方法名</code> ，或者 <code>包含选项的对象</code>。
Vue 实例将会在实例化时调用 <code>$watch()</code>，遍历 <code>watch 对象</code> 的每一个 property

- <code>注意：</code>
不应该使用 <code>箭头函数</code> 来定义 <code>watcher 函数</code> (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。
理由是 <code>箭头函数</code> 绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined


