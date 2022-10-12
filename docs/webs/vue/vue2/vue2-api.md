# vue api

## 全局配置
- [全局配置](https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE)

Vue.config 是一个对象，包含 Vue 的全局配置，可以在 启动应用之前修改下列属性 property

在 Vue 源码最初的定义
``` js
var config = {
    /**
     * Option merge strategies (used in core/util/options)
     */
    // $flow-disable-line
    optionMergeStrategies: Object.create(null),
    /**
     * Whether to suppress warnings.
     */
    silent: false,
    /**
     * Show production mode tip message on boot?
     */
    productionTip: process.env.NODE_ENV !== 'production',
    /**
     * Whether to enable devtools
     */
    devtools: process.env.NODE_ENV !== 'production',
    /**
     * Whether to record perf
     */
    performance: false,
    /**
     * Error handler for watcher errors
     */
    errorHandler: null,
    /**
     * Warn handler for watcher warns
     */
    warnHandler: null,
    /**
     * Ignore certain custom elements
     */
    ignoredElements: [],
    /**
     * Custom user key aliases for v-on
     */
    // $flow-disable-line
    keyCodes: Object.create(null),
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: no,
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: no,
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: no,
    /**
     * Get the namespace of an element
     */
    getTagNamespace: noop,
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: identity,
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: no,
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: true,
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: LIFECYCLE_HOOKS
};
```

``` js
import Vue from 'vue'
console.log(Vue.config, 'Vue.config--')
```

打印结果
``` json
async: true
devtools: false
errorHandler: ƒ (err, vm, info)
getTagNamespace: ƒ getTagNamespace(tag)
ignoredElements: []
isReservedAttr: ƒ (val)
isReservedTag: ƒ (tag)
isUnknownElement: ƒ isUnknownElement(tag)
keyCodes: Proxy {}
mustUseProp: ƒ (tag, type, attr)
optionMergeStrategies: {
	activated: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeCreate: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeDestroy: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeMount: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeRouteEnter: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeRouteLeave: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeRouteUpdate: ƒ mergeLifecycleHook(parentVal, childVal)
	beforeUpdate: ƒ mergeLifecycleHook(parentVal, childVal)
	components: ƒ mergeAssets(parentVal, childVal, vm, key)
	computed: ƒ (parentVal, childVal, vm, key)
	created: ƒ mergeLifecycleHook(parentVal, childVal)
	data: ƒ (parentVal, childVal, vm)
	deactivated: ƒ mergeLifecycleHook(parentVal, childVal)
	destroyed: ƒ mergeLifecycleHook(parentVal, childVal)
	directives: ƒ mergeAssets(parentVal, childVal, vm, key)
	el: ƒ (parent, child, vm, key)
	errorCaptured: ƒ mergeLifecycleHook(parentVal, childVal)
	filters: ƒ mergeAssets(parentVal, childVal, vm, key)
	inject: ƒ (parentVal, childVal, vm, key)
	methods: ƒ (parentVal, childVal, vm, key)
	mounted: ƒ mergeLifecycleHook(parentVal, childVal)
	props: ƒ (parentVal, childVal, vm, key)
	propsData: ƒ (parent, child, vm, key)
	provide: ƒ mergeDataOrFn(parentVal, childVal, vm)
	renderTracked: ƒ mergeLifecycleHook(parentVal, childVal)
	renderTriggered: ƒ mergeLifecycleHook(parentVal, childVal)
	serverPrefetch: ƒ mergeLifecycleHook(parentVal, childVal)
	updated: ƒ mergeLifecycleHook(parentVal, childVal)
	watch: ƒ (parentVal, childVal, vm, key)
}
parsePlatformTagName: ƒ (_)
performance: false
productionTip: true
silent: true
warnHandler: ƒ (msg, vm, trace)
_lifecycleHooks: Array(14)
	0: "beforeCreate"
	1: "created"
	2: "beforeMount"
	3: "mounted"
	4: "beforeUpdate"
	5: "updated"
	6: "beforeDestroy"
	7: "destroyed"
	8: "activated"
	9: "deactivated"
	10: "errorCaptured"
	11: "serverPrefetch"
	12: "renderTracked"
	13: "renderTriggered"
	length: 14
	[[Prototype]]: Array(0)
	[[Prototype]]: Object
```

从打印的结果可以看到 Vue 全局配置信息，如：_lifecycleHooks，从而得知 Vue 中的生命周期有 14个


属性 | 类型 | 默认值 | 属性说明
-|-|-|-
silent | Boolean | true | 是否 显示/隐藏，Vue 所有的日志与警告
devtools | Boolean | true/生产环境为false | 配置是否允许 vue-devtools 检查代码
productionTip | Boolean | true | 2.2.0 新增，设置为 false 以阻止 vue 在启动时生成生产提示
performance | Boolean | false(自2.3.0起) | 2.2.0新增，设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪
ignoredElements | Array | [] | 忽略在 Vue 之外的自定义元素，RegExp 仅在 2.5+ 支持
keyCodes | Object | {} | 给 v-on 自定义键位别名
optionMergeStrategies | Object | {} | 自定义合并策略的选项
errorHandler | Function | undefined | 指定组件的渲染和观察期间未捕获错误的处理函数
warnHandler | Function | undefined | 2.4.0 新增，为 Vue 的运行时警告赋予一个自定义处理函数

### Vue.config.silent
是否 显示/隐藏，Vue 所有的日志与警告
``` js
// main.js
Vue.config.silent = false
```

