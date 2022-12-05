# css文档

[](https://www.jq22.com/)

## filter 属性

- [filter属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

## pointer-event: none 妙用

- 让定位的元素可点击，实现点击穿透
- 解决鼠标经过闪烁问题，添加上该属性的元素，在页面上不会有任何的鼠标事件，只能看得见，不能进行任何的操作

## :placeholder-shown

- [:placeholder-shown](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:placeholder-shown)
- [:placeholder-shown伪类实现 Material Design占位符交互效果](https://www.zhangxinxu.com/wordpress/2018/12/css-placeholder-shown-material-design)
- [实现占位符过渡效果实例页面](https://www.zhangxinxu.com/study/201812/placeholder-shown-label-transition-demo.php)
- [placeholder-shown伪类实现Material Design占位符交互效果](https://blog.csdn.net/llll789789/article/details/96480439)
- [又一个布局利器， CSS 伪类 :placeholder-shown](https://blog.csdn.net/qq449245884/article/details/107559711)

:placeholder-shown 英文翻译为：占位符显示，在 input 或者 textarea 元素显示 placeholder text（占位符文本）时生效

## table 修改边框线

``` html
<table border='1px solid #333' cellspacing='0' cellpadding='0'></table>
```

``` css
table {
 border-collapse: collapse;
}
table {
 tr {
  td {
   border: 1px solid #333;
  }
 }
}
```

## css3 动画

[波形动画1](https://www.jq22.com/code823)
[波形动画2](https://www.jq22.com/code823)

### 边框动画

- [CSS 奇思妙想边框动画](https://cloud.tencent.com/developer/article/1776550?from=15425)
