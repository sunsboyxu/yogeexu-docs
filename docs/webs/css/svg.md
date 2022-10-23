# svg 文档

- [svg教程-菜鸟](https://www.runoob.com/svg/svg-tutorial.html)
- [svg特效](http://www.bootstrapmb.com/tag/svgtexiao)

## 1 svg 说明

svg 意为可缩放矢量图形（Scalable Vector Graphics），
svg 是使用 XML格式定义图像，
用于描述二维图形和绘图程序的语言，
svg 是 W3C 推荐标准，
svg 于 2003 年 1 月 14 日成为 W3C 推荐标准

- svg 指可伸缩矢量图形 (Scalable Vector Graphics)
- svg 用来定义用于网络的基于矢量的图形
- svg 使用 XML 格式定义图形
- svg 图像在放大或改变尺寸的情况下其图形质量不会有所损失
- svg 是万维网联盟的标准
- svg 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体

### 1-1 svg 优势

- 可被非常多的工具读取和修改（比如记事本）
- 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
- 是可伸缩的
- 图像可在任何的分辨率下被高质量地打印
- 可在图像质量不下降的情况下被放大
- 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
- 可以与 Java 技术一起运行
- 是开放的标准
- 文件是纯粹的 XML

## 2 示例操作

### 2-1 重新定义默认命名空间

- [svg命名空间说明](https://blog.csdn.net/zz00008888/article/details/121118172)

``` html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"></svg>
```

## 3 相关标签及属性

``` html
<svg>
 <circle></circle>
 <g>
  <path d="..."></path>
  <animateTransform></animateTransform>
 </g>
</svg>
```

- path：定义形状的基础元素
  - d：属性就是图形的路径
    - M：x y 表示移动到(x, y) 点 ( svg中左上角是(0,0)点 )
    - Q：x1 y1, x2 y2 表示绘制二次贝塞尔曲线，x1 y1 为二次贝塞尔的控制点，x2 y2为终点
    - T：x y 表示生成上一个二次贝塞尔曲线的镜像，其终点坐标为(x,y)
    - V：y 表示从当前点(x0,y0) 垂直移动到(x0, y)
    - H：x 表示从当前点(x0, y0) 水平移动到(x, y0)
- animateTransform：定义目标元素的变形属性，波浪的循环移动就是使用这个属性实现的
- g：组合对象的容器

::: tip animateTransform 标签属性

- attributeName：完成动画的属性
- attributeType：具体动画的类型
- from: 动画的初始值
- to: 动画的最终值
- dur: 动画的持续时间
- repeatCount: 动画的重复次数（indefinite表示无限循环）
:::

## 4 一些工具

- [贝塞尔曲线生成工具](http://www.tweenmax.com.cn/tool/bezier/)
- [svg在线编辑器](https://c.runoob.com/more/svgeditor/)

## 5 实现一个 svg 波浪 🌊 动画

``` html
<svg xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   width="300" height="200">
 <!-- 一组对象 -->
 <g fill="rgba(106, 127, 239, 0.1)">
  <!-- 图形路径 -->
  <path d="M 0 70 Q 75 39, 150 70 T 300 70 T 450 70 T 600 70 T 750 70 V 100 H 0 V 0" />
  <!-- path 完成的动画 -->
  <!-- <animateTransform
			attributeName="transform"
			attributeType="XML"
			type="translate"
			from="0" to="-300" dur="1.5s" repeatCount="indefinite" /> -->
 </g>
</svg>
```

### 定义 3组图形路径

``` html
<svg xmlns="http://www.w3.org/2000/svg"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   width="300" height="200">
 <!-- 第一组对象 -->
 <g fill="rgba(106, 127, 239, 0.1)">
  <path d="M 0 70 Q 75 39, 150 70 T 300 70 T 450 70 T 600 70 T 750 70 V 100 H 0 V 0" />
  <animateTransform
   attributeName="transform"
   attributeType="XML"
   type="translate"
   from="0" to="-300" dur="1.5s" repeatCount="indefinite" />
 </g>
 <!-- 第二组对象 -->
 <g fill="rgba(106, 127, 239, 0.15)">
  <path d="M 0 70 Q 87.5 47, 175 70 T 350 70 T 525 70 T 700 70 T 875 70 T 1050 70 V 100 H 0 V 0" />
  <animateTransform
   attributeName="transform"
   attributeType="XML"
   type="translate"
   from="0" to="-350" dur="3s" repeatCount="indefinite" />
 </g>
 <!-- 第三组对象 -->
 <g fill="rgba(106, 127, 239, 0.18)">
  <path d="M 0 70 Q 135 36, 270 70 T 540 70 T 810 70 T 1080 70 V 100 H 0 V 0"
        transform="translate(-38.232284367796474, 0)"/>
  <animateTransform
   attributeName="transform"
   attributeType="XML"
   type="translate"
   from="0" to="-540" dur="2s" repeatCount="indefinite" />
 </g>
</svg>
```

## 6 svg 示例

[CSS Waves](https://www.jq22.com/code3804)

## 7 参考学习

- [](https://blog.csdn.net/culiao9310/article/details/108864901)
- [](https://segmentfault.com/a/1190000010627039)