### Vue.config.devtools
配置是否允许 vue-devtools 检查代码，
开发版本默认为 true，
生产版本默认为 false，
生产版本设为 true 可以启用检查

``` js
import Vue from 'vue'

// 务必在加载 Vue 之后，立即同步设置以下内容
Vue.config.devtools = true
```

### Vue.config.productionTip
2.2.0 新增，设置为 false 以阻止 vue 在启动时生成生产提示

``` js
Vue.config.productionTip = true
```

### Vue.config.performance
- [Performance](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance)
- 2.2.0 新增，自 2.3.0开始，默认值：false

设置为 true 以在浏览器开发工具的性能/时间线面板中启用对组件初始化、编译、渲染和打补丁的性能追踪，
只适用于开发模式和支持 performance.mark API 的浏览器上

``` js
Vue.config.performance = true
```

### Vue.config.ignoredElements
- 类型：Array<string | RegExp>

须使 Vue 忽略在 Vue 之外的自定义元素 (e.g. 使用了 Web Components APIs)，
否则，它会假设你忘记注册全局组件或者拼错了组件名称，从而抛出一个关于 Unknown custom element 的警告，
使用 RegExp 忽略符合规则的元素，仅 2.5+ 支持

``` js
Vue.config.ignoredElments = [
	'my-custom-component',
	'another-custom-component',
	// 使用 RegExp 忽略 所有 icon- 开头的元素，仅 2.5+ 支持
	/^icon-/
]
```

### Vue.config.keyCodes
- 类型：{ [key: string]: number | Array&lt;number&rt; }

给 v-on 自定义键位别名，自定义的别名，采用 烤肉串式（kebab-case）并引号括起来，驼峰式（camelCase）无效，

``` js
Vue.config.keyCodes = {
	up: [38, 87],
	f1: 112,
	'my-input-search': 13,
	// myInputSearch: 13 不规范的
}
```

``` html
<template>
	<div>
		<input type="text" placeholder="请输入搜索关键字" @keyup.my-input-search="handleSearch">
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			handleSearch(e) {
				alert('按下了回车键！')
			}
		}
	}
</script>
```

::: tip
- [vue valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)

使用 自定义键位别名，在项目使用 eslint 可能会出现报错，需要对 .eslintrc.js 的 rules 选项 进行修改
``` js
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-irregular-whitespace': 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'no-throw-literal': 'off',
    eqeqeq: 'off',
		// vue v-on:click 等 规则校验
		// 'vue/valid-v-on': 'off', // 关闭 vue v-on 的校验
		// 'vue/valid-v-on': ['warn'],
		'vue/valid-v-on': ['error', {
			modifiers: ['my-input-search'] // 具体的 自定义键名
		}]
  }
}
```
:::


