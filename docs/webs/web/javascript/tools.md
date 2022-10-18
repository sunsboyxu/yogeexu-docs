# js工具

## 数字转中文数字

``` js
export function numberTozh(val) {
 const zhArray = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
 const baseArray = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万']
 let string = String(val).split('').reverse().map((item, index) => {
  item = Number(item) == 0 ? zhArray[Number(item)] : zhArray[Number(item)] + baseArray[index]
  return item
 }).reverse().join('')
 // 以 一十 开头，可省略一
 string = string.replace(/^一十/, '十')
 // 多位相邻的零，只写一个即可 
 string = string.replace(/零+/, '零')
 return string
}
```
