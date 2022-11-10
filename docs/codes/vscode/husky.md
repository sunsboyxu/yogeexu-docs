# husky

一个让配置 git hooks 变得更简单的工具，为了防止一些不规范的代码 commit 并 push 到远端，我们可以在 git 命令执行前用一些钩子来检测并阻止，
git hook 能在特定的重要动作发生时触发自定义脚本

git hooks 这种方式需要把脚本放在 .git/hooks 目录下面，团队合作会比较麻烦，需要有工具自动把脚本安装进目录，husky 就是为了解决这个问题

husky 是一个 npm 包，安装后可以很方便的在 package.json 配置 git hook，也可以创建独立的 .huskyrc，husky 会根据 package.json里的配置，在.git/hooks 目录生成所有的 hook 脚本，如果你已经自定义了一个hook脚本，husky不会覆盖它

- [husky](https://typicode.github.io/husky)
- [husky github](https://github.com/typicode/husky)
- [自定义 git 钩子](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
