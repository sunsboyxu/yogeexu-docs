# Flutter

- [Flutter中文网](https://flutterchina.club/get-started/install/)
- [Flutter官网-英文](https://flutter.dev/docs)
- [Flutter实战书籍](https://book.flutterchina.club/)
- [Flutter中文网开源项目](https://flutterchina.club/opensource.html)
- [Flutter github](https://github.com/flutter/flutter)
- [Flutter examples](https://github.com/flutter/website/tree/master/examples/layout)
- [flutter-go 官网](https://flutter-go.pub/website/)
- [flutter-掘金](https://juejin.cn/tag/Flutter)
- [flutter插件官网地址](https://pub.dev/packages)

## 1 Flutter - 续博客

- [《Flutter实战》](https://book.flutterchina.club/)
- [jianshu](https://www.jianshu.com/u/39bb72583e13)
- [Flutter | 老孟](http://laomengit.com/)
- [全局点击空白处隐藏键盘](https://mp.weixin.qq.com/s/jaWUgUaO5eFmoUZpkoGPXw)

## 2 Dart 官网

- [dart](https://dart.dev/)
- [Get the Dart SDK](https://dart.dev/get-dart)

## 3 Gradle

- [gradle](https://gradle.org/)

## 4 Java(JDK) 安装

- [JDK下载地址](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

注：选择适合你环境的，Accept License Agreement 下载记得勾选这个

## 5 window Flutter 环境搭建

- [Windows上怎么配置flutter开发环境？这篇文章手把手教你](https://zhuanlan.zhihu.com/p/69713480)
- 配置 java 环境变量
- JAVA_HOME
- Path
- CLASS_PATH

### 5-1 Android Studio (sdk) 安装

- [需要翻墙](https://developer.android.com/)

::: info
Sdk 一般在电脑 用户 -> AppData -> Local -> android -> Sdk
配置 android 环境变量
ANDROID_HOME
Path
CLASS_PATH
:::

- cordova环境安装和插件使用
- [JDK 和 Android SDk 环境搭建](https://www.jianshu.com/p/2cdb0c67962a)

### 5-3 Flutter SDK 安装

- [SDK下载地址](https://flutter.dev/docs/development/tools/sdk/releases)

::: tip
1 配置环境变量 Path 中添加 Z:\flutter\bin
2 在终端命令窗口 输入 flutter
3 输入 flutter doctor 是 flutter 提供的一个命令，用于检测当前环境是否符合 flutter 的开发
  根据提示内容，补全其它环境配置！
4 Dart 和 Flutter 插件安装
  android studio => File -> 打开 settings -> plugins
  输入 flutter 会提示 附带安装 dart 插件
  flutter i18n 也可以安装下
5 再次使用 命令 flutter doctor 检测环境
  输入 flutter --android-licenses （android的一些协议）
  一直输入 y 回车就好了
6 通过 android studio 新建 第一个 Flutter  项目
7 运行到 虚拟机或者手机上
:::

## 6 安装夜神模拟器

Z:\Nox\bin 下面打开命令窗口 输入： nox_adb.exe connect 127.0.0.1:62001

## 7 Mac 搭建 Flutter 环境

- [查看最新镜像地址](https://flutter.dev/community/china)
- [SDK下载地址](https://flutter.dev/docs/development/tools/sdk/releases?tab=macos)

### 1 将下载的 sdk 解压到 自己 安装软件的目录

 /Users/sunsboy/flutter

### 2 添加 Flutter 环境变量

[环境变量和镜像](https://docs.flutter.dev/community/china)

``` bash
1、命令窗口 输入vi ~/.bash_profile

2、向上滚动屏幕，出现Swap file "~/.bash_profile.swp"already exists!
 [O]penRead-Only, (E)dit anyway, (R)ecover, (D)elete it, (Q)uit, (A)bort:
 按e，即edit

3、进入vim，输入
 # 你的安装地址 /Users/sunsboy/flutter/bin
 export PATH=/Users/sunsboy/flutter/bin:$PATH
 # 配置镜像
 export PUB_HOSTED_URL=<https://pub.flutter-io.cn>
 export FLUTTER_STORAGE_BASE_URL=<https://storage.flutter-io.cn>

4、输入完毕，如果要保存退出，按[esc]，再输入:wq!（注意：包含前面的冒号和后面的感叹号），再按[enter]，重启terminal生效
```

window下
打开 CMD

``` bash
set PUB_HOSTED_URL=<https://pub.flutter-io.cn>
set FLUTTER_STORAGE_BASE_URL=<https://storage.flutter-io.cn>
```

### 打开命令窗口 flutter doctor 检测 Mac下 flutter 环境是否符合

  ios toolchain
  根据提示 依次输入命令安装 变好了！
  brew update
  brew install  --HEAD usbmuxd
  brew link usbmuxd
  brew install -HEAD libimobiledevice
  brew install ideviceinstaller

### Vscode 搭建 Flutter 开发环境

Dart 和 Flutter 插件安装
创建项目
flutter create flutter
底部 选择 虚拟机
flutter run
使用 命令 flutter upgrade 更新 sdk
R 键 热加载
P 键 虚拟设备，显示网格
O 键 切换 Android 和 ios 预览模式
Q 键 退出调试预览模式

## 慕课网 Flutter 教程

- [贾鹏辉的技术博客官网](https://www.devio.org/)
- [Flutter从入门到进阶-实战携程网App](https://git.imooc.com/coding-321/flutter_trip)
- [Flutter与iOS混合开发实战 辅导文档-持续更新](https://coding.m.imooc.com/questiondetail.html?qid=150168)
- [项目开发中有哪些常用快捷键？](https://coding.imooc.com/learn/questiondetail/157268.html)
- [徐爱卿](https://www.jianshu.com/u/1c09737416aa)

### 创建第一个Flutter项目 flutter1,以及目录介绍

flutter create flutter1
cd flutter1
flutter1 -
 -- ios ios的工程目录
 -- android 安卓工程目录
 -- lib flutter dart文件
 -- pubspec.yaml  flutter依赖包配置文件

#### Flutter 常用数据类型

数字（num | int | double）
字符串
布尔（ bool）
集合：
 List
 Map
var

#### Flutter 面向对象（OOP）

1 封装 继承 多态（特性）
2 类：
 对象
 变量
 方法：
  构造方法：
    标准构造方法
    初始化列表
    工厂构造方法
  实例方法
  setters和getters
  静态方法
3 抽象：
   抽象类
   抽象方法
4 mixins

#### Flutter 函数/方法

1 方法构成：
    返回值
    参数：
     普通参数
     可选参数
     参数默认值
2 方法类型：
    入口方法
    构造方法
    实例方法
    setters和getters
    静态方法
    抽象方法
    私有方法
    匿名方法
    泛型方法

#### Flutter 一切皆组件

  #StatefullWidget 动态组件-进度条等
  #StatelessWidget 静态组件-text等
  
#### 一个最简单的 Flutter 应用

``` js
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
 
class MyApp extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
  return new MaterialApp(
   title: 'sunsboy',
   home: Scaffod(
    appBar: new AppBar(
     title: new Text('Welcome Flutter App')
    ),
    body: new Center(
     child: new Text(
      'This is My First Flutter App',
      style: new TextStyle(
       fontSize: 30.0,
       color: Corlors.red
      )
     )
    )
   )
  )
 }
}
```

## TextWidget 文本组件

- 属性：
  - TextAlign: 文本对齐属性
  - maxLines: 文本显示的最大行数
  - overflow: 文本溢出效果

``` js
body: Center(
 child: new Text(
  'xxxxxxx',
  textAlign: TextAlign.left,
  style: new TextStyle(
   fontSize: 30.0,
   color: Colors.red
  )
 )
)
```

## Container 容器组件

Alignment 9种 对齐方式 ->

通过 EdgeInsets.all(20) 可以统一设置 padding 或者 margin
也可以通过 EdgeInsets.fromLTRb(val1,val2,val3,val4)

类似css： padding: 10px;margin: 10px;

``` js
body: new Container(
 child: new Text(
  'xxxxx'
 ),
 alignment: AlignMent.topRight|topLeft|topCenter|centerLeft|centerCenter|centerRight|bottomLeft|bottomCenter|bottomRight
 padding: EdgeInsets.all(20)
 margin: EdgeInsets.fromLTRB(0,100,0,0)
)
```

## decoration 修饰器

设置容器的边框
BoxDecoration Widget
LinearGradient 设置背景渐变

## Image Widget 组件，以及几种加载图片方式

Image.asset() - 加载项目中图片资源
Image.network() - 加载网络图片资源
Image.file() - 加载本地图片，拍照时图片预览等

``` js
new Image.network(
 'https://img.mukewang.com/5d9e8eda00017bdc18720764.jpg',
 scale:1,
 fit: BoxFit.contain,
 color: Colors.redAccent,
 // 图片 和 颜色的混合模式
 colorBlendMode: BlendMode.colorBurn
)
```

## Flutter 图片控件

## ListView 列表组件

``` js
body: new Container(
 child: new ListView(
  children: <Widget>[
   new ListTile(
    leading: new Icon(Icons.star),
    title: new Text('我的收藏课程！')
   ),
   new Image.network(
    'https://img2.mukewang.com/szimg/5d31765d08c90cba06000338-360-202.jpg'
   )
  ]
 )
)
```

``` js
接收 children: <Widget>[...] 组件数组
```

## 横向列表, scrollDirection 属性

Axis.horizontal -- 横向滚动
Axis.vertical -- 纵向滚动

## 将其他组件组件 抽离出来 通过自定义组件调用，减少组件的嵌套太深

``` js
body: new Container(
 child: MyListView()
)

class MyListView extends StatelessWidget {
 @override
 Widget build(BuildContext context) {
  return new ListView(
  children: <Widget>[
   new Image.network('xxxx'),
   new Image.netword('xxxxxx')
  ]
  )
 }
}
```

### StatefulWidget 以及基础组件～

``` js
MaterialApp() // 材料设计组件，通常放在根节点
Scaffold() // Flutter 提供的 带 appbar tabbar 以及侧边栏组件
AppBar()
BottomNavigationBar()
RefreshIndicator()
Image()
TextField()
PageView()
```

## TextField

- [输入框及表单](https://book.flutterchina.club/chapter3/input_and_form.html)
主要属性：

``` md
TextEditingController controller
FocusNode focusNode
InputDecoration decoration = const InputDecoration(),
TextInputType keyboardType
TextInputAction textInputAction
TextStyle style
TextAlign textAlign = TextAlign.start
bool autofocus = true
bool obscureText = false
int maxLines = 1
int maxLength,
bool maxLengthEnforced = true
bool enabled

ValueChanged<String> onChanged,
VoidCallback onEditingComplete,
ValueChanged<String> onSubmitted,
List<TextInputFormatter> inputFormatters

this.cursorWidth = 2.0
this.cursorRadius
this.cursorColor
```

/**

- controller：编辑框的控制器，通过它可以设置/获取编辑框的内容、选择编辑内容、监听编辑文本改变事件。
            大多数情况下我们都需要显式提供一个controller来与文本框交互。
   如果没有提供controller，则TextField内部会自动创建一个
- */

/**

- focusNode：用于控制TextField是否占有当前键盘的输入焦点。它是我们和键盘交互的一个句柄（handle）
- */

/**

- InputDecoration：用于控制TextField的外观显示，如提示文本、背景颜色、边框等
- */

/**

- keyboardType：用于设置该输入框默认的键盘输入类型，取值：
 |TextInputType枚举值  |含义             |
 |text         |文本输入键盘           |
 |multiline        |多行文本，需和maxLines配合使用(设为null或大于1)  |
 |number         |数字；会弹出数字键盘         |
 |phone         |优化后的电话号码输入键盘；会弹出数字键盘并显示“* #”     |
 |datetime        |优化后的日期输入键盘；Android上会显示“: -”   |
 |emailAddress       |优化后的电子邮件地址；会显示“@ .”     |
 |url         |优化后的url输入键盘； 会显示“/ .”     |

- */

### Flutter 页面声明周期

StatelessWidget 只有两个声明周期方法（createElement 和 build ）
StatefulWidget 生命周期方法按照时期不同可以分为三组：
1 初始化时期：
  createState (当构建一个新的 StatefulWidget时，会被立即调用，该方法必须覆盖)
  initState
2 更新时期
  didChangeDependencies
  build
  didUpdateWidget
3 销毁时期
  deactivte
  dispose

#### Flutter 应用 生命周期

判断 Flutter App 什么时候进入后台，什么时候进入前台
widget 的绑定观察器，监听应用的生命周期，语言等信息的变化

#### Flutter 布局开发

布局相关组件

``` js
Container(
 child: Text('xxx')
)

RenderObjectWidget()
 SingleChildRenderObejctWidget:
  Opacity
  ClipOval
  ClipRRect
  PhyicalModel
  Align Center
  Padding
  SizeBox
  FrationllySizedBox
 MultiChildRenderObjectWidget:
  Stack
  Flex:
   Column
   Row
  Wrap
  Flow 
ParentDataWidget()
 Positioned
 Fiexible
 Expanded
```
  
#### Flutter 路由与导航

如何创建路由和使用路由

``` js
MaterialApp(
 routes: <String, WidgetBuilder> {
  'pageName': (BuildeContext context) => PageClass
 } 
)
```

#### Flutter 中如何监听用户的点击事件

``` js
GertureDetector(
 child: Text('监听事件～'),
 onTap: (e) {
  print(e)
 },
 onDoubleTap: () {
  
 }
)
```

#### Flutter 中如何使用 本地图片 和 iconfont 字体图标

- [Flutter 中添加静态资源](https://www.jianshu.com/p/ec5ffb25451e)
项目根目录 pubspec.yaml 文件下 添加 要使用的 图片 和 字体

``` js
flutter:
  uses-material-design: true
  assets:
  - images/img1.jpg
  - images/img2.jpg
  - images/img3.jpg
  - images/img4.jpg
  - images/img5.jpg
  fonts:
  - family: iconfont
    fonts:
    - asset: fonts/iconfont.ttf
```

注意写法： flutter 对齐最左边， - 对齐上面的
asset 指明哪些图片资源，images 为目录
第一个 fonts 申明字体 ，第二个 fonts 申明字体资源 ，第三个 fonts 指明字体路径（根目录下 fonts）

使用 本地图片

``` js
Image(
 width: 200,
 height: 200,
 image: Assets.image('images/img1.jpg')
)

Image.asset('images/img2.jpg')

使用 iconfont
Icon(IconData(0xe610, fontFamily: 'iconfont'), color: Colors.deepOrange, size: 44);
```

#### Flutter 如何打开网页 和 第三方 App

## Flutter 动画 Animation 开发指南

### Flutter中有哪些类型的动画？

- 在Flutter中动画分为两类：基于tween或基于物理的。
- 补间(Tween)动画：在补间动画中，定义了开始点和结束点、时间线以及定义转换时间和速度的曲线。
             然后由框架计算如何从开始点过渡到结束点。
- 基于物理的动画：在基于物理的动画中，运动被模拟为与真实世界的行为相似。
               例如，当你掷球时，它在何处落地，取决于抛球速度有多快、球有多重、距离地面有多远。
      类似地，将连接在弹簧上的球落下（并弹起）与连接到绳子上的球放下的方式也是不同

#### --------------------------------------------------------------------------------------------------------

## Flutter 插件

### 如何添加 FLutter 插件？

在项目根目录 pubspec.yaml 文件下

``` js
dependencies:
  flutter:
    sdk: flutter
  cupertino_icons: ^0.1.2
  # 插件名称：^版本号
  url_launcher: ^5.4.1
```

然后 点击 Packages get 安装 插件
在底部 Messages 点击查看：
 packages get
 Running "flutter pub get" in flutter_router... 2.6s
 Process finished with exit code 0

插件就安装完成了～

## 使用插件（如：url_launcher 插件）

- [开发Packages和插件](https://flutterchina.club/developing-packages/)
- [flutter插件官网地址](https://pub.dartlang.org/packages/)
- [Flutter 插件](https://www.jianshu.com/p/b29da33b45cf)
- [几个地图（高德、百度、Apple、Google）URL API](https://blog.csdn.net/cooldragon/article/details/20642131)
- [dio](https://pub.dev/packages/dio/install)

## flutter_swiper的简单使用 和 参数说明

- [flutter_swiper](https://github.com/best-flutter/flutter_swiper)
- [flutter_swiper的简单使用](https://www.jianshu.com/p/1bff5c666671)

``` js
import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title:'flutter_swiper'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  List imgList = [
    "https://desk-fd.zol-img.com.cn/t_s1024x768c5/g5/M00/02/00/ChMkJlbKw1eIdabyAASvPG-H6SwAALG1gFD3VQABK9U648.jpg",
    "https://desk-fd.zol-img.com.cn/t_s1024x768c5/g5/M00/02/00/ChMkJ1bKw1eILNybAAMnVXZZfj0AALG1gFIjKgAAydt911.jpg",
    "https://desk-fd.zol-img.com.cn/t_s1024x768c5/g5/M00/02/00/ChMkJlbKw1eIe_ACAAS4xbkUZBoAALG1gFLtBUABLjd443.jpg",
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
    body: Swiper(
        itemBuilder: (BuildContext context,int index){
          return Image.network(
            imgList[index],
            fit: BoxFit.fitWidth);
        },
        itemCount: imgList.length,
        pagination: SwiperPagination(),
        control: SwiperControl(),
      ),
    );
  }
}
```

### flutter_swiper 参数说明

- [flutter_swiper](https://github.com/best-flutter/flutter_swiper/blob/master/README-ZH.md)

## 多种风格的模糊进度指示器 - flutter_spinkit

- [flutter_spinkit](https://pub.flutter-io.cn/packages/flutter_spinkit)
- [flutter_spinkit - github](https://github.com/jogboms/flutter_spinkit)

## 插件收录～

url_launcher
image_picker
flutter_swiper

## Flutter 一些问题

## 为什么要将build方法放在State中，而不是放在StatefulWidget中？

- [chapter2](https://book.flutterchina.club/chapter2/first_flutter_app.html)

## Flutter 兼容 Android X

- [Flutter兼容AndroidX](https://blog.csdn.net/hongxue8888/article/details/99712848)

## 其他问题

- [MacOS 安装 Flutter 开发环境__排坑版](https://blog.csdn.net/weixin_44137575/article/details/120005219)

[夜神模拟器](https://www.yeshen.com/faq/)
[电脑VT开启教程](https://www.yeshen.com/faqs/SklVHWleZ)
[Flutter 热加载](https://flutter.dev/docs/development/tools/hot-reload)
[不断更新Xcode 真机测试包](https://www.jianshu.com/p/1a33e36c4b67)
[求iOS 13.3.1 （17D50）的xcode 真机调试包](https://tieba.baidu.com/p/6485282721)
[flutter ios 真机调试报错](https://segmentfault.com/q/1010000021500439)
[红米手机怎么打开开发者选项，怎么打开USB调试](https://jingyan.baidu.com/article/a3761b2be3d9971577f9aa79.html)
[小米手机调试总出现“INSTALL_CANCELED_BY_USER”](https://blog.csdn.net/submit66/article/details/54096459)
[发布的IOS版APP](https://flutterchina.club/ios-release/)
[flutter 开发ios升级到iOS13之后运行报错](https://blog.csdn.net/ly410726/article/details/101435388)
[Cannot install the flutter application for ios](https://stackoverflow.com/questions/59354327/cannot-install-the-flutter-application-for-ios)
[无法运行真机](https://www.jianshu.com/p/56593564c926)

## flutter 运行 -> 安卓真机,无法构建（gradle）问题处理

[flutter android studio运行 gradle构建报错](https://www.cnblogs.com/floor/p/11791705.html)
[在构建flutter开发环境的时候，android studio 报错](https://www.jianshu.com/p/d2e8c4cc9e56)
[在构建flutter开发环境的时候，android studio 报错2](https://blog.csdn.net/lanwilliam/article/details/83339306)
[flutter入门-flutter开发环境搭建](https://blog.csdn.net/lanwilliam/article/details/83339594)
[Could not resolve all files for configuration ':classpath'.](https://blog.csdn.net/ymlvtimi/article/details/82251880)
[CocoaPods installed but not working](https://github.com/flutter/flutter/issues/14293)
[](https://github.com/flutter/flutter/issues/47204)
[iOS开发 app 真机测试报错](https://blog.csdn.net/czq1993/article/details/87452073)
[Flutter项目iOS真机打包闪退](https://www.lizenghai.com/archives/38263.html)

## 构建时加载包失败

项目/android/build.gradle 修改

``` js
buildscript {
    ext.kotlin_version = '1.2.71'
    repositories {
        // google()
        // jcenter()
  // 阿里的镜像服务器加载包资源
  maven{ url 'https://maven.aliyun.com/repository/google' }
  maven{ url 'https://maven.aliyun.com/repository/jcenter' }
  maven{ url 'http://maven.aliyun.com/nexus/content/groups/public'}
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}

allprojects {
    repositories {
        // google()
        // jcenter()
  // 阿里的镜像服务器加载包资源
  maven{ url 'https://maven.aliyun.com/repository/google' }
  maven{ url 'https://maven.aliyun.com/repository/jcenter' }
  maven{ url 'http://maven.aliyun.com/nexus/content/groups/public'}
    }
}
```

## 快捷键使用

Anroid Studio 格式化代码: option + command + L （Mac）
Anroid Studio 格式化代码: ctrl + alt + L （Window）
关闭单页面: ctrl + F4

### Flutter 实战项目

[《Flutter 实战》](https://book.flutterchina.club/)

[【强烈推荐】适合Flutter初学者的完整项目](https://blog.csdn.net/mengks1987/article/details/105308855)
[flutter-do](https://github.com/781238222/flutter-do)
[Flutter | 老孟](http://laomengit.com/)

[Flutter学习及实战](https://www.jianshu.com/p/f1c133eebdbe?utm_source=desktop&utm_medium=timeline)
[flutter_eyepetizer](https://github.com/guofudong/flutter_eyepetizer)

[Flutter 入门项目-实战 + 分析](https://blog.csdn.net/json_it/article/details/95042706)
[wanandroid_flutter](https://github.com/sparkerandroid/wanandroid_flutter)

[Flutter实战详解--高仿好奇心日报](https://www.jianshu.com/p/4a0185b5a8f5)
[Flutter-CuriosityApp](https://github.com/xumaohuai/Flutter-CuriosityApp)

[Flutter实战](https://www.jianshu.com/p/725601e3162b)
[fultter-example-app](https://github.com/zhongmeizhi/fultter-example-app)

[编写一个非常精美的Flutter Todo-List项目](https://segmentfault.com/a/1190000019972838)
[flutter-todos](https://github.com/asjqkkkk/flutter-todos)
[问题等待回复！](https://github.com/asjqkkkk/flutter-todos/issues)

[flutter练手优质项目](https://blog.csdn.net/qq_40755047/article/details/102475728)
[flutter examples](https://github.com/flutter/flutter/tree/master/examples)
[flutter samples](https://github.com/flutter/samples)
[](https://github.com/nisrulz/flutter-examples)
[flutter example apps](https://github.com/iampawan/FlutterExampleApps)
[flutter-go](https://github.com/alibaba/flutter-go)
[flutter-go 官网](https://flutter-go.pub/website/)
[Flutter豆瓣客户端](https://github.com/kaina404/FlutterDouBan)
[开源！有人用Flutter撸了个新浪微博](https://www.jianshu.com/p/7d3e3fcb1fde)

[s](https://www.itying.com/article-11.html)
