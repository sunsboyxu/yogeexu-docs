# yarn

- [windows下yarn安装和修改缓存位置](https://blog.csdn.net/elvishehai/article/details/125181486)
- [修改yarn的全局和缓存目录](https://blog.csdn.net/m0_61083409/article/details/126042654)
- [修改Yarn的全局安装和缓存位置](https://www.cnblogs.com/Jimc/p/11121632.html)
- [yarn 配置全局安装位置到D盘，解决tsc找不到问题](https://www.jianshu.com/p/fb44b3ea5b2b)

## 安装

- bin 是 yarn 存储命令的二进制文件
- global 存储全局 node_modules
- cache 存储用下下载缓存

``` bash
npm install yarn -g
```

``` js
// 修改 yarn bin目录路径
yarn config set prefix "D:\Yarn\bin"

// 修改 yarn 全局安装位置
// 在用户目录找到 .yarnrc 打开找到 global-folder 改为 --global-folder
yarn config  set global-folder "D:\Yarn\Global"

// 修改 yarn 缓存位置
yarn config set cache-folder "D:\Yarn\Cache"

// 修改 yarn 全局 link 位置
yarn config set link-folder "D:\Yarn\Link"

// 查看 yarn 的 bin 位置
yarn global bin

// 查看 yarn 全局安装位置
yarn global dir

// 查看 yarn 全局cache位置
yarn cache dir

// 查看 yarn 当前镜像源
yarn config get registry

// yarn 设置 淘宝镜像
yarn config set registry https://registry.npm.taobao.org

// yarn 设置 node-sass 镜像
yarn config set sass-binary-site https://npm.taobao.org/mirrors/node-sass
```
