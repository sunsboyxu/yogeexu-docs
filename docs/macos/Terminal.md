# Terminal

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

## oh-my-posh

- [oh-my-posh](https://ohmyposh.dev/)
- [Oh My Posh 全平台终端提示符个性化工具](https://sspai.com/post/69911)
- [使用ohmyposh美化终端](https://wxhboy.cn/2022/04/16/%E4%BD%BF%E7%94%A8ohmyposh%E7%BE%8E%E5%8C%96%E7%BB%88%E7%AB%AF/)

``` bash
// 安装 oh-my-posh
brew tap JanDeDobbeleer/oh-my-posh && brew install oh-my-posh
```

### 环境变量设置，以及 初始化 oh-my-posh 主题

``` bash
export eval '$(oh-my-posh --init zsh --shell --config /usr/local/Cellar/oh-my-posh/12.1.0/themes/jandedobbeleer.omp.json)'
source ~/.zshrc
```

### Nert 字体下载，和安装

将下载的字体，移动到 /Users/用户名/Library/Fonts（用户目录/资源库/Fonts） 目录下，
目录：资源库（Library）是个隐藏目录，shift + command + . 快速显示隐藏的目录和文件

或者 在 mac 电脑上，全局搜索(快捷键 command + 空格)：输入 字体，点击 字体册.app

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
