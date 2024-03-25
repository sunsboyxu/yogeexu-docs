# docker 安装

![docker](/images/servers/docker/docker1.png)

## docker 相关文档

- [docker](https://www.docker.com/)
- [docker Hub - 容器镜像库和社区](https://hub.docker.com/)
- [docker中文社区](https://www.docker.org.cn/index.html)
- [dockerinfo](http://www.dockerinfo.net/document)

## docker 学习文档

- [docker 教程-动力节点](http://www.bjpowernode.com/docker/)
- [docker 教程-菜鸟](https://www.runoob.com/docker/docker-tutorial.html)
- [docker 系统性入门+进阶实践](https://coding.imooc.com/class/chapter/511.html#Anchor)
- [30分钟快速入门docker](https://mp.weixin.qq.com/s/WQ_QZpumUVyuAeFHUzW3HQ)
- [docker入门终极指南](https://mp.weixin.qq.com/s/ZnwiAeKl13JkmESCB5-PxA)
- [Windows 上的 docker 远程开发概述](https://docs.microsoft.com/zh-cn/windows/dev-environment/docker/overview)
- [docker是什么？能做什么？](https://www.php.cn/docker/484838.html)
- [docker视频教程](https://www.php.cn/course/list/34.html)
- [docker入门](https://www.imooc.com/learn/867)
- [docker(一)：docker入门教程](https://www.imooc.com/article/25618)
- [Docker系列教程](https://www.cnblogs.com/linjiqin/category/1108912.html?page=1)

## window10 安装 docker

docker 并非是一个通用的容器工具，它依赖于已存在并运行的 Linux 内核环境，
docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它执行的效率几乎等同于所部署的 Linux 主机
docker 必须部署在 Linux 内核的系统上，如果其他系统想部署 docker 就必须安装一个虚拟 Linux 环境
docker desktop 是 docker 在 Windows 10 和 macOS 操作系统上的官方安装方式，这个方法依然属于先在虚拟机中安装 Linux 然后再安装 docker 的方法

::: warning 环境要求

- 1  windows10 64位 专业版、企业版和教育版，无法用于家庭版
- 2  windows10 电脑 是否开启虚拟化
- 3 开启虚拟化后，进行 windows 功能设置（开启 Hyper-V 和 开启 windows 虚拟机监控程序平台），重启系统即可
:::

### 1 查看是否开启虚拟化

同时按下 ctrl + alt + delete，打开 -> 任务管理器 -> 性能

![cpu](/images/servers/docker/cpu.png)

::: danger 开启虚拟化
如果没有开启虚拟化，重启电脑进入 BIOS 面板 开启虚拟化
<div>重启电脑 按 Esc -> 再按f12 -> 开启虚拟化</div>

:::

### 2 windows 功能设置

按下 window 键（ctrl右边） + R 键，输入：control -> 回车 |  或者直接 打开控制面板

<div>控制面板 -> 程序 -> 点击 启用或关闭 Windows 功能 </div>

开启 Hyper-V

![control1](/images/servers/docker/control1.png)

通过命令来启用 Hyper-V ，请右键开始菜单并以管理员身份运行 PowerShell，执行以下命令

``` bash
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

### 什么是 Hyper-V?

当在 windows 上需要运行多个操作系统时，Hyper-V 让你可以在 windows 上以虚拟机形式运行多个操作系统。
具体来说，Hyper-V 提供硬件虚拟化，这意味着每个虚拟机都在虚拟硬件上运行。
Hyper-V 允许你创建虚拟硬盘驱动器、虚拟交换机以及许多其他虚拟设备，所有这些都可以添加到虚拟机中，
Hyper-V 是微软开发的虚拟机，类似于 VMWare 或 VirtualBox，仅适用于 Windows 10。
这是 Docker Desktop for Windows 所使用的虚拟机。但是，这个虚拟机一旦启用，QEMU、VirtualBox 或 VMWare Workstation 15 及以下版本将无法使用！
如果你必须在电脑上使用其他虚拟机（例如开发 Android 应用必须使用的模拟器），请不要使用 Hyper-V！

- [Windows10 上的 Hyper-V 简介](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/about/)

::: tip 使用虚拟化的原因

- 运行需要早期版本的 Windows 操作系统或非 Windows 操作系统的软件
- 实验其他操作系统。 通过 Hyper-V，可轻松创建和删除不同的操作系统
- 使用多个虚拟机在多个操作系统上测试软件,通过 Hyper-V 可以在一部台式机或便携式计算机上运行所有内容,可以将这些虚拟机导出并随后导入到任何其他 Hyper-V 系统中，包括 Azure
:::

::: tip Hyper-V 系统要求
Hyper-V 可用于 64 位 Windows 10 专业版、企业版和教育版。它无法用于家庭版

- [Windows 10 Hyper-V 系统要求](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/reference/hyper-v-requirements)
:::

### 3 下载 Docker 安装包

- [Docker Desktop for Windows 安装包](https://www.docker.com/get-started/)

### 4 开启 windows 虚拟机监控程序平台

### 启动中遇到因 WSL 2 导致地错误WSL2 支持

![123](/images/servers/docker/1.png)

![123](/images/servers/docker/2.jpg)

### 什么是 WSl?

适用于 Linux 的 Windows 子系统 (WSL) 可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大多数命令行工具、实用工具和应用程序），
且不会产生传统虚拟机或双启动设置开销

- [WSL文档](https://docs.microsoft.com/zh-cn/windows/wsl/)
- [安装 WSL](https://docs.microsoft.com/zh-cn/windows/wsl/install)
- [设置 WSL 开发环境](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)
- [旧版 WSL 的手动安装步骤](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual)
- [WSL 中的高级设置配置](https://docs.microsoft.com/zh-cn/windows/wsl/wsl-config)
- [WSL 2 上的 Docker 远程容器入门](https://docs.microsoft.com/zh-CN/windows/wsl/tutorials/wsl-containers)
- [在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js](https://docs.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl)

安装 WSL 2 之前，必须启用 “虚拟机平台” 可选功能。 计算机需要虚拟化功能才能使用此功能

![control2](/images/servers/docker/control2.png)

通过命令来启用 开启 windows 虚拟机监控程序平台 ，请右键开始菜单并以管理员身份运行 PowerShell，执行以下命令

``` bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

::: tip 运行 WSL 2 的要求

- 对于 x64 系统：版本 1903 或更高版本，内部版本为 18362 或更高版本
- 对于 ARM64 系统：版本 2004 或更高版本，内部版本为 19041 或更高版本
- 低于 18362 的版本不支持 WSL 2, 使用 Windows Update 助手更新 Windows 版本
:::

重新启动计算机，以完成 WSL 安装并更新到 WSL 2。

### 下载 Linux 内核更新包

- [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

### docker 镜像加速

国内从 DockerHub 拉取镜像有时会遇到困难，此时可以配置镜像加速器，
Docker 官方和国内很多云服务商都提供了国内加速器服务，例如：

-[科大镜像](https://docker.mirrors.ustc.edu.cn)
-[网易](https://hub-mirror.c.163.com)
-[阿里云](https://你的ID.mirror.aliyuncs.com)
-[七牛云加速器](https://reg-mirror.qiniu.com)

当配置某一个加速器地址之后，若发现拉取不到镜像，请切换到另一个加速器地址。
国内各大云服务商均提供了 Docker 镜像加速服务，建议根据运行 Docker 的云平台选择对应的镜像加速服务

- [阿里云镜像获取地址](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)
- [阿里云镜像加速器-windows10](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors?accounttraceid=7ee1cb485be841acb82df841e21f841cxudq)

![阿里云镜像获取地址](/images/servers/docker/ali1.jpg)

### windows10 配置 docker 镜像

Windows 10 的系统，在 Docker 应用， 右上角选择 Settings，打开配置窗口后 左侧导航菜单选择 Docker Engine
填写框中，加入 registry-mirrors ，点击 Apply 保存后 Docker 就会重启并应用配置的镜像地址了

``` bash
{ 
 // 配置的镜像地址
 "registry-mirrors": [
  "https://reg-mirror.qiniu.com"
 ],
 "builder": {
  "gc": {
   "defaultKeepStorage": "20GB",
   "enabled": true
  }
 },
 "experimental": false,
 "features": {
  "buildkit": true
 }
}
```

docker 镜像加速配置地址

![docker 镜像加速配置地址](/images/servers/docker/jingxiang1.png)

### MacOS 配置 docker 镜像

在任务栏点击 Docker for mac 应用图标-> Perferences...-> Daemon-> Registrymirrors
在列表中填写加速器地址[加速器地址](https://reg-mirror.qiniu.com)，修改完成之后，点击 Apply&Restart 按钮，Docker 就会重启并应用配置的镜像地址了

### 检查加速器是否生效

检查加速器是否生效配置加速器之后，如果拉取镜像仍然十分缓慢，请手动检查加速器配置是否生效，在命令行执行 docker info，如果从结果中看到了如下内容，说明配置成功

``` bash
docker info
```

![docker 镜像加速配置地址](/images/servers/docker/jingxiang2.png)

``` bash
// 克隆一个项目
docker run --name repo alpine/git clone https://github.com/docker/getting-started.git
// 进入克隆项目
cd getting-started

```
