# React Native

- [中文网](https://reactnative.cn/)
- [搭建环境](https://reactnative.cn/docs/environment-setup)

## 1 mac 环境搭建

### node环境安装(v12.0以上)

<CodeGroup>
<CodeGroupItem title='node 官网下载' active>

::: tip node 官网下载
[node下载地址](https://nodejs.org/)
:::

</CodeGroupItem>

<CodeGroupItem title="brew 下载">

``` bash
sudo brew install node
```

</CodeGroupItem>
</CodeGroup>

### Homebrew 安装

- [Homebrew官网](https://brew.sh/)
- [镜像快速安装Homebrew教程](https://brew.idayer.com/)
- [Homebrew国内如何自动安装（国内地址）](https://zhuanlan.zhihu.com/p/111014448)
- 本地软件库列表： brew ls
- 查找软件：brew search xxx
- 查看版本：brew -v
- 更新版本：brew update
- 安装 cask 软件：brew install --cask xxx

### Watchman 安装

[官网](https://facebook.github.io/watchman/)

- brew update
- brew install watchman
watchman是Facebook的⼀个开源项⽬，它可以⽤来监视⽂件并记录
⽂件的变更，当⽂件变更的时候它可以触发⼀些操作，⽐如执⾏⼀些命
令等

### Xcode 安装

1- Appstore -> 搜索 Xcode 进行安装
2- 最新版下载地址，其他版本 选择 Relese Notes 进行选择下载
[xcode最新版下载地址](https://developer.apple.com/download/)

### xcode 安装成功后

- Command Line Tools 选择
打开 Xcode -> 选择 Preferences -> 选择 Locations -> 点击 Command Line Tools -> 选择最新的Xcode

### 安装模拟器

打开 Xcode -> 选择 Preferences -> 选择 Components -> Simulators -> 选择模拟器

### 启动模拟器

open -a simulator 启动ios虚拟机查看虚拟机安装是否成功(开发时不需要)

## 2 Cocoapods 安装

- [官网](https://cocoapods.org/)
- [cocoapods-github](https://github.com/CocoaPods/Specs)
- [pod 查看当前源](https://blog.csdn.net/u010828718/article/details/84068441)
- [pod install 和 pod update](https://www.jianshu.com/p/d92226205557)
- [CocoaPods安装方法](https://www.jianshu.com/p/f43b5964f582)
CocoaPods 是用 Ruby 编写的包管理器（可以理解为针对 iOS 的 npm）。
从 0.60 版本开始 react native 的 iOS 版本需要使用 CocoaPods 来管理依赖。
你可以使用下面的命令来安装 CocoaPods。CocoaPods的版本需要 1.10 以上
CocoaPods 是一个 Cocoa 和 Cocoa Touch 框架的依赖管理器，
具体原理和 Homebrew 有点类似，都是从 GitHub 下载索引，
然后根据索引下载依赖的源代码。

- brew install cocoapods 或者
- sudo gem install cocoapods

旧版的 CocoaPods 可以使用如下方法使用 tuna 的镜像

- pod repo remove master
- pod repo add master <https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git>
- pod repo update

新版的 CocoaPods 不允许用 pod repo add 直接添加master库了

- cd ~/.cocoapods/repos
- pod repo remove master
- git clone <https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git>

项目ios 目录下 Podfile文件添加：

- source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
- pod install --repo-update

- pod repo // 查看镜像源
- pod env  // 查看cocoapods版本

[git clone](https://gitee.com/mirrors/CocoaPods-Specs.git)

### 使用 Cocoapods 官方 cdn

[Cocoapods-CND分享](https://juejin.cn/post/6844903998034542600)
项目 ios -> Podfile 文件第一行
source 'https://cdn.cocoapods.org/'

### pod install 安装显示 github 443 没有权限解决方案

## 添加 github.com vhosts

- 1 查询 github.com ip
 [ip查询地址](https://www.ipaddress.com/)
- 2 命令窗口，sudo vim /etc/hosts
  按 s 键，进行编辑，添加一条记录:
  140.82.112.4    github.com
  按 esc 键退出编辑
  按住 shift 键不放，输入 :wq! 然后回车
- 3 ping github.com ，查看是否有返回  
  
## 3 android环境配置(mac)

### Andorid 环境

- andorid studio 安装
[官网下载(需要翻墙)](https://developer.android.google.cn/studio/)
如果是 Mac安装 android studio，下载会提示选择：
Mac with Intel chip 和 Mac with Apple chip
看看自己的 mac 是什么芯片的

### 使用 Homebrew 安装 JDK

- brew install adoptopenjdk/openjdk/adoptopenjdk8
React Native 需要 Java Development Kit [JDK] 1.8（暂不支持 1.9 及更高版本，注意 1.8 版本官方也直接称 8 版本）

### 查看 JDK 版本

- javac -version（请注意是 javac，不是 java）来查看你当前安装的 JDK 版本

### 安装 Android SDK

### SDK platforms 下载

Android Studio -> Preferences -> Appearance & Behavior -> System Settings —> Android SDK
右侧 SDK platforms，把右下角 Show Package Details 勾选上
在列表中找到 Android 10 (Q):
选中下面，并且下载

- Android SDK Platform 29
- Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）

### SDK Tools 下载

同上相同位置，tab切换到 SDK Tools，右下角 Show Package Details 勾选上
Android SDK Build-Tools：
查看所需版本状态 Not installed
React Native 所必须的29.0.2版本。你可以同时安装多个其他版本

- 选中 29.0.2 这个版本

### NDK (Side by side) 下载

同上相同位置，tab切换到 SDK Tools，右下角 Show Package Details 勾选上，展开 NDK 项

- 选中 20.1.5948944 这个版本

### Android SDK Command-line Tools (latest) 下载

同上相同位置，tab切换到 SDK Tools，右下角 Show Package Details 勾选上，选中 Android SDK Command-line Tools (latest)

- Android SDK Command-line Tools (latest)

- 以上几个下载项可以分次下载，也可以一起勾选一次性下载

### 配置 ANDROID_HOME 环境变量

- vim ~/.bash_profile

#### ANDROID_HOME 环境变量

``` bash
export ANDROID_HOME=/Users/mac用户名/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
source ~/.bash_profile
```

- 在 .zshrc 中可以添加 “ source ~/.bash_profile ”
这样 2个 SHELL 都用同一个环境变量

## 创建项目

装过旧的 react-native-cli命令⾏⼯具，请使
⽤ npm uninstall -g react-native-cli 卸载掉它以避免⼀些冲突

- npx react-native init 项目名称
- npx react-native info 查看当前环境信息
cd 项目，安装 cocoapods 包，cd ios -> pod install
