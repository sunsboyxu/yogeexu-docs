# vue 开发技巧
## require.context

## 过滤器 - filter
- [过滤器](https://v2.cn.vuejs.org/v2/guide/filters.html)

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

### 全局过滤器
通过使用 Vue.filter(id, [definition])，注册全局过滤器 ，[Vue.filter说明](./vue2-api)

### 局部过滤器
可在组件选项中，使用 filters 选项，注册局部过滤器，仅对当前组件生效

``` js
export default {
	data() {
		return {
			userinfo: {
				username: 'sunsboyxu',
				country: 'China'
			},
			totalPrice: 100
		}
	},
	// 局部过滤器
	filters: {
		fomatPrice: val => {
      return '￥ ' + val + ' 元'
    }
	}
}
```

### 全局过滤器的统一管理





## 自定义指令 - directive
- [自定义指令](https://v2.cn.vuejs.org/v2/guide/custom-directive.html)

除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。
注意，在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令

### 全局自定义指令
### 局部自定义指令


## 自定义组件 v-model
[自定义组件的 v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)

## vue刷新当前页面
[vue刷新当前页面的三种方法](https://www.jianshu.com/p/139fedc59f0d)

## 使用 var函数 动态修改 css 样式
``` html
<template>
  <div id="app" :style="subStyle">
    <router-view/>
  </div>
</template>
```

``` js
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      subColor: 'config/subColor'
    }),
    subStyle() {
      return {
        '--isc-sub-color': this.subColor,
        '--swiper-theme-color': this.subColor
      }
    }
  }
}
</script>
```

``` css
<style lang="less">
@import './style/app.less';
#app {
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  padding-top: 60px;
	background: var(--isc-sub-color);
}

</style>
```