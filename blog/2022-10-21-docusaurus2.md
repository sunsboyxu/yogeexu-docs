---
position: 1
---

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

Usage: create-docusaurus [options] [siteName] [template] [rootDir]

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
// Usage: create-docusaurus [siteName] [template] [rootDir] [options]

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

Docusaurus **package.json** 脚本说明

- [Docusaurus 脚本说明](https://docusaurus.io/zh-CN/docs/cli)

``` json title=package.json
{
  // ...
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids"
  }
}
```

cd 到 docusaurus-blog 项目 **yarn start** 将项目跑起来

### 项目目录说明

``` md title=文件说明
docusaurus-blog
├── README.md
├── babel.config.js
├── blog
|  ├── 2022-10-20-welcome.md
|  └── authors.yml
├── configs
|  ├── presets.js
|  ├── sidebars.js
|  └── themeConfig
|     ├── algolia.js
|     ├── footer.js
|     ├── index.js
|     ├── navbar.js
|     └── prism.js
├── docs
|  ├── mydocs
|  |  ├── _category_.json
|  |  ├── react.md
|  |  └── vue.md
|  └── product
|     ├── _category_.json
|     ├── page1.md
|     └── page2.md
├── docusaurus.config.js
├── package.json
├── src
|  ├── components
|  |  └── HomepageFeatures
|  ├── css
|  |  └── custom.css
|  └── pages
|     ├── index.js
|     ├── index.module.css
|     └── markdown-page.md
├── static
|  └── img
|     ├── docusaurus.png
|     ├── favicon.ico
|     ├── logo.svg
|     ├── undraw_docusaurus_mountain.svg
|     ├── undraw_docusaurus_react.svg
|     └── undraw_docusaurus_tree.svg
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

## 配置说明和修改

- [docusaurus.config.js 说明文档](https://docusaurus.io/zh-CN/docs/api/docusaurus-config)

像 vue-cli 项目一样，我们都是在 **vue.config.js** 中配置相关数据，如：baseUrl、publicPath等，
docusaurus2 项目，可以在 **docusaurus.config.js** 进行相关数据配置，该文件不需要手动创建了，
创建项目的时候 create-docsaurus 已经帮忙创建好了，并且附带很多常用的配置。

从配置的归类出发，Docusaurus 配置可被分为这几类，方便记忆和理解：

- **站点元数据(title、baseUrl、staticDirectories等)**
- **主题(themeConfig - sidebar、navbar、footer)、插件、和预设（preset）配置**
- **部署配置（deploy）**
- **自定义配置**

首先，我在项目根目录建立了 configs 目录，并将 sidebars.js 移到 configs 目录下，先将 sidebars.js 的引用关系修改下

``` js
// docusaurs.config.js
module.exprots = {
  // ...
  presets: [
    [
      'classic',({
        docs: {
          // 修正 sidebars.js 的引用目录
          sidebarPath: require.resolve('./configs/sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
}
```

configs 目录用于存放配置的数据，主要是将 themeConfig、preset等拆分开

docusaurus.config.js 配置参数说明

属性名称 | 属性类型 | 属性说明
| - | - | - |
title | string | 必填字段，网站标题，用于页面元数据中，以及浏览器选项卡标题
url | string | 必填字段，网站网址，可以把它看作顶级主机名，和 baseUrl 字段相关
baseUrl | string | 必填字段，站点的 base URL，可以看作主机名后的路径，开头和末尾始终要包含斜杠
favicon | string/undefined | 网站图标路径,必须是可以用于链接 href 的 url(如：/images/logo.jpg)
tagline | string | 网站标语
titleDelimiter | string | 在生成的 title 标签中被用作标题分隔符, 默认 '|'
themes | PluginConfig[] | 主题插件，默认 ['@docusaurus/theme-classic']，使用默认的主题不需要再配置中列出
themeConfig | Object | 主题配置对象，用于自定义网站中诸如导航栏和页脚的组件，具体请查看：<https://docusaurus.io/zh-CN/docs/api/themes/configuration>
staticDirectories | string[] | 静态目录，一个路径列表数组，路径相对于站点目录或者是绝对的, 这些路径下的文件会被原样复制到构建输出
ssrTemplate | string | 使用 Eta 语法撰写的 HTML 模板，用于渲染你的应用程序，这个选项可以为 body 标签设置自定义属性，添加 meta 标签，自定义                      viewport，等等。 请注意，Docusaurus 需要此模板的结构完全正确才能正常工作。修改之后，你需要确保你的模板与上游的要求一致
noIndex | boolean | 在每个页面上添加 &lt;meta name="robots" content="noindex, nofollow"&gt; 告诉搜索引擎不要爬取你的站点,默认：false
onBrokenLinks | string | 有效取值：'ignore' &#124; 'log' &#124; 'warn' &#124; 'throw' <br /> Docusaurus 在检测到无效链接时的行为，默                       认情况下会抛出错误，若保证发布的网站不会包括任何无效链接，可以按需调整，<br/>:warning:：无效链接检测仅在生产构建中可用
onBrokenMarkdownLinks | string | 有效取值：'ignore' &#124; 'log' &#124; 'warn' &#124; 'throw' <br /> Docusaurus 在检测到无效                                Markdown 链接时的行为，默认情况下，Docusaurus 会输出警告，告知你存在无效链接，但你可以按需调整
onDuplicateRoutes | string | 有效取值：'ignore' &#124; 'log' &#124; 'warn' &#124; 'throw' <br/> Docusaurus 在检测到重复路径时的行为                            默认情况下，Docusaurus 会在你运行 yarn start 或 yarn build 时输出警告
i18n | Object | 用于本地化站点的 i18n 配置对象
projectName | string | github 仓库名称,如果不使用 docusaurus deploy 命令，就不需要这个字段
deploymenyBranch | string | 静态文件要部署到的分支名称，如：'gh-pages'
githubHost | string | github 服务器的主机名，适用于 GitHub Enterprise，如：'github.com'
githubPort | string | 服务器端口，适用于 GitHub Enterprise，如：'22'
organizationName | string | 拥有这个仓库的 github 用户或组织，如我自己的：'sunsboyxu'
customFields | Object | Docusaurus 不允许 docusaurus.config.js 存在未知字段。要添加自定义字段，请在 customFields 中定义
trailingSlash | boolean/undefined | 选项允许你自定义 URL / 链接后是否添加末尾斜杠，以及静态 HTML 会如何被生成
|  |  |                             undefined（默认）：不更改 URL，/docs/myDoc.md 会输出为 /docs/myDoc/index.html
|  |  |                             true：为 URL/链接添加末尾斜杠，/docs/myDoc.md 会输出为 /docs/myDoc/index.html
|  |  |                             false：移除 URL/链接的末尾斜杠，/docs/myDoc.md 会输出为 /docs/myDoc.html

``` js title=docusaurus.config.js 说明
module.exports = {
  // 必填字段
  title: '我的博客', // 网站标题
  url: 'https://xxx.github.io', // 网站网址，看作是顶级主机名 和 baseUrl 字段相关
  baseUrl: '/docusaurus-blog/', // 站点的 base URL,可以被看作是主机名后的路径

  // 选填字段
  favicon: '/images/logo.jpg',   // 网站图标的路径
  tagline: '这是使用 docusaurus2 搭建的个人文档系统', // 网站标语
  titelDelimiter: '|',           // 在生成的 title 标签中被用作标题分隔符, 默认 '|'
  // themes: ['@docusaurus/theme-classic'], // 主题插件，使用默认的主题不需要再配置中列出
  trailingSlash: undefined,      // 选项允许你自定义 URL / 链接后是否添加末尾斜杠 
  noIndex: true,                 // 搜索引擎是否要爬取站点, 默认：false
  onBrokenLinks: 'throw',        // 有效取值：'ignore' | 'log' | 'warn' | 'throw'
                                 // Docusaurus 在检测到无效链接时的行为，默认情况下会抛出错误，
                                 // 若保证发布的网站不会包括任何无效链接，可以按需调整，注：无效链接检测仅在生产构建中可用  
  i18n: {                        // 用于本地化站点的 i18n 配置对象
    defaultLocale: 'zh-Hans',    // en | zh-Hans
    locales: ['zh-Hans'],
  },
  themeConfig: { // 主题的配置，具体请查看：https://docusaurus.io/zh-CN/docs/api/themes/configuration
    // 下面单独说明
  },
}
```

特别的几个属性单独说明

### themeConfig 属性说明

主题配置对象，用于自定义网站中诸如导航栏和页脚的组件，具体请查看：<https://docusaurus.io/zh-CN/docs/api/themes/configuration>

### presets 属性说明

- [presets说明](https://docusaurus.io/zh-CN/docs/using-plugins#using-presets)

presets 字段是预设，预设是插件及主题的合集。 比如，不一定需要在配置文件中挨个注册并配置 @docusaurus/plugin-content-docs、@docusaurus/plugin-content-blog 等插件。我们提供了 @docusaurus/preset-classic 预设，允许你在一个地方集中配置它们

### @docusaurus/preset-classic

用 create-docusaurus 新建的 Docusaurus 网站默认自带经典预设。 它包含了下列主题和插件：

- [Docusaurus 插件](https://docusaurus.io/zh-CN/docs/api/plugins)

- @docusaurus/theme-classic
- @docusaurus/theme-search-algolia
- @docusaurus/plugin-content-docs
- @docusaurus/plugin-content-blog
- @docusaurus/plugin-content-pages
- @docusaurus/plugin-debug
- @docusaurus/plugin-google-analytics
- @docusaurus/plugin-google-gtag
- @docusaurus/plugin-sitemap

``` js title=docusaurus.config.js
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // debug 默认为在开发环境中 true，而在生产环境中为 false
        debug: undefined,
        // 会被传递给 @docusaurus/theme-classic。
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
        // 会被传递给 @docusaurus/plugin-content-docs（用 false 来禁用）
        docs: {

        },
        // 会被传递给 @docusaurus/plugin-content-blog（用false 来禁用）
        blog: {

        },
        // 会被传递给 @docusaurus/plugin-content-pages（用 false 来禁用）
        pages: {},
        // 会被传递给 @docusaurus/plugin-content-sitemap（用 false 来禁用）
        sitemap: {},
        // 会被传递给 @docusaurus/plugin-google-gtag （只在显式声明时才会被启用）
        gtag: {},
        // 会被传递给 @docusaurus/plugin-google-analytics（只在显式声明时才会被启用）
        googleAnalytics: {},
      },
    ],
  ],
};
```

## 编写文档 docs

前言是用来为你的文档页面提供额外的元数据的。 前言是可选的——Docusaurus 能够自行推断所有必要的元数据，无需前言。 比如下面介绍的文档标签功能就需要使用前言。 要了解所有可用的字段，可以访问 API 文档

### Markdown 前言

Markdown 文档可以使用以下前言元数据字段, 前言的两端应用 --- 包裹

``` md title=在 .md 文件使用 Markdown 前言
---
title: 标题
sidebar_position: 1 // 页面的排序
sidebar_label: 侧边栏标题
---
```

title 相当于 #

- [Markdown 前言属性说明](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)

## 编写博客 blog

## 开启文档搜索功能

- [搜索功能](https://docusaurus.io/zh-CN/docs/search)
