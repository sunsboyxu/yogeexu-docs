# Homebrew

Homebrew 是一款软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能，目前支持 macOS 和 Linux 系统，
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
- [常用命令以及安装路径](https://blog.csdn.net/qq_39234967/article/details/117674967)

## 镜像切换

- [镜像助手](https://brew.idayer.com/guide/change-source)

## brew tap

- [brew tap 功能详解](https://blog.csdn.net/yyws2039725/article/details/103655156)
- [brew tap 功能详解2](https://cloud.tencent.com/developer/article/1956502)

## 常用命令

``` bash
brew -v                     查看homebrew安装版本
brew --help                 简洁命令帮助
man  brew                   完整命令帮助
brew ls                     本地软件库列表
brew search git             搜索软件包
brew install git            安装软件包
brew install --cask xxx     安装 cask 软件
brew uninstall git          卸载安装包
brew list                   显示已安装的所有软件包
brew list git               查看安装软件包的安装地址
brew pin git                锁定不想更新的软件包
brew unpin git              取消锁定不想更新的软件包
brew outdated               查看已安装的哪些软件包需要更新以及更新情况
brew update                 同步远程最新更新情况，对本机已经安装并有更新的软件用*标明
brew upgrade git            更新单个软件包
brew info git               查看软件包信息
brew home git               访问软件包的官方网站

brew cleanup -n             查看可清理的旧版本包，不执行实际操作
brew cleanup                清理所有已安装软件包的历史版本
brew cleanup git            清理单个已安装软件包的历史版本

brew services start mysql   启动 mysql, 并设置为开机启动
brew services stop mysql    停止 mysql
brew services restart mysql 重启 mysql
brew services list          查看服务器所有组件启动情况
```

``` bash
# 显示 Homebrew 的默认安装路径
brew --prefix
# /usr/local/opt

# 显示 oh-my-posh 的默认安装路径，即查询通过 homebrew 安装的包默认路径
brew --prefix oh-my-posh
# /usr/local/opt/oh-my-posh
```

## 相关路径说明

``` bash
/usr/local/Cellar       所有homebrew安装的程序,都以[程序名/版本号]存放于本目录下
/usr/local/bin          用于存放所有安装程序的启动链接（相当于快捷方式）
/usr/local/etc          安装程序的配置文件默认存放路径
/usr/local/opt          homebrew下载软件包存放路径
/usr/local/Homebrew     homebrew自身存放文件夹    
```

例如在配置 oh-my-posh 自定义主题时

在 ～/.zshrc 中

``` bash
# oh-my-posh 自定义主题配置
eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/ys.omp.json)"
```
