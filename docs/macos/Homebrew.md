# Homebrew

Homebrew 是一款包管理工具，目前支持 macOS 和 Linux 系统，
主要有四个部分组成：brew、homebrew-core、homebrew-cask、homebrew-bottles

- brew Homebrew源代码仓库
- homebrew-core Homebrew核心源
- homebrew-cask 提供 macOS 应用和大型二进制文件的安装
- homebrew-bottles 预编译二进制软件包

- [Homebrew官网](https://brew.sh/)
- [镜像快速安装Homebrew教程](https://brew.idayer.com/)
- [镜像助手](https://brew.idayer.com/guide/change-source/)
- [Homebrew国内如何自动安装（国内地址）](https://zhuanlan.zhihu.com/p/111014448)
- [Mac下的Homebrew安装与使用](https://blog.csdn.net/terrysg/article/details/49342033)
- [Homebrew 中有什么值得安装的程序](https://www.zhihu.com/question/27469573)
- [homebrew-install](https://github.com/ineo6/homebrew-install)

## 镜像切换

- [镜像助手](https://brew.idayer.com/guide/change-source)

## brew tap

- [brew tap 功能详解](https://blog.csdn.net/yyws2039725/article/details/103655156)
- [brew tap 功能详解2](https://cloud.tencent.com/developer/article/1956502)

## 常用命令

``` bash
brew ls                  // 本地软件库列表
brew search xxx          // 查找软件 xx
brew -v                  // 查看版本
brew update              // 更新版本
brew install --cask xxx  // 安装 cask 软件
brew cleanup             // 清理缓存
```
