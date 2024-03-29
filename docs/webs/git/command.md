# git command

## 查看用户名、邮箱

``` bash

# 查看 git 配置列表 按住 Q 键退出
git config --list

# 查看当前项目的 git 信息
git config --list --local
git config user.name
git config user.email
```

## 设置用户名、邮箱

``` bash
git config user.name --global  你的用户名
git config user.email --global 你的邮箱
```

## 初始化设置默认分支名

除了 'master' 之外，通常选定的名字有 'main'、'trunk' 和 'development'

``` bash
git config --global init.defaultBranch main
```

## 重命名刚创建的分支

``` bash
git branch -m 分支名
```

## 创建公钥

``` bash
ssh-keygen -t rsa -C "1109895279@qq.com"
```

## 查看本地公钥 ssh-key

``` bash
// 命令无效，则本地没有ssh-key公钥，需要创建本地公钥
cd ~/.ssh
ls
cat id_rsa.pub
```

## 全局 设置 main 为默认分支名称, 如果是 master 就在设置回来

``` bash
git config --global init.defaultBranch main
git init
```

## 拉取分支代码

``` bash
git clone -b 分支名 git地址
```

## 查看远程分支

``` bash
- git branch -a
```

## 切换分支

``` bash
git checkout 分支名
```

## 基于当前的分支，新建分支

``` bash
git checkout -b 分支名
```

## 基于远程某个分支，新建分支代码

``` bash
git checkout -b 新的分支名 origin/分支名
```

## 推送新的分支代码

``` bash
git push origin 分支名
```

## 开发阶段调试完毕，将代码合并到 master 分支

``` bash
// 先查看 当前属于哪个分支
git branch
// 假如当前在 develop 分支下，将修改的代码提交
git add .
git commit -m '代码修改1'
git push origin develop
// 将代码切换到 master 分支
git checkout master
// 代码合并, merge 哪个分支的代码
git merge develop
```

## 回到远程仓库的状态

放弃本地所有的修改，回到远程仓库的状态

``` bash
git fetch --all && git reset --hard origin/master
```

## 还原到指定版本

``` bash
// commit id，git log可以获取到
git reset --hard commitid
```

## 查看冲突文件列表

展示工作区的冲突文件列表

``` bash
git diff --name-only --diff-filter=U
```

## 远程地址发生变化，将项目迁移到别的项目时

```bash
git remote set-url origin https://git.xxx.com.cn/abc/新路径/xxx.git
```

## 添加远程 git 地址

``` bash
git remote add origin https://xx/xxx.git
```

## 重设第一个 commit

把所有的改动都重新放回工作区，并清空所有的 commit，这样就可以重新提交第一个 commit

``` bash
git update-ref -d HEAD
```

## 放弃本地代码修改

- [git 放弃本地修改操作](https://www.cnblogs.com/hanguidong/p/10740242.html)

### 放弃 未缓存 代码

:one: 本地修改了代码，但未 git add . 缓存代码时
::: warning 1 放弃单个文件修改

``` bash
// 单个修改注意 ' -- ' ，不写就检出分支了~
git checkout -- $filePathName

// 示例
git checkout -- vue-admin/src/views/App.vue
```

:::

::: warning 2 放弃所有文件修改

``` bash
git checkout .
```

此命令用来放弃掉所有还没有加入到缓存区（就是 git add 命令）的修改：内容修改与整个文件删除。
但是此命令不会删除掉刚新建的文件。因为刚新建的文件还没已有加入到 git 的管理系统中。
对于git是未知的。自己手动删除就好了
:::

### 放弃 已缓存 代码

:two: 本地修改了代码，已缓存代码（git add . ）

::: warning 1 清除单个文件缓存

``` bash
git reset HEAD $filePathName
```

::: warning 2 清除所有文件缓存

``` bash
git reset HEAD .
```

::: danger
git reset 此命令用来清除文件修改后，并 git add 的缓存，
使用该命令，本地的修改并不会改变，而是回到了 未使用 git add 的状态（修改未缓存状态）
然后就可以使用 git checkout 命令来放弃本地的修改
:::

### 放弃已经 commit 代码

可以使用 git reset --hard HEAD^ 来回退到上一次commit的状态

- 1 首先 git log 来查看 提交的记录， commit 后面跟随的 就是 commitid，右击复制该 id
- 2 git log 的退出 按 Q 键退出~

``` bash
// 查看日志
git log
```

::: warning 日志示例

``` bash
commit f0f2d32b961aacc948af7544a0167a02ea830d13 (HEAD -> master, origin/master, origin/HEAD)
Author: sunsboyxu <119895279@qq.com>
Date:   Tue Mar 8 00:02:25 2022 +0800

    '123'

commit 653303b7727cc37f8ffc806cc83eb15859664610
Author: sunsboyxu <sunsboyxu@gmail.com>
Date:   Mon Mar 7 18:41:04 2022 +0800

    123

commit 49292c9472fdf001e61c7c8c15b075e5edc259fa
Author: sunsboyxu <sunsboyxu@gmail.com>
Date:   Fri Mar 4 18:29:25 2022 +0800

    12

commit 5af3112203182a8b3fc878bfae0c99c163040415
Author: sunsboyxu <sunsboyxu@gmail.com>
Date:   Fri Mar 4 17:51:16 2022 +0800
```

:::

## 新建项目，并且提交

``` js
// 全局设置
git config --global user.name "sunsboyxu"
git config --global user.email "1109895279@qq.com"

// 创建项目
mkdir git-test && cd git-test
git init

// 创建 README.md 文件，无内容
// touch README.md

// 会创建 README.md 文件，并写入内容
echo '# git测试' >> README.md

// 会创建 .gitignore 文件
echo 'node_modules' >> .gitignore

git add .
git commit -m "first commit"
git remote add origin https://gitee.com/sunsboyxu/git-test.git
git push -u origin master
```