### Vue.config.optionsMergeStrategies
- 类型：{ [key: string]: Function }
- [自定义选项合并策略](https://v2.cn.vuejs.org/v2/guide/mixins.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%E7%AD%96%E7%95%A5)

自定义合并策略的选项，合并策略选项分别接收在父实例和子实例上定义的该选项的值作为第一个和第二个参数，Vue 实例上下文被作为第三个参数传入

### Vue.config.errorHandler
指定组件的渲染和观察期间未捕获错误的处理函数。这个处理函数被调用时，可获取错误信息和 Vue 实例

- 从 2.2.0 起，这个钩子也会捕获组件生命周期钩子里的错误。同样的，当这个钩子是 undefined 时，被捕获的错误会通过 console.error 输出而避免应用崩溃
- 从 2.4.0 起，这个钩子也会捕获 Vue 自定义事件处理函数内部的错误了
- 从 2.6.0 起，这个钩子也会捕获 v-on DOM 监听器内部抛出的错误。另外，如果任何被覆盖的钩子或处理函数返回一个 Promise 链 (例如 async 函数)，则来自其 Promise 链的错误也会被处理

``` js
Vue.config.errorHandler = function (err, vm, info) {
	console.log(err)
	// info 是 Vue 特定的错误信息，比如错误所在的生命周期钩子，只在 2.2.0+ 可用
}
```

### Vue.config.warnHandler
2.4.0 新增，为 Vue的运行时警告赋予一个自定义处理函数，注意只会在开发环境下生效，生产环境下它会被忽略

``` js
Vue.config.warnHandler = function(msg, vm, trace) {
	console.log(msg)
	// trace 为组件的继承关系追踪
}
```




## 全局 Api

- [全局Api](https://v2.cn.vuejs.org/v2/api/#%E5%85%A8%E5%B1%80-API)

方法名称 | 参数 | 方法说明  
-|-|-
extend | options | 使用基础 Vue 构造器，创建一个“子类”，参数是一个包含组件选项的对象  
component | id, [definition] | 注册或获取全局组件。注册还会自动使用给定的 id 设置组件的名称
nextTick | [callback, context] | 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM 
set | target, propertyName/index, value | 向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新
delete | target, propertyName/index, value | 删除对象的 property，如果对象是响应式的，确保删除能触发更新视图
directive | id, [definition] | 注册全局自定义指令或获取全局指令
filter | id, [definition] | 注册或获取全局过滤器
use | plugin | 安装 Vue.js 插件。如果插件是一个对象，必须提供 install 方法。如果插件是一个函数，它会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入
mixin | options | 全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为
compile | template | 将一个模板字符串编译成 render 函数。只在完整版时可用
observable | object | 2.6.0 新增，让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象
version | string | 提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略

### Vue.extend(options)
组件构建器，使用基础 Vue 构造器，创建一个 “子类”，参数是一个包含 组件选项 的对象，
Vue.extend 方法就是 Vue 的一个用于继承组件的方法，通过 Vue.extend 方法继承引入的组件，继承后会返回一个vue子类，使用时实例化即可

- [详解Vue.component和Vue.extend](https://juejin.cn/post/6988086842000146440)
- [vue中使用Vue.extend方法仿写一个loading加载中效果](https://juejin.cn/post/7021724333391216677)
- [巧妙使用Vue.extend继承组件实现el-table双击可编辑](https://juejin.cn/post/7108542695387168799)
- [学完即用之Vue.extend+$mount改造dialog实践](https://juejin.cn/post/6959449865470345252)


基本使用
``` html
<div id='app2'></div>
```

``` js
const App2 = Vue.extend({
	template: `<p>{{ msg }}</p>`,
	data() {
		return {
			msg: '正在使用 Vue.extend'
		}
	}
})

new App2().$mount('#app2')
```

### 实现一个全屏加载提示
实现一个全屏加载提示，生成的组件加载到 vue 目标元素之外

- 在 src 目录下，新建 plugins 目录，并新建 fullLoading 目录，
- 在 fullLoading 目录下新建 fullLoading.vue 和 index.js

fullLoading/fullLoading.vue 文件
``` html
// src/plugins/fullLoading/fullLoading.vue
<template>
  <transition name="fade">
    <div class="full-loading-wrap" v-if="showFullLoading">
      <div class="full-loading">
        <div>{{ loadingText }}</div>
        <i class="el-icon-loading"></i>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'fullLoading',
  data() {
    return {
      showFullLoading: false
    }
  },
  props: {
    loadingText: {
      type: String,
      default() {
        return '正在加载...'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}
.full-loading-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
}
.full-loading {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
```

fullLoading/index.js 文件
``` js
// src/plugins/fullLoading/index.js
import FullLoadingTemp from './fullLoading.vue'

export default {
  install: (Vue) => {
    // 通过 Vue.extend 方法继承引入的组件，继承后会返回一个vue子类，使用时实例化即可
    const FullLoading = Vue.extend(FullLoadingTemp)

    const vm = new FullLoading()
    vm.$mount(document.createElement('div'))
    // 或者
    // const vm = new FullLoading(el: document.createElement('div'))
    // 挂载到一个空 div 上

    // 显示
    function showFullLoading(options) {
      for (const key in options) {
        vm[key] = options[key]
      }
      vm.showFullLoading = true
      document.body.appendChild(vm.$el)
    }
    // 隐藏
    function hideFullLoading() {
      vm.showFullLoading = false
    }
		// 原型挂载，其他地方方便使用
    Vue.prototype.$showFullLoading = showFullLoading
    Vue.prototype.$hideFullLoading = hideFullLoading
  }
}
```

页面使用 封装的 fullLoading
``` html
<template>
  <div>
    <h3>基于 Vue.extend 的全屏加载组件</h3>
    <div>
      <el-button @click="handleFullLoading">Vue.extend 加载中</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueApi',
  data () {
    return {}
  },
  methods: {
    handleFullLoading() {
      this.$showFullLoading('数据加载中...')
      setTimeout(() => {
        this.$hideFullLoading()
      }, 2000)
    }
  }
}
</script>
```


### Vue.component(id, [definition])

- [组件基础](https://v2.cn.vuejs.org/v2/guide/components.html)
- [深入了解组件](https://v2.cn.vuejs.org/v2/guide/components-registration.html)

组件注册器，注册或获取全局组件，注册还会自动使用给定的 id 设置组件的名称，更多说明请在 [vue 组件](./vue2-component) 查看

``` js
import MyComp from '@/components/MyComp.vue'

// 注册组件，传入一个扩展过的构造器
Vue.component('my-comp', Vue.extend(MyComp))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-comp', MyComp)

// 获取注册的组件，返回构造器
const MyCompVm = Vue.component(MyComp)
```

### Vue.nextTick([callback, context])

- [异步更新队列](https://v2.cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)

- 在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后立即使用这个方法，获取更新后的 DOM
- 在组件内使用 vm.$nextTick() 实例方法特别方便，因为它不需要全局 Vue，并且回调函数中的 this 将自动绑定到当前的 Vue 实例上

2.1.0 起新增：如果没有提供回调且在支持 Promise 的环境中，则返回一个 Promise。
请注意 Vue 不自带 Promise 的 polyfill，所以如果你的目标浏览器不原生支持 Promise (IE：你们都看我干嘛)，你得自己提供 polyfill

Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。
然后，在下一个的事件循环 “tick” 中，Vue 刷新队列并执行实际 (已去重的) 工作。
Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

例如，当你设置 vm.message = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。
多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。
虽然 Vue.js 通常鼓励开发人员使用 “数据驱动” 的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。
为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用

``` html
<template>
  <div>
    <el-button type="primary" @click="handleClick">Vue.nexttick</el-button>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'VueNexttick',
  data () {
    return {
      message: '开始的数据'
    }
  },
  methods: {
    handleClick() {
      this.message = '更新新的数据'
      console.log(this.$el.textContent) // 数据未发生变化
      this.$nextTick(() => {
				// 数据已变化
        console.log(this.$el.textContent)
      })
    }
  }
}
</script>
```


### Vue.set
- [深入响应式原理](https://v2.cn.vuejs.org/v2/guide/reactivity.html)

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。
它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.userinfo.username = 'sunsboyxu')
注意：对象不能是 Vue 实例，或者 Vue 实例的根数据对象

``` js
// 语法
Vue.set(target, propertyName/index, value)
```
#### 参数
- target - Object | Array
- propertyName/index - string | number
- value - any

### 案列分析一
有个动态的表单，v-model 字段后台控制，存在初始值的赋值

### Vue.delete

删除对象的 property。如果对象是响应式的，确保删除能触发更新视图。
这个方法主要用于避开 Vue 不能检测到 property 被删除的限制，但是你应该很少会使用它。
注意：目标对象不能是一个 Vue 实例或 Vue 实例的根数据对象

- 2.2.0+ 版本中 支持 Array + index 用法

在组件内可以使用 this.$delete(target, propertyName/index)

语法
``` js
Vue.delete(target, propertyName/index)
```
#### 参数
- target - Object | Array
- propertyName/index - string | number

``` html
<template>
  <div>
    <p v-for="item in info" :key="item">{{ item }}</p>
    <el-button @click="handleDelete">删除属性</el-button>
  </div>
</template>

<script>
export default {
  name: 'VueDelete',
  data () {
    return {
      info: {
        username: 'sunsboyxu',
        country: 'China',
        position: '前端'
      }
    }
  },
  beforeUpdate() {
    console.log('update--')
  },
  methods: {
    handleDelete() {
      this.$delete(this.info, 'position')
    }
  }
}
</script>
```


### Vue.directive(id, [definition])
- [自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html)
注册全局自定义指令或获取全局指令，[本博客的自定义指令记录](./vue-skills.md)，
当参数 [definition] 为 函数试时，bind 和 update 钩子函数会触发，
假如在注册自定义时定义的 id 为 focus，那么在 模板中使用该自定义指令格式 v-focus，
注意，在自定义指令中 this 是 undefined，可以通过 vnode 的 context 上下文来访问 $data 数据

#### 语法
``` js
Vue.directive(id, [definition])
```

#### 参数
- id { string }
- [definition] { Function | Object }

``` js
// 对象形式
Vue.directive('focus', {
	bind: (el, bingding, vnode, oldVnode) { },
	inserted: (el, bingding, vnode) { 
		el.focus()
	},
	update: (el, bingding, vnode) { },
	componentUpdated: (el, bingding, vnode) { },
	unbind: (el, bingding, vnode) { },
})

// 函数形式
Vue.directive('focus', (el, binding, vnode) => {
	el.focus()
})
```

``` html
<template>
	<div>
		<input placeholder='请输入用户名' v-focus>	
	</div>
</template>
```


#### 自定义指令的 钩子函数
一个自定义指令定义对象可以提供如下几个钩子函数 (均为可选)
- bind: 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置
- inserted: 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
- update: 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
- componentUpdated: 指令所在组件的 VNode 及其子 VNode 全部更新后调用
- unbind: 只调用一次，指令与元素解绑时调用

``` js
Vue.directive('focus', {
	// 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置
	bind: (el, binding, vnode) {
		console.log('bind')
	},
	// 被绑定元素插入父节点时调用
	inserted: (el, binding, vnode) => {
		console.log('inserted')
	},
	// 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
	update: (el, binding, vnode) => {
		console.log('update')
	},
	// 指令所在组件的 VNode 及其子 VNode 全部更新后调用
	componentUpdated: (el, binding, vnode) => {
		console.log('componentUpdated')
	},
	// 只调用一次，指令与元素解绑时调用
	unbind: (el, binding, vnode) => {
		console.log('unbind')
	}
})
```

``` js
// [definition] 函数
Vue.directive('focus', (el, binding, vnode) => {
	el.focus()
	// bind: (el, binding, vnode) { }
	// update: (el, binding, vnode) { }
})
```

#### 自定义指令 钩子函数的参数
自定义指令 钩子函数 会被传入以下参数
- el: 指令所绑定的元素，可以用来直接操作 DOM
- binding: 一个对象，包含以下 property:
	- name: 指令名，不包括 v- 前缀
	- rawName: 指令名，包括 v- 前缀
	- value: 指令的绑定值，例如：v-focus="2" 中，绑定值为 2
	- oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用
	- experssion: 字符串形式的指令表达式，例如 v-focus="1 + 1" 中，表达式为 "1 + 1"
	- arg: 传给指令的参数，可选。例如 v-focus:top='1+1' 中，参数为 'top'
	- modifiers: 一个包含修饰符的对象，可选。例如 v-focus:top.up.down='1+1' 中，修饰符对象为 { foo: true, bar: true }
- vnode: Vue 编译生成的虚拟节点
- oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用

除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行，arg 和 modifiers 写法上也需要稍微的注意

``` js
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
			'rawName: '    + s(binding.rawName) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})
```

``` html
<template>
	<div v-demo:foo.a.b="message"></div>
</template>

<script>
export default {
	data() {
		return {
			message: 'hello directive!!!'
		}
	}
}
</script>
```

#### 全局自定义指令 统一管理

在 src 目录下建立 plugins 目录，plugins 目录下新建 directives 目录，并在 directives 目录 下新建 index.js

``` js
// src/plugins/directives/index.js
// 定义自定义集合
const directivesObj = {
	// 自动获取焦点
  focus: {
    // 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次初始化设置
    bind: (el, binding, vnode, oldVnode) => {
      console.log('自定义指令 focus bind--')
      console.log('bind-el', el)
      console.log('bind-binding', binding)
      console.log('bind-vnode', vnode)
    },
    // 被绑定元素插入父节点时
    inserted: (el, binding, vnode, oldVnode) => {
      console.log('自定义指令 focus inserted--')
      console.log('bind-el', el)
      console.log('bind-binding', binding)
      console.log('bind-vnode', vnode)
			el.focus()
    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
    update: (el, binding, vnode, oldVnode) => {
      console.log('自定义指令 focus update--')
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated: (el, binding, vnode, oldVnode) => {
      console.log('自定义指令 focus componentUpdated--')
    },
    // 只调用一次，指令与元素解绑时调用
    unbind: (el, binding, vnode, oldVnode) => {
      console.log('自定义指令 focus unbind--')
    }
  }
}

// 导出 自定义插件
export default {
  install: Vue => {
    Object.keys(directivesObj).forEach(key => {
      Vue.directive(key, directivesObj[key])
    })
  }
}
```

#### 项目使用自定义指令一
使用 element-ui 表单组件，并且将 el-input 的展现形式，修改成 Material Design 风格，通过 css :placeholder-shown 属性 来控制 label 的显示和隐藏

``` js
// src/plugins/directives/index.js
// 定义自定义集合
const directivesObj = {
	// 自动获取焦点
  focus: {
    // 被绑定元素插入父节点时
    inserted: (el, binding, vnode, oldVnode) => {
			el.focus()
    }
  },
	'label-material': {
		bind: (el, binding, vnode, oldVnode) => {
			// 获取 指令传递的数据
			const props = binding.value

			// 根据 传给指令的参数 定义类型
			const type = binding.arg ? binding.arg : 'input'

			// 动态创建 要插入的元素 label 元素
			const label = document.createElement('label')
			label.className = 'isc-label'
			label.innerHTML = `${props.labelText}${props.required ? '<span class="isc-label-required">*</span>' : ''}`

			// 插入 label 元素
			switch (type) {
				case 'input':
					el.append(label)
					break
				case 'select':
					el.childNodes[1].insertBefore(label, el.childNodes[1].childNodes[3])
					break
			}

			// 查看 el-input 自定义指令绑定的元素
			// <div data-v-13fa088b="" class="isc-input el-input">
			//   <!---->
			//   <input type="text" autocomplete="off" placeholder="请输入用户名" class="el-input__inner">
			//   <!---->
			//   <!---->
			//   <!---->
			//   <!---->
			// </div>
			// 通过 css :placeholder-shown 属性 来控制 label 的显示和隐藏	
		}
	}
}

// 导出 自定义插件
export default {
  install: Vue => {
    Object.keys(directivesObj).forEach(key => {
      Vue.directive(key, directivesObj[key])
    })
  }
}
```

页面使用
``` html
<template>
	<div>
		<el-form ref="refForm" class="isc-form" :model="formModel" :rules="formRules">
			<el-form-item class="isc-hide-error" prop="username">
				<el-input
					class="isc-input"
					v-model="formModel.username"
					v-label-material="{ labelText: '用户姓名', required: true }"
					placeholder="请输入用户名"
				></el-input>
			</el-form-item>
			<el-form-item class="isc-hide-error" prop="test">
				<el-input
					class="isc-input"
					v-model="formModel.test"
					v-label-material="{
						labelText: '测试内容禁止填写',
						required: false,
					}"
					placeholder="请输入测试内容"
					disabled
				></el-input>
			</el-form-item>
			<el-form-item class="isc-hide-error" prop="mobile">
				<el-input
					class="isc-input"
					v-model="formModel.mobile"
					v-label-material="{ labelText: '手机号码', required: true }"
					placeholder="请输入手机号码"
				></el-input>
			</el-form-item>
			<el-form-item class="isc-hide-error" prop="area">
				<el-select
					class="isc-select"
					v-mode="formModel.area"
					style="width: 100%"
					v-label-material:select="{ labelText: '所在地区', required: true }"
					placeholder="请选择所在地区"
				>
					<el-option label="所在地区一" value="1"></el-option>
					<el-option label="所在地区二" value="3"></el-option>
					<el-option label="所在地区三" value="4"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item class="isc-hide-error" prop="remark">
				<el-input
					class="isc-input"
					type="textarea"
					:rows="6"
					v-model="formModel.remark"
					v-label-material="{ labelText: '您宝贵的意见', required: true }"
					placeholder="请输入您宝贵的意见！"
				></el-input>
			</el-form-item>
		</el-form>
		<el-row type="flex" justify="center">
			<el-button type="primary" style="margin-top: 40px" @click="handleSubmit">立即提交</el-button>
		</el-row>
	</div>
</template>

<script>
	export default {
	  name: 'VueDirective',
	  data() {
	    return {
	      formModel: {
	        username: '',
	        mobile: '',
	        area: '',
	        remark: '',
	        test: '我是默认的测试数据'
	      },
	      formRules: {
	        username: [{ required: true, message: '用户名必填' }],
	        mobile: [{ required: true, message: '手机号码必填' }],
	        area: [{ required: true, message: '手机号码必填' }],
	        remark: [{ required: true, message: '您宝贵的意见' }]
	      }
	    }
	  },
	  methods: {
			// 点击校验表单
	    handleSubmit() {
	      this.$refs.refForm.validate(valid => {
	        if (valid) {
	          console.log(666)
	        }
	      })
	    }
	  }
	}
</script>
```

样式在，在 src/styles 下，新建了一个 reset-element.scss

``` css
// src/styles/reset-element.scss
$color: #c0c4cc;
$error-color: #f56c6c;
$theme-color: #409eff;

.el-form-item {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  .el-form-item__content {
    line-height: 22px;
    font-size: 12px;
  }
  .el-input__inner {
    border-radius: 0;
    height: 36px;
    line-height: 36px;
    transition: none;
    color: $color;
    &::placeholder {
      font-size: 12px;
    }
  }
  .el-textarea__inner {
    border-radius: 0;
    transition: none;
    color: $color;
    padding-top: 12px;
    &::placeholder {
      font-size: 12px;
    }
  }

  .isc-input {
    &.is-disabled {
      .el-input__inner, .el-textarea__inner,.isc-label{
        background: #fff;
      }
    }
    .el-input__inner:placeholder-shown::placeholder,
    .el-textarea__inner:placeholder-shown::placeholder {
      color: transparent;
    }
    .el-input__inner:not(:placeholder-shown) + .isc-label, 
    .el-textarea__inner:not(:placeholder-shown) + .isc-label,
    .el-input__inner:focus + .isc-label,
    .el-textarea__inner:focus + .isc-label {
      color: $theme-color;
      transform: translate(0, -17px);
      font-size: 12px;
      padding: 0 5px;
    }
    .el-input__inner:focus::placeholder,
    .el-textarea__inner:focus::placeholder {
      color: $color;
    }
    .el-input__inner:not(:placeholder-shown)[disabled] + .isc-label,
    .el-textarea__inner:not(:placeholder-shown)[disabled] + .isc-label {
      background: #fff;
      color: $color;
    }
  }

  .isc-select {
    width: 100%;
    .is-focus, &.isc-selected {
      .isc-label {
        color: $theme-color;
        transform: translate(0, -17px);
        font-size: 12px;
        padding: 0 5px;
      }
    }
    .is-disabled {
      .isc-label {
        color: $color;
      }
      .el-input__inner {
        background: #fff;
      }
    }
    .el-input {
      .el-input__inner:placeholder-shown::placeholder {
        color: transparent;
      }
      &.is-focus {
        color: $color;
        .el-input__inner:placeholder-shown::placeholder {
          color: $color;
        }
      }
    }
  }

  // 校验错误时
  &.is-error {
    .isc-input, .isc-select {
      .el-input__inner + .isc-label,
      .el-input__inner:not(:placeholder-shown) + .isc-label,
      .el-input__inner:focus + .isc-label,
      .el-textarea__inner + .isc-label,
      .el-textarea__inner:not(:placeholder-shown) + .isc-label,
      .el-textarea__inner:focus + .isc-label {
        color: $error-color;
        transform: translate(0, -17px);
        font-size: 12px;
        padding: 0 5px;
      }
      .el-input__inner:placeholder-shown::placeholder,
      .el-textarea__inner:placeholder-shown::placeholder {
        color: $color;
      }
    }
    .isc-select {
      .el-input {
        .el-input__inner:placeholder-shown::placeholder {
          color: $color;
        }
      }
    }
  }

  // 隐藏默认的错误显示
  &.isc-hide-error {
    .el-form-item__error {
      display: none;
    }
  }

  // label 默认样式
  .isc-label {
    width: max-content;
    position: absolute;
    top: 8px;
    left: 15px;
    // 让元素点击 可穿透
    pointer-events: none;
    height: 20px;
    background: #fff;
    line-height: 20px;
    font-size: 13px;
    color: $color;
    display: flex;
    align-items: center;
    transition: all 0.1s ease-in;
    span {
      color: $error-color;
      margin-left: 5px;
      padding-top: 8px;
      font-size: 16px;
    }
  }
}
```

在 main.js 引入 directive 和 样式

``` js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/reset-element.scss'

// Vue.directive
import directives from '@/plugins/directives'

Vue.use(directives)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
````

#### 分析
Vue.directive('focus', { ... })，代码执行时，会调用 Vue 中的 函数 function initAssetRegisters(Vue) {},
在 浏览器中，打开控制面板(F12)，找到 Vue.directive('focus', { ... }) ，打上断点，重新刷新页面，当断点打成功时，
按 F9 让程序往下执行，Vue 处理 全局注册定义指令 调用的是，函数 initAssetRegisters(Vue)，由此联想，如：Vue.component(id, [definition])、
Vue.directive(id, [definition])、Vue.filter(id, [definition])，该 3个 全局 api 都是通过 initAssetRegisters 方法来处理初始化

函数 initAssetRegisters(Vue)

``` js
function initAssetRegisters(Vue) {
    /**
     * Create asset registration methods.
     */
    ASSET_TYPES.forEach(function (type) {
        // @ts-expect-error function is not exact same type
        Vue[type] = function (id, definition) {
            if (!definition) {
                return this.options[type + 's'][id];
            }
            else {
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'production' && type === 'component') {
                    validateComponentName(id);
                }
                if (type === 'component' && isPlainObject(definition)) {
                    // @ts-expect-error
                    definition.name = definition.name || id;
                    definition = this.options._base.extend(definition);
                }
                if (type === 'directive' && isFunction(definition)) {
                    definition = { bind: definition, update: definition };
                }
                this.options[type + 's'][id] = definition;
                return definition;
            }
        };
    });
}
```

用 鼠标去 hover ASSET_TYPES 时，发现 ASSET_TYPES，['component', 'directive', 'filter']，type 为 directive 时，会判断 参数 [definition] 是否 是 函数，
isFunciton(definition)，如果 isFunction(definition) 为 true,将 definition 赋为 对象，对象上添加 2个 钩子函数，definition = { bind: definition, update: definition }
bind 和 update 钩子，执行的传递进来的函数，如果 [definition] 为 对象，就直接使用 传递进来的对象，最终 initAssetRegisters 函数 会在 Vue 的原型 和 options 上挂载，全局注册的 directive

``` js
<script>
	// 打印 查看 Prototype
	export default {
		mounted() {
			console.log(this.$options, '$options--')
		}
	}
</script>
```




### Vue.filter
- [过滤器](https://v2.cn.vuejs.org/v2/guide/filters.html)

参数
- id { string }
- [definition] { Function | Object }

自定义过滤器说明
``` html
- Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化
- 过滤器应该被添加在 JavaScript 表达式的尾部，由 “管道” | 符号 指示
- 过滤器可以用在两个地方：双花括号插值 和 v-bind 表达式 (从 2.1.0+ 开始支持)
- 过滤器可以串联，如：{{ totalPrice | fomatPrice1 | formatPrice2 }}
- 过滤器函数总接收表达式的值 (之前的操作链的结果) 作为第一个参数
- 过滤器是 JavaScript 函数，因此可以接收参数，如：{{ totalPrice | formatPrice(userinfo) }}，第一个参数为表达式的值，后面的为自定义参数
- 当全局过滤器和局部过滤器重名时，会采用局部过滤器
```

语法
``` js
Vue.filter(id, [definition])
Vue.filter('formatPrice', function(val) {
	console.log(val)
	return '￥ ' + val + ' 元'
}) 
```

页面使用 过滤器
``` js
<!-- 在双花括号中 -->
<div>{{ totalPrice | formatDate }}</div>

<!-- 在 `v-bind` 中 -->
<div v-bind:totalPrice="totalPrice | formatPrice"></div>
```
### 过滤器的统一管理
将项目中需要使用的全局过滤器，统一存放，并一次性自动的注册过滤器，方便代码的维护或拓展
在项目 src 目录下建立 plugins 目录，plugins 目录下新建 filters 目录，并在 filters 目录 下新建 index.js

全局过滤器集
``` js
// src/plugins/filters/index.js
import moment from 'moment'

// 价格格式化
export const fomatPrice = val => '￥ ' + val + '元'

// 时间格式化
export const formatDate = val => {
	const date = new Date(val)
	const y = date.getFullYear()
	const m = date.getMonth() + 1
	const d = date.getDate()
	return `${y}年${m}月${d}日`
}

// 配合 momentjs 进行时间格式化
export const formatDate2 = (val, format='YYYY-MM-dd hh:mm:sss') => {
	return moment(new Date(val).format(format))
}
```

``` js
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/reset-element.scss'

import * as filters from '@/plugins/filters'

Object.keys(filters).forEach(filterId => {
	Vue.filter(filterId, filters[filterId])
})

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```


### Vue.use
参数
- {Object | Function} plugin

- 安装 Vue.js 插件
- 如果插件是一个对象，必须提供 install 方法，将 Vue 作为参数传入
- 如果插件是一个函数，它会被作为 install 方法，install 方法调用时，会将 Vue 作为参数传入
- 该 install 方法需要在调用 new Vue() 之前被调用
- 当 install 方法被同一个插件多次调用，插件将只会被安装一次

像 element-ui、vue-router、vuex 都是以插件形式进行安装

``` js
// 插件 myPlugin 的编写
// src/plugins/myPlugin.js
export default {
	install: (Vue) => {
		console.log(Vue, 'vue')
		console.log('安装我的插件')
	}
}
```

``` js
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/reset-element.scss'

// 引入 myPlugin 插件
import MyPlugin from './plugins/myPlugin'

// 安装 myPlugin 插件
Vue.use(MyPlugin)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
```

### Vue.mixin

- [全局混入](https://v2.cn.vuejs.org/v2/api/?#Vue-mixin)

参数
- {Object}  mixin

全局注册一个混入，使用时格外小心！一旦使用全局混入，它将影响每一个之后创建的 Vue 实例。
插件作者可以使用混入，向组件注入自定义的行为。使用恰当时，这可以用来为自定义选项注入处理逻辑。
请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。
大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为插件发布，以避免重复应用混入

``` js
Vue.mixin({
	created() {
		const mixinOptions = this.$options.mixinOptions
		if(mixinOptions) {
			console.log('mixinOptions', mixinOptions)
		}
	}
})

new Vue({
	mixinOptions: {
		currentTime: +new Date(),
		username: 'sunsboyxu'
	}
})
```

如：vue-router 使用 Vue.use 和 Vue.mixin 使用 路由插件的编写

简单版，vue-router 路由插件的实现

``` js
// 简单版，vue-router 路由插件的实现

class HistoryRoute {
  constructor() {
    this.current = null
  }
}

class vueRouter {
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    // 传递的路由表是数组 需要装换成{'/home':Home,'/about',About}格式
    this.routesMap = this.createMap(this.routes)
    // 路由中需要存放当前的路径  需要状态
    this.history = new HistoryRoute()

    this.init()// 开始初始化操作
  }

  init() {
    if (this.mode === 'hash') {
      // 先判断用户打开时有没有hash，没有就跳转到#/
      // eslint-disable-next-line no-unused-expressions
      location.hash ? '' : location.hash = '/'
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      // eslint-disable-next-line no-unused-expressions
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }

  createMap(routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.component
      return memo
    }, {})
  }
}

// 使用vue.use就会调用install方法
vueRouter.install = function(Vue, opts) {
  if (vueRouter.install.installed) return
  vueRouter.install.installed = true

  // 每个组件都有 this.$router / this.$route 所以要mixin一下
  Vue.mixin({
    beforeCreate() { // 混合方法
      if (this.$options && this.$options.router) { // 定位跟组件
        this._root = this// 把当前实例挂载在_root上
        this._router = this.$options.router // 把router实例挂载在_router上
        // history中的current变化也会触发
        Vue.util.defineReactive(this, 'current', this._router.history)
      } else {
        // vue组件的渲染顺序  父 -> 子 -> 孙子

        this._root = this.$parent._root
        // 获取唯一的路由实例
      }
      Object.defineProperty(this, '$router', { // Router的实例
        get() {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get() {
          return {
            // 当前路由所在的状态
            current: this._root._router.history.current
          }
        }
      })
    }
  })
  // 全局注册 router的两个组件

  Vue.component('router-view', { // 根据当前的状态 current 对应相应的路由
    render(h) {
      // 将current变成动态的 current变化应该会影响视图刷新
      // vue实现双向绑定 重写Object.defineProperty
      const current = this._self._root._router.history.current
      console.log(current)
      const routeMap = this._self._root._router.routesMap
      return h(routeMap[current])
    }
  })
}

export default vueRouter
```


### Vue.compile

- [渲染函数 & JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html)
- [Vue Compile原理分析](https://blog.csdn.net/lznism666/article/details/108738936)
- [Vue.compile概述](https://www.cnblogs.com/dhsz/p/7685056.html)

参数
- {Object} template

将一个模板字符串编译成 render 函数。只在完整版时可用。
并不是所有Vue.js的构建版本都存在Vue.compile方法。
与vm.$mount类似，Vue.compile 方法只存在于完整版中(只有完整版包含编译器)

假设有个组件展示不同的 h1 到 h6 标签

常规操作，定义一个，如：h1-h6-title.vue 组件

``` html
// src/components/h1-h6-title.vue
<template>
  <div class="h-title">
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
  </div>
</template>

<script>
export default {
  name: 'h-title',
  props: {
    level: {
      type: Number,
      default() {
        return 1
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

```

页面使用该组件
``` html
<template>
	<div class='container'>
		<h1-h6-title :level='1'>Vue.compile-h1</h1-h6-title>
	</div>
</template>

<script>
	import H1H6Title from '@/components/h1-h6-title.vue'
	export default {
		components: {
			H1H6Title
		}
	}
</script>
```

使用 render 函数重写上面的例子
``` html
<template>
  <div>
    <h1-h6-title :level="1">VueCompile1</h1-h6-title>
    <h1-h6-title2 :level="2">VueCompile2</h1-h6-title2>
    <h1-h6-title3 :level="3">VueCompile3</h1-h6-title3>
  </div>
</template>

<script>
import h1H6Title from '@/components/h1-h6-title.vue'
import h1H6Title3 from '@/components/h1-h6-title3.vue'
export default {
  name: 'VueCompile',
  components: {
    h1H6Title,
    //
    h1H6Title2: {
      // render: function(createElement) {
      //   return createElement('h' + this.level, this.$slots.default)
      // },
      render: function(h) {
        return h(`h${this.level}`, this.$slots.default)
      },
      props: {
        level: {
          type: Number,
          default() {
            return 1
          }
        }
      }
    },
    h1H6Title3
  }
}
</script>

<style lang='scss' scoped>

</style>
```

h1H6Title3 是将 h1H6Title2 代码单独抽离放到了 src/components/h1-h3-title.vue 中

``` html
// src/components/h1-h3-title.vue
<script>
export default {
	render: function(h) {
		return h(`h${this.level}`, this.$slots.default)
	},
	props: {
		level: {
			type: Number,
			default() {
				return 1
			}
		}
	}
}
</script>
```

### Vue.observable

- [数据与方法](https://v2.cn.vuejs.org/v2/guide/instance.html#%E6%95%B0%E6%8D%AE%E4%B8%8E%E6%96%B9%E6%B3%95)
- [深入响应式原理](https://v2.cn.vuejs.org/v2/guide/reactivity.html)

参数
- {Object} object

2.6.0 新增！！！，让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象，
返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器

在 Vue 2.x 中，被传入的对象会直接被 Vue.observable 变更，所以如这里展示的，它和被返回的对象是同一个对象。
在 Vue 3.x 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的。
因此，为了向前兼容，我们推荐始终操作使用 Vue.observable 返回的对象，而不是传入源对象

``` js
// src/main.js
const myState = Vue.observable({
	count: 0
})
Vue.prototype.$myState = myState
```

页面使用

``` html
<template>
  <div>
    <h3>VueObservable</h3>
    <div>购物车数量：{{ $myState.count }}</div>
    <!-- <div>购物车数量：{{ count }}</div> -->
    <div>
      <el-button @click="hanldeTap">点击加入购物车</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueObservable',
  // computed: {
  //   count() {
  //     return this.$myState.count
  //   }
  // },
  methods: {
    hanldeTap() {
      console.log(this.$myState)
      this.$myState.count++
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
```




### Vue.version
提供字符串形式的 Vue 安装版本号。这对社区的插件和组件来说非常有用，你可以根据不同的版本号采取不同的策略
