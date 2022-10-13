# Terminal

## iterm2

- [iTerm2](https://iterm2.com/)

## macos 安装 oh-my-posh

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

或者 在 mac 电脑上，全局搜索：字体，点击 字体册.app