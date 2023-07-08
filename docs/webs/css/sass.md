# sass

- [sass用法指南](https://www.jianshu.com/p/62acbb3a76ac)

## 渐变色

``` css
$theme-color: red;

@mixin linear-gradient-right {
  background: linear-gradient(to right, $theme-color, blue);
}

@mixin linear-gradient($direction: (to right), $colors: ($theme-color, blue)) {
  background: linear-gradient($direction, $colors);
}

```
