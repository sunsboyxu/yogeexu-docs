# 文件下载

## a 链接下载文件

[a标签详解](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)
download 属性有跨域问题，使用 a 链接下载文件，需要在[浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy) 下才能使用
download只有火狐和chrome支持，兼容性不太好

``` html
<a href="https://xxx.com/abc.pdf" download="测试文件1">下载文件</a>
```

file-saver
[](https://infosalons.oss-cn-shanghai.aliyuncs.com/upload/%E6%B5%8B%E8%AF%95%E5%8E%8B%E7%BC%A9%E5%8C%85.zip)
[](https://infosalons.oss-cn-shanghai.aliyuncs.com/upload/%E6%B5%8B%E8%AF%95%E6%96%87%E6%A1%A3.docx)
[](https://infosalons.oss-cn-shanghai.aliyuncs.com/upload/%E6%B5%8B%E8%AF%95%E8%A1%A8%E6%A0%BC.xlsx)

## URL.createObjectURL

## 原生 XMLHttpRequest 下载文件

## axios 下载文件
