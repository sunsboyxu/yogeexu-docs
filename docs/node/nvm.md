# nvm
[nvm-sh](https://github.com/nvm-sh/nvm)

## Mac下 nvm 的安装和配置

1 安装，在终端（Terminal）中输入

``` js
// 选择自己想安装的版本
// https://github.com/nvm-sh/nvm/tags
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2 安装完成后，配置环境变量，在终端（Terminal）中输入

``` bash
# nvm 环境变量
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

``` js
// 打开后，按 s键，后进行编辑
// .base_profile 中配置好上面内容后，按【esc】键 退出编辑，输入 :wq! 回车键即可
vim ~/.bash_profile
```

3 刷新配置的环境变量，<code>source ~/.bash_profile</code>，新开终端，输入 <code>nvm --version</code> 进行检查

``` js
source ~/.bash_profile

nvm --version
nvm ls
```


## window11 下 nvm 的安装和配置

- [nvm-windows下载地址](https://github.com/coreybutler/nvm-windows/releases)
- [nvm下node环境变量配置](https://blog.csdn.net/m0_67393828/article/details/126062855)
- [nodejs环境变量配置及使用及nvm进行版本切换](https://blog.csdn.net/qappleh/article/details/98210168)

删除之前安装的 nodejs

安装时会有个两个路径的选择：
第一个是 nvm 的安装存放路径（D:\nvm）
第二个是 nodejs 的安装存放路径（D:\nodejs）

### 设置 全局模路径 和 缓存路径
在 D:\nodejs，目录下新建 node_global 和 node_cache 目录

``` js
// 管理员身份，终端进行设置
npm config set prefix "D:\nodejs\node_global"
npm config set cache "D:\nodejs\node_cache"
```

### 环境变量配置

- 系统环境变量配置
新建变量 NODE_HOME
变量名：NODE_HOME
变量值：D:\nodejs\node_global\node_modules

然后在 Path变量，中 点击 新建，填写 %NODE_HOME%

``` bash
C:\Python310\Scripts\;C:\Python310\;%SystemRoot%\system32;%SystemRoot%;%SystemRoot%\System32\Wbem;%SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;%SYSTEMROOT%\System32\OpenSSH\;C:\ProgramData\chocolatey\bin;D:\Git\cmd;%NVM_HOME%;%NVM_SYMLINK%;%NODE_HOME%;
```

如果不想 新建变量 NODE_HOME，就把 D:\nodejs\node_global\node_modules 放到 Path 中好了

- 用户变量配置
新建变量 NODE_HOME
变量名：NODE_HOME
变量值：D:\nodejs\node_global

然后在 Path变量，中 点击 新建，填写 %NODE_HOME%

如果不想 新建变量 NODE_HOME，就把 D:\nodejs\node_global 放到 Path 中好了

``` bash
%USERPROFILE%\AppData\Local\Microsoft\WindowsApps;C:\Users\yogeexu\AppData\Local\Programs\oh-my-posh\bin;D:\Vscode\bin;%NVM_HOME%;%NVM_SYMLINK%;%NODE_HOME%;
```

注意：系统环境变量配置 和 用户变量配置 中，NODE_HOME 变量值路径的定位，
系统环境变量定位到 D:\nodejs\node_global\node_modules，
用户变量定位到 D:\nodejs\node_global，
否则安装 npm install @vue/cli -g 时，使用 vue --version 会出现，vue 命令终端的报错：vue : 无法将“vue”项识别为 cmdlet、函数、脚本文件或可运行程序的名称


### vue : 无法加载文件 D:\nodejs\node_global\vue.ps1，因为在此系统上禁止运行脚本

 Windows PowerShell 执行策略
 
 ### 相关问题解决
 - [vue : 无法加载文件 D:\Nodejs\node_global\vue.ps1，因为在此系统上禁止运行脚本](https://blog.csdn.net/jiyuzzz/article/details/121048727)
 - [](https://www.pudn.com/news/62552329b744eb386fdaeff5.html)


## 常用命令
- nvm version                // 查看 nvm 版本
- nvm install stable         // 安装最新稳定版 node
- nvm install 12             // 安装某个版本的node
- nvm uninstall 12           // 卸载某个版本
- nvm ls                     // node 列表
- nvm current                // 当前使用的 node 版本
- nvm use 16                 // 切换 node 版本
- nvm alias default v16.13.1 // 设置默认使用 node 版本



