# 数组

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