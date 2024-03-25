# macOS terminal

macOS 系统下，终端的使用和美化等操作，推荐使用 iterm2 + oh-my-posh

查看某个应用的安装目录

``` bash
# 查看 node 的安装目录
which node
# /usr/local/bin/node
```

## zsh

``` bash
zsh --version
# zsh 5.8.1 (x86_64-apple-darwin21.0)
```

## iterm2

- [iTerm2官网](https://iterm2.com/)
- [iTerm2下载地址](https://iterm2.com/downloads.html)
- [iTerm2使用指南](https://blog.csdn.net/qq_41037571/article/details/121184107)
- [iTerm2配置和美化](https://blog.csdn.net/weixin_42292229/article/details/118675128)
- [iterm2用法与技巧](https://blog.csdn.net/thinkdiff/article/details/25075047)

解压下载的 iterm2 压缩包 -> 将 iTerm.app 拖到 应用程序 中即可

### item2 相关

- [iterm2下载太慢_解决zsh启动速度慢的优化方法](https://blog.csdn.net/weixin_31293841/article/details/113023261)

## oh-my-posh

- [oh-my-posh](https://ohmyposh.dev/)
- [oh-my-posh 全平台终端提示符个性化工具](https://sspai.com/post/69911)
- [使用 oh-my-posh 美化终端](https://wxhboy.cn/2022/04/16/%E4%BD%BF%E7%94%A8ohmyposh%E7%BE%8E%E5%8C%96%E7%BB%88%E7%AB%AF/)

### 通过 homebrew 来安装 oh-my-posh

``` bash
# 先查看下 oh-my-posh
brew search oh-my-posh

# 通过 homebrew 安装 oh-my-posh
brew tap JanDeDobbeleer/oh-my-posh && brew install oh-my-posh
```

### 环境变量配置，以及初始化 oh-my-posh 主题

- [自定义 oh-my-posh 配置](https://ohmyposh.dev/docs/installation/customize)
- [oh-my-posh 主题](https://ohmyposh.dev/docs/themes)

修改 ～/.zshrc 文件

``` bash
# oh-my-posh 主题配置

# 使用默认的主题配置
# eval "$(oh-my-posh init zsh)"

# 使用自定义主题配置
eval "$(oh-my-posh init zsh --config $(brew --prefix oh-my-posh)/themes/jandedobbeleer.omp.json)"
```

在环境变量中添加完后，重载 zsh

``` bash
source ~/.zshrc
exec zsh
```

### 手动 Nerd 字体下载 和 安装

- [OhMyPosh Fonts](https://ohmyposh.dev/docs/installation/fonts)
- [Nerd Fonts](https://www.nerdfonts.com/)
- [Nerd Fonts Downloads](https://www.nerdfonts.com/font-downloads)

在 [Nerd Fonts Downloads](https://www.nerdfonts.com/font-downloads) 中选择自己喜欢的字体下载，解压后，
移动到 /Users/用户名/Library/Fonts（用户目录/资源库/Fonts） 目录下

目录说明：资源库（Library）是个隐藏目录，shift + command + . 可快速显示 隐藏的目录和文件

或者 在 mac 电脑上，全局搜索(快捷键 command + 空格)：输入 字体，点击 字体册.app

### 通过 homebrew 安装 Nerd 字体

``` bash
// 安装命令
brew tap homebrew/cask-fonts && brew install --cask font-字体名称-nerd-font
```

以安装 Mononoki Nerd Font 为例，字体包的格式为：font-字体名-nerd-font

``` bash
# 先搜索下该字体
brew search font-mononoki-nerd-font

brew tap homebrew/cask-fonts

# homebrew 安装 Mononoki Nerd Font
brew install --cask font-mononoki-nerd-font
```

## oh-my-zsh

- [ohmyz官网](https://ohmyz.sh/)
- [oh-my-zsh主题地址](https://github.com/ohmyzsh/ohmyzsh/wiki/themes)
- [oh-my-zsh主题安装命令](https://github.com/ohmyzsh/ohmyzsh#basic-installation)
- [MacOS 上 oh-my-zsh 安装与卸载](https://www.jiangzhuolin.com/5697.html)

``` bash
// 安装不成功，可以多试几次
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

// 安装成功会修改，.zshrc 的配置
```

### 卸载 oh-my-zsh

``` bash
uninstall_oh-my-zsh
# 输入 y 即可
```

## Powershell

- [macOS 上安装 PowerShell](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2)

1 安装 homebrew

``` bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Homebrew 是 macOS 的首选包管理器，通过 Homebrew 在 macOS 10.13 或更高版本上安装最新的 PowerShell 稳定版本

``` bash
brew install --cask powershell
```

验证安装是否能正常运行

``` bash
pwsh
```

PowerShell 新版本发布后，更新 Homebrew 公式并升级 PowerShell

``` bash
brew update
brew upgrade powershell --cask
```

## 卸载 Powershell

如果使用 Homebrew 安装 Powershel 请使用以下命令进行卸载

``` bash
brew uninstall --cask powershell
```

如果通过直接下载安装 powershell 则必须手动删除 powershell

``` bash
sudo rm -rf /usr/local/bin/pwsh /usr/local/microsoft/powershell
```

## PowerShell 中用于存储状态信息的自动变量

``` js
pwsh
// PowerShell 7.2.6

$PSVersionTable
// 包含可用于显示相关 PowerShell 版本信息的哈希表
// PSVersion                      7.2.6
// PSEdition                      Core
// GitCommitId                    7.2.6
// OS                             Darwin 21.6.0 Darwin Kernel Version 21.6.0: Wed Aug 10 14:25:27 PDT 2022; root:xnu-8020…
// Platform                       Unix
// PSCompatibleVersions           {1.0, 2.0, 3.0, 4.0…}
// PSRemotingProtocolVersion      2.3
// SerializationVersion           1.1.0.1
// WSManStackVersion              3.0

$PSHOME
// /usr/local/microsoft/powershell/7
```

## 常用路径说明

- $PSHOME 是 /usr/local/microsoft/powershell/7.2.6/
- 用户配置文件是从 ~/.config/powershell/profile.ps1 中读取的
- 默认配置文件是从 $PSHOME/profile.ps1 中读取的
- 用户模块是从 ~/.local/share/powershell/Modules 中读取的
- 共享模块是从 /usr/local/share/powershell/Modules 中读取的
- 默认模块是从 $PSHOME/Modules 中读取的
- PSReadline 历史记录将记录到 ~/.local/share/powershell/PSReadLine/ConsoleHost_history.txt 中

配置文件采用 PowerShell 的每个主机配置。 因此主机特定的默认配置文件位于相同位置的 Microsoft.PowerShell_profile.ps1
