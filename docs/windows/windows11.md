# windows 11

- [Windows 上设置开发环境](https://docs.microsoft.com/zh-cn/windows/dev-environment/)

## window11 安装

- [系统要求](https://www.microsoft.com/zh-cn/windows/windows-11-specifications)
- [受信任的平台模块-TPM](https://docs.microsoft.com/zh-cn/windows/security/information-protection/tpm/trusted-platform-module-overview)
- [window11下载](https://www.microsoft.com/zh-cn/software-download/windows11)
- [Windows 11 规格、功能和电脑要求](https://www.microsoft.com/zh-cn/windows/windows-11-specifications?r=1)
- [在电脑上启用 TPM 2.0](https://support.microsoft.com/zh-cn/windows/%E5%9C%A8%E7%94%B5%E8%84%91%E4%B8%8A%E5%90%AF%E7%94%A8-tpm-2-0-1fd5a332-360d-4f46-a1e7-ae6b0c90645c)

## Windows 程序包管理器

### winget

- [winget](https://docs.microsoft.com/zh-cn/windows/package-manager/winget/)

## windows11 小技巧

### 关闭-推荐的项目

- [windows11 关闭-推荐的项目](https://jingyan.baidu.com/article/9f7e7ec08d22802e29155414.html)

### 右键菜单的展开

``` js
// 使用管理员身份，打开终端，输入命令，重启电脑

// 展开
reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve

// 折叠
reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f
```

### WindowsApps 你当前无权访问该文件夹

[](https://www.yebaike.com/14/202104/3013305.html)
一般在 Microsoft store 下载的应用默认安装在 C:\Program Files\WindowsApps 下，
WindowsApps 是个隐藏的目录，点击 查看 -> 显示 -> 选中 隐藏的项目

- 方法一
点击 WindowsApps 文件夹，提示 <code>你当前无权访问该文件夹</code>，
点击 继续 -> 选择 安全选项卡 -> 选择 高级 -> WindowsApps的高级安全设置 -> 点击 更改
-> 选择用户或组 在 输入要选择的对象名称 中输入 电脑的当前用户名称或 Administrator，并点击 检查名称，看是否存在
-> 用户名 存在 点击 确定 -> WindowsApps的高级安全设置 中会看到 所有者，是刚才设置的 用户，勾选 替换子容器和对象所有者
-> 点击 应用，并确定

- 方法二
右击 WindowsApps 文件夹，选择 属性 -> 选择 安全 下的 高级 -> 后面同上操作

## 将Windows电脑用作移动热点

通过Windows设备共享 Internet 连接，将电脑转变为移动热点。 你可以共享 WLAN、以太网或手机网络数据连接。 如果你的电脑具有手机网络数据连接并且共享该连接，它将使用流量套餐数据。

选择"开始"按钮，然后选择"设置>网络&">热点"。
对于"从 共享我的 Internet 连接"，请选择要共享的 Internet 连接。
对于"共享方式"，选择想要如何共享连接 - 通过Wi-Fi或蓝牙。 Wi-Fi速度通常更快且为默认值。
选择"编辑>输入新的网络名称、密码和网络带>保存"。
打开移动热点。
若要在其他设备上进行连接，请转到该设备的 WLAN 设置、查找并选择网络名称、输入密码，然后进行连接。

## windows11 软件使用

7zip压缩软件
EV录屏
Postman
Vscode
Notepad++

Clash
PotPlayer
QuickCut

## 问题处理

### WindowsTerminal.exe - 系统错误

由于找不到 MSVCP140.dll，无法继续执行代码。重新安装程序可能会解决此问题

Visual Studio 2015 运行库是 microsoft 微软公司提供的很多程序软件必备的运行环境组件，
Visual Studio 2015 运行库是 Visual C++ Redistributable Package 安装运行使用 Visual Studio 2015 生成的 C++ 应用程序时所需的运行时组件，
下载并安装微软 Visual Studio 2015 版运行库后重启系统，msvcp140.dll 文件即可修复成功

[Microsoft Visual C++ 可再发行程序包最新支持的下载](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)
找到 Visual Studio 2015、2017、2019 和 2022，我是 64位系统的，下载 体系结构 X64 的 VC_redist.x64.exe 进行安装即可
