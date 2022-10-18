# docusaurus2

- [docusaurus2官网](https://docusaurus.io)
- [docusaurus2中文](https://docusaurus.io/zh-CN)

## docusaurus2 项目安装流程

docusaurus 本质上是一组 [npm 包](https://github.com/facebook/docusaurus/tree/main/packages)，
使用命令行工具可以快速简安装 Docusaurus2 并搭建网站框架，可以在空仓库或现有仓库的任何地方运行这个命令，它会创建一个包含 模板文件 的新目录

版本要求，Node.js v16.14 或以上版本

- [create-docusaurus 选项参数说明](https://docusaurus.io/zh-CN/docs/api/misc/create-docusaurus)

``` js
// 查看 create-docusaurus 有哪些选项参数
npx create-docusaurus@latest --help
```

``` bash
# npx create-docusaurus@latest --help 打印的参数
-V, --version                    output the version number
-p, --package-manager <manager>  The package manager used to install dependencies. One of yarn, npm, and pnpm.
-s, --skip-install               Do not run package manager immediately after scaffolding
-t, --typescript                 Use the TypeScript template variant
-g, --git-strategy <strategy>    Only used if the template is a git repository.
                                   `deep`: preserve full history
                                   `shallow`: clone with --depth=1
                                   `copy`: do a shallow clone, but do not create a git repo
                                   `custom`: enter your custom git clone command. We will prompt you for it.
-h, --help                       display help for command
```

``` js
npx create-docusaurus@latest 项目名称(如：docusaurus-blog) 使用的模版(如：classic) [根目录] -p npm/yarn/pnpm
```

### npx + npm 创建 docusaurus2 项目

``` js
// 包管理工具使用 npm，默认值
npx create-docusaurus@latest docusaurus-blog classic -p npm
```

### npx + yarn 创建 docusaurus2 项目

``` js
// 包管理工具使用 yarn
npx create-docusaurus@latest docusaurus-blog classic -p yarn
```
