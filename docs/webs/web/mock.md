# mock 数据
const mock = require('mockjs')
const Random = mock.Random

[Mock 示例](http://mockjs.com/examples.html)

const data = Mock.mock('/路径/', '方法(Get/Post)', { 数据 })

//启动mock，timeout表示模拟的请求延迟
Mock.setup({
  timeout: 0-500,
})

## 1、数据模板定义
Mock.mock({
	'属性名|规则': '属性值'
	'name|rule': 'value'
})

## 2、数据占位符定义
- 占位符只是在属性值字符串中占个位置，并不出现在最终的属性值中
- 用 @ 来标识其后的字符串是占位符，占位符之间空格隔开
- 占位符是 Mock.Random 中的方法
- 使用 Mock.Random.extend() 扩展占位符
- 占位符 也可以引用 数据模板 中的属性，并且优先使用
- 属性值可以是一个函数，用来细致模拟数据
- 可以使用正则规定数据格式

可以在一个 {} 规划一个模板中，在同一个模板中可以使用模板的属性来占位，如：

``` js
// 模拟 属性名为 contents 的数据，1-20 表示随机 1-20 条数数据
const Mock = require('mockjs')
const Random = Mock.Random
const data = Mock.mock({
	'contents|1-20': [{
		'id|+1': 0,
		courseType: '音乐课',
		courseName() {
			retrun this.courseType + ' '+ Random.natural(1, 10) + '班' 
		},
		teacher: '@cname',
		place: '@courseType 第 @id 教室',
		studenId: /\d{10}/,
		studenName: '@cname',
		classTime: '@date("yyyy-MM-dd HH:mm:ss")'
	}]
})
return data
```

### 常用占位符
'@bool' // 布尔值，可以传入参数设置频率
'@string' // 随机字符串
'@date("yyyy-MM-dd HH:mm:ss")' // 返回日期
'@image("200x200")' // 模拟图片
'@name' // 英文名
'@cnmae' // 中文名
'@url'
'@email'

- 在同一个 { }，可以使用 { } 中属性作为占位符 


# 使用服务端 mock 数据

# 相关教程
[mockjs + json-server 模拟后台数据](https://blog.csdn.net/mjzhang1993/article/details/78532909)
[在vue-cli3中使用mockjs模拟数据](https://blog.csdn.net/lvchunfei123/article/details/109047730)
[在vue项目中使用mockjs模拟接口数据](https://blog.csdn.net/weixin_44227395/article/details/104842184)
[Vue 中使用Mock.js生成模拟数据](https://blog.csdn.net/qq_17492249/article/details/98401566)
[改造vue-cli,使用mockjs搭建mock server](https://juejin.cn/post/6844903590046203918)

