# 数组

## 判断数组

```js
// 定义
export const isArray = (arr) => {
  if (Array.isArray) {
    return Array.isArray(arr)
  } else {
    return Object.prototype.toString.call(arr) === '[object Array]'
  }
}

// 使用
import { isArray } from '定义该方法的地方'
const arr = [1,2,3]
console.log(isArray(arr))
```

## 数组去重

``` js
// Set 结合 Array.from 进行去重
const arr = ['a', 'b', 'c', 'd', 'a', 'b']
const newArr = Array.from(new Set(arr))
```

``` js
// filter 进行去重复
const arr = ['a', 'b', 'c', 'd', 'a', 'b']
const newArr = arr.filter((item, index, selfArr) => selfArr.indexOf(item) === index)
```
