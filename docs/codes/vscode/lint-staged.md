# lint-staged

lint-staged 是一个在 git 暂存文件上运行 linters 的工具

- [lint-staged](https://github.com/okonet/lint-staged)
- [lint-staged examples](https://github.com/okonet/lint-staged#examples)

快速搭建，当想将其他代码质量工具与 Prettier（例如 ESLint、Stylelint 等）一起使用时，或者如果您需要支持部分暂存文件 ( git add --patch) 时很有用，
在继续之前，请确保 Prettier 已安装并且在系统的 devDependencies 中

``` bash
npx mrm@2 lint-staged
```

上面的命令将安装 husky 和​ ​lint-staged，然后向项目添加一个配置，该配置 package.json 将在预提交挂钩中自动格式化支持的文件

如果 npx mrm@2 lint-staged 执行的太慢，可以现将 npm 的 镜像源切换到国内的，如：taobao

``` bash
npm install nrm -g
nrm ls
nrm use taobao
```

然后再执行 npx mrm@2 lint-staged
