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
// 新建一个 docusaurus2 项目命令

// 新建了 一个 docusaurus-blog 项目，使用了 classic 模板，使用 npm/yarn/pnpm 其中某一个包管理器 
npx create-docusaurus@latest 项目名称(如：docusaurus-blog) 使用的模版(如：classic) [根目录] -p npm/yarn/pnpm

// 使用 typescript
npx create-docusaurus@latest 项目名称(如：docusaurus-blog) 使用的模版(如：classic) [根目录] -p npm/yarn/pnpm --typescript
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

![创建 docusaurus-blog 项目](https://files.mdnice.com/user/32658/d1b553d0-452b-41c8-8a65-ec8b937244f5.png)

### 项目目录说明

```
docusaurus-blog
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- /blog/ - 包含博客的 Markdown 文件。如果禁博客插件，可以删除这个目录，或者也可以在设置 path 选项之后修改它的名称
- /docs/ - 包含文档的 Markdown 文件。可以在 sidebars.js 中自定义文档的侧边栏顺序。 如果后续禁用了文档插件，可以删除这个目录，或者你也可以在设置 path 选项之后修改它的名称
- /src/ - 如页面或自定义 React 组件一类的非文档文件。 严格来说，不一定要把非文档类文件放在这里。不过把它们放在一个集中的目录，可以让代码检查或者处理更为简便。
- /src/pages - 所有放在此目录中的 JSX/TSX/MDX 文件都会被转换成网站页面
- /static/ - 静态目录。此处的所有内容都会被复制进 build 文件夹
- /docusaurus.config.js - 站点配置文件
- /package.json - Docusaurus 网站是一个 React 应用，你可以安装并使用任何 npm 包。
- /sidebars.js - 由文档使用，用于指定侧边栏中的文档顺序
