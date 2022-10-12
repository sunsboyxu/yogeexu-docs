# 正则

## 提取文件名
通过 require.context() 自动注册组件，通过正则来获取组件的名称

``` js
const requireComponents = require.context('@/components/global', false, /\.vue$/)
export default {
	install: function(Vue) {
		requireComponents.keys().forEach(key => {
			const compName = key.replace(/\.|\/|.vue/g, '')
			Vue.component(compName, requireComponents(key).default || requireComponents(key))
		})
	}
}
```

### 常用正则

``` js
// 是否是中文
/^[\u4e00-\u9fa5]+$/
```
