# Mac doc
- [使用手册](https://support.apple.com/zh-cn/guide/mac-help/welcome/10.15/mac)
- [如何固定桌面排序](https://blog.csdn.net/guang_s/article/details/84333857)
- [在 Mac 上设置 VPN 连接](https://support.apple.com/zh-cn/guide/mac-help/mchlp2963/10.15/mac/10.15)
- [在 Mac 上更改 L2TP/IPSec VPN 连接的选项](https://support.apple.com/zh-cn/guide/mac-help/mh11941/10.15/mac/10.15)
- [mac下进行连接pptp协议](https://www.cnblogs.com/qiangyuzhou/p/10569607.html)
- [smart vpn](https://www.draytek.com/products/smart-vpn-client/)
- [无线局域网](https://support.apple.com/zh-cn/HT202068)

## Mac 实用小技巧
- [专业截屏指南](https://apps.apple.com/cn/story/id1456413984)

## Mac 快捷键
- [快捷键参考1](https://huajiakeji.com/macos/2018-10/1572.html)

Mac 快捷键使用
``` js
command + R // 刷新网页
shift + command + R //强制刷新
option + command + P // 查看文件路径
control + command + Q // 锁定桌面
command + I // 查看文件简介
command + / //访达底部显示大小
command + 方向 up // 返回上级文件夹
shift + command + . // 显示隐藏文件
command + M // 最小化窗口
opiton + command + D //打开/关闭程序坞
control + command + [0-8] //快速整理访达
```

Mac 浏览器（Chrome）快捷键使用
``` js
command + W // 关闭当期网页
command + T // 打开新的标签页
shift + command + F // 全屏浏览器
shift + command + B // 隐藏标签
```

## Mac 软件
- [知您网](https://www.zhiniw.com)
- [macwk](https://www.macwk.com/)
- [程序员与Mac](https://www.jianshu.com/p/540fd77b0b3e)
- [Mac和ios最佳免费工具App集合](https://zh.okaapps.com/)
- [Omiapps](https://omiapps.com/)
- [Filmage](https://www.filmagepro.com/)
- [Xmind2021-思维导图](https://www.macwk.com/soft/xmind)
- [Downie](https://www.macwk.com/soft/downie)
- [CleanMyMac-x](https://www.macwk.com/soft/cleanmymac-x)
- [App Cleaner & Uninstaller Pro](https://www.macwk.com/soft/app-cleaner-and-uninstaller-pro)
- [NTFS For Mac](https://www.ntfsformac.cn/)
- [Microsoft-Remote-Desktop远程桌面控制Windows](https://zhuanlan.zhihu.com/p/138265808)
- [Microsoft-Remote-Desktop下载](https://install.appcenter.ms/orgs/rdmacios-k2vy/apps/microsoft-remote-desktop-for-mac/distribution_groups/all-users-of-microsoft-remote-desktop-for-mac)
- [Mac hosts 管理](https://github.com/oldj/SwitchHosts)
- [SwitchHosts 官网](https://swh.app/)
- [FileZilla for Mac(FTP工具)](https://www.mac69.com/mac/168.html)
- [JetBrains PhpStorm 2018 for Mac(PHP集成开发工具) ](https://www.mac69.com/mac/3454.html)


## 终端使用(terminal)
- [如何切换默认的Shell终端命令窗口：zsh 和 bash](https://support.apple.com/zh-cn/HT208050)
- [Mac 终端 oh-my-zsh 配置](https://www.jianshu.com/p/64344229778a)
- [zsh终端美化](https://sspai.com/post/55176)
- [Mac下配置ZSH](https://segmentfault.com/a/1190000019828167)
- [oh-my-zsh主题](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)

### iTerm2
- [iTerm2官网](https://iterm2.com/)
- [iTerm2下载地址](https://iterm2.com/downloads.html)
- [iTerm2使用指南](https://blog.csdn.net/qq_41037571/article/details/121184107)
- [iTerm2配置和美化](https://blog.csdn.net/weixin_42292229/article/details/118675128)
- [iterm2用法与技巧](https://blog.csdn.net/thinkdiff/article/details/25075047)

下载的文件解压后，拖到电脑 应用所在的文件夹下即可

### 切换默认的 shell
``` js
// 查看系统所有的 shell 列表
cat /etc/shells

// 查看当前默认的 shell
echo $SHELL

// 使用 zsh
chsh -s /bin/zsh

// 使用 bash
chsh -s /bin/bash
```

### oh-my-zsh
- [ohmyz官网](https://ohmyz.sh/)
- [oh-my-zsh主题地址](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)
- [oh-my-zsh主题安装命令](https://github.com/ohmyzsh/ohmyzsh#basic-installation)

``` bash
// 安装不成功，可以多试几次
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

// 安装成功会修改，.zshrc 的配置
```

## 添加读写权限
``` js
sudo chown -R  用户名 /目录名/目录名2
```

## 环境变量配置
- [mac .zshrc 文件找不到问题](https://blog.csdn.net/weixin_42345592/article/details/109677712)
- [简化常用命令](https://blog.csdn.net/lonewolf521125/article/details/81363520)

``` js
// ~/ 当前登录用户的根目录
open ~/.base_profile
```

### 修改环境变量的三种方式

<code>.bash_profile</code> 和 <code>.zshrc</code> 的修改方式相同，这里以修改 <code>.bash_profile</code> 为示范，
如果之前有环境变量配置在 <code>.bash_profile</code> 中，现在将默认的 shell 切换成 zsh 了，
在 <code>.zshrc</code> 中加上 <code>source ~/.bash_profile</code>，即可，最后在终端刷新下 <code>.zshrc</code> 的配置
终端输入：<code>soruce ~/.zshrc</code>

在 <code>.bash_profile</code> 配置某个，<code>环境变量</code> 后在当前的终端窗口是有效的，
当关闭终端窗口和打开一个新终端失效，<code>.bash_profile</code> 中修改环境变量只对当前窗口有效，而且需要 <code>source ~/.bash_profile</code> 才能使用
<code>.zshrc</code> 则相当于 windows 的开机启动的环境变量，可以将环境配置到 <code>.zshrc</code> 中去，没有该文件就新建一个，<code>touch ~/.zshrc</code>

``` bash
# 加载 .bash_profile 的配置
source ~/.bash_profile

# ... 其他的配置
```

1 终端直接输入，<code>修改环境变量</code>

``` js
// 在终端中，输入，如
ehco 'export PATH=/usr/local/mongodb/bin:$PATH' >> ~/.bash_profile

// 在终端中，最后输入
source ~/.bash_profile
```

2 vim 方式，<code>修改环境变量</code>

``` js
// 在终端中，通过 vim 打开 ~/.bash_profile，打开后 按下 s键，进行编辑
vim ~/.bash_profile

// 向上滚动屏幕，出现 Swap file "~/.bash_profile.swp"already exists!
// [O]penRead-Only, (E)dit anyway, (R)ecover, (D)elete it, (Q)uit, (A)bort: 
// 按 E键 进行编辑

// 输入需要配置的环境变量
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_79.jdk/Contents/Home

// 保存退出，先按 [esc键]，再输入 :wq! 再按 [回车键]，重启 terminal 生效
// 退出当前 vim 的修改后，刷新配置的环境变量，终端输入
source ~/.bash_profile
```

保存退出的说明
``` js
:w             // 保存
:w filename    // 另存为filename
:wq!           // 保存并强制退出
:wq! filename  // 注：以filename为文件名保存后强制退出
:q!            // 强制退出
:x             // 保存并退出（仅当文件有变化时保存）
```

#### Found a swap file by the name '.bash_profile.swp' 问题
在编辑文件时没有保存就异常退出了，vim 为了保证文件的安全性，会在编辑文件时创建一个交换文件 swap file

``` js
// 在当前 vim 编辑模式下，按【esc】键，输入 :q，然后删除交换文件，继续后续的操作
:q // 退出
rm -f ~/.bash_profile.swp // 删除交换文件
vim ~/.bash_profile // 继续编辑 
source ~/.bash_profile // 刷新配置文件
```

3 打开文件，<code>修改环境变量</code>

``` js
// 终端中，输入
open ~/.bash_profile

// 打开 .bash_profile 后，输入
export PATH=/usr/local/mongodb/bin:$PATH

// commond + s，保存输入内容，刷新配置的环境变量，终端中输入
source ~/.bash_profile
```

#### 配置别名

如：配置 mongodb 快速启动

``` js
// 未配置前的启动
mongod --dbpath=/usr/local/mongodb/data/db
```

``` bash
# 配置 mongodb 快启动
alias mongodbServer='mongod --dbpath=/usr/local/mongodb/data/db'
```
<code>:wq!</code> 保存后，刷新配置 <code>source ~/.bash_profile</code> 终端输入，配置的快速启动命令

``` bash
mongodserver
```

如，查看 vue-cli 的版本
``` bash
# 查看 vue-cli 的版本
alias vuev='vue --version'
```

## Mac 安装 window10
- [parallels desktop](https://www.parallels.cn/welcome-new/)
- [Parallels Desktop 16 for Mac v16.1.2 PD虚拟机 中文破解版下载](http://www.fengmac.com/2274.html)

## Mac 外接显示器
- [Mac外接显示器保持同步](https://blog.csdn.net/weixin_39685578/article/details/111819082)
- [Mac外接显示器教程](https://blog.csdn.net/weixin_50937908/article/details/109492930)

## 抓包工具

### Charles
- [charles](https://www.charlesproxy.com/download/)
- [Charles破解和安装](https://zhuanlan.zhihu.com/p/248767986)
- [Charles 激活码计算器](https://www.zzzmode.com/mytools/charles/)
- [安利一个Mac下好用的抓包工具-Charles](https://juejin.cn/post/7131928652568231966)
- [](https://juejin.cn/post/6978086089600794631)
- [](https://juejin.cn/post/7087800370755272717)

### [](https://github.com/wuchangming/spy-debugger)