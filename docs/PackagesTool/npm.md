# npm

``` js
// 查看 npm config 详情
npm config ls -l

// 查看镜像
npm config get registry

// 安装某个包，临时使用淘宝镜像
npm install express --registry https://registry.npm.taobao.org

// npm 设置淘宝镜像，永久使用
npm config set registry https://registry.npm.taobao.org

// 恢复原有镜像
npm config set registry https://registry.npmjs.org

// 全局安装 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

// node-sass 切换镜像源的命令
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g

// npm 清除缓存
npm cache clean --force
```

## 参考学习

- [NPM全局配置](https://www.cnblogs.com/fighxp/p/7411376.html)
- [node-sass国内镜像加速](https://newsn.net/say/node-sass-mirror.html)
- [npm scripts 指南](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
- [Win10恢复Shift+右键菜单“在此处打开命令窗口”](https://zhuanlan.zhihu.com/p/38166769)

## package.json

- [package.json概述](https://www.csdn.net/tags/OtTaEg0sOTI3NC1ibG9n.html)

### 波浪号 ~ 比如: ~1.2.2

表示安装 1.2.x 的最新版本（不低于1.2.2），但是不安装 1.3.x，安装时不改变 大版本号 和 次要版本号

### 插入号 ^ 比如: ^1.2.2

表示安装 1.x.x 的最新版本（不低于1.2.2），但是不安装 2.x.x，也就是说安装时不改变 大版本号，
需要注意的是，如果 大版本号为 0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是 次要版本号 变动，也可能带来程序的不兼容，latest 安装最新版本

如果将项目的 node_modules 删除，重新安装，可能会出现某些包的 最新版本，编译项目时，可能会出现错误

``` json
{
 "dependencies": {
  "@vueuse/head": "^0.7.5",
  "vue-i18n": "^9.1.9",
 }
}
```

基于当前时间，删除项目之前的 node_modules，重新 cnpm install，"@vueuse/head" 下载的
是 0.7.9 版本的，编译时出现错误了，最终将 "@vueuse/head": "0.7.5" 的 插入号 ^ 去掉，将
 版本锁定在 0.7.5 ，编译正常！

 ``` json
 {
  "dependencies": {
   "@vueuse/head": "0.7.5",
   "vue-i18n": "9.1.9",
  }
 }
 ```
