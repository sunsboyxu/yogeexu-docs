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

## Powershell

- [macOS 上安装 PowerShell](https://learn.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2)

通过 Homebrew 来安装 Powershell

``` bash
brew tap homebrew/cask-versions
```

``` bash

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
