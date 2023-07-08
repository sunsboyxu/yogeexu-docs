# git

- [git下载](https://gitforwindows.org/)
- [](https://git-scm.com/download/win)
- [git工具](https://tortoisegit.org/)
- [git菜鸟教程](https://www.runoob.com/git/git-tutorial.html)
- [git简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [git提交代码五部曲](https://jingyan.baidu.com/article/359911f5a4fe4b57fe03060d.html)
- [Git安装教程-Windows11安装](https://blog.csdn.net/weixin_42425618/article/details/123501071)
- [45 个 Git 经典操作场景，专治不会合代码](https://mp.weixin.qq.com/s/XSvE3x9WjHMIfINnqvplEQ)

## Gogs

- [Gogs 是一款极易搭建的自助 Git 服务](https://github.com/gogs)

## 使用 vue-cli 创建的项目，默认会 有 .git 文件夹

``` js
 // 1 远程 git 或者 gitee 或者 gitlab,新建项目目录如：vue-app1
 // 2 删除项目的 .git 文件夹
 // 3 git 初始化 // --initial-branch=main 初始化的分支名称
   // 不加参数 默认就是 main 分支
 // 4 添加远程仓库地址
 // 5 添加全部的修改
 // 6 提交修改
 // 7 推送到远程分支 - master
 // git config --global init.defaultBranch main // 设置全局的默认分支名称
 git init
 // git init --initial-branch=master
 git remote add origin https://gitee.com/xxx/vue-app1.git
  git add .
 git commit -m 'First Commit'
 git push orign master
```

## 问题处理

- [git 安装 出现 443](https://github.com/hawtim/blog/issues/10)

- [git命令需要使用命令行开发者工具](https://blog.csdn.net/willianzhu/article/details/126854531)

### fatal: refusing to merge unrelated histories

- 致命的：拒绝合并不相关的历史

``` bash
git pull origin main --allow-unrelated-histories
```

## remote: Permission to xxxxx.git denied to xxx. fatal: unable to acce

- [解决git push 中remote: Permission to xxxxx.git denied to xxx. fatal: unable to acce](https://blog.csdn.net/xiaoxiao48/article/details/105247965)

## 如何解决OpenSSL SSL_read: Connection was reset, errno 10054

- [OpenSSL SSL_read: Connection was reset, errno 10054](https://cloud.tencent.com/developer/article/2015652)
- [OpenSSL SSL_read: Connection was reset, errno 10054](https://blog.csdn.net/m0_51269961/article/details/123709195)
- [OpenSSL SSL_read: Connection was reset, errno 10054的解决方法](https://blog.csdn.net/wjh1840226173/article/details/124355167)

``` bash
# 解除ssl验证
git config --global http.sslVerify "false"
```

## 相关文档

- [git 回滚代码](https://mp.weixin.qq.com/s/-3VoEVVx38uY35Dwno6J3A)
