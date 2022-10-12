# vue 组件

## 1 组件注册
### 1-1 全局组件
``` js
// main.js
import IscTop from '@/components/isc-top.vue'
Vue.component('isc-top', IscTop)
```

## 1-2 局部组件
``` js
// Home.vue
<template>
	<div>
		<isc-top></isc-top>
		<isc-layout></isc-layout>	
	</div>
</template>
import IscLayout from '@/components/isc-layout.vue'
export default {
	name: 'Home',
	components: {
		IscLayout
	}
}
```

### 1-3 基础组件的自动化全局注册
::: tip
可能你的许多组件只是包裹了一个输入框或按钮之类的元素，是相对通用的。
我们有时候会把它们称为基础组件，它们会在各个组件中被频繁的用到，会导致很多组件里都会有一个包含基础组件的长列表
:::

在项目 /src/components/global,建立了 3个组件 isc-top.vue | isc-layout.vue | isc-foot.vue

#### 组件引入方式使用
``` html
<template>
	<div>
		<isc-top></isc-top>
		<isc-layout></isc-layout>
		<isc-foot></isc-foot>
	</div>
</template>

<script>
	import IscTop from '@/components/isc-top'
	import IscLayout from '@/components/isc-layout'
	import IscFoot from '@/components/isc-foot'
	export default {
		name: 'App',
		components: {
			IscTop,
			IscLayout,
			IscFoot
		}
	}
</script>
```

#### 使用 require.context() 全局自动导入
在项目 /src/plugins/setupComps.js

``` js
const requireComponents = require('../')
```

[自动导入文件名替换示例](https://github.com/bencodezen/vue-enterprise-boilerplate/blob/main/src/components/_globals.js)


## 自定义组件 v-model

在组件上使用 v-model, 自定义事件也可以用于创建支持 v-model 的自定义输入组件
``` html
<template>
  <div>
    <div class="form-item">
      <input type="text" v-model="username">
    </div>
    <p>等价于</p>
    <div class="form-item">
      <input type="text" :value="username" @input="username=$event.target.value">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Vmodel1',
  data () {
    return {
      username: ''
    }
  }
}
</script>
```
### 1 自定义组件 v-model，子组件不做特殊处理
上面发现自定义组件，在父级页面中
``` html
// 父级页面

```

## 插槽 v-slot
[vue 插槽的使用、分类](https://www.jianshu.com/p/e51c3ea4dcf8)

## keep-alive
[](https://www.jianshu.com/p/d2699f368c07)