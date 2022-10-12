---
slug: /windows-terminal
---

# windows terminal

- [windows terminal文档](https://learn.microsoft.com/zh-cn/windows/terminal/)
- [windows terminal下载](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&gl=cn)

Windows 终端是一个新式主机应用程序，它面向你喜爱的命令行 shell，如命令提示符、PowerShell 和 bash（通过适用于 Linux 的 Windows 子系统 (WSL)）。
它的主要功能包括多个选项卡、窗格、Unicode 和 UTF-8 字符支持、GPU 加速文本呈现引擎，你还可用它来创建你自己的主题并自定义文本、颜色、背景和快捷方式

## windows terminal 美化

- [自定义终端指南](https://learn.microsoft.com/zh-cn/windows/terminal/custom-terminal-gallery/custom-schemes)
- [Windows 终端的 PowerShell 主题中的 Oh-My-Posh](https://docs.microsoft.com/zh-cn/windows/terminal/custom-terminal-gallery/powerline-in-powershell?source=recommendations)
- [使用 Oh My Posh 为 PowerShell 或 WSL 设置自定义提示符](https://learn.microsoft.com/zh-cn/windows/terminal/tutorials/custom-prompt-setup)
- [windows terminal](https://github.com/microsoft/terminal)
- [oh-my-posh主题](https://ohmyposh.dev/)
- [oh-my-posh code](https://github.com/JanDeDobbeleer/oh-my-posh)
- [nerd字体下载](https://www.nerdfonts.com/font-downloads)
- [nerd-fonts](https://github.com/ryanoasis/nerd-fonts)
- [Jetbrains Mono字体下载](https://www.jetbrains.com/lp/mono/)

window11 系统默认会自动安装 windows terminal 的，
如果是 windows 10 的系统需要先 下载 [windows-terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&gl=cn)
这是默认的 windows teminal 的样式

![1](https://i.postimg.cc/ydSrj9YJ/1.png?width=100%)

相对之前的 cmd 和 powershell 已经是非常好看了，但是还是得搞点个性化的东西

打开 windows terminal 的设置

[![2.png](https://i.postimg.cc/9F2NPD3M/2.png)](https://postimg.cc/t7r5pC4Q)

打开 windows terminal 设置后可以终端的 启动、样式、快捷键、配置的默认等进行设置，这里选择 打开 左下角的 <code>打开 JSON 文件</code>，点击后
默认会使用 编辑器帮你打开

![打开设置](/images/windows/terminal/3.png)

windows terminal 配置文件所在目录

``` bash
C:\Users\sunsb\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json
```

最好是打开 settings.json 文件所在目录，对 settings.json 文件拷贝一份

![文件拷贝](/images/windows/terminal/4.png)

在编辑器 vscode 或者 notepad++ 打开 settings.json 后 ，找到 profiles 下的 defaults

``` json
// C:\Users\sunsb\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json
{
 "profiles": {
  "defaults": { // 终端的默认值配置
   "experimental.retroTerminalEffect": false, // 复古风格的终端效果
   "font": {
    "face": "Consolas",
    "size": 14
   }
  },
 }
}
```

下方图片就是，上面默认配置的可视化

![默认值](/images/windows/terminal/5.png)

配置 终端 <code>亚克力</code> 效果

``` json
{
 "profiles": {
  "defaults": { // 终端的默认值配置
   "experimental.retroTerminalEffect": false, // 复古风格的终端效果
   "useAcrylic": true, // 是否使用 亚克力效果
   "acrylicOpacity": 0.1, // 亚克力效果 透明度
   "font": {
    "face": "Consolas",
    "size": 14
   }
  },
 }
}
```

![默认值](/images/windows/terminal/6.png)

接下来，给终端配置一个背景图片，并且设置背景图的透明度

``` json
{
 "profiles": {
  "defaults": { // 终端的默认值配置
   "experimental.retroTerminalEffect": false, // 复古风格的终端效果
   "useAcrylic": true, // 是否使用 亚克力效果
   "acrylicOpacity": 0.1, // 亚克力效果 透明度，取值：0 - 1
   "backgroundImage": "D:/Terminal/1.png", // 背景图片路径，注意，图片路径使用 / 正斜杠，拷贝路径过来需要替换下
   "backgroundImageOpacity": 1, // 背景图片透明度，取值：0 - 1
   "font": {
    "face": "Consolas",
    "size": 14
   }
  },
 }
}
```

![默认值](/images/windows/terminal/7.png)

对 亚克力效果透明度 acrylicOpacity: 0.2 和 背景图片透明度 backgroundImageOpacity: 0.2 进行调整，背景图最好是找深一点图片

下面是调整过后的效果，可以根据自己选择的背景图片 来调整 亚克力效果透明度 和 背景图片透明度，边调整边查看效果

![默认值](/images/windows/terminal/8.png)

使用 [oh-my-posh官网](https://ohmyposh.dev/) 来进一步的美化终端，打开 oh-my-posh 查看 安装命令，这里采用了 winget 的方式安装了

#### oh-my-posh官网

<https://ohmyposh.dev>

![默认值](/images/windows/terminal/9.png)

![默认值](/images/windows/terminal/10.png)

### 安装方式

1 直接在 Microsoft Store 中搜索 oh-my-posh 进行安装，这种默认是安装在 C盘的

![默认值](/images/windows/terminal/12.png)

2 通过命令安装，我这里采用 winget 命令方式 进行安装，先新建 D:\OhMyPosh 目录，用于 JanDeDobbeleer.OhMyPosh 的安装目录

![默认值](/images/windows/terminal/14.png)

安装前的注意事项

### Windows PowerShell 执行策略

在执行 winget install 命令之前，先查看下，Windows PowerShell 的执行策略，
执行策略是 Windows PowerShell安全策略中的一部分，它将决定你是否可以载入配置文件(包括你的 Windows PowerShell profile文件)和运行脚本，
它将会在运行前确定哪些文件必须具有数字签名(digitally signed)，
get-ExecutionPolicy 获取 Windows PowerShell 当前执行策略，
set-ExecutionPolicy 修改 Windows PowerShell 中执行策略的用户首选项(preference)。

### 执行策略状态说明

- Restricted   表示状态是禁止的 不载入配置文件, 不执行脚本. "Restricted" 是默认值.
- RemoteSigned 所有从互联网上下载的脚本必须通过信任的出版商签名(trusted publisher)
- AllSigned    所有的配置文件和脚本必须通过信任的出版商签名(trusted publisher)，这里所指的脚本页包括在本地计算机上创建的脚本
- Unrestricted 载入所有的配置文件和脚本，如果运行了一个从互联网上下载且没有数字签名的脚本，在执行前都会被提示是否执行

``` js
// 获取 Windows PowerShell 当前执行策略
get-ExecutionPolicy

// Restricted/RemoteSigned/AllSigned/Unrestricted

// 修改 Windows PowerShell 中执行策略
set-ExecutionPolicy RemoteSigned

```

执行命令安装 JanDeDobbeleer.OhMyPosh 安装命令

``` bash
// OhMyPosh 安装命令
winget install JanDeDobbeleer.OhMyPosh -s winget --location D:\OhMyPosh

// OhMyPosh 更新命令
winget upgrade JanDeDobbeleer.OhMyPosh -s winget --location D:\OhMyPosh

```

-- location D:\OhMyPosh 将 OhMyPosh 安装到 D:\OhMyPosh 目录下

![默认值](/images/windows/terminal/11.png)

### PowerShell 创建和维护配置文件

- [powershell文档](https://learn.microsoft.com/zh-cn/powershell)
- [介绍如何创建和使用 PowerShell 配置文件](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_profiles)

可以创建一个 PowerShell 配置文件来自定义环境并将特定于会话的元素添加到启动的每个 PowerShell 会话中

PowerShell 配置文件是在 PowerShell 启动时运行的脚本，可以将配置文件用作登录脚本来自定义环境，
可以添加命令、别名、函数、变量、管理单元、模块和 PowerShell 驱动器，
还可以将其他特定于会话的元素添加到您的配置文件中，以便在每个会话中都可以使用它们，而无需导入或重新创建它们。

PowerShell 控制台支持以下基本配置文件，配置文件按优先顺序列出，第一个配置文件，如：<code>Microsoft.VSCode_profile.ps1</code> 具有最高优先级

PowerShell 支持用户和主机程序的多个配置文件，它不会为您创建配置文件

windows 下的几个变量

- $HOME                           用户的主目录
- $PSHOME                         PowerShell 安装目录
- $PROFILE                        当前用户、当前主机 配置文件的路径
- $PROFILE.CurrentUserCurrentHost 当前用户、当前主机 配置文件的路径
- $PROFILE.CurrentUserAllHosts    当前用户，所有主机 配置文件的路径
- $PROFILE.AllUsersCurrentHost    所有用户，当前主机 配置文件的路径
- $PROFILE.AllUsersAllHosts       所有用户、所有主机 配置文件的路径

一般当前用户，当前主机下，PowerShell 配置文件所在位置

``` bash
$Home\Documents\PowerShell\Microsoft.VSCode_profile.ps1
```

![默认值](/images/windows/terminal/15.png)

注意 PowerShell 配置文件 Profiles 不是自动创建的，有可能这个路径 <code>C:\Users\sunsb\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1</code> 是存在，
打开电脑对应的目录 C:\Users\sunsb\Documents 却找不到 WindowsPowerShell 目录 和 Microsoft.PowerShell_profile.ps1 文件

可以使用命令 <code>Test-Path $PROFILE</code> 查看当前是否存在 PowerShell 配置文件

``` js
// 查看当前是否存在 PowerShell 配置文件
// False 不存在配置文件
// True  存在配置文件
Test-Path $PROFILE
```

如果 没有 Microsoft.PowerShell_profile.ps1 文件，使用命令 new-item -path $PROFILE -itemtype file -force 创建一个 PowerShell 配置文件，最好是在创建好 PowerShell 配置文件文件后查看下
当前的 PowerShell 执行策略，get-ExecutionPolicy，将 执行策略设置为 RemoteSigned，执行命令是：set-ExecutionPolicy RemoteSigned，如果不设置可能会报 无法加载配置文件

``` js
// 创建一个 PowerShell 配置文件
New-Item -Path $PROFILE -Type File -Force
// 当前的 PowerShell 执行策略
get-ExecutionPolicy
// 设置 PowerShell 执行策略为 RemoteSigned
set-ExecutionPolicy RemoteSigned
```

![默认值](/images/windows/terminal/16.png)

有个小技巧，在 <code>C:\Users\sunsb\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1</code> 编辑几个函数，如想使用 vscode 打开该文件的函数，和使用nodepad++ 打开该文件的函数

``` bash
# Microsoft.PowerShell_profile.ps1

# 使用 vscode 打开 $PROFILE 配置文件
function vscodeOpen {
 Code $PROFILE
}

# 使用 nodepad++ 打开 $PROFILE 配置文件
function notepadOpen {
 noetepad $PROFILE
}
```

![默认值](/images/windows/terminal/17.png)

下面来进行 OhMyPosh 的主题，定制化配置

- [定制化配置](https://ohmyposh.dev/docs/installation/customize)
- [oh-my-posh 主题](https://ohmyposh.dev/docs/themes)

``` bash
# 文件路径
# C:\Users\sunsb\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

# 配置 oh-my-posh 主题方式一
# 所有的本地主题文件都在 D:/OhMyPosh/themes 目录下，以 .json 结尾
# oh-my-posh init pwsh --config 'D:/OhMyPosh/themes/jandedobbeleer.omp.json' | Invoke-Expression

# 配置 oh-my-posh 主题方式二，远程方式
# oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jandedobbeleer.omp.json' | Invoke-Expression

# 配置 oh-my-posh 主题方式三，当前我使用的
# POSH_THEMES_PATH 是 oh-m-posh 的 用户环境变量
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/jandedobbeleer.omp.json" | Invoke-Expression

# 导出 oh-my-posh 主题
# oh-my-posh config export --output D:/jandedobbeleer.omp.json
```

![默认值](/images/windows/terminal/19.png)

![默认值](/images/windows/terminal/20.png)

![默认值](/images/windows/terminal/21.png)

此时会发现，字体和小图标是乱码的，oh-my-posh 想要在终端中正常的显示图标，请安装 Nerd Font 字体，并进行配置终端的配置

oh-my-posh 有一个 cli 可以选择和安装 Nerd 字体（测试版）

``` bash
// 此命令需要以管理员身份执行，字体在系统范围内安装
oh-my-posh font install
```

官方也说这个只是测试版本的，个人感觉不太好，有些可能选择的字体可能装不上，根据官方友情提示 去 nerdfonts 官网下载自己想要的字体

- [nerdfonts](https://www.nerdfonts.com/)
- [nerdfonts downloads](https://www.nerdfonts.com/font-downloads)

这里以 JetBrainsMono Nerd Font 为示例

![默认值](/images/windows/terminal/23.png)

![默认值](/images/windows/terminal/22.png)

![默认值](/images/windows/terminal/24.png)

打开 JetBrainsMono 字体目录，Ctrl + a 全选，右击 为所有用户安装

![默认值](/images/windows/terminal/26.png)

windows 下 如何查看本地的字体：C:\Windows\Fonts

![默认值](/images/windows/terminal/27.png)

然后对 windows terminal 的配置文件 settings.json 进行修改，选择带有 Nerd Font 的，字体名字好像复制不了，只能手敲了

``` json
// C:\Users\sunsb\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json
{
 "profiles": {
  "defaults": { // 终端的默认值配置
   "experimental.retroTerminalEffect": false, // 复古风格的终端效果
   "font": {
    "face": "JetBrainsMono Nerd Font",
    "size": 14
   }
  },
 }
}
```

如何下次快速的打开改文件，进行修改，在 PowerShell 配置文件新增个函数即可

C:\Users\sunsb\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

``` bash
# 去除 Window PowerShell 版权所有提示
clear

# Microsoft.PowerShell_profile.ps1

# 使用 vscode 打开 $PROFILE 配置文件
function vscodeOpen {
 Code $PROFILE
}

# 使用 nodepad++ 打开 $PROFILE 配置文件
function notepadOpen {
 noetepad $PROFILE
}

# 打开 windows termial 设置文件

function openTermialSetting {
 Code C:\Users\sunsb\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json
}


# 配置 oh-my-posh 主题方式一
# oh-my-posh init pwsh --config 'D:/OhMyPosh/themes/jandedobbeleer.omp.json' | Invoke-Expression

# 配置 oh-my-posh 主题方式二，远程方式
# oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jandedobbeleer.omp.json' | Invoke-Expression

# 配置 oh-my-posh 主题方式三，当前我使用的
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/jandedobbeleer.omp.json" | Invoke-Expression

# 导出 oh-my-posh 主题
# oh-my-posh config export --output D:/jandedobbeleer.omp.json
```

去除 Window PowerShell 版权所有提示，在上面的 Microsoft.PowerShell_profile.ps1 最前面加上 clear 或者 cls，以为 clear 只能在 Mac 下使用，window terminal 也支持

### 其他主题更换

- 在终端使用命令 <code>get-Poshthemes</code> 查看本地 oh-my-posh 的所有主题，并且会出现其他出题的样式
- 在 oh-my-posh 官网查看 [oh-my-posh 主题](https://ohmyposh.dev/docs/themes)
- 打开 D:/OhMyPosh/themes/ 复制 .json 前面的替换即可

终端使用上面配置的函数 vscodeOpen 命令打开 $PROFILE 文件，修改对应的 xx.json 名称即可

``` bash
vscodeOpen
```

C:\Users\sunsb\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1

``` bash
# 去除 Window PowerShell 版权所有提示
clear

# Microsoft.PowerShell_profile.ps1

# 使用 vscode 打开 $PROFILE 配置文件
function vscodeOpen {
 Code $PROFILE
}

# 使用 nodepad++ 打开 $PROFILE 配置文件
function notepadOpen {
 noetepad $PROFILE
}

# 打开 windows termial 设置文件

function openTermialSetting {
 Code C:\Users\sunsb\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState\settings.json
}


# 配置 oh-my-posh 主题方式一
# oh-my-posh init pwsh --config 'D:/OhMyPosh/themes/jandedobbeleer.omp.json' | Invoke-Expression

# 配置 oh-my-posh 主题方式二，远程方式
# oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/jandedobbeleer.omp.json' | Invoke-Expression

# 配置 oh-my-posh 主题方式三，当前我使用的
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/jandedobbeleer.omp.json" | Invoke-Expression

# 导出 oh-my-posh 主题
# oh-my-posh config export --output D:/jandedobbeleer.omp.json
```

``` bash
# 查看本地 oh-my-posh 所有主题，并且展示其样式
get-Poshthemes
```

![默认值](/images/windows/terminal/28.png)

### 其他问题处理

### WindowsTerminal.exe - 系统错误

由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题

Visual Studio 2015 运行库是 microsoft 微软公司提供的很多程序软件必备的运行环境组件，
Visual Studio 2015 运行库是 Visual C++ Redistributable Package 安装运行使用 Visual Studio 2015 生成的 C++ 应用程序时所需的运行时组件，
下载并安装微软 Visual Studio 2015 版运行库后重启系统，msvcp140.dll 文件即可修复成功

[Microsoft Visual C++ 可再发行程序包最新支持的下载](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)
Microsoft Visual C++ 可再发行程序包最新支持的下载：<https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170>，
找到 Visual Studio 2015、2017、2019 和 2022，我是 64位系统的，下载 体系结构 X64 的 VC_redist.x64.exe 进行安装即可

### windows11 下，右击展开菜单

可能在平时使用过程中，在某个项目中，需要 右击打开终端，下面是 右键菜单的展开

``` js
// 使用管理员身份，打开终端，输入命令，重启电脑

// 展开 右击菜单
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve

// 折叠 右击菜单 原来的
reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
```

Install-Module -Name Terminal-Icons -Repository PSGallery

不受信任的存储库
你正在从不受信任的存储库安装模块。如果你信任该存储库，请通过运行 Set-PSRepository cmdlet 更改其 InstallationPolicy
值。是否确实要从“PSGallery”安装模块?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
