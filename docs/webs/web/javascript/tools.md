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

## 判断是否 ie、edge

``` js
export function ieVersion() {
  var userAgent = navigator.userAgent
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 //判断 是否 ie<11 浏览器 
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE //判断 是否 ie 的 edge
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1 // 判断 是否 ie 11
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);").test(userAgent)
    var fIEVersion = parseFloat(RegExp["$1"])
    switch (fIEVersion) {
      case 7:
        return 7
      case 8:
        return 8
      case 9:
        return 9
      case 10:
        return 10
      default: // ie < 7
        return 6   
    }
  } else if(isEdge) {
      return 'edge'
  } else if(isIE11) {
      return 11  
  } else {
      return -1
  }
}
```
